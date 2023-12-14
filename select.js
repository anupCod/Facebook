//for adding options in selection tag

let select_day = ``;
for (let i = 1; i < 32; i++) {
    select_day += `<option value = "` + i + `">` + i + `</option>` + `<br>`;
}
document.getElementById("day").innerHTML = select_day;


let select_year = ``;
for (let i = 1935; i < 2031; i++) {
    select_year += `<option value = "` + i + `">` + i + `</option>` + `<br>`;
}
document.getElementById("year").innerHTML = select_year;


let select_month = ``;
const array_month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
for (let i = 0; i < array_month.length; i++) {
    select_month += `<option value = "` + array_month[i] + `">` + array_month[i] + `</option>` + `<br>`;
}
document.getElementById("month").innerHTML = select_month;

//for click event of button cancel

function clickEvent() {
    location.href = "facebook.html";
}