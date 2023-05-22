import { Suspense } from "react";
import Loader from "./components/Loader";
import Component from "./components/Component";

const App = () => {
  return (
    <div className="container mx-auto px-6 py-4 bg-white md:bg-gray-100 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent">
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </div>
  );
};

export default App;
