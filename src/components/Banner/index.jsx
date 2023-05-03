const Banner = () => {
  return (
    <div
      className="h-40 md:h-60 bg-cover bg-top relative dark:bg-gray-800 rounded-t-lg"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/desktop-with-computer_23-2148110268.jpg?w=1800&t=st=1683118997~exp=1683119597~hmac=ec3bc482cfb62025dcd1a101edd8db6605471ebd52b91687ed9bf8fe795dc80b')`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 dark:bg-gray-900 dark:opacity-60 rounded-t-lg"></div>
    </div>
  );
};

export default Banner;
