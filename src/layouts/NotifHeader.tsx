import React from "react";
import { poppinsThin, poppinsBold } from "@/styles/fontStyleComponent";

function NotifHeader() {
  const information: string =
    "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!";
  const link: string = "https://www.example.com";

  return (
    <div className="h-[48px] w-screen bg-black relative">
      <div className={poppinsThin.className}>
        <div className="text-white text-14 pt-3">
          <div className="flex justify-center items-center">
            <div>
              {information} &nbsp;
              <a
                href={link}
                target="_blank"
                className={`${poppinsBold.className} underline`}
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-3 pr-[100px]">
            <select className=" bg-black">
              <option value="US">English</option>
              <option value="US">Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotifHeader;
