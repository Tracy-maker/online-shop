import { useEffect, useState } from "react";
import classNames from "classnames";

interface SearchBarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  isSearchOpen,
  setIsSearchOpen,
  searchQuery,
  setSearchQuery,
}) => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data source
  const mockData = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry",
  ];

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      const results = mockData.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Keyboard shortcut (Escape key to close search box)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  return (
    <>
      {/* Search Icon */}
      <button
        className="p-2 rounded hover:bg-gray-200 transition"
        onClick={() => setIsSearchOpen(true)} // Open search box
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.1-6.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </button>

      {/* Search Box */}
      {isSearchOpen && (
        <div
          className={classNames(
            "fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-start pt-20 transition-opacity duration-300",
            {
              "opacity-100": isSearchOpen,
              "opacity-0 pointer-events-none": !isSearchOpen,
            }
          )}
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl p-6 w-full max-w-2xl mx-4 animate-slide-down">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Search</h2>
              <button
                onClick={() => setIsSearchOpen(false)} 
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Input and Results */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-3 w-full md:flex-grow text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
              />
              <button className="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition w-full md:w-auto">
                Search
              </button>
            </div>

            {/* Search Results */}
            <div className="mt-4">
              {isLoading ? (
                <p className="text-gray-500 text-sm">Loading...</p>
              ) : searchResults.length > 0 ? (
                <ul className="bg-gray-50 border border-gray-200 rounded-lg divide-y divide-gray-200">
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              ) : searchQuery.trim() !== "" ? (
                <p className="text-gray-500 text-sm">
                  No matching results found.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
