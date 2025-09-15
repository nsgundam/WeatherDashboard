"use client";
import React, { useEffect, useState } from "react";
import { Weather } from "../types/Weather";
import {
  DropletIcon,
  WindIcon,
  Cloud,
  SunriseIcon,
  SunsetIcon,
} from "lucide-react";
import { weatherBg, defaultBg } from "../lib/weatherStyles";

type City = {
  city: string;
};

export default function WeatherCard({ city }: City) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
        );
        if (!res.ok) throw new Error("City not found");
        const data: Weather = await res.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city]);

  if (loading) return <p className="text-center">Loading Weather…</p>;
  if (error)
    return (
      <p className="bg-red-500 text-white p-3 rounded-xl text-center">❌ {error}</p>
    );
  if (!weather) return <p className="text-red-500 text-center">No weather data</p>;

  const bgClass = weatherBg[weather.weather[0].main] || defaultBg;

  const unixToTime = (unix: number) =>
    new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const unixToDate = (unix: number) =>
    new Date(unix * 1000).toLocaleDateString("en-GB",{
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 md:grid-cols-2">
      {/* Main Weather Panel */}
      <section
        className={`rounded-2xl shadow-xl p-6 text-center text-white bg-gradient-to-br ${bgClass} hover:scale-[1.02] transition-transform`}
      >
        <h2 className="text-4xl font-bold mb-2">{weather.name}</h2>
        <p className="text-sm opacity-80 mb-4">{unixToDate(weather.dt)}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={`${weather.weather[0].description} icon`}
          className="mx-auto w-32 h-32"
        />
        <p className="text-5xl font-extrabold mb-2">
          {weather.main.temp}°C
        </p>
        <p className="text-lg mb-4 font-medium">
          {weather.weather[0].main}
        </p>
        <p className="opacity-90">Feels like {weather.main.feels_like}°C</p>
      </section>

      {/* Highlights */}
      <article className="grid grid-cols-2 gap-6">
        <h3 className="col-span-2 text-2xl font-semibold text-gray-100 mb-2">
          Highlights
        </h3>

        {/* Highlight Card */}
        <div className="flex flex-col items-center rounded-2xl p-6 bg-slate-800/60 backdrop-blur-md shadow-md">
          <WindIcon className="w-10 h-10 text-sky-400 mb-2" />
          <p className="text-sm text-gray-300">Wind Speed</p>
          <p className="text-xl font-semibold">{weather.wind.speed} m/s</p>
        </div>

        <div className="flex flex-col items-center rounded-2xl p-6 bg-slate-800/60 backdrop-blur-md shadow-md">
          <DropletIcon className="w-10 h-10 text-cyan-300 mb-2" />
          <p className="text-sm text-gray-300">Humidity</p>
          <p className="text-xl font-semibold">{weather.main.humidity}%</p>
        </div>

        <div className="flex flex-col items-center rounded-2xl p-6 bg-slate-800/60 backdrop-blur-md shadow-md">
          <Cloud className="w-10 h-10 text-gray-300 mb-2" />
          <p className="text-sm text-gray-300">Clouds</p>
          <p className="text-xl font-semibold">{weather.clouds.all}%</p>
        </div>

        <div className="flex flex-col items-center rounded-2xl p-6 bg-slate-800/60 backdrop-blur-md shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <SunriseIcon className="w-6 h-6 text-orange-300" />
            <SunsetIcon className="w-6 h-6 text-pink-300" />
          </div>
          <p className="text-sm text-gray-300">Sunrise / Sunset</p>
          <p className="text-lg font-semibold">
            {unixToTime(weather.sys.sunrise)} / {unixToTime(weather.sys.sunset)}
          </p>
        </div>
      </article>
    </div>
  );
}
