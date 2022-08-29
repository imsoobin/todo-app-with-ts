import React from "react";
import "./style.css";
const Loader:React.FC = () => {
  return (
    <div className="loader">
      <div className="col-sm-6 text-center">
        <p className="loading">Loading...</p>
        <div className="loader3">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Loader;
