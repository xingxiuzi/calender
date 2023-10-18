// find out how many days that target month have.
let monthdays = new Date(2023,10,0).getDate()
console.log(monthdays);

// find out what weekday is the frist day of the target month.
let fristWeekday = new Date(2023,10,1).getDay()
console.log(fristWeekday);

let tableData = ''
let trArray = [];
for(let j = 0;j<fristWeekday;j++){
    trArray.push('<td></td>')
}
for(let i = 0;i<monthdays;i++){
    trArray.push(`<td>${i + 1}</td>`)
}
let trArrayLength = trArray.length
let finnalStr = ''
console.log(trArray);

for (let m = 0;m<Math.ceil(trArrayLength/7);m++){
    let tempary = trArray.splice(0,7).join('')
    finnalStr += `<tr>${tempary}</tr>`
}

let monthArray = [
  'JANUARY', 
  'FEBRUARY',
  'MARCH',     
  'APRIL',
  'MAY',       
  'JUNE',
  'JULY',      
  'AUGUST',
  'SEPTEMBER', 
  'OCTOBER',
  'NOVEMBER',  
  'DECEMBER'
]
let date_year = new Date().getFullYear()
let date_month = new Date().getMonth()
let date_day = new Date().getDate()
let fristMonth = date_month
let fristYear = date_year
let currentDate = date_day

// Calender top click event
const calenderBtns = document.querySelectorAll('.calendar-top button')
const dateTitle = document.querySelector('.calendar-top p')
const calendarContent = document.querySelector('.calendar .calendar-content')
calenderBtns.forEach(btn=>{
    btn.addEventListener('click',function(){
        if(btn.classList.contains('prev')){
            if(date_month == 0){
                date_year --
                date_month = 11
                getTimeTitle(date_year,date_month)
                initCalender(date_year,date_month,1)
                return
            }else{
                date_month --
                getTimeTitle(date_year,date_month)
                initCalender(date_year,date_month,1)
            }
            // if(date_month > fristMonth || fristYear < date_year){
            //     if(date_month == 0){
            //         date_year --
            //         date_month = 11
            //         getTimeTitle(date_year,date_month)
            //         initCalender(date_year,date_month,1)
            //         return
            //     }
            //     date_month --
            //     getTimeTitle(date_year,date_month)
            //     initCalender(date_year,date_month,1)
            // }
        }else if(btn.classList.contains('next')){
            if(date_month == 11){
                date_year ++
                date_month = 0
                getTimeTitle(date_year,date_month)
                initCalender(date_year,date_month,1)
                return
            }else{
                date_month ++
                getTimeTitle(date_year,date_month)
                initCalender(date_year,date_month,1)
            }
            // if(date_month == 11){
            //     date_year ++
            //     date_month = 0
            //     getTimeTitle(date_year,date_month)
            //     initCalender(date_year,date_month,1)
            //     return
            // }
            // date_month ++
            // getTimeTitle(date_year,date_month)
            // initCalender(date_year,date_month,1)
        }
    })
})
function formatTime(time){
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    console.log(`${year}-${month + 1}-${day}`);
}
function initCalender(year,month,day){
        
    // find out how many days that target month have.
    let monthdays = new Date(year,month,0).getDate()

    // find out what weekday is the frist day of the target month.
    let fristWeekday = new Date(year,month,1).getDay()

    let trArray = [];
    for(let j = 0;j<fristWeekday;j++){
        trArray.push('<td></td>')
    }
    for(let i = 0;i<monthdays;i++){
        if(i + 1 == day){
            trArray.push(`<td class="active">${i + 1}</td>`)
        }else{
            trArray.push(`<td>${i + 1}</td>`)
        }
    }
    let trArrayLength = trArray.length
    let finnalStr = ''

    for (let m = 0;m<Math.ceil(trArrayLength/7);m++){
        let tempary = trArray.splice(0,7).join('')
        finnalStr += `<tr>${tempary}</tr>`
    }
    calendarContent.innerHTML = finnalStr
}

function getTimeTitle(year,month){
    dateTitle.innerHTML = monthArray[month] + ' ' + year
}
