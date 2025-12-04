import axios from 'axios';
const baseUrl="https://music-back.vercel.app/";
 const backend = async() => {
 const url="https://music-back.vercel.app/";
// const url = "http://localhost:8000/";

 try {
    const res= await axios.get(url,{
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
 
 export default backend;
export {homePage,searchPage,albumDetail};