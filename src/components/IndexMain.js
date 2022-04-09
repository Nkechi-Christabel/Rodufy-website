import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/rodufy.png";
import Girl from "../image/girl1.png";
import People from "../image/people2.png";
import Avatar from "../image/Group 4.svg";

const indexMain = () => {
  return (
    <section className="sm:text-left text-center">
      <section className="hero__section bg-primary">
        <div className="container mx-auto md:max-w-5xl px-3 pt-8 pb-12">
          <header>
            <div className="xs:flex justify-between">
              <div className="mb-6 sm:mb-0 ">
                <img src={Logo} alt="Rodufy Logo" className="w-40 h-auto" />
              </div>
              <div>
                <Link to="/register">
                  <button className="bg-secondary rounded text-white hover:bg-orange-600 py-2 px-5 mr-5 mt-10 xs:mt-0">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-primary rounded text-white py-2 px-6 border border-secondary hover:bg-purple-900">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </header>
          <section className="mission_section" id="mission">
            <div className="md:flex justify-between mt-16">
              <div className="text-white leading-loose">
                <div className="md:w-96 mt-4 mb-5 md:mb-0">
                  <h1 className="font-bold lg:text-4xl text-3xl tracking-wider">
                    Our mission is to{" "}
                    <span className="text-secondary border-b-2 border-b-white decoration-white">
                      advance
                    </span>{" "}
                    humanity
                  </h1>
                  <p className="my-6 font-light">
                    We would strive to achieve that through providing education
                    and quality health
                  </p>
                  <div className="flex sm:justify-start justify-center py-3">
                    <p className="xs:mr-7 mr-5 font-bold">
                      DOWNLOAD<span className="block">APP</span>
                    </p>
                    <div className="apps">
                      <span className="bg-white rounded inline-block mr-5 xxs:mr-3 xxs:px-5 px-6 py-2  cursor-pointer">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 75 75"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M56.0112 25.726C47.2986 20.8529 33.3146 13.0278 11.6243 0.88295C10.162 -0.082821 8.47947 -0.209384 7.02576 0.282658L44.2401 37.497L56.0112 25.726Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M7.02571 0.282715C6.75325 0.375 6.48811 0.486328 6.23455 0.620801C4.62922 1.48916 3.44958 3.16011 3.44958 5.27344V69.7207C3.44958 71.834 4.62908 73.505 6.23455 74.3732C6.48767 74.5075 6.75266 74.6193 7.02483 74.7122L44.2401 37.4971L7.02571 0.282715Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M44.2401 37.4971L7.0249 74.7122C8.47905 75.2079 10.1616 75.091 11.6244 74.1111C32.6592 62.3323 46.4856 54.6 55.299 49.6854C55.5443 49.5476 55.7847 49.4128 56.0223 49.2794L44.2401 37.4971Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M3.44958 37.4971V69.7207C3.44958 71.834 4.62908 73.505 6.23455 74.3732C6.48767 74.5075 6.75266 74.6193 7.02483 74.7122L44.2401 37.4971H3.44958Z"
                            fill="#2C9FD9"
                          />
                          <path
                            d="M11.6242 0.882995C9.88767 -0.263685 7.83982 -0.231019 6.2345 0.620934L43.6752 38.0618L56.0109 25.726C47.2985 20.8529 33.3145 13.0279 11.6242 0.882995Z"
                            fill="#29CC5E"
                          />
                          <path
                            d="M43.6756 36.9326L6.23462 74.3733C7.84009 75.2251 9.88779 75.2743 11.6244 74.1112C32.6592 62.3324 46.4856 54.6001 55.299 49.6855C55.5443 49.5477 55.7847 49.4129 56.0223 49.2795L43.6756 36.9326Z"
                            fill="#D93F21"
                          />
                          <path
                            d="M71.5503 37.497C71.5503 35.7114 70.6493 33.9093 68.8635 32.91C68.8635 32.91 65.5238 31.0466 55.2871 25.3208L43.1108 37.497L55.2989 49.6853C65.4233 44.0006 68.8634 42.0839 68.8634 42.0839C70.6493 41.0847 71.5503 39.2827 71.5503 37.497Z"
                            fill="#FFD500"
                          />
                          <path
                            d="M68.8635 42.0841C70.6493 41.0848 71.5503 39.2827 71.5503 37.4971H43.1108L55.2989 49.6853C65.4235 44.0008 68.8635 42.0841 68.8635 42.0841Z"
                            fill="#FFAA00"
                          />
                        </svg>
                      </span>
                      <span className="bg-white rounded inline-block xxs:px-5 px-6 py-2 cursor-pointer">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 75 75"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.1369 75C15.9747 74.9357 6.74146 52.1498 6.74146 40.5455C6.74146 21.5898 20.9614 17.4399 26.4417 17.4399C28.9114 17.4399 31.5486 18.4098 33.8746 19.268C35.5012 19.8667 37.1834 20.4847 38.119 20.4847C38.679 20.4847 39.9987 19.959 41.1638 19.4977C43.6486 18.5085 46.7406 17.2791 50.3412 17.2791C50.3477 17.2791 50.3563 17.2791 50.3626 17.2791C53.0512 17.2791 61.203 17.8691 66.104 25.2291L67.252 26.9542L65.5998 28.2009C63.2395 29.9819 58.9328 33.2306 58.9328 39.6658C58.9328 47.2875 63.8102 50.2187 66.1533 51.6285C67.1876 52.2507 68.2583 52.8923 68.2583 54.2956C68.2583 55.2119 60.9455 74.8864 50.3261 74.8864C47.7276 74.8864 45.8909 74.1053 44.2707 73.4165C42.6314 72.7191 41.2173 72.1184 38.8806 72.1184C37.6961 72.1184 36.1983 72.6784 34.6126 73.2728C32.4457 74.0816 29.9929 75 27.2099 75H27.1369Z"
                            fill="black"
                          />
                          <path
                            d="M51.4662 0C51.7428 9.97207 44.6112 16.8902 37.488 16.4563C36.3142 8.49829 44.6103 0 51.4662 0Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={Girl} alt="A girl smiling" className="w-full" />
              </div>
            </div>
          </section>
        </div>
      </section>
      <main>
        <section className="goal__section">
          <div className="md:flex justify-between md:my-10 container mx-auto md:max-w-5xl p-3">
            <div className="leading-loose">
              <div className="md:w-96 mt-7 mb-6 md:mb-0">
                <h2 className="font-bold lg:text-4xl text-3xl tracking-wider">
                  Everything you’ll need to{" "}
                  <span className="text-secondary underline decoration-white">
                    excel
                  </span>{" "}
                  in life
                </h2>
                <p className="my-6">
                  We would strive to achieve that through providing education
                  and quality health
                </p>
                <button className="text-center bg-secondary rounded w-full py-2 text-white hover:bg-orange-600">
                  Get Started
                </button>
              </div>
            </div>
            <div>
              <img src={People} alt="People on the bus" className="w-full" />
            </div>
          </div>
        </section>
        <section className="contactUs_section py-4" id="contactUs">
          <div className="md:flex justify-between container mx-auto md:max-w-5xl p-3 mb-6">
            <div className="leading-loose">
              <div className="md:w-96 md:mt-16 mt-6">
                <h2 className="font-bold lg:text-4xl text-3xl tracking-wider">
                  Contact Us
                </h2>
                <p className="my-4">
                  Got any questions, feedback, request and complains? Reach
                  out...
                </p>
                <p className="mb-3">
                  <span className="inline-block align-middle mr-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 57 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.2273 0H7.77273C3.47997 0 0 3.47997 0 7.77273V49.2273C0 53.52 3.47997 57 7.77273 57H49.2273C53.52 57 57 53.52 57 49.2273V7.77273C57 3.47997 53.52 0 49.2273 0Z"
                        fill="#29A71A"
                      />
                      <path
                        d="M41.0659 15.9342C38.1007 12.9394 34.1629 11.1028 29.9629 10.7556C25.7628 10.4085 21.577 11.5737 18.1603 14.041C14.7437 16.5083 12.3212 20.1153 11.3298 24.2114C10.3385 28.3075 10.8434 32.6231 12.7537 36.3797L10.8785 45.4835C10.8591 45.5741 10.8585 45.6677 10.8769 45.7586C10.8953 45.8494 10.9323 45.9355 10.9854 46.0114C11.0633 46.1266 11.1745 46.2153 11.3041 46.2656C11.4337 46.316 11.5756 46.3256 11.7109 46.2931L20.6333 44.1783C24.3793 46.0402 28.6644 46.5127 32.7261 45.5118C36.7878 44.5108 40.3627 42.1013 42.8146 38.712C45.2665 35.3227 46.4365 31.1734 46.1162 27.0025C45.796 22.8315 44.0064 18.9095 41.0659 15.9342ZM38.2839 38.1383C36.2323 40.1841 33.5904 41.5346 30.7306 41.9994C27.8708 42.4642 24.9372 42.0199 22.3433 40.7292L21.0997 40.1138L15.6296 41.4093L15.6458 41.3413L16.7793 35.8356L16.1705 34.634C14.8451 32.0311 14.3776 29.0754 14.8348 26.1904C15.2921 23.3054 16.6507 20.6392 18.716 18.5736C21.3112 15.9793 24.8305 14.5219 28.5 14.5219C32.1695 14.5219 35.6888 15.9793 38.2839 18.5736C38.306 18.599 38.3298 18.6228 38.3551 18.6449C40.9181 21.2459 42.3489 24.7547 42.3355 28.4062C42.3222 32.0578 40.8658 35.556 38.2839 38.1383Z"
                        fill="white"
                      />
                      <path
                        d="M37.7981 34.0997C37.1277 35.1555 36.0687 36.4477 34.7376 36.7683C32.4058 37.3318 28.8271 36.7877 24.374 32.6358L24.3189 32.5872C20.4034 28.9567 19.3865 25.9351 19.6326 23.5385C19.7686 22.1782 20.9022 20.9476 21.8576 20.1444C22.0086 20.0155 22.1877 19.9237 22.3806 19.8764C22.5734 19.8291 22.7747 19.8275 22.9683 19.8719C23.1618 19.9163 23.3423 20.0053 23.4953 20.1319C23.6483 20.2585 23.7695 20.4192 23.8493 20.601L25.2905 23.8397C25.3842 24.0497 25.4189 24.2812 25.3909 24.5094C25.363 24.7376 25.2734 24.9539 25.1318 25.1351L24.4031 26.0808C24.2468 26.2761 24.1524 26.5137 24.1322 26.763C24.112 27.0123 24.1669 27.262 24.2898 27.4799C24.6978 28.1956 25.6759 29.2482 26.7608 30.223C27.9786 31.3241 29.3291 32.3314 30.1841 32.6747C30.4129 32.7681 30.6644 32.7909 30.9063 32.7401C31.1481 32.6893 31.3692 32.5673 31.5411 32.3897L32.3864 31.5379C32.5495 31.3771 32.7523 31.2624 32.9742 31.2055C33.1961 31.1486 33.4291 31.1515 33.6494 31.214L37.0727 32.1856C37.2615 32.2435 37.4346 32.3439 37.5787 32.479C37.7228 32.614 37.8341 32.7803 37.9041 32.965C37.9741 33.1497 38.001 33.3479 37.9826 33.5446C37.9642 33.7413 37.9011 33.9311 37.7981 34.0997Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  +2348232323892
                </p>
                <p>
                  <span className="inline-block align-middle mr-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 57 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.2273 0H7.77273C3.47997 0 0 3.47997 0 7.77273V49.2273C0 53.52 3.47997 57 7.77273 57H49.2273C53.52 57 57 53.52 57 49.2273V7.77273C57 3.47997 53.52 0 49.2273 0Z"
                        fill="#707170"
                      />
                      <g clipPath="url(#clip0_11_121)">
                        <path
                          d="M32.425 32.4439C31.5543 33.0244 30.5428 33.3312 29.5 33.3312C28.4572 33.3312 27.4458 33.0244 26.575 32.4439L12.233 22.8822C12.1535 22.8292 12.0759 22.7739 12 22.717V38.3848C12 40.1811 13.4578 41.6068 15.222 41.6068H43.7779C45.5743 41.6068 46.9999 40.149 46.9999 38.3848V22.7169C46.9238 22.7739 46.8462 22.8294 46.7664 22.8825L32.425 32.4439Z"
                          fill="white"
                        />
                        <path
                          d="M13.3706 21.1758L27.7126 30.7376C28.2555 31.0995 28.8777 31.2805 29.4999 31.2805C30.1222 31.2805 30.7445 31.0994 31.2874 30.7376L45.6294 21.1758C46.4876 20.604 47 19.647 47 18.6141C47 16.838 45.5551 15.3932 43.7791 15.3932H15.2209C13.4449 15.3933 12 16.8381 12 18.6158C12 19.647 12.5124 20.604 13.3706 21.1758Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11_121">
                          <rect
                            width="35"
                            height="35"
                            fill="white"
                            transform="translate(12 11)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  contact@us.com
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end ml-16 sm:ml-0">
              <img
                src={Avatar}
                alt="A drawing illustration"
                className="lg:w-10/12 w-full h-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary pt-4">
        <section className=" container mx-auto md:max-w-6xl text-white p-3">
          <div>
            <img
              src={Logo}
              alt="Rodufy Logo"
              className="w-40 h-auto mt-6 mb-10"
            />
          </div>
          <div className="md:flex justify-between">
            <p className="mb-6 md:mb-0">
              <a href="/">Blog</a>
            </p>
            <p className="mb-6 md:mb-0">
              <a href="/">Privacy Policy</a>
            </p>
            <p className="mb-6 md:mb-0">
              <a href="#mission">About Us</a>
            </p>
            <p className="mb-6 md:mb-0">
              <a href="#contactUs">Contact Us</a>
            </p>
          </div>
          <p className="text-center mt-20 mb-3 text-sm">
            copyright Rodufy 2022
          </p>
        </section>
      </footer>
    </section>
  );
};

export default indexMain;
