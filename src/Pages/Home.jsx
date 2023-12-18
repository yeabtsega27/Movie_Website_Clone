import Loader from "../Componets/Loader";
import useFetch from "../Hoosks/useFetch";
import { FaPlay } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const { data, loading, error } = useFetch({ url: "/home" });
  const [seeMore, setSeeMore] = useState([
    11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
  ]);

  if (loading) return <Loader />;
  if (error) return <div>Error...</div>;

  return (
    <>
      {data?.map((item, key) => (
        <div key={key} className="w-full ">
          <div className="w-full h-[80vh] relative">
            <div className=" absolute bottom-5 left-5 z-20 text-3xl">
              {item.title}
            </div>
            <div className=" flex justify-center items-start h-full w-full  absolute">
              <img
                className=" absolute top-0 left-0 h-full w-full object-cover "
                src={item.movies[0].backdrop_path}
                alt={item.movies[0].original_title}
              />
              <div className=" absolute h-full w-full top-0 left-0 flex sm:p-20 p-5 md:p-20 bg-gradient-to-t from-primary-100  to-transparent ">
                <div className="w-1/2 h-full flex justify-center items-center">
                  <Link
                    to={`${
                      item.movies[0].contentType === "movie"
                        ? "/movie/"
                        : "/show/"
                    }${item.movies[0]._id}`}
                  >
                    <div className=" flex items-center px-7 py-2 border-2 border-light rounded-full shadow-sm">
                      <p>Watch</p>
                      <FaPlay />
                    </div>
                  </Link>
                </div>
                <div className="w-1/2 h-full flex md:flex-row flex-col items-start justify-start">
                  <div className="w-full md:w-1/2">
                    <div className="text-lg pb-3 border-b-2 border-grape">
                      {item.movies[0].title}
                    </div>
                    <div className="text-sm flex gap-1">
                      <FaCalendarAlt />
                      {item.movies[0].release_date}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.movies[0].genres.map((genre, key) => (
                        <div key={key}>
                          {genre}
                          {item.movies[0].genres.length - 1 !== key ? ", " : ""}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mb-5">{item.movies[0].contentType}</div>
                    <div className="">Overview:</div>
                    <div className=" text-sm">
                      {item.movies[0].overview.length > 480
                        ? item.movies[0].overview.slice(0, 500) + "..."
                        : item.movies[0].overview}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] m-auto flex flex-wrap justify-center rounded-lg bg-secondary ">
            {item.movies.slice(1, seeMore[key]).map((movie, key) => (
              <Link
                to={`${movie.contentType === "movie" ? "/movie/" : "/show/"}${
                  movie._id
                }`}
                key={key}
              >
                <div className=" w-[19rem] h-[30rem] bg-primary p-2 m-2  ">
                  <img
                    className="w-[18rem] h-[26rem] object-cover rounded-lg"
                    src={movie.poster_path}
                    alt={movie.original_title}
                  />
                  <div className=" w-full h-[4rem]">
                    <div className="text-lg ">{movie.title}</div>
                    <div className="text-sm flex gap-1 items-center">
                      <FaCalendarAlt />
                      {movie.release_date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {seeMore[key] < item.movies.length && (
              <div className=" w-full flex justify-start p-3">
                <button
                  className=" px-4 py-1 rounded-full bg-primary text-light"
                  onClick={() => {
                    let temp = [...seeMore];
                    temp[key] += 10;
                    setSeeMore(temp);
                  }}
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
