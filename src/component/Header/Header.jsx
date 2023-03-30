import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300 p-6">
        <div className="flex-1">
          <a className="text-2xl  font-bold">Knowledge Village</a>
        </div>
        <div className="flex-none">
        <img  className="w-10 rounded-full" src="../../../public/Masum.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
