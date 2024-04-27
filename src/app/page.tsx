import React from "react";
import Image from "next/image";
import Products from "../components/ProductsCard";
import Navbar from "../components/Navbar";
import Tests from "../components/Testimonials";
import Test from "../components/Card";
import Footer from "../components/Footer";
//import CardSlider from "../components/Card";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Logit commit -mrem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
      </div>
      {/* ✅ Grid Section - Starts Here 👇 */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <Products nombre="Producto 1" imagen="1" />
        <Products nombre="Producto 2" imagen="2" />
        <Products nombre="Producto 3" imagen="3" />
        <Products nombre="Producto 4" imagen="4" />
        <Products nombre="Producto 5" imagen="5" />
        <Products nombre="Producto 6" imagen="6" />
      </section>
      {/* 🛑 Grid Section - Ends Here */}
      <div className="text-center py-10 px-10"></div>
      <section className="mb-40 overflow-hidden">
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('')]">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  The best offer on the market <br />
                  <span>for your business</span>
                </h1>
                <a
                  className="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Get started
                </a>
                <a
                  className="inline-block rounded-full px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-20 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tests />
      <Test />
      <Footer />
    </>
  );
}
