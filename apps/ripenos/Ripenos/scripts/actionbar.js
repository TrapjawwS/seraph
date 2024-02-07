var dockApps = document.body.getElementsByClassName("dockApps")[0];
var ripebar = document.body.getElementsByClassName("ripebar")[0];
var dockbar = document.body.getElementsByClassName("actionbarC")[0];
var Feedbar = document.body.getElementsByClassName("actionbarR")[0];

// Ripe Panel
document.getElementById("ripeBtn").addEventListener("click", ()=>{
    if (document.getElementById("myripebar").style.height == "520px"){
        document.getElementById("myripebar").style.height = "45px";
        document.getElementById("myripebar").style.width = "27vw";
        document.getElementById("RipenPanel").style.visibility = "hidden";
        document.getElementById("RipenPanel").style.opacity = "0";
        
        document.getElementsByClassName("searchT")[0].style.marginBottom = "1px";
        document.getElementsByClassName("logo")[0].style.bottom = "5px";
        document.getElementsByClassName("tabcontent")[0].style.marginLeft = "0px";
        document.getElementById("ripenExpandMenuBtn").style.opacity= "1";
        document.getElementById("RipeLogoM").src= "Assets/General/ripenOs.jpg";
        document.getElementById("RipeLogoM").style.width= "31px";
        document.getElementById("RipeLogoM").style.marginLeft= "0px";
        document.getElementById("defaultOpen").style.transform= "translateY(0px)";
        document.getElementById("defaultOpen").style.opacity= "1";
        document.getElementById("defaultOpen").style.display= "block";
    }
    else {
        document.getElementById("myripebar").style.height = "520px";
        document.getElementById("myripebar").style.width = "27vw";
        document.getElementById("RipenPanel").style.visibility = "visible";
        document.getElementById("RipenPanel").style.opacity = "1";
        document.getElementById("dock").style.transition = "all 0.3s";
        
        document.getElementsByClassName("searchT")[0].style.marginBottom = "3px";
        document.getElementsByClassName("logo")[0].style.bottom = "7.5px";
        document.getElementById("RipeTogglesL").style.display= "block";
        document.getElementsByClassName("tabcontent")[0].style.marginLeft = "55px";
        document.getElementById("ripenExpandMenuBtn").style.opacity= "1";
        document.getElementById("RipeLogoM").src= "Assets/General/ripenOs.jpg";
        document.getElementById("RipeLogoM").style.width= "31px";
        document.getElementById("RipeLogoM").style.marginLeft= "0px";
        document.getElementById("defaultOpen").click();
        document.getElementById("defaultOpen").style.transform= "translateY(0px)";
        document.getElementById("defaultOpen").style.opacity= "1";
        document.getElementById("defaultOpen").style.display= "block";
    }
})

document.getElementById("ripeBtnM").addEventListener("click", ()=>{
    if (document.getElementById("myripebarM").style.height == "100%"){
        document.getElementById("myripebarM").style.height = "45px";
        document.getElementById("myripebarM").style.width = "98%";
        document.getElementById("myripebarM").style.left = "1%";
        document.getElementById("myripebarM").style.borderTop = " var(--primary-border)";
        document.getElementById("myripebarM").style.borderLeft = " var(--primary-border)";
        document.getElementById("myripebarM").style.borderRight = " var(--primary-border)";
        document.getElementById("RipenPanelM").style.visibility = "hidden";
        document.getElementById("RipenPanelM").style.opacity = "0";
    }
    else{
        document.getElementById("myripebarM").style.height = "100%";
        document.getElementById("myripebarM").style.width = "100%";
        document.getElementById("myripebarM").style.left = "0%";
        document.getElementById("myripebarM").style.border = "1px solid #f1f1f100";
        document.getElementById("RipenPanelM").style.visibility = "visible";
        document.getElementById("RipenPanelM").style.opacity = "1";
    }
})

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

