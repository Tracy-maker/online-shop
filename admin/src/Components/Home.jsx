const Home = () => {
  return (
    <div className="relative h-[calc(100vh-190px)] bg-gray-800 flex items-center justify-center text-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/2845487/2845487-sd_640_360_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay Content */}
      <div className="relative z-10 p-8 text-white">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold">Welcome to Rimberio</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Discover effortless fashion store management. Organize products,
            track inventory, and showcase the latest trends. Build your dream
            fashion store today!
          </p>
        </header>
      </div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Home;
