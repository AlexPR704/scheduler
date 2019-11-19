// The current day will be displayed.
window.onload = function () {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNum = today.getMonth();
    var currentMonth = months[monthNum];
    //TODO need to be able to display the time better
    var date = (currentMonth + ' ' + today.getDate() + ',' + today.getFullYear());
    $('#currentDay').html(date);
}

//Displays current Time
function currentTime() {
    var today = new Date();
    var currentHour = today.getHours();
    var regularTime = 0;
    var amOrPM = "";
    if (currentHour <= 11) {
        regularTime = currentHour;
        amOrPM = "  AM"
    }
    else if (currentHour > 12) {
        regularTime = (currentHour - 12);
        amOrPM = "  PM";
    }
    else if (currentHour = 12) {
        regularTime = currentHour;
        amOrPM = "  PM";
    }
    var time = regularTime + ":" + today.getMinutes() + ":" + today.getSeconds() + amOrPM;
    $('#currentTime').html("The current time is: " + time);
}
setInterval(currentTime, 1000);

//Current time variable
var now = moment().hour();

// variables that stores the hours and the container for the elements
var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var $container = $(".container");

// created a Loop  for each new row
$.each(workHours, function (index, value) {

    var i = index;

    boxHour = "";
    if (value <= 11) {
        boxHour = value + "AM"
    } else if (value > 12) {
        boxHour = (value - 12) + "PM";
    } else if (value = 12) {
        boxHour = value + "PM";
    }

    // creates a new row for each time block
    var $newRow = $("<div>").addClass("row");
    var $newCol1 = $("<div>" + boxHour + "</div>").addClass("col-sm-1 hour");
    var $newCol3 = $("<div></div>").addClass("col-sm-1 saveBtn");
    var textarea = $('<textarea></textarea>').attr("data-index", i).addClass("input").addClass("col-sm-11");
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>').attr("data-index", i);

    if (value == now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 present description");
    } else if (value < now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 past description");
    } else if (value > now) {
        var $newCol2 = $("<div></div>").addClass("col-sm-10 future description");
    }

    //append all new elements
    $newRow.append($newCol1).append($newCol2).append($newCol3);
    $newCol2.append(textarea);
    $newCol3.append(icon);
    $container.append($newRow);

    //
    var inputText = localStorage.getItem(i);
    textarea.text(inputText);

    //on click function
    icon.on('click', function (event) {
        event.preventDefault();
        var element = event.target;
        var content = element.parentNode.parentNode.querySelector('.input').value;
        localStorage.setItem(i, content);
    })
});

//makes it clear
$('.clearBtn').on('click', function () {
    window.localStorage.clear();
    window.location.reload();
})