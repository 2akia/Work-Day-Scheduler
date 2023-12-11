var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM DD"));

// Display the current day at the top of the calender when a user opens the planner.

let timeBlocks = document.getElementsByClassName("time-block");

// a loop for the timeblocks
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
// submit button function with local storage function
let submitButton = $(".saveBtn");

submitButton.on("click", function (event) {
    console.log(event.currentTarget);

    let targetTextBox = $(event.currentTarget).siblings("textarea");

    let savedData = targetTextBox.val();

    let parentDiv = $(event.currentTarget).parent()

    let key = parentDiv.attr("id");
   
    localStorage.setItem(key, savedData)
});

// text box function with local storage
let textBoxes = $("textarea");

textBoxes.each(function(index,textBox){
    let parentDiv = $(textBox).parent();
console.log(textBox);
    let key = parentDiv.attr("id");
    let savedData = localStorage.getItem(key);
     $(textBox).val(savedData);
});


