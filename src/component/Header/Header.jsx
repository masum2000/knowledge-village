import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar w-10/12 mx-auto  p-6">
        <div className="flex-1">
          <a className="text-3xl  font-bold cursor-pointer">
            Knowledge Village
          </a>
        </div>
        <div className="flex-none">
          <img
            className="w-12 rounded-full cursor-pointer"
            src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?w=826&t=st=1680288572~exp=1680289172~hmac=7c081e08150e2d9c233ef7f9d6230cc7eb182f3b3c1881cb80063e7c822a8cbc"
          />
        </div>
      </div>
      <hr className="border-2 border- primary " />
    </div>
  );
};

export default Header;
