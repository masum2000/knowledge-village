import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar w-10/12 mx-auto  p-6">
        <div className="flex-1">
          <a className="text-3xl  font-bold">Knowledge Village</a>
        </div>
        <div className="flex-none">
        <img  className="w-10 rounded-full" src="../../../public/Masum.png" />
        </div>
      </div>
      <hr className="border-2 border- primary " />
    </div>
  );
};

export default Header;
