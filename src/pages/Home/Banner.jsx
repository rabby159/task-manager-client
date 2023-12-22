const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/7L6YgSrz/photo-1555421689-d68471e189f2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="text-5xl mb-5 font-bold text-white">A smarter way to work!</p>
            <button className="btn btn-info">Lets Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
