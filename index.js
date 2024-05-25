import express, { query } from "express";
import axios from "axios";
import env from "dotenv";
env.config();

const app = express();
const port = 3000;
const API_URL=process.env.url;


app.get("/",async (req,res)=>{
   //res.send(`Welcome Joseph`);
   try{
    const result= await axios.get(`${API_URL}`,{
      params: {
        query: 'Java developer in Karnataka, India',
        page: '1',
        num_pages: '1'
      },
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": process.env.API_HOST,
      }
    });
    res.send(result.data);
    

   }
   catch(error){
    res.status(401).send(`Joseph we got this \n${error.message}`);
   }
  });


app.listen(port,()=>{
  console.log(`Joseph, Server is running on port ${port} successfully....`);
});