function ReExpandMenuR(){
    document.getElementsByClassName("tabcontent")[0].style.transform= "translateX(0)";
    document.getElementsByClassName("vl")[0].style.transform= "translateX(0)";
    document.getElementsByClassName("tablinks")[0].style.width= "40px";
    document.getElementsByClassName("tab")[0].style.width= "52.5px";
    document.getElementsByClassName("tab")[0].style.backgroundColor= "rgba(0, 0, 0, 0)";
    document.getElementById("ripenExpandMenuBtn").style.width= "40px";
    document.getElementsByClassName("MenuTxt")[0].style.visibility= "hidden";
    document.getElementsByClassName("MenuTxt")[0].style.opacity= "0";
    document.getElementsByClassName("MenuTxt2")[0].style.visibility= "hidden";
    document.getElementsByClassName("MenuTxt2")[0].style.opacity= "0";
    document.getElementsByClassName("MenuTxt3")[0].style.visibility= "hidden";
    document.getElementsByClassName("MenuTxt3")[0].style.opacity= "0";
    document.getElementsByClassName("MenuTxt4")[0].style.visibility= "hidden";
    document.getElementsByClassName("MenuTxt4")[0].style.opacity= "0";
    document.getElementsByClassName("MenuTxt5")[0].style.visibility= "hidden";
    document.getElementsByClassName("MenuTxt5")[0].style.opacity= "0";
    document.getElementsByClassName("MenuTxt6")[0].style.visibility= "hidden";
    document.getElementsByClassName("MenuTxt6")[0].style.opacity= "0";
}

function ExpandMenuR(){
    document.getElementsByClassName("tabcontent")[0].style.transform= "translateX(60px)";
    document.getElementsByClassName("vl")[0].style.transform= "translateX(60px)";
    document.getElementsByClassName("tablinks")[0].style.width= "100px";
    document.getElementsByClassName("tab")[0].style.width= "112.5px";
    document.getElementsByClassName("tab")[0].style.backgroundColor= "rgba(241, 241, 241, 0.05)";
    document.getElementById("ripenExpandMenuBtn").style.width= "100px";
    document.getElementsByClassName("MenuTxt")[0].style.visibility= "visible";
    document.getElementsByClassName("MenuTxt")[0].style.opacity= "1";
    document.getElementsByClassName("MenuTxt2")[0].style.visibility= "visible";
    document.getElementsByClassName("MenuTxt2")[0].style.opacity= "1";
    document.getElementsByClassName("MenuTxt3")[0].style.visibility= "visible";
    document.getElementsByClassName("MenuTxt3")[0].style.opacity= "1";
    document.getElementsByClassName("MenuTxt4")[0].style.visibility= "visible";
    document.getElementsByClassName("MenuTxt4")[0].style.opacity= "1";
    document.getElementsByClassName("MenuTxt5")[0].style.visibility= "visible";
    document.getElementsByClassName("MenuTxt5")[0].style.opacity= "1";
    document.getElementsByClassName("MenuTxt6")[0].style.visibility= "visible";
    document.getElementsByClassName("MenuTxt6")[0].style.opacity= "1";
}

// Search Panel
document.getElementById("adrsbr").addEventListener("click", ()=>{
    if (document.getElementById("myripebar").style.height == "560px"){
        document.getElementById("myripebar").style.height = "45px";
        document.getElementsByClassName("tabcontent")[0].style.marginLeft = "55px";
        document.getElementById("RipenPanel").style.visibility = "hidden";
        document.getElementById("RipenPanel").style.opacity = "0";
        document.getElementById("defaultOpen").click();
        document.getElementById("RipeLogoM").src= "Assets/General/ripenOs.jpg";
        document.getElementById("RipeLogoM").style.backgroundColor= "white";
        document.getElementById("defaultOpen").style.transform= "translateY(0px)";
        document.getElementById("defaultOpen").style.opacity= "1";
        document.getElementById("ripenExpandMenuBtn").style.opacity= "1";
        document.getElementById("defaultOpen").style.display= "block";
        document.getElementById("RipeLogoM").style.width= "31px";
    }
    else {
        document.getElementById("myripebar").style.height = "560px";
        document.getElementsByClassName("tabcontent")[0].style.marginLeft = "0px";
        document.getElementById("ripenExpandMenuBtn").style.opacity= "0";
        document.getElementById("RipenPanel").style.visibility = "visible";
        document.getElementById("RipenPanel").style.opacity = "1";
        document.getElementById("searchmenu").click();
        document.getElementById("RipeLogoM").src= "Assets/UI/icons8-home-96.png";
        document.getElementById("RipeLogoM").style.backgroundColor= "rgba(0,0,0,0)";
        document.getElementById("defaultOpen").style.transform= "translateY(500px)";
        document.getElementById("RipeTogglesL").style.display= "none";
        setTimeout(() => {document.getElementById("defaultOpen").style.opacity= "1";}, 100)
        setTimeout(() => {document.getElementById("defaultOpen").style.display= "none";}, 200)
        document.getElementById("RipeLogoM").style.width= "33px";
    }
})

