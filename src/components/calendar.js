import React from "react";
import Grid from "./grid";

const Calendar = () => {
  const today = new Date();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[today.getDay()];
  const dayOfMonth = today.getDate();
  const monthOfYear = monthsOfYear[today.getMonth()];

  const formattedDate = `${dayOfWeek} ${dayOfMonth} ${monthOfYear}`;
  const username = "Liban";
  return (
    <div className="w-full h-screen z-50">
      <div className="flex flex-row gap-4 px-6 pt-6">
        <p className="text-gray-800 text-2xl">Hello {username}</p>{" "}
        <p className="text-gray-800 text-2xl">Today&apos;s Agenda</p>
      </div>
      <p className="px-6 text-gray-800 text-xl pt-1">{formattedDate}</p>
      <Grid />
    </div>
  );
};

export default Calendar;
