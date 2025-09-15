"use client";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [city, setCity] = useState<string>("Bangkok");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setCity(search.trim());
      setSearch("");
    }
  };

  return (
    <div>
      <header className="relative flex pt-3 m-7 gap-5 justify-center">

        <h1 className="text-3xl absolute top-0 left-0 mx-5">Weather Dashboard</h1>
        <form onSubmit={handleSearch} className="">
          <input
            type="text"
            value={search}
            placeholder="Search City..."
            onChange={(e) => setSearch(e.target.value)}
            className="absolute top-0 right-0 mx-7 rounded rounded-x py-1 px-5 md:min-w-md bg-[#121A2D]"
          />
        </form>
      </header>
      <section className="p-4">
        <WeatherCard city={city} />
      </section>
    </div>
  );
}
