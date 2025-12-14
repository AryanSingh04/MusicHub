import axios from 'axios';
const baseUrl=import.meta.env.VITE_BACKEND_URL;
 const backend = async() => {
 try {
    const res= await axios.get(baseUrl,{
        headers: {
            'Content-Type': 'application/json',
          }
    })
    if (res.status==200) {
         
        const data= res.data
       
        return data
    }
 } catch (error) {
    console.log('Error getting the Data', error);
 }
 }

 const homePage=async()=>{
    try {
        const res= await axios.get(baseUrl,{
            headers: {
                'Content-Type': 'application/json',
              }
        })
        if (res.status==200) {
             
            const data= res.data
           
            return data
        }
     } catch (error) {
        console.log('Error getting the Data', error);
     }
 }

 const searchPage=async(query)=>{
    try{
        const res=await axios.get(`${baseUrl}search/songs?q=${query}`,{
            
        })
        if(res.status==200){
            return res.data.results;
        }
    }catch(err){
        console.log('Error getting the Data', err);
    }
 }

 const albumDetail=async(id)=>{
    try{
        console.log(`${baseUrl}album/${id}`)
        const res=await axios.get(`${baseUrl}album/${id}`,{
            headers: {
                'Content-Type': 'application/json',
              }
        })
        return res.data;

    }catch(err){
        console.log(err)
    }
 }

 const playSong=(id)=>{
    try{
        const res=`${baseUrl}song/stream/${id}`;
        return res;
    }catch(err){
        console.log(err)
    }  
}

const songDetail=async(id)=>{
    try{
        const res=await axios.get(`${baseUrl}song/${id}`)
        return res.data.songs[0];
    }catch(err){
        console.log(err)
    }}

const artistDetail=async(id)=>{
    try{
        const res=await axios.get(`${baseUrl}artist/${id}`)
        return res.data;
    }catch(err){
        console.log(err)
    }
}
 export default backend;
export {homePage,searchPage,albumDetail,playSong,songDetail,artistDetail};