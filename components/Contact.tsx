import Image from "next/image";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="h-full w-full">
      <div
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Rectangle 1.png')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Image
              src={"/logo.png"}
              height={50}
              width={50}
              alt="ima"
              className="w-[77px] h-[77px] mx-auto"
            ></Image>
            <h1 className="text-3xl font-bold">Contact</h1>
            <Link href={"/"}>
              <p className="text-sm">
                <span className="text-gray-500">Home</span> &gt;{" "}
                <span className="text-black">Contact</span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us <br className="hidden md:block" /> An Email. Our Staff Always
          Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-10 ml-5 lg:ml-32 sm:mt-5 lg:mt-32">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <HiLocationMarker className="text-black" /> Address
              </h3>
              <p>
                236 5th SE Avenue, <br /> New York NY10000, <br /> United States
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FaPhone className="text-black" /> Phone
              </h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <IoIosTime className="text-black" /> Working Time
              </h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6 p-6 rounded-lg shadow-lg border border-gray-200 lg:mt-20">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Abc"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Abc@def.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="This is optional"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Hi! I’d like to ask about"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[237px] text-black border-2 hover:bg-blue-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Additional Section */}
        <section className="text-gray-600 body-font bg-[#FAF4F4] mt-20">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                  Free Delivery
                </h2>
                <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                  For all orders over $50, consectetur adipim scing elit.
                </p>
              </div>
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                  90 Days Return
                </h2>
                <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                  If goods have problems, consectetur adipim scing elit.
                </p>
              </div>
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                  Secure Payment
                </h2>
                <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                  100% secure payment, consectetur adipim scing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
