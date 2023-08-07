const apikey = "ea6ca3cdbe3cddb2de491a5d79510b42";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector('.weather-icon');
const serchinput = document.querySelector('.serch input');
const serchbtn = document.querySelector('.serch button');

async function checkwather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +'°C'; 
    document.querySelector(".humidity").innerHTML = data.main.humidity+'%'; 
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="/Src/svg/bx-cloud.svg"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="/Src/svg/bx-sun.svg"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="/Src/svg/bx-cloud-rain.svg"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="/Src/svg/bx-cloud-drizzle.svg"
    }
    document.querySelector('.weather').style.display = 'block'
}

serchbtn.addEventListener("click", ()=>{
    checkwather(serchinput.value);
})