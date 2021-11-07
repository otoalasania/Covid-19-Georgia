/*let modala = document.querySelectorAll("path");

for (let i = 0; i < modala.length; i++) {
    modala.onlick(function () {
        //document.querySelector(".modal").style.display = "block";
        //document.querySelector(".modal").classList.add("modala");
        console.log('sdfsdfs')
    })
}*/


const apiU = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json'

async function getInfo() {
    const response = await fetch(apiU);
    const data = await response.json();

    document.getElementById("cases").innerHTML = data.features[65].attributes.Confirmed
    document.getElementById("death").innerHTML = data.features[65].attributes.Deaths
    //document.getElementById("vau2").innerHTML = Math.floor(data.features[65].attributes.Incident_Rate)
}

getInfo();


function openCity(evt, cityName) {

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