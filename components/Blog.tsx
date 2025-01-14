import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font h-full">
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
            <h1 className="text-3xl font-bold">Blog</h1>
            <Link href={"/"}>
              <p className="text-sm">
                <span className="text-gray-500">Home</span> &gt;{" "}
                <span className="text-black">Blog</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center gap-8">
          <div className="h-[900px] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="h-[400px] w-full">
            <Image
                  src="/Rectangle 14.png"
                  alt="Millennial design image"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
            </div>

            <h1 className="title-font sm:text-4xl text-3xl ml-10 mt-[200px] font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed ml-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              maiores est, incidunt ipsam veritatis ut quisquam doloremque
              aspernatur aliquam minima provident corrupti recusandae soluta
              ratione, nemo sunt deserunt qui magni Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quidem, a aspernatur, sint, saepe
              assumenda ratione odio voluptates harum ad fugiat odit. Provident,
              earum distinctio. Ex,
            </p>
            <div className="flex justify-center ml-10 mb-20  md:hidden lg:block">
              <div className="inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Admin
              </div>
              <div className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                14 otc 2022
              </div>
              <div className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Wood
              </div>
            </div>
            <span className="mt-5 underline underline-offset-8 justify-start">
              Read more
            </span>
          </div>
          {/* right side */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 h-[500px] w-[20px] mb-[400px]">
            <div className=" md:flex items-center space-x-6-500 h-10 w-10">
              <div className=" lg:flex items-center bg-gray-100 rounded-md px-4 mt-36 py-2 sm:px-1 ml-10 border-2 border-gray-300 sm:ml-52">
                {/* Search Input */}
                <input 
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className=" bg-gray-100 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-100 text-base outline-none leading-8 transition-colors duration-200 ease-in-out"
                />
                <CiSearch className="h-8 w-8 sm:h-4 sm:w-4 md:w-6 md:h-6"/>
              </div>
            </div>
            <div className="mt-10">
            <span className="text-2xl text-black ml-10">categories 2</span>
              <p className="text-2xl text-gray-400 flex justify-between ml-10 mt-10"><span>Crafts</span><span>2</span></p>
              <p className="text-2xl text-gray-400 flex justify-between ml-10 mt-10"><span>Design</span><span>8</span></p>
              <p className="text-2xl text-gray-400 flex justify-between ml-10 mt-10"><span>Handmade</span><span>7</span></p>
              <p className="text-2xl text-gray-400 flex justify-between ml-10 mt-10"><span>Interior</span><span>1</span></p>
              <p className="text-2xl text-gray-400 flex justify-between ml-10 mt-10"><span>Wood</span><span>6</span></p>
           
             
             
            
            </div>
          </div>
        </div>

        {/* other  section*/}

        <div className="container mx-auto p-4 sm:mt-10 m-10">
          {/* Main content area */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Left content - Text and large image */}
            <div className="md:col-span-3">
              <div className="my-8">
                <h1 className="text-2xl font-bold">
                  Going all-in with millennial design
                </h1>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="mt-4 text-blue-500 font-medium">
                  Read more
                </button>
              </div>
              <div className="mb-8">
                <Image
                  src="/Rectangle 13.png"
                  alt="Millennial design image"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <div className="mb-8">
                <h1 className="text-2xl font-bold">
                  Exploring new ways of decorating
                </h1>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="mt-4 text-blue-500 font-medium">
                  Read more
                </button>
              </div>
              <div>
                <Image
                  src="/Rectangle 15.png"
                  alt="Decorating image"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Right content - Recent posts */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 13.png"
                    alt="Recent post 1"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-medium">
                      Going all-in with millennial design
                    </p>
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 15.png"
                    alt="Recent post 2"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-medium">
                      Exploring new ways of decorating
                    </p>
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 13.png"
                    alt="Recent post 3"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-medium">
                      Handmade pieces that took time to make
                    </p>
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 14.png"
                    alt="Recent post 4"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-medium">
                      Handmade pieces that took time to make
                    </p>
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 15.png"
                    alt="Recent post 5"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-medium">
                      Handmade pieces that took time to make
                    </p>
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* add other section */}

      <section className="text-gray-600 body-font bg-[#FAF4F4] mt-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                Free Delivery
              </h2>
              <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                For all oders over $50, consectetur <br /> adipim scing elit.
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                90 Days Return
              </h2>
              <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
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
  );
};

export default Blog;

