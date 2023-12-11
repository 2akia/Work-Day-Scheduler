var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM DD"));

// Display the current day at the top of the calender when a user opens the planner.

let timeBlocks = document.getElementsByClassName("time-block");


let currentHour = dayjs().hour();

Array.from(timeBlocks).forEach(timeBlock => {
    let timeBlockIdString = timeBlock.id,
        timeBlockHour;
    console.log(timeBlock);

    if (timeBlockIdString) {
        timeBlockHour = parseInt(timeBlockIdString.split("-")[1]);
    }
    if (timeBlockHour) {
        if (currentHour === timeBlockHour) {
            timeBlock.classList.add("present");
        } else if (currentHour < timeBlockHour) {
            timeBlock.classList.add("future");
        } else if (currentHour > timeBlockHour) {
            timeBlock.classList.add("past");
        } else {
            setColor(timeBlock, "future");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
};




