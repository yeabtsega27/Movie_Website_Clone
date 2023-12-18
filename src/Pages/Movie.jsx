import { Link, useParams } from "react-router-dom";
import Loader from "../Componets/Loader";
import useFetch from "../Hoosks/useFetch";
import { IoMdVideocam } from "react-icons/io";
import { FaCalendarAlt, FaPlayCircle } from "react-icons/fa";

const Movie = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch({ url: `/movie/${id}` });

  if (loading) return <Loader />;
  if (error) return <div>Error...</div>;
  return (
    <>
      <div className=" w-full h-[80vh] relative">
        <img
          className=" w-full h-full object-cover"
          src={data?.movie.backdrop_path}
          alt={data?.movie.orginal_title}
        />
        <div className=" absolute top-0 left-0 h-full w-full bg-gradient-to-t from-primary to-transparent ">
          <div className=" w-[80%] m-auto h-full flex md:flex-row flex-col gap-10 justify-center items-center ">
            <img
              className=" w-[30%] md:w-[14rem] md:h-[20rem] object-cover rounded-lg flex-none"
              src={data?.movie.poster_path}
              alt={data?.movie.orginal_title}
            />
            <div>
              <h3 className=" text-3xl mb-2">{data?.movie.title}</h3>
              <div className=" flex gap-4">
                <div className=" flex gap-2 items-center">
                  <IoMdVideocam />
                  Trailer
                </div>
                <div> Rating {data?.movie.vote_avarage}</div>
                <div> Release Date {data?.movie.releas_date}</div>
              </div>
              <div className=" text-sm flex gap-2">
                {data?.movie.genres.map((genre, key) => (
                  <div key={key}>
                    {genre}
                    {data?.movie.genres.length - 1 !== key ? "," : ""}
                  </div>
                ))}
              </div>
              <div>OverView</div>
              <div className=" text-sm">{data?.movie.overview}</div>
              <div className=" flex my-3">
                <div className=" px-5 flex gap-1 border-2 border-light rounded-full ">
                  Watch
                  <FaPlayCircle />
                </div>
              </div>
              {data?.movie.sources.map((source, key) => (
                <div key={key} className=" flex gap-2">
                  <div>Link {key + 1}</div>
                  <a href={source.link} target="blank">
                    {source.display_name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto text-3xl">Similar Movies</div>
      <div className=" w-[90%] m-auto flex flex-wrap justify-center rounded-lg bg-secondary ">
        {data?.similarMovies.map((movie, key) => (
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
      </div>
    </>
  );
};

export default Movie;
