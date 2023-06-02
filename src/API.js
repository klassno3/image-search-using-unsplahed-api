import axios from 'axios';
const searchImages = async (term,color) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID qG4JHB1K5xs3THSEIEMl6RKLZWlt51ohhZVBddY_Ow4',
    },
    params: {
      query: term,
      per_page: 30,
     
      color:color,

    },
  });


  return response.data.results;
};

export default searchImages;
