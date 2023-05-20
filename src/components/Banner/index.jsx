const Banner = () => {
  return (
    <div
      className="h-40 md:h-60 bg-cover bg-top relative dark:bg-gray-800 rounded-t-lg"
      style={{
        backgroundImage: `url('/banner.webp')`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 bg-gray-900 dark:opacity-60 rounded-t-lg"></div>
    </div>
  );
};

export default Banner;
