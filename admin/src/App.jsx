import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <Admin />
      </main>
    </div>
  );
}

export default App;
