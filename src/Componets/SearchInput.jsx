import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        className=" w-full h-full max-w-[400px] outline-none bg-transparent border-2 p-2 rounded-md border-grape text-light border-r-0 rounded-r-none"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to={`/search${search === "" ? "" : "/" + search}`}>
        <div className=" w-10 h-full border-2 border-grape rounded-md rounded-l-none text-[1.2rem] flex justify-center items-center">
          <FaSearch className=" m-auto text-light" />
        </div>
      </Link>
    </>
  );
};

export default SearchInput;
