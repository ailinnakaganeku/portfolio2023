const Layout = ({ children, id }) => {
  return (
    <section
      className="container mx-auto p-4 pt-8 md:p-8 bg-white dark:bg-gray-900 md:dark:bg-gray-800 shadow-none md:shadow-lg md:dark:shadow-none"
      id={id}
    >
      {children}
    </section>
  );
};

export default Layout;
