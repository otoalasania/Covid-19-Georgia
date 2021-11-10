
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
        document.getElementById("halfVaccine").innerHTML = data.Georgia[1].HalfVaccined;
        // let adjara = data.Georgia[3].totalCases;
        // let guria = data.Georgia[4].totalCases;
        // let samegrelo = data.Georgia[5].totalCases;
        // let imereti = data.Georgia[6].totalCases;
        // let kakheti = data.Georgia[7].totalCases;
        // let mtianeti = data.Georgia[8].totalCases;
        // let Racha = data.Georgia[9].totalCases;
        // let tbilisi = data.Georgia[10].totalCases;
        // let kvemo = data.Georgia[11].totalCases;
        // let javakheti = data.Georgia[12].totalCases;
        // let shida = data.Georgia[13].totalCases;
        for (let i = 0; i < 14; i++) {
            if (data.Georgia[i].totalCases <= 1000) {
                document.getElementById("GE" + i).style.fill = "#800020";
            }
            else if (data.Georgia[i].totalCases > 1000 && data.Georgia[i].totalCases <= 2500) {
                document.getElementById("GE" + i).style.fill = "#66001a";
            }
            else if (data.Georgia[i].totalCases > 2500 && data.Georgia[i].totalCases <= 5000) {
                document.getElementById("GE" + i).style.fill = "#4d0013";
            }
            else if (data.Georgia[i].totalCases > 5000 && data.Georgia[i].totalCases <= 10000) {
                document.getElementById("GE" + i).style.fill = "#33000d";
            }
            else if (data.Georgia[i].totalCases >= 10000) {
                document.getElementById("GE" + i).style.fill = "#1a0006";
            }
        }
    })


const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['June', 'July', 'August', 'September', 'Octomber', 'November'],
        datasets: [{
            label: 'Month Statistic',
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
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: ' rgba(88, 88, 88, 0.308)'
                }
            },
            x: {
                grid: {
                    color: ' rgba(88, 88, 88, 0.308)'
                }
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