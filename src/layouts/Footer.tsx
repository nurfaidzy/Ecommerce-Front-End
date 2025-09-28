import {
  poppinsBold,
  poppinsMedium,
  poppinsRegular,
} from "@/styles/fontStyleComponent";
import {
  CopyrightOutlined,
  SendOutlined,
  FacebookOutlined,
  XOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Bardcode from "@/images/icons/Barcode.png";
import GooglePlayButton from "@/images/icons/GooglePlayButton.png";
import AppStoreButton from "@/images/icons/AppleStoreButton.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="px-[100px]">
        <div className="py-[87px]">
          <div className={poppinsRegular.className}>
            <div className="grid grid-cols-5 gap-[24px]">
              <div className="w-[180px]">
                <div
                  className={`font-bold text-[24px] ${poppinsBold.className}`}
                >
                  Exclusive
                </div>
                <div className="grid gap-[24px] pt-[24px]">
                  <div
                    className={`font-bold text-[20px] ${poppinsBold.className}`}
                  >
                    Subscribe
                  </div>
                  <div className="text-[16px]">
                    Get 10% off your first order
                  </div>
                  <div className="border-2 border-white rounded-md flex items-center w-[217px] h-[48px]">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="bg-transparent text-[16px] px-3 w-[180px] focus:outline-none"
                    />
                    <button className="p-2 text-white">
                      <SendOutlined />
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[180px]">
                <div
                  className={`font-bold text-[20px] ${poppinsBold.className}`}
                >
                  Support
                </div>
                <div className="grid gap-[24px] pt-[24px]">
                  <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
                  <div>exclusive@gmail.com</div>
                  <div>+88015-88888-9999</div>
                </div>
              </div>

              <div className="w-[180px]">
                <div
                  className={`font-bold text-[20px] ${poppinsBold.className}`}
                >
                  Account
                </div>
                <div className="grid gap-[24px] pt-[24px]">
                  <div>My Account</div>
                  <div>Login / Register</div>
                  <div>Cart</div>
                  <div>Wishlist</div>
                  <div>Shop</div>
                </div>
              </div>

              <div className="w-[180px]">
                <div
                  className={`font-bold text-[20px] ${poppinsBold.className}`}
                >
                  Quick Link
                </div>
                <div className="grid gap-[24px] pt-[24px]">
                  <div>Privacy Policy</div>
                  <div>Terms Of Use</div>
                  <div>FAQ</div>
                  <div>Contact</div>
                </div>
              </div>

              <div className="w-[200px]">
                <div className="font-bold text-[20px]">Download App</div>
                <div className="grid gap-[24px] pt-[24px]">
                  <div>
                    <div className={`text-[12px] ${poppinsMedium.className}`}>
                      Save $3 with App New User Only
                    </div>
                    <div className="flex gap-[8px] pt-[8px]">
                      <div>
                        <Image src={Bardcode} alt="Bardcode" width={76} height={76} />
                      </div>
                      <div className="grid gap-[8px]">
                        <div>
                          <Image src={GooglePlayButton} alt="GooglePlayButton" width={104} height={30} />
                        </div>
                        <div>
                          <Image src={AppStoreButton} alt="AppStoreButton" width={104} height={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-[24px] text-[24px]">
                    <div>
                      <FacebookOutlined />
                    </div>
                    <div>
                      <XOutlined />
                    </div>
                    <div>
                      <InstagramOutlined />
                    </div>
                    <div>
                      <LinkedinOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-[#9096A2]" />
      <div className={poppinsRegular.className}>
        <div className="text-center text-[16px] text-[#9096A2] pt-[16px] pb-[24px]">
          <CopyrightOutlined /> Copyright Rimel 2022. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
