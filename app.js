let inp_val = document.querySelector("#inp_val");
let image = document.querySelector(".img_container img");
let temp = document.querySelector("#temp span");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humi_val span");
let wind_speed = document.querySelector("#wind_val span");
let apikey = "2dd38640696ac742a953e8f138f73d14"
let city_name = "";
let search_btn = document.querySelector("#btn");

window.addEventListener("load",()=>{
    weather_check("cuttack");
})

search_btn.addEventListener("click", () => {
    city_name = inp_val.value;
    weather_check(city_name)
})


async function weather_check(city_name) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&&units=metric`;


    let fetchdata = await fetch(url);
    let data = await fetchdata.json();
    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp.toFixed(1);
    humidity.innerHTML = data.main.humidity;
    wind_speed.innerHTML = data.wind.speed;

 
    if (data.weather[0].main === "Clouds") {
        image.setAttribute("src", "./images/clouds.png")
    }
    else if (data.weather[0].main == "Clear") {
        image.setAttribute("src", "./images/clear.png")
    }
    else if (data.weather[0].main == "Drizzle") {
        image.setAttribute("src", "./images/drizzle.png")
    }
    else if (data.weather[0].main == "Mist") {
        image.setAttribute("src", "./images/mist.png")
    }
    else if (data.weather[0].main == "Rain") {
        image.setAttribute("src", "./images/rain.png")
    }
    else if (data.weather[0].main == "Snow") {
        image.setAttribute("src", "./images/snow.png")
    }
    document.querySelector(".wheather_type_box button").innerHTML=data.weather[0].main;
    console.log(data);
}
//  image.setAttribute("src", "./images/wind.png")







