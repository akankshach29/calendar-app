let today = new Date()
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");
let monthAndYear = document.getElementById('monthandyear')
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
showCalender(currentMonth, currentYear);

function next() {
    currentYear = (currentMonth === 12) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1);
    showCalender(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalender(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalender(currentMonth, currentYear);
}

function showCalender(month, year){
    let firstDay = (new Date(year, month).getDay());
    let tb = document.getElementById('calender-body');
    tb.innerHTML = "";
    monthAndYear.innerText = months[month] + ' ' + year;
    selectYear.value = year;
    selectMonth.value = month;
    

    let date = 1;
    // rows
    for(let i = 0; i < 6; i++){
        let row = document.createElement('tr');
        // filling up cells with date
        for(let j = 0; j < 7; j++){
            if(i===0 && j<firstDay){
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText)
                row.appendChild(cell);
            } else if(date > daysInMonth(month, year)){
                break;
            } else {
                cell = document.createElement('td');
                cellText = document.createTextNode(date);
                if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                    cell.classList.add("today-clr")
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tb.appendChild(row);
    }
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