function exitSearchMenu() {
    document.getElementById("myripebar").style.height = "520px";
    document.getElementById("myripebar").style.width = "27vw";
    
}

function enterSearchMenu() {
    document.getElementById("adrsbr").focus();
    document.getElementById("RipeLogoM").src= "Assets/General/ripenOs.jpg";
    document.getElementById("RipeLogoM").style.backgroundColor= "white";
    document.getElementById("RipeLogoM").style.width= "31px";
    document.getElementById("RipeLogoM").style.marginLeft= "0px";
    document.getElementById("defaultOpen").style.transform= "translateY(0px)";
    document.getElementById("defaultOpen").style.opacity= "1";
}

function disp_prompt(){
    var sitename = document.getElementById("adrsbr");
    document.getElementById("msg").src = "https://" + sitename.value;
    sitename.addEventListener("keydown", function (e) {
        document.getElementById("msg").style.opacity= "1";
        if (e.keyCode === 13) {
            validate(e);
        }
    });
    function validate(e) {
        document.getElementById("msg").src = "https://" + sitename.value;
    }
}

function opacityM() {
	document.getElementById("msg").src = "https://www.info.com/serp?q=" + document.getElementById("adrsbr").value;
}

// Dock Hover
function dockZoomIn() {
    if (document.getElementById("dock").style.height == "600px"){
        document.getElementById("dock").style.paddingBottom = "35px";
        dockApps.style.marginBottom= "0px";
        dockApps.style.transform= "translateX(-50%) scale(1)";
    }
    else {
        document.getElementById("dock").style.paddingBottom = "65px";
        dockApps.style.marginBottom= "15px";
        dockApps.style.transform= "translateX(-50%) scale(1.2)";
        document.getElementById("AllApps").style.marginTop= "12px";
    }
}

function dockZoomOut() {
    document.getElementById("dock").style.paddingBottom = "35px";
    dockApps.style.marginBottom= "0px";
    dockApps.style.transform= "translateX(-50%) scale(1)";
    document.getElementById("AllApps").style.marginTop= "-2.5px";
}

// All Apps Panel
document.getElementById("AllApps").addEventListener("click", ()=>{
    if (document.getElementById("dock").style.height == "600px"){
        document.getElementById("dock").style.height = "45px";
        document.getElementById("dock").style.paddingTop = "10px";
        document.getElementById("SearchApps").style.visibility = "hidden";
        document.getElementById("SearchApps").style.opacity = "0";
        dockApps.style.transform= "translateX(-50%) scale(0.95)";
    }
    else {
        document.getElementById("dock").style.height = "600px";
        document.getElementById("dock").style.paddingTop = "20px";
        document.getElementById("dock").style.paddingBottom = "65px";
        document.getElementById("SearchApps").style.visibility = "visible";
        document.getElementById("SearchApps").style.opacity = "1";
        dockApps.style.transform= "translateX(-50%) scale(0.95)";
    }
})

// Personalization Panel
document.getElementById("personalizeShowBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "545px"){
        document.getElementById("feedbar").style.height = "45px";
        document.getElementById("personalizePanel").style.visibility = "hidden";
        document.getElementById("personalizePanel").style.opacity = "0";

    }
    else {
        document.getElementById("feedbar").style.height = "545px";
        document.getElementById("ControlToggles").style.visibility = "hidden";
        document.getElementById("ControlToggles").style.opacity = "0";
        
        document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
        document.getElementById("MoreCntrlPanel").style.opacity = "0";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("CalPanel").style.visibility = "hidden";
        document.getElementById("CalPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
        document.getElementById("NotyPanel").style.visibility = "hidden";
        document.getElementById("NotyPanel").style.opacity = "0";
        document.getElementById("personalizePanel").style.visibility = "visible";
        document.getElementById("personalizePanel").style.opacity = "1";
    }
})

// Controls Panel
document.getElementById("controlShowBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "172px"){
        document.getElementById("feedbar").style.height = "45px";;
        document.getElementById("ControlToggles").style.visibility = "hidden";
        document.getElementById("ControlToggles").style.opacity = "0";

    }
    else {
        document.getElementById("feedbar").style.height = "172px";
        document.getElementById("ControlToggles").style.visibility = "visible";
        document.getElementById("ControlToggles").style.opacity = "1";
        
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
        document.getElementById("MoreCntrlPanel").style.opacity = "0";
        document.getElementById("CalPanel").style.visibility = "hidden";
        document.getElementById("CalPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
        document.getElementById("NotyPanel").style.visibility = "hidden";
        document.getElementById("NotyPanel").style.opacity = "0";
        document.getElementById("personalizePanel").style.visibility = "hidden";
        document.getElementById("personalizePanel").style.opacity = "0";

    }
})

