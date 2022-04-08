import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Logo from "../image/rodufy.png";
import { clearError, fetchPosts, logout } from "../redux/actions/userActions";
import Loader from "./Loader";

const Post = () => {
  const { loading } = useSelector((state) => state.userInfo);
  const { error } = useSelector((state) => state.error);
  const posts = useSelector((state) => state.userInfo.products);
  const loggedIn = useSelector((state) => state.userInfo.login);
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(4);
  const [sort, setSort] = useState(true);
  const navigate = useNavigate();
  const postsPerPage = 8;
  let newArrForPosts = [];
  const dispatch = useDispatch();
  const moveUp = useRef();

  //On route change, reset error to null
  useEffect(() => {
    dispatch(clearError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Dispatch/Invoke fetch Posts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //Settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //map through posts
  const topPost = posts?.slice(0, 6).map((post) => (
    <div key={post.id}>
      <div className="relative sm:mr-4 mr-0 overflow-hidden cursor-pointer ">
        <img
          src={post.metaImageUrl}
          alt="images"
          className="w-full h-96 rounded object-cover transition-all hover:scale-125 ease-in duration-700"
        />
        <p className="absolute bottom-3 left-2 right-2 bg-overlay bg-opacity-50 text-white rounded line-clamp-2 hover:line-clamp-none hover:cursor-pointer px-4 py-2">
          {post.description}
        </p>
      </div>
    </div>
  ));

  //Sort fetched data
  const handleSort = (arr) => {
    if (sort) {
      arr.sort((a, b) => {
        a = a.description.toLowerCase();
        b = b.description.toLowerCase();
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    } else {
      arr.reverse();
    }
    setSort(!sort);
  };

  //HANDLE LOGOUT
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  //Get the logged in user email
  let userEmailSlice =
    loggedIn && loggedIn.email?.slice(0, loggedIn.email.indexOf("@"));

  const slicePostToDisplay = (start, end) => {
    const slicedPosts = posts.slice(
      postsToShow.length,
      postsToShow.length + postsPerPage
    );
    newArrForPosts = [...postsToShow, ...slicedPosts];
    setPostsToShow(newArrForPosts);
  };

  useEffect(() => {
    posts && slicePostToDisplay(0, postsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trending = postsToShow?.map((post) => (
    <div className="relative overflow-hidden cursor-pointer" key={post.id}>
      <img
        src={post.metaImageUrl}
        alt="images"
        className="w-full h-96 rounded object-cover transition-all hover:scale-125 ease-in duration-700"
      />
      <p className="absolute bottom-3 left-2 right-2 bg-overlay bg-opacity-50 text-white rounded line-clamp-2 hover:line-clamp-none hover:cursor-pointer  px-4 py-1">
        {post.description}
      </p>
    </div>
  ));

  const handleShowMorePosts = () => {
    slicePostToDisplay(next, next + postsPerPage);
    setNext(next + postsPerPage);
    console.log(postsToShow);
    moveUp.current.style.display = "block";
  };

  return (
    <div>
      <header className="bg-primary py-5">
        <section className=" container mx-auto p-3">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={Logo} alt="Rodufy Logo" className="w-36 h-auto" />
            </Link>
            <p className="text-white">{`Hi ${userEmailSlice}`}.</p>
          </div>

          <div className="flex justify-end mt-4" onClick={handleLogOut}>
            <button className=" bg-secondary rounded text-white hover:bg-orange-600 py-2 px-7">
              Logout
            </button>
          </div>
        </section>
      </header>
      <main className="bg-tertiary min-h-screen">
        <div className="container mx-auto p-3">
          <section>
            <h3 className="py-6">
              <span
                className="inline-block align-middle cursor-pointer mr-3"
                onClick={() => handleSort(posts)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_18_118)">
                    <path
                      d="M18.9998 0C8.52471 0 0.00146484 8.52347 0.00146484 19C0.00146484 29.4761 8.5246 38 18.9998 38C29.4762 38 37.9988 29.4761 37.9988 19C37.9988 8.52347 29.4762 0 18.9998 0ZM30.5958 25.2886C30.3245 25.5594 29.9689 25.6961 29.6136 25.6961C29.2576 25.6961 28.9022 25.5594 28.6307 25.2886L18.9998 15.6583L9.36985 25.2886C8.82694 25.8314 7.94595 25.8314 7.40304 25.2886C6.85979 24.7458 6.85979 23.8657 7.40304 23.3228L18.0169 12.7102C18.5605 12.1674 19.4387 12.1674 19.9813 12.7102L30.5952 23.3228C31.1387 23.8657 31.1387 24.7458 30.5958 25.2886Z"
                      fill="#BABABA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_118">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Top Post
            </h3>
            {loading ? (
              <div className="flex justify-center items-center h-96 mt-10">
                <Loader />
              </div>
            ) : error ? (
              <div className="h-96 pt-52 flex justify-center items-center text-xl text-red-500 font-mono italic">
                {error}
              </div>
            ) : (
              <Slider {...settings}>{topPost}</Slider>
            )}
          </section>
          <section className="mt-20 mb-12" id="trending">
            <h3 className="py-6">
              <span
                className="inline-block align-middle cursor-pointer mr-3"
                onClick={() => handleSort(postsToShow)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_18_118)">
                    <path
                      d="M18.9998 0C8.52471 0 0.00146484 8.52347 0.00146484 19C0.00146484 29.4761 8.5246 38 18.9998 38C29.4762 38 37.9988 29.4761 37.9988 19C37.9988 8.52347 29.4762 0 18.9998 0ZM30.5958 25.2886C30.3245 25.5594 29.9689 25.6961 29.6136 25.6961C29.2576 25.6961 28.9022 25.5594 28.6307 25.2886L18.9998 15.6583L9.36985 25.2886C8.82694 25.8314 7.94595 25.8314 7.40304 25.2886C6.85979 24.7458 6.85979 23.8657 7.40304 23.3228L18.0169 12.7102C18.5605 12.1674 19.4387 12.1674 19.9813 12.7102L30.5952 23.3228C31.1387 23.8657 31.1387 24.7458 30.5958 25.2886Z"
                      fill="#BABABA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_118">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Trending
            </h3>
            {loading ? (
              <div className="flex justify-center items-center h-96 mt-10">
                <Loader />
              </div>
            ) : error ? (
              <div className="h-96 pt-52 flex justify-center items-center text-xl text-red-500 font-mono italic">
                {error === "null"
                  ? "Something went wrong. Please try again."
                  : error}
              </div>
            ) : (
              <div>
                <div className="grid md:grid-cols-2 gap-14">{trending}</div>
                <div className="flex justify-center mt-24">
                  {postsToShow.length > 0 && (
                    <>
                      {postsToShow.length < posts.length && (
                        <button
                          className="bg-secondary hover:bg-orange-600 text-white rounded cursor-pointer py-3 px-16"
                          onClick={handleShowMorePosts}
                        >
                          Load More
                        </button>
                      )}
                      <HashLink smooth to="/post/#trending">
                        <span
                          className="text-zinc-600 font-bold text-3xl ml-9 cursor-pointer animate-pulse hidden"
                          ref={moveUp}
                        >
                          <i className="fa-solid fa-circle-arrow-up align-middle"></i>
                        </span>
                      </HashLink>
                    </>
                  )}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Post;
