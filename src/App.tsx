import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./common/Loader/Loader";
import { routers } from "./common/const/router";
const Navbar = React.lazy(() => import("./component/Navbar"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          {routers?.map((router, key) => (
            <Route key={key} path={router.path} element={<router.element />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
