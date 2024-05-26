import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import axios from "axios";
import env from "dotenv";
env.config();

const app = express();
const upload=multer();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const API_URL=process.env.url;
app.get("/",(req,res)=>{
  res.render("jobs.ejs",{message:"Late is better than NEVER"});
});

app.post("/donnot",upload.none(),(req,res)=>{
  // const {queryParameter,datePosted,employmentType,experience,remoteJob}=req.body;

  // console.log(`Query : ${queryParameter}  Date : ${datePosted}   Emp Type   : ${employmentType}   Experience  :${experience}   Remote Job  ${remoteJob}`);
  const jobTypes = req.body['jobType[]']; // 'jobType[]' to access array
  console.log('Selected Job Types:', jobTypes);
  res.json({ message: 'Received', jobTypes });
});



app.get("/waiting",async (req,res)=>{
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
