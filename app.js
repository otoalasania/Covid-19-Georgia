// let modala = document.querySelectorAll(".paths");

// for (let i = 0; i < modala.length; i++) {
//     //document.querySelector(".modal").style.display = "block";
//     //document.querySelector(".modal").classList.add("modala");
//     modala.addEventListenerAll("click", function () {
//         console.log('sdfsdfs');
//     });
// }



const slideLeft = document.querySelector(".fa-chevron-left");
const slider = document.querySelector(".slider");

slideLeft.addEventListener("click", function () {
    slideLeft.classList.toggle("slide");
    slider.classList.toggle("slideLeft");
});



const apiU = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json'

async function getInfo() {
    const response = await fetch(apiU);
    const data = await response.json();
    document.getElementById("cases").innerHTML = data.features[65].attributes.Confirmed
    document.getElementById("death").innerHTML = data.features[65].attributes.Deaths
}
getInfo();


fetch("./states.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        document.getElementById("fullVaccine").innerHTML = data.Georgia[0].FullVaccined;
        document.getElementById("halfVaccine").innerHTML = data.Georgia[1].HalfVaccined
    })


const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['June', 'July', 'August', 'September', 'Octomber', 'November'],
        datasets: [{
            label: '# of Votes',
            data: [10000, 19945, 21555, 27985, 34445, 37058],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


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