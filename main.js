const Api_Key="20eacb6fdf7b41a58fd104444231805"

fetch('http://api.weatherapi.com/v1/current.json?key=20eacb6fdf7b41a58fd104444231805&q=London&aqi=no')
.then((x)=>x.json())
.then((x)=>renderWeather(x));


const weathercontainer=document.querySelector(".weathercontainer")
function renderWeather(weather){

    const country=weather.location.country
    const city=weather.location.name
    const tempC=weather.current.temp_c
    const condition=weather.current.condition
    const icon=document.querySelector("icon")
    const windkph=weather.current.wind_kph
    const humidity=weather.current.humidity
    const feelslike_c=weather.current.feelslike_c
    const uv=weather.current.uv

    const countryspan=document.createElement("span")
    countryspan.innerText= 'country :'+country

    const cityspan=document.createElement("span")
    cityspan.innerText= 'city :' +city

    const tempCspan=document.createElement("span")
    tempCspan.innerText=tempC

    const conditionSpan=document.createElement("span")
    conditionSpan.innerText=condition

    const wind_kphspan=document.createElement("span")
    wind_kphspan.innerText=windkph

    const humidityspan=document.createElement("span")
    humidity.innerText=humidity

    const feelslike_cspan=document.createElement("span")
    feelslike_c.innerText=feelslike_c

    const uvspan=document.createElement('span')
    uvspan.innerText=uv

    weathercontainer.appendChild(uvspan)
    weathercontainer.appendChild(humidityspan)
    weathercontainer.appendChild(countryspan)
    weathercontainer.appendChild(conditionSpan)
    weathercontainer.appendChild(cityspan)
    weathercontainer.appendChild(tempCspan)
    weathercontainer.appendChild(wind_kphspan)





   
}