// MoreCntrlPanel Panel
document.getElementById("MoreCntrlBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "460px"){
        document.getElementById("feedbar").style.height = "172px";
        document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
        document.getElementById("MoreCntrlPanel").style.opacity = "0";
    }
    else {
        document.getElementById("feedbar").style.height = "460px";
        document.getElementById("MoreCntrlPanel").style.visibility = "visible";
        document.getElementById("MoreCntrlPanel").style.opacity = "1";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("CalPanel").style.visibility = "hidden";
        document.getElementById("CalPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
        document.getElementById("NotyPanel").style.visibility = "hidden";
        document.getElementById("NotyPanel").style.opacity = "0";
        document.getElementById("personalizePanel").style.visibility = "hidden";
        document.getElementById("personalizePanel").style.opacity = "0";
    }
})

// Wifi Panel
document.getElementById("wifiBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "617px"){
        document.getElementById("feedbar").style.height = "172px";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
    }
    else {
        document.getElementById("feedbar").style.height = "617px";
        document.getElementById("wifiPanel").style.visibility = "visible";
        document.getElementById("wifiPanel").style.opacity = "1";
        document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
        document.getElementById("MoreCntrlPanel").style.opacity = "0";
        document.getElementById("CalPanel").style.visibility = "hidden";
        document.getElementById("CalPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
        document.getElementById("NotyPanel").style.visibility = "hidden";
        document.getElementById("NotyPanel").style.opacity = "0";
        document.getElementById("personalizePanel").style.visibility = "hidden";
        document.getElementById("personalizePanel").style.opacity = "0";
    }
})

// Battery Panel
document.getElementById("batteryBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "360px"){
        document.getElementById("feedbar").style.height = "172px";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
    }
    else {
        document.getElementById("feedbar").style.height = "360px";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("CalPanel").style.visibility = "hidden";
        document.getElementById("CalPanel").style.opacity = "0";
        document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
        document.getElementById("MoreCntrlPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "visible";
        document.getElementById("batteryPanel").style.opacity = "1";
        document.getElementById("NotyPanel").style.visibility = "hidden";
        document.getElementById("NotyPanel").style.opacity = "0";
        document.getElementById("personalizePanel").style.visibility = "hidden";
        document.getElementById("personalizePanel").style.opacity = "0";
    }
})

