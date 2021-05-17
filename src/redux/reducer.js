export const weatherReducer=()=>{

    return[
        {cityName:'London',countryName:'GB', main:'Cloudy', temp:'15' },
        {cityName:'Usak',countryName:'TR', main:'Sunny', temp:'25' },
        {cityName:'Reading',countryName:'GB', main:'Sunny', temp:'20' },
        {cityName:'Paris',countryName:'FR', main:'Rain', temp:'12' },
        {cityName:'Ankara',countryName:'TR', main:'Clear', temp:'15' },
    ]

}

export const selectedCityReducer=(selectCity={cityName:'Usak',countryName:'TR', main:'Sunny', temp:'25' },action)=>{
    if (action.type==='City-Selected'){
        return action.payload
    }
    return selectCity
}