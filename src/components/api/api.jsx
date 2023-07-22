import Notiflix from 'notiflix';
import axios from "axios";

const BASE_URL ='https://pixabay.com/api/';
const API_KEY = '37474712-2dac32f03878bab58bae809d9';

let per_page = 12;

export async function getImages(page=1, keyWord) { 
  try {
      const params = new URLSearchParams ({
        image_type : 'photo',
        orientation : 'horizontal',
        safesearch : true 
      });
    
    const resp = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${keyWord}&${params}&page=${page}&per_page=${per_page}`);
    const photos = resp.data.hits;
    const total = resp.data.total;
    return ({photos, total})
  } catch (err) {
    Notiflix.Notify.failure("Something went wrong! Please try to reload.")
    console.log(err)
  } 
}


