const Banner = () => {
  return (
    <div
      className="relative h-40 md:h-72 bg-cover bg-right-top dark:bg-gray-800 rounded-t-lg"
      style={{
        backgroundImage: `url('/background.jpeg')`,
      }}
    >
      <div className="absolute inset-0  opacity-50 bg-gray-900 dark:opacity-60 rounded-t-lg"></div>
    </div>
  );
};

export default Banner;
