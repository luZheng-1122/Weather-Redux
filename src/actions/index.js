import axios from 'axios';

const API_KEY = '16b1a5378966f68220db29d0760639d3';
const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = ROOT_URL + '&q=' + city + ',au';
    // '$(ROOT_URL)&q=$(city),cn';
    //similar with ajax get data from an api, return a promise
    //api请求数据在action中进行
    //跨域问题 用插件解决了 cross-origin
    const request = axios.get(url);
    //不需要写回调函数，promise会解决异步问题
    
    //request is a promise, return a promise in payload
    //promise is a middleware, it will unwrap the request,
    //just fetch the data and make it a payload then send it to reducer
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}