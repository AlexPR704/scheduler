// The current day will be displayed.
window.onload = function() {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNum = today.getMonth();
    currentMonth = months[monthNum];
    var date = (currentMonth+''+today.getDate()+','+today.getFullYear());
    $('#currentDay').html(date);
}

var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var $container = $(".container");

$.each(workHours, function (index, value) {
    var $newRow = $('<div>').addClass('row');
    var $newCol1 = $('<div>' + value + '</div>').addClass('col-sm-1 hour');
    var $newCol2 = $('<div></div>').addClass('col-sm-10 past description');
    var $newCol3 = $('<div></div>').addClass('col-sm-1 saveBtn');
    var textarea = $('<textarea></textarea>');
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
    $newRow.append($newCol1);
    $newRow.append($newCol2);
    $newCol2.append(textarea);
    $newRow.append($newCol3);
    $newCol3.append(icon);
    $container.append($newRow);
})