import { FaPlayCircle } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import Loader from "../Componets/Loader";
import useFetch from "../Hoosks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Show = () => {
  const { id } = useParams();
  const [season, setSeason] = useState(1);

  const { data, loading, error } = useFetch({ url: `/show/${id}` });
  console.log(data);

  if (loading) return <Loader />;
  if (error) return <div>Error...</div>;
  return (
    <>
      <div className=" w-full h-[80vh] relative">
        <img
          className=" w-full h-full object-cover"
          src={data?.show.backdrop_path}
          alt={data?.show.orginal_title}
        />
        <div className=" absolute top-0 left-0 h-full w-full bg-gradient-to-t from-primary to-transparent ">
          <div className=" w-[80%] m-auto h-full flex md:flex-row flex-col gap-10 justify-center items-center ">
            <img
              className=" w-[30%] md:w-[14rem] md:h-[20rem] object-cover rounded-lg flex-none"
              src={data?.show.poster_path}
              alt={data?.show.orginal_title}
            />
            <div>
              <h3 className=" text-3xl mb-2">{data?.show.title}</h3>
              <div className=" flex gap-4">
                <div className=" flex gap-2 items-center">
                  <IoMdVideocam />
                  Trailer
                </div>
                <div> Rating {data?.show.vote_avarage}</div>
                <div> Release Date {data?.show.first_aired}</div>
              </div>
              <div className=" text-sm flex gap-2">
                {data?.show.genres.map((genre, key) => (
                  <div key={key}>
                    {genre}
                    {data?.show.genres.length - 1 !== key ? "," : ""}
                  </div>
                ))}
              </div>
              <div>OverView</div>
              <div className=" text-sm">{data?.show.overview}</div>
              <div className=" flex my-3">
                <div className=" px-5 flex gap-1 border-2 border-light rounded-full ">
                  Watch
                  <FaPlayCircle />
                </div>
              </div>
              {data?.show.sources.map((source, key) => (
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
      <div className=" w-[90%] m-auto p-2 rounded-lg bg-secondary  ">
        <select
          defaultValue={season}
          onChange={(e) => setSeason(e.target.value)}
          className="w-[10rem] h-[3rem] rounded-lg bg-primary text-light text-xl"
        >
          {data?.seasons.map((season, key) => (
            <option key={key} value={season.season}>
              Season {season.season}
            </option>
          ))}
        </select>

        <div className=" flex flex-wrap justify-around">
          {data?.seasons[season - 1].episodes.map((episode, key) => (
            <div
              key={key}
              className=" w-[11rem] h-[11rem] m-2 rounded-sm overflow-hidden  "
            >
              <img
                className="w-full h-[7rem] object-cover rounded-lg"
                src={episode.thumbnail_path}
                alt={episode.title}
              />
              <div className=" w-[80%] m-auto h-[4rem]">
                <div className="text-lg "> Eps:{key + 1}</div>
                <div className="text-lg ">{episode.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Show;
