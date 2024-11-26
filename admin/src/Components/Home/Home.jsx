const Home = () => {
  return (
    <div className="h-[calc(100vh-190px)] bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 flex flex-col items-center justify-center text-center p-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Welcome to Rimberio
        </h1>
        <p className="text-gray-700 mt-4 text-lg max-w-3xl">
          Your go-to solution for effortless fashion store management. Organize
          products, track inventory, and deliver the latest trends to your
          customers with ease. Start building your dream store today!
        </p>
      </header>
    </div>
  );
};

export default Home;
