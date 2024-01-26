import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation";

export const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 preloader">
      <div className="texts-container">
        <span>Bienvenue</span>
        <span>chez</span>
        <span className="text-red-600 text-2xl font-bold font-serif">KS</span>
        <span>Scientifique</span>
      </div>
    </div>
  );
};

export default PreLoader;
