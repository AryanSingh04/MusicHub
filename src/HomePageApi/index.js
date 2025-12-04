import axios from 'axios';
import { useEffect } from 'react';

const getrec = async({id}) => {
   
        const corsProxy = 'https://thingproxy.freeboard.io/fetch/https://thingproxy.freeboard.io/fetch/'; // Public CORS proxy URL
        // https://cors-anywhere.herokuapp.com/
        // https://thingproxy.freeboard.io/fetch/https://thingproxy.freeboard.io/fetch/
        const baseUrl = 'https://www.jiosaavn.com';
        const apiStr = `/api.php?_format=json&_marker=0&api_version=4&pid=${id}&ctx=web6dot0`;
        const endpoint = `${baseUrl}${apiStr}&__call=reco.getreco`;
        // webapi.getLaunchData
        // content.getAlbums
        try {
          const res = await axios.get(`${corsProxy}${endpoint}`, {
            headers: {
              'Content-Type': 'application/json',
          
            }
          });
      
          if (res.status==200) {
            const data=res.data
            return data
          }
        } catch (err) {
          console.log('Error getting the Data', err);
        }
 

};

export default getrec;
