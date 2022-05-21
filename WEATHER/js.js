


let fetch1 = fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=metric')
   .then(resObj => resObj.json())
   .then(res => {
      document.querySelector('.weather__city1').innerHTML = res.name
      document.querySelector('.weather__status1').innerHTML = res.weather[0].main
      document.querySelector('.weather__temp1').innerHTML = Math.round(res.main.temp) + '°C'
      document.querySelector('.weather__feels-like1').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '°C'
      document.querySelector('.weather__icon1').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.weather[0]['icon']}@2x.png">`
      document.querySelector('.btn').addEventListener('click', function () {
         fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=imperial')
            .then(resO => resO.json())
            .then(res => {
               document.querySelector('.weather__temp1').innerHTML = Math.round(res.main.temp) + '℉'
               document.querySelector('.weather__feels-like1').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '℉'

            })
      })
      document.querySelector('.btn1').addEventListener('click', function () {
         let fetch3 = fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=metric')
            .then(resO => resO.json())
            .then(res => {
               document.querySelector('.weather__temp1').innerHTML = Math.round(res.main.temp) + '°C'
               document.querySelector('.weather__feels-like1').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '°C'

            })
      })
      document.querySelector('.span1').innerHTML = res.wind.deg
      document.querySelector('.span2').innerHTML = res.wind.speed + ' km/h'
      document.querySelector('.span3').innerHTML = res.main.pressure + ' hPa'
      document.querySelector('.span4').innerHTML = new Date(Number(res.sys.sunrise + '000')).toLocaleTimeString()

      document.querySelector('.span5').innerHTML = new Date(Number(res.sys.sunset + '000')).toLocaleTimeString()
   })


let fetch4 = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.4333&lon=30.5167&exclude=hourly,minutely&appid=bf35cac91880cb98375230fb443a116f&units=metric')
   .then(resObj => resObj.json()).then(res => {
      console.log(res);
      document.querySelector('.day').innerHTML = new Date(Number(res.daily[0].dt + '000')).toDateString()
      document.querySelector('.sp1').innerHTML = Math.round(res.daily[0].temp.day) + '°C'
      document.querySelector('.sp2').innerHTML = `<img  src="http://openweathermap.org/img/wn/${res.daily[0].weather[0]['icon']}@2x.png">`

      document.querySelector('.day1').innerHTML = new Date(Number(res.daily[1].dt + '000')).toDateString()
      document.querySelector('.sp3').innerHTML = Math.round(res.daily[1].temp.day) + '°C'
      document.querySelector('.sp4').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[1].weather[0]['icon']}@2x.png">`

      document.querySelector('.day2').innerHTML = new Date(Number(res.daily[2].dt + '000')).toDateString()
      document.querySelector('.sp5').innerHTML = Math.round(res.daily[2].temp.day) + '°C'
      document.querySelector('.sp6').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[2].weather[0]['icon']}@2x.png">`

      document.querySelector('.day3').innerHTML = new Date(Number(res.daily[3].dt + '000')).toDateString()
      document.querySelector('.sp7').innerHTML = Math.round(res.daily[3].temp.day) + '°C'
      document.querySelector('.sp8').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[3].weather[0]['icon']}@2x.png">`

      document.querySelector('.day4').innerHTML = new Date(Number(res.daily[4].dt + '000')).toDateString()
      document.querySelector('.sp9').innerHTML = Math.round(res.daily[4].temp.day) + '°C'
      document.querySelector('.sp10').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[4].weather[0]['icon']}@2x.png">`


      document.querySelector('.day5').innerHTML = new Date(Number(res.daily[5].dt + '000')).toDateString()
      document.querySelector('.sp11').innerHTML = Math.round(res.daily[5].temp.day) + '°C'
      document.querySelector('.sp12').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[5].weather[0]['icon']}@2x.png">`

      document.querySelector('.day6').innerHTML = new Date(Number(res.daily[5].dt + '000')).toDateString()
      document.querySelector('.sp13').innerHTML = Math.round(res.daily[5].temp.day) + '°C'
      document.querySelector('.sp14').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[5].weather[0]['icon']}@2x.png">`

   })


