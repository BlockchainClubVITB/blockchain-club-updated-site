import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <div className="text-center text-white">
            <div className="text-xl font-bold mb-4">
              <img src={logo} alt="logo" className="w-40 h-40 mx-auto" />
            </div>
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div>Loading...</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Preloader;