// Calendar Panel
function calendarSH(){
    if (document.getElementById("feedbar").style.height == "440px"){
        document.getElementById("feedbar").style.height = "45px";
        document.getElementById("CalPanel").style.visibility = "hidden";
        document.getElementById("CalPanel").style.opacity = "0";
    }
    else {
        document.getElementById("feedbar").style.height = "440px";
        document.getElementById("CalPanel").style.visibility = "visible";
        document.getElementById("CalPanel").style.opacity = "1";
        
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
        document.getElementById("MoreCntrlPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
        document.getElementById("NotyPanel").style.visibility = "hidden";
        document.getElementById("NotyPanel").style.opacity = "0";
        document.getElementById("personalizePanel").style.visibility = "hidden";
        document.getElementById("personalizePanel").style.opacity = "0";
        document.getElementById("ControlToggles").style.visibility = "hidden";
        document.getElementById("ControlToggles").style.opacity = "0";
    }
}

//Notification Panel
function noty_Panel(){
    if (document.getElementById("feedbar").style.height == "500px"){
        document.getElementById("feedbar").style.height = "45px";
        document.getElementById("NotyPanel").style.visibility = "hidden";
        document.getElementById("NotyPanel").style.opacity = "0";

    }
    else {
        document.getElementById("feedbar").style.height = "500px";
        document.getElementById("NotyPanel").style.visibility = "visible";
        document.getElementById("NotyPanel").style.opacity = "1";
        
        document.getElementById("CalPanel").style.visibility = "hidden";
        document.getElementById("CalPanel").style.opacity = "0";
        document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
        document.getElementById("MoreCntrlPanel").style.opacity = "0";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
        document.getElementById("personalizePanel").style.visibility = "hidden";
        document.getElementById("personalizePanel").style.opacity = "0";
        document.getElementById("ControlToggles").style.visibility = "hidden";
        document.getElementById("ControlToggles").style.opacity = "0";
    }
}

document.getElementById("blurBtn").addEventListener("click", ()=>{
    if (document.getElementById("blur-backup").style.height == "20px"){
        document.getElementById("blur-backup").style.height == "20px";
        document.getElementById("feedbar").style.backgroundColor = "#000000a6";
        document.getElementById("dock").style.backgroundColor = "#000000a6";
        document.getElementById("myripebar").style.backgroundColor = "#000000a6";
        document.getElementById("feedbar").style.backdropFilter = "blur(55px) contrast(100%)";
        document.getElementById("dock").style.backdropFilter = "blur(55px) contrast(100%)";
        document.getElementById("myripebar").style.backdropFilter = "blur(55px) contrast(100%)";
    }
    else{
        document.getElementById("blur-backup").style.height == "10px";
        document.getElementById("feedbar").style.backgroundColor = "#1c1c1c";
        document.getElementById("dock").style.backgroundColor = "#1c1c1c";
        document.getElementById("myripebar").style.backgroundColor = "#1c1c1c";
        document.getElementById("feedbar").style.backdropFilter = "blur(0) contrast(0%)";
        document.getElementById("dock").style.backdropFilter = "blur(0) contrast(0%)";
        document.getElementById("myripebar").style.backdropFilter = "blur(0) contrast(0%)";
    }
})

function startTimeH() {
    const today2 = new Date();
    let h2 = today2.getHours();
    let m2 = today2.getMinutes();
    m2 = checkTime2(m2);
    document.getElementById('txtH').innerHTML =  h2 + ":" + m2;
    setTimeout(startTimeH, 1000);
    }
    
    function checkTime2(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
    }
    
    function StartDateH(){
        const dToday2 = new Date();
        let dt2 = dToday2.getDate();
        
        var myDate2 = new Date();
        var myDate2M = new Date();
        
        var myDay2 = myDate2.getDay();
        var myMonth2 = myDate2M.getMonth();
        
        
        // Array of days.
        var weekday2 = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        
        // Array of Months.
        var Months2 = ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        document.getElementById('txtdtyH').innerHTML = weekday2[myDay2] + ', ' + Months2[myMonth2] + ' ' + dt2;
        setTimeout(startTimeH, 1000);
    }
    
    const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");
    // getting new date, current year and month
    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
    // storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];
    
    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";
    
        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }
    
        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                         && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }
    
        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        daysTag.innerHTML = liTag;
    }
    renderCalendar();
    
    prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
            // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    
            if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth);
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
            renderCalendar(); // calling renderCalendar function
        });
    });

document.getElementById("readBtn").addEventListener("click", ()=>{
    if (document.getElementById("OverRead").style.display == "block"){
        document.getElementById("OverRead").style.display = "none";
    }
    else{
        document.getElementById("OverRead").style.display = "block";
    }
})

function fun(e){
var container = document.getElementById('myoverlay-brightness');
var val = e.value;
container.setAttribute("style", "opacity: "+val+"%;");
}

document.getElementById("RGOSUpdatesNotyC").addEventListener("click", ()=>{
    document.getElementById("RGOSUpdatesNoty").style.opacity = "0"
    setTimeout(() => {
        document.getElementById("brForNoty1").style.display = 'none';
        document.getElementById("RGOSUpdatesNoty").style.display = 'none';
    }, 300);
})

document.getElementById("TipsNotyC").addEventListener("click", ()=>{
    document.getElementById("TipsNoty").style.opacity = "0"
    setTimeout(() => {
        document.getElementById("brForNoty1").style.display = 'none';
        document.getElementById("TipsNotyC").style.display = 'none';
    }, 300);

    
if(document.getElementById("RGOSUpdatesNoty").style.display == 'none' && document.getElementById("TipsNotyC").style.display == 'none'){
    document.getElementById("noNoties").style.display = 'none';
}
else{
    document.getElementById("noNoties").style.display = 'block';
}
})

document.getElementById("clearNoties").addEventListener("click", ()=>{
    document.getElementById("TipsNoty").style.opacity = "0"
    document.getElementById("RGOSUpdatesNoty").style.opacity = "0"
    setTimeout(() => {
        document.getElementById("brForNoty1").style.display = 'none';
        document.getElementById("TipsNotyC").style.display = 'none';
        document.getElementById("RGOSUpdatesNoty").style.display = 'none';
        document.getElementById("noNoties").style.display = 'block';
        document.getElementById("clearNoties").style.opacity = "0"
    }, 300);
})
