import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define types for feedback data
interface Feedback {
  id: number;
  customerName: string;
  message: string;
  timestamp: string;
  status: "Pending" | "Resolved";
}

const mockFeedbacks: Feedback[] = [
  {
    id: 1,
    customerName: "John Doe",
    message: "I love your products! Great quality and design.",
    timestamp: "2024-11-01T12:00:00Z",
    status: "Resolved",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    message: "I haven’t received my order yet. Could you check?",
    timestamp: "2024-11-15T09:30:00Z",
    status: "Pending",
  },
  {
    id: 3,
    customerName: "Michael Brown",
    message: "How do I exchange an item I ordered?",
    timestamp: "2024-11-18T14:20:00Z",
    status: "Pending",
  },
  {
    id: 4,
    customerName: "Emily Johnson",
    message: "Do you have this jacket in size XL?",
    timestamp: "2024-11-20T10:45:00Z",
    status: "Resolved",
  },
  {
    id: 5,
    customerName: "Chris Lee",
    message: "Payment failed while placing my order. Help!",
    timestamp: "2024-11-22T08:10:00Z",
    status: "Pending",
  },
  {
    id: 6,
    customerName: "Sophia Davis",
    message: "Can I get a refund for my recent purchase?",
    timestamp: "2024-11-23T13:15:00Z",
    status: "Pending",
  },
];

const CustomerFeedback: React.FC = () => {
  const navigate = useNavigate();

  // States
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<Feedback[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<"Newest" | "Oldest" | "Customer Name">(
    "Newest"
  );
  const feedbacksPerPage = 5;

  // Fetch feedbacks on component mount
  useEffect(() => {
    const fetchFeedbacks = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get<Feedback[]>("/api/admin/feedbacks");
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No feedback data available from the API.");
        }
        setFeedbacks(data);
        setFilteredFeedbacks(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
        setError("Failed to fetch feedbacks. Using mock data.");
        setFeedbacks(mockFeedbacks);
        setFilteredFeedbacks(mockFeedbacks);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Filter feedbacks by search query
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = feedbacks.filter((feedback) =>
      feedback.message.toLowerCase().includes(value)
    );
    setFilteredFeedbacks(filtered);
    setCurrentPage(1);
  };

  // Sort feedbacks
  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "Newest" | "Oldest" | "Customer Name";
    setSortOption(value);

    const sorted = [...filteredFeedbacks].sort((a, b) => {
      if (value === "Newest") {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      } else if (value === "Oldest") {
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      } else if (value === "Customer Name") {
        return a.customerName.localeCompare(b.customerName);
      }
      return 0;
    });

    setFilteredFeedbacks(sorted);
  };

  // Resolve feedback status
  const resolveFeedback = async (id: number) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to mark this feedback as resolved?"
      );
      if (!confirmed) return;

      await axios.patch(`/api/admin/feedbacks/${id}`, { status: "Resolved" });
      const updatedFeedbacks = feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, status: "Resolved" } : feedback
      );
      setFeedbacks(updatedFeedbacks);
      setFilteredFeedbacks(updatedFeedbacks);
    } catch (err) {
      console.error("Error resolving feedback:", err);
      alert("Failed to resolve feedback. Please try again.");
    }
  };

  // Pagination logic
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = filteredFeedbacks.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  // Render component
  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-900 text-white font-semibold rounded-md shadow hover:bg-gray-700 transition"
      >
        Go Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Customer Feedback</h1>
      <p className="text-gray-600 mb-6">
        Manage customer feedback efficiently. Respond to inquiries to maintain high customer satisfaction.
      </p>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search feedback..."
          className="flex-1 p-3 border border-gray-300 rounded-lg"
        />
        <select
          onChange={handleSort}
          value={sortOption}
          className="p-3 border border-gray-300 rounded-lg"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Customer Name">Customer Name</option>
        </select>
      </div>

      {error && (
        <div className="p-4 mb-4 text-sm text-red-800 bg-red-200 rounded-lg">{error}</div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Feedback</h2>
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-20 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : currentFeedbacks.length > 0 ? (
          currentFeedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <div>
                <p className="text-lg font-medium text-gray-700">{feedback.customerName}</p>
                <p className="text-sm text-gray-600">{feedback.message}</p>
                <p className="text-sm text-gray-400">
                  {new Date(feedback.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    feedback.status === "Resolved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {feedback.status}
                </span>
                {feedback.status === "Pending" && (
                  <button
                    onClick={() => resolveFeedback(feedback.id)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    Resolve
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No feedback found.</p>
        )}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Previous
          </button>
        )}
        {indexOfLastFeedback < filteredFeedbacks.length && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerFeedback;