let fetch5 = fetch('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=metric')
   .then(resObj => resObj.json())
   .then(res => {
      console.log(res);
      document.querySelector('.weather__city2').innerHTML = res.name
      document.querySelector('.weather__status2').innerHTML = res.weather[0].main
      document.querySelector('.weather__temp2').innerHTML = Math.round(res.main.temp) + '°C'
      document.querySelector('.weather__feels-like2').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '°C'
      document.querySelector('.weather__icon2').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.weather[0]['icon']}@2x.png">`
      document.querySelector('.btn2').addEventListener('click', function () {
         fetch('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=imperial')
            .then(resO => resO.json())
            .then(res => {
               document.querySelector('.weather__temp2').innerHTML = Math.round(res.main.temp) + '℉'
               document.querySelector('.weather__feels-like2').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '℉'

            })

      })
      document.querySelector('.btn3').addEventListener('click', function () {
         let fetch7 = fetch('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=metric')
            .then(resO => resO.json())
            .then(res => {
               document.querySelector('.weather__temp2').innerHTML = Math.round(res.main.temp) + '°C'
               document.querySelector('.weather__feels-like2').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '°C'

            })
      })
      document.querySelector('.span11').innerHTML = res.wind.deg
      document.querySelector('.span22').innerHTML = res.wind.speed + ' km/h'
      document.querySelector('.span33').innerHTML = res.main.pressure + ' hPa'
      document.querySelector('.span44').innerHTML = new Date(Number(res.sys.sunrise + '000')).toLocaleTimeString()
      document.querySelector('.span55').innerHTML = new Date(Number(res.sys.sunset + '000')).toLocaleTimeString()
   })

let ftch1 = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=hourly,minutely&appid=bf35cac91880cb98375230fb443a116f&units=metric')
   .then(resObj => resObj.json()).then(res => {
      console.log(res);
      document.querySelector('.day0').innerHTML = new Date(Number(res.daily[0].dt + '000')).toDateString()
      document.querySelector('.spp1').innerHTML = Math.round(res.daily[0].temp.day) + '°C'
      document.querySelector('.spp2').innerHTML = `<img  src="http://openweathermap.org/img/wn/${res.daily[0].weather[0]['icon']}@2x.png">`

      document.querySelector('.day11').innerHTML = new Date(Number(res.daily[1].dt + '000')).toDateString()
      document.querySelector('.spp3').innerHTML = Math.round(res.daily[1].temp.day) + '°C'
      document.querySelector('.spp4').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[1].weather[0]['icon']}@2x.png">`

      document.querySelector('.day22').innerHTML = new Date(Number(res.daily[2].dt + '000')).toDateString()
      document.querySelector('.spp5').innerHTML = Math.round(res.daily[2].temp.day) + '°C'
      document.querySelector('.spp6').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[2].weather[0]['icon']}@2x.png">`

      document.querySelector('.day33').innerHTML = new Date(Number(res.daily[3].dt + '000')).toDateString()
      document.querySelector('.spp7').innerHTML = Math.round(res.daily[3].temp.day) + '°C'
      document.querySelector('.spp8').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[3].weather[0]['icon']}@2x.png">`

      document.querySelector('.day44').innerHTML = new Date(Number(res.daily[4].dt + '000')).toDateString()
      document.querySelector('.spp9').innerHTML = Math.round(res.daily[4].temp.day) + '°C'
      document.querySelector('.spp10').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[4].weather[0]['icon']}@2x.png">`


      document.querySelector('.day55').innerHTML = new Date(Number(res.daily[5].dt + '000')).toDateString()
      document.querySelector('.spp11').innerHTML = Math.round(res.daily[5].temp.day) + '°C'
      document.querySelector('.spp12').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[5].weather[0]['icon']}@2x.png">`

      document.querySelector('.day66').innerHTML = new Date(Number(res.daily[5].dt + '000')).toDateString()
      document.querySelector('.spp13').innerHTML = Math.round(res.daily[5].temp.day) + '°C'
      document.querySelector('.spp14').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[5].weather[0]['icon']}@2x.png">`

   })

