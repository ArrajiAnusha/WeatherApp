let container = document.querySelector(".container")
let search = document.querySelector(".search-box button")
let weatherBox = document.querySelector(".weather-box")
let weatherDetails = document.querySelector(".weather-details")
let error404 = document.querySelector(".not-found")




search.addEventListener("click",()=>{

    const APIKey = '9006fe38dffe3876a9dcab7a51b79c9b'
    let city = document.querySelector(".search-box input").value ;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

         if(json.cod == "404"){
            container.style.height ='400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
            
         }

         container.computedStyleMap.height ='555px';
         weatherBox.classList.add('active');
         weatherDetails.classList.add('active');
         error404.classList.remove('active');

        let image = document.querySelector('.weather-box img');
        let temperature = document.querySelector('.weather-box .temperature');
        let description = document.querySelector('.weather-box .description');
        let humidity = document.querySelector('.weather-details .humidity span');
        let wind = document.querySelector('.weather-details .wind span');
        
        switch (json.weather[0].main) 
        {
           case 'Clear':
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoIA--8c6t4ExnThccJYWP7G_OOQvQ4q2dA&s"
            break;

            case 'Rain':
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HWl17M-p5jfio6rbQRH4wnVssvK8aooOZQ&s"
            break;

            case 'Snow':
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGjU83_kNHqMA3trINUwdIlKjWCASzROMyg&s"
            break;

            case 'Clouds':
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoIA--8c6t4ExnThccJYWP7G_OOQvQ4q2dA&s"
            break;
            

            case 'Mist':
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbCl1wZ99vpq7YOBuNERKqfik_w--0ElJEg&s"
            break;

            case 'Haze':
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZR09Eg24QCcbqTDWN7nbbPx_A_MfmgAOMg&s"
            break;

           default:
            image.src ="./image.png"
            
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>&deg;C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

    })

})

