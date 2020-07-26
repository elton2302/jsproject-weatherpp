const cityForm = document.querySelector('form');

const card = document.querySelector('.card');

const details = document.querySelector('.details');

const time = document.querySelector('img.time');

const icons = document.querySelector('.icon img');



const updateUi = (data) =>{

console.log(data)
    //const cityDets = data.cityDets;

    //const cityWeat = data.cityWeat;

    const {cityDets, cityWeat} = data;

    details.innerHTML = 
    
    `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${cityWeat.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${cityWeat.Temperature.Metric.Value}</span>
      <span>&deg;C</span>`;

      
const timeSrc = cityWeat.IsDayTime ? 'img/day.svg': 'img/night.svg';

//if(cityWeat.IsDayTime){
    //timeSrc = 'img/day.svg';
//}else{
   // timeSrc = 'img/night.svg';
//};

time.setAttribute('src', timeSrc);

let weatIcon = `img/icons/${cityWeat.WeatherIcon}.svg`;

icons.setAttribute('src', weatIcon);

      if(card.classList.contains('d-none')){

        card.classList.remove('d-none')
      }
};


const updateCity = async (data) =>{

    const cityDets = await getCity(data);

    const cityWeat = await getWeather(cityDets.Key);

    return {
        cityDets : cityDets,
        cityWeat : cityWeat
    }
};



cityForm.addEventListener('submit', e =>{

    e.preventDefault();
    
    const data = cityForm.city.value.trim();

    cityForm.reset();

    updateCity(data)
    //.then(data =>{console.log(data)})
    .then(data =>{updateUi(data)})
    .catch(err =>{ console.log('this is afsfs', err.message)});

    localStorage.setItem('city', data);
})



if(localStorage.getItem('city')){

    const newCity = updateCity(localStorage.getItem('city'))
    .then(data=>updateUi(data))
    .catch(err => console.log(err));
}