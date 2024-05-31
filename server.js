import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import axios from "axios";
env.config();

const app = express();
//const upload=multer();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const API_URL=process.env.url;
app.get("/",(req,res)=>{
  res.render("jobs.ejs",{message:"Late is better than NEVER"});
});




app.post("/building",async (req,res)=>{
   
  const {queryParameter,datePosted,employmentType,remoteJob,experience}=req.body;
  

  try{
    const result= await axios.get(`${API_URL}`,{
      params: {
        query:queryParameter ,
        page: '1',
        num_pages: '1',
        date_posted:datePosted ,
        remote_jobs_only: remoteJob ,
        employment_types: employmentType ,
        job_requirements: experience
      },
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": process.env.API_HOST,
      }
    });
    res.send(result.data);
    

   }
   catch(error){
    res.status(401).send(`Joseph we got this " ${error.message} " error in our program`);
   }
  });


app.listen(port,()=>{
  console.log(`Joseph, Server is running on port ${port} successfully....`);
});

// query:"python developer in texas, usa"
// page:1
// num_pages:1
// date_posted:"week"
// remote_jobs_only:true
// employment_types:
// 0:"FULLTIME"
// 1:"CONTRACTOR"
// 2:"PARTTIME"
// 3:"INTERN"
// job_requirements:
// 0:"no_experience"//let exp=req.body.experience.split(",");

  
  //let empTypeList=employmentType.split(",").map(emptype=>emptype.trim()).filter(emptype=>emptype.length>0).map(emptype=>emptype.toUpperCase());


  // console.log(`Query : ${queryParameter} \n Date : ${datePosted} \n Emp Type : ${employmentType} \n Experience  :${exp} \n Remote Job  ${remoteJob} \n and list : ${empTypeList}`);
  // console.log(empTypeList);