import { Suspense } from "react";
import Loader from "./components/Loader";
import Component from "./components/Component";

const App = () => {
  return (
    <div className="bg-white md:bg-gray-50 dark:bg-gray-900  md:dark:bg-transparent">
      <div className="container mx-auto px-6 py-4 bg-white md:bg-gray-50 dark:bg-gray-900 md:dark:bg-transparent">
        <Suspense fallback={<Loader />}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
