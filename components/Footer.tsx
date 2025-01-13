
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Main Content */}
        <div className="w-full flex flex-wrap justify-center items-center gap-6 lg:flex-nowrap lg:justify-between py-10">
          {/* Left Side */}
          <div className="w-full sm:w-1/2 lg:w-[285px] text-gray-600 hover:border-[1px] border-gray-700 text-center lg:text-left ml-20">
            <ul>
              <li>400 University Drive Suite 200 Coral Gables,</li>
              <li>FL 33134 USA</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center items-start w-full lg:w-[710px] gap-8">
            {/* Links Section */}
            <div className="flex-col">
              <ul className="flex-col">
                <p className="text-gray-600 mt-5 text-center lg:text-left">Links</p>
                <li className="m-4 mb-10">
                  <Link href={"/"} className="block mb-[19px]">Home</Link>
                  <Link href={"/"} className="block mb-[19px]">Shop</Link>
                  <Link href={"/"} className="block mb-[19px]">About</Link>
                  <Link href={"/"} className="block mb-[19px]">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="flex-col">
              <ul className="flex-col">
                <p className="text-gray-600 mt-5 text-center lg:text-left">Help</p>
                <li className="m-4 mb-10">
                  <Link href={"/"} className="block mb-[19px]">Payment Options</Link>
                  <Link href={"/"} className="block mb-[19px]">Returns</Link>
                  <Link href={"/"} className="block mb-[19px]">Privacy Policies</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="w-full lg:w-[290px] text-center lg:text-left hover:border-2 border-gray-200 p-4">
              <span className="font-bold">Newsletter</span>
              <div className="flex  gap-2 mt-5">
                <div className=" text-sm underline underline-offset-4 text-gray-600">Enter Your EmailAddress</div>
                <div>
                  <span className="underline underline-offset-4">SUBSCRIBE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-300 mx-auto"></div>

        {/* Footer Bottom */}
        <div className="mt-5 text-gray-500">
          <samp>2022 Meubel House. All rights reserved.</samp>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



