"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search"
        className="w-full h-14 rounded-sm laceholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-500 disabled:text-gray-400"
      >
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
