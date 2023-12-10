var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM DD"));

// Display the current day at the top of the calender when a user opens the planner.

let timeBlocks = document.getElementsByClassName("time-block");

let currentHour = dayjs().hour();