let fetch8 = fetch('http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=metric')
   .then(resObj => resObj.json())
   .then(res => {
      console.log(res);
      document.querySelector('.weather__city3').innerHTML = res.name
      document.querySelector('.weather__status3').innerHTML = res.weather[0].main
      document.querySelector('.weather__temp3').innerHTML = Math.round(res.main.temp) + '°C'
      document.querySelector('.weather__feels-like3').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '°C'
      document.querySelector('.weather__icon3').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.weather[0]['icon']}@2x.png">`
      document.querySelector('.btn4').addEventListener('click', function () {
         fetch('http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=imperial')
            .then(resO => resO.json())
            .then(res => {
               document.querySelector('.weather__temp3').innerHTML = Math.round(res.main.temp) + '℉'
               document.querySelector('.weather__feels-like3').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '℉'

            })
      })
      document.querySelector('.btn5').addEventListener('click', function () {
         let fetch10 = fetch('http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=metric')
            .then(resO => resO.json())
            .then(res => {
               document.querySelector('.weather__temp3').innerHTML = Math.round(res.main.temp) + '°C'
               document.querySelector('.weather__feels-like3').innerHTML = 'Feels like: ' + Math.round(res.main.feels_like) + '°C'

            })
      })
      document.querySelector('.span111').innerHTML = res.wind.deg
      document.querySelector('.span222').innerHTML = res.wind.speed + ' km/h'
      document.querySelector('.span333').innerHTML = res.main.pressure + ' hPa'
      document.querySelector('.span444').innerHTML = new Date(Number(res.sys.sunrise + '000')).toLocaleTimeString()
      document.querySelector('.span555').innerHTML = new Date(Number(res.sys.sunset + '000')).toLocaleTimeString()
   })


let ftch2 = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=43.0004&lon=-75.4999&exclude=hourly,minutely&appid=bf35cac91880cb98375230fb443a116f&units=metric')
   .then(resObj => resObj.json()).then(res => {
      console.log(res);
      document.querySelector('.day00').innerHTML = new Date(Number(res.daily[0].dt + '000')).toDateString()
      document.querySelector('.sppp1').innerHTML = Math.round(res.daily[0].temp.day) + '°C'
      document.querySelector('.sppp2').innerHTML = `<img  src="http://openweathermap.org/img/wn/${res.daily[0].weather[0]['icon']}@2x.png">`

      document.querySelector('.day111').innerHTML = new Date(Number(res.daily[1].dt + '000')).toDateString()
      document.querySelector('.sppp3').innerHTML = Math.round(res.daily[1].temp.day) + '°C'
      document.querySelector('.sppp4').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[1].weather[0]['icon']}@2x.png">`

      document.querySelector('.day222').innerHTML = new Date(Number(res.daily[2].dt + '000')).toDateString()
      document.querySelector('.sppp5').innerHTML = Math.round(res.daily[2].temp.day) + '°C'
      document.querySelector('.sppp6').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[2].weather[0]['icon']}@2x.png">`

      document.querySelector('.day333').innerHTML = new Date(Number(res.daily[3].dt + '000')).toDateString()
      document.querySelector('.sppp7').innerHTML = Math.round(res.daily[3].temp.day) + '°C'
      document.querySelector('.sppp8').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[3].weather[0]['icon']}@2x.png">`

      document.querySelector('.day444').innerHTML = new Date(Number(res.daily[4].dt + '000')).toDateString()
      document.querySelector('.sppp9').innerHTML = Math.round(res.daily[4].temp.day) + '°C'
      document.querySelector('.sppp10').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[4].weather[0]['icon']}@2x.png">`


      document.querySelector('.day555').innerHTML = new Date(Number(res.daily[5].dt + '000')).toDateString()
      document.querySelector('.sppp11').innerHTML = Math.round(res.daily[5].temp.day) + '°C'
      document.querySelector('.sppp12').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[5].weather[0]['icon']}@2x.png">`

      document.querySelector('.day666').innerHTML = new Date(Number(res.daily[5].dt + '000')).toDateString()
      document.querySelector('.sppp13').innerHTML = Math.round(res.daily[5].temp.day) + '°C'
      document.querySelector('.sppp14').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.daily[5].weather[0]['icon']}@2x.png">`

   })

