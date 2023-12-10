var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM DD"));


let timeBlocks = document.getElementsByClassName("time-block");

let currentHour = dayjs().hour();

Array.from(timeBlocks).forEach(timeBlock => {
    let timeBlockIdString = timeBlock.id,
    timeBlockHour;

    if (timeBlockIdString) {
        timeBlockHour = parseInt(timeBlockIdString);
    }
    if (timeBlockHour) {
        if (currentHour === timeBlockHour) {
            setColor(timeBlock, "present");
        }else if (currentHour < timeBlockHour && currentHour > timeBlockHour - 6) {
            setColor(timeBlock, "future");
        }else if (currentHour > timeBlockHour && currentHour < timeBlockHour + 6) {
            setColor(timeBlock, "past");
    }else {
        setColor(timeBlock, "future");
    }
}
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}


let dataEntry = document.querySelector("#description").value;

let submitButton = document.querySelectorAll("#saveBtn");

let savedData = localStorage.getElementsByClassName("#description");

dataEntry.textContent = savedData;

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
dataEntry;
savedData.textContent = dataEntry;
localStorage.setItem("description", savedData)
});




