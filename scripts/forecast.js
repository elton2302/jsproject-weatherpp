const key = 'y2f5P8ufeACjQNvg0YnQdXApVZDQaQkk';

const getCity = async (city) => {

    const base = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search';
    
    const query =`?apikey=${key}&q=${city}`;

    const response = await fetch (base+query);

    const data =await response.json();

    return (data[0]);
}


const getWeather = async (id) =>{

    const base ='https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/';

    const query =`${id}?apikey=${key}`;

    const response = await fetch (base + query);

    const data = await response.json();

    return (data[0]);
}
