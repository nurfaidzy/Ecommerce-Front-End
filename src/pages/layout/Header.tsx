import { InterBold } from "@/styles/fontStyleComponent";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import { MenuPickConstans } from "@/Enum/beranda";

const Header = () => {
  const menuHover = (menuPick: MenuPickConstans): React.ReactNode => {
    return <div className="hover:underline cursor-pointer">{menuPick}</div>;
  };

  return (
    <div className={InterBold.className}>
      <div className="flex px-[100px] h-[94px] pt-[25px] items-center">
        {/* brand name */}
        <div className="w-1/3 ]">
          <div className="font-bold text-[24px]">Exclusive</div>
        </div>
        {/* navigation */}
        <div className="w-1/2 ">
          <div className="ml-[20px] flex gap-14">
            {menuHover(MenuPickConstans.Home)}
            {menuHover(MenuPickConstans.About)}
            {menuHover(MenuPickConstans.Contact)}
            {menuHover(MenuPickConstans.SignUp)}
          </div>
        </div>
        {/* Searching */}
        <div className="w-1/2 flex justify-end gap-14">
          <div className="bg-[#F5F5F5] flex justify-between pl-6 rounded-lg w-[243px] h-[38px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-[12px]"
            />
            <button className="pr-4">
              <SearchOutlined className="text-[24px]" />
            </button>
          </div>
          {/* love button */}
          <div className="pt-1">
            <button>
              <HeartOutlined className="text-[24px]" />
            </button>
          </div>
          {/* cart button */}
          <div className="pt-1">
            <button>
              <ShoppingCartOutlined className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};
export default Header;
