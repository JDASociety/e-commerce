"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsCard from "./ProductsCard";
const clients = [
  {
    text: "loremasdafwagawgaga",
    author_image: "1",
    author: "Gemma Nolen",
  },
  {
    text: "loremasdafwagawgagaasdas",
    author_image: "2",
    author: "Gemma",
  },
  {
    text: "loremasdafwagawgagaawdawdawd",
    author_image: "3",
    author: "Gemma Nolenasd",
  },
];

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      /*{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },*/
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Column me neatly.
            </h2>
            <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              This is your life and its ending one minute @ a time...
            </p>
          </div>
          <Slider {...settings}>
            {clients.map((client, index) => {
              return (
                <>
                  <div className="flex justify-center">
                  <div
                    key={index}
                    class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-5"
                  >
                    <a href="#">
                      <Image
                        src={`/images/p${client.author_image}.avif`}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="h-80 w-72 object-cover rounded-t-xl"
                      />
                      <div class="px-4 py-3 w-72">
                        <span class="text-gray-400 mr-3 uppercase text-xs">
                          Brand
                        </span>
                        <p class="text-lg font-bold text-black truncate block capitalize">
                          {client.author}
                        </p>
                        <div class="flex items-center">
                          <p class="text-lg font-semibold text-black cursor-auto my-3">
                            $149
                          </p>
                          <del>
                            <p class="text-sm text-gray-600 cursor-auto ml-2">
                              $199
                            </p>
                          </del>
                          <div class="ml-auto">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-bag-plus"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                              />
                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  </div>

                  {/* <div
                    key={index}
                    class="flex flex-col overflow-hidden rounded-lg shadow-lg m-5"
                  >
                    <div class="flex-shrink-0">
                      <Image
                        class="h-48 w-full object-cover"
                        src={`/images/p${client.author_image}.avif`}
                        width={150}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div class="flex flex-1 flex-col justify-between bg-white p-6">
                      <div class="flex-1">
                        <p class="text-sm font-medium text-indigo-600">
                          <a href="#" class="hover:underline">
                            Article
                          </a>
                        </p>
                      </div>
                      <div class="mt-6 flex items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <span class="sr-only">{client.author}</span>
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-sm font-medium text-gray-900">
                            <a href="#" class="hover:underline">
                              Roel Aufderehar
                            </a>
                          </p>
                          <div class="flex space-x-1 text-sm text-gray-500">
                            <time datetime="2020-03-16">Mar 16, 2020</time>
                            <span aria-hidden="true">·</span>
                            <span>6 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Responsive;
