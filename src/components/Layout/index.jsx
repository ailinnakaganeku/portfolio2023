const Layout = ({ children }) => {
  return (
    <section className="container mx-auto p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg dark:shadow-none">
      {children}
    </section>
  );
};

export default Layout;
