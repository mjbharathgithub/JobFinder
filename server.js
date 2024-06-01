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
  const result={
    "status": "OK",
    "request_id": "936ea4a9-8c69-4282-976e-23ab61b988b6",
    "parameters": {
      "query": "web developer in chennai tamil nadu india",
      "page": 1,
      "num_pages": 1,
      "date_posted": "all",
      "remote_jobs_only": true,
      "employment_types": [
        "FULLTIME",
        "PARTTIME"
      ],
      "job_requirements": [
        "no_experience"
      ]
    },
    "data": [
      {
        "job_id": "4KGCrRaWpFyM2_HXAAAAAA==",
        "employer_name": "Zoho",
        "employer_logo": "https://www.zohowebstatic.com/sites/zweb/images/ogimage/zoho-logo.png",
        "employer_website": "http://www.zoho.com",
        "employer_company_type": "Information",
        "job_publisher": "LinkedIn",
        "job_employment_type": "FULLTIME",
        "job_title": "Web Developers",
        "job_apply_link": "https://in.linkedin.com/jobs/view/web-developers-at-zoho-3937288974",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5711,
        "apply_options": [
          {
            "publisher": "LinkedIn",
            "apply_link": "https://in.linkedin.com/jobs/view/web-developers-at-zoho-3937288974",
            "is_direct": false
          },
          {
            "publisher": "Sercanto",
            "apply_link": "https://www.sercanto.in/detail/a/web-developers_india_8926426",
            "is_direct": false
          },
          {
            "publisher": "Bangladesh Jobs",
            "apply_link": "https://bangladeshjobs.info/job/web-developers-salem-manageengine-1963-51636-india/",
            "is_direct": false
          },
          {
            "publisher": "Kit Job",
            "apply_link": "https://www.kitjob.in/job/81650112/web-developers-et31-india/",
            "is_direct": false
          }
        ],
        "job_description": "• Develop new components based on design specs.\n• Work independently and write maintainable code.\n• Understand existing code and suggest optimization in terms of functionality and performance.\n• Work on client frameworks for caching and develop reusable components.\n\nPlease note that we have requirements for this role in Chennai, Salem, Coimbatore, Tirunelveli, and Madurai.",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1717017274,
        "job_posted_at_datetime_utc": "2024-05-29T21:14:34.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "IN",
        "job_latitude": 20.593683,
        "job_longitude": 78.96288,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=4KGCrRaWpFyM2_HXAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=4KGCrRaWpFyM2_HXAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2024-06-28T20:56:15.000Z",
        "job_offer_expiration_timestamp": 1719608175,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": "511210",
        "job_naics_name": "Software Publishers"
      },
      {
        "job_id": "EHWI6PPtVrA8PbbRAAAAAA==",
        "employer_name": "Limish",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOYOlh-uASmMZ64N39zH1y4asulJdqXpbr_-l&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "Indeed",
        "job_employment_type": "FULLTIME",
        "job_title": "Web Designer (Exp 0-4 yrs)",
        "job_apply_link": "https://in.indeed.com/viewjob?jk=e9d2eb216d473328",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.7203,
        "apply_options": [
          {
            "publisher": "Indeed",
            "apply_link": "https://in.indeed.com/viewjob?jk=e9d2eb216d473328",
            "is_direct": false
          }
        ],
        "job_description": "Job Type:\nFull-time, Part-time, Fresher\nLocation:\nRemote\nJob Summary:\nDesired Candidate Profile:\n• In-depth knowledge in HTML5, CSS3, jQuery/Javascript, XML\n• Create Intuitive websites, Responsive design, Web and Mobile application/Product interfaces\n• Good at following practices like W3C standards, Tableless layout & SEO friendly markup\n• Good sense of design and aesthetics with creative skills\n• Ability to visualize concepts & convey them graphically with great attention to detail\n• Up-to-date with the latest Web trends, techniques and technologies\n• Knowledge in Adobe Photoshop, Illustrator, InDesign, Flash, Coreldraw\n• Ability to work independently on complete projects\n• Ability to meet project delivery timelines\n\nHow to apply:\n\nMail your resume to careers@limish.com",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1638448328,
        "job_posted_at_datetime_utc": "2021-12-02T12:32:08.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "IN",
        "job_latitude": 20.593683,
        "job_longitude": 78.96288,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=EHWI6PPtVrA8PbbRAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=EHWI6PPtVrA8PbbRAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2024-09-27T19:59:25.000Z",
        "job_offer_expiration_timestamp": 1727467165,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": "Web designer",
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "NlsGLewWcabDXsw2AAAAAA==",
        "employer_name": "X4 Technology",
        "employer_logo": null,
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "JavaScript Works - WorksHub",
        "job_employment_type": "FULLTIME",
        "job_title": "Remote Web Developer (Fully Remote) - X4 Technology",
        "job_apply_link": "https://javascript.works-hub.com/jobs/web-developer-fully-remote-ca1",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5615,
        "apply_options": [
          {
            "publisher": "JavaScript Works - WorksHub",
            "apply_link": "https://javascript.works-hub.com/jobs/web-developer-fully-remote-ca1",
            "is_direct": false
          }
        ],
        "job_description": "Skills\n\nProficiency in building websites from scratch using C#, MVC, Asp.net, and Asp.net core.\n\nMastery in C#, HTML, CSS, Javascript, JSON, and Bootstrap.\n\nKnowledge of UI binding frameworks like Vue.js, AngularJS, React, or Knockout is a big plus.\n\nEducation\n\nA degree in Computer Science or a related field is advantageous.\n\nYou'll also have the opportunity...",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1712102400,
        "job_posted_at_datetime_utc": "2024-04-03T00:00:00.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "GB",
        "job_latitude": 55.37805,
        "job_longitude": -3.435973,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=NlsGLewWcabDXsw2AAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=NlsGLewWcabDXsw2AAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": true,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": 50000,
        "job_max_salary": 85000,
        "job_salary_currency": "GBP",
        "job_salary_period": "YEAR",
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "cHDRCjYBZce5U6TuAAAAAA==",
        "employer_name": "KarmaCircles",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Vp1E28gI3wympZ9AqgbJkxHT0EUSYwI0zEwz&s=0",
        "employer_website": "http://www.karmacircles.com",
        "employer_company_type": null,
        "job_publisher": "LinkedIn",
        "job_employment_type": "FULLTIME",
        "job_title": "Front-end Developer",
        "job_apply_link": "https://in.linkedin.com/jobs/view/front-end-developer-at-karmacircles-3907519655",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.6421,
        "apply_options": [
          {
            "publisher": "LinkedIn",
            "apply_link": "https://in.linkedin.com/jobs/view/front-end-developer-at-karmacircles-3907519655",
            "is_direct": false
          }
        ],
        "job_description": "Company Overview\n\nKarmaCircles operates in the internet industry and is a dynamic and rapidly growing organization dedicated to connecting professionals around the world for knowledge sharing and mentorship.\n\nRole And Responsibilities\n\nWe are seeking a talented Front-end Developer with expertise in HTML 5, CSS 3, and JavaScript. The primary responsibilities of this role include:\n• Developing and implementing user-friendly interfaces for websites and applications.\n• Collaborating with cross-functional teams to gather and analyze requirements.\n• Testing and debugging web applications to ensure optimal performance.\n• Participating in the design and development of responsive web designs.\n\nCandidate Qualifications\n\nIn order to be considered for this role, candidates should possess the following qualifications:\n• A graduation degree is mandatory.\n• Excellent written and verbal communication skills.\n• A quick learner who is adaptable to changing business needs.\n• The ability to multitask effectively.\n\nRequired Skills\n• HTML 5\n• CSS 3\n• JavaScript\n\nSkills: reach js,javascript,html 5,reactjs,css3,css 3,vuejs,bootstrap,react native",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1711611480,
        "job_posted_at_datetime_utc": "2024-03-28T07:38:00.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "IN",
        "job_latitude": 20.593683,
        "job_longitude": 78.96288,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=cHDRCjYBZce5U6TuAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=cHDRCjYBZce5U6TuAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2024-10-19T07:37:19.000Z",
        "job_offer_expiration_timestamp": 1729323439,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": true,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": 450000,
        "job_max_salary": 750000,
        "job_salary_currency": "INR",
        "job_salary_period": "YEAR",
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "nA0dhgRVjYwzlfZ5AAAAAA==",
        "employer_name": "Tutopiya",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23h2bv1i9hIUseqcyBArkx2DMD1yBmZwQR2GF&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "LinkedIn",
        "job_employment_type": "FULLTIME",
        "job_title": "Senior WordPress Developer",
        "job_apply_link": "https://in.linkedin.com/jobs/view/senior-wordpress-developer-at-tutopiya-3934486763",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.6421,
        "apply_options": [
          {
            "publisher": "LinkedIn",
            "apply_link": "https://in.linkedin.com/jobs/view/senior-wordpress-developer-at-tutopiya-3934486763",
            "is_direct": false
          },
          {
            "publisher": "Jobgether",
            "apply_link": "https://jobgether.com/offer/66575b4a3c315e67a204267f-senior-wordpress-developer",
            "is_direct": false
          }
        ],
        "job_description": "Key Responsibilities:\n• Develop, customize, and maintain WordPress themes and plugins.\n• Lead the development of new WordPress-based projects from concept to completion.\n• Optimize website performance, security, and scalability.\n• Collaborate with the design team to ensure seamless integration of UI/UX designs into WordPress.\n• Troubleshoot and resolve website issues and bugs in a timely manner.\n• Implement best practices for SEO and web standards.\n• Mentor and provide guidance to junior developers.\n• Stay updated with the latest industry trends and technologies to ensure our WordPress solutions remain cutting-edge.\n• Conduct regular code reviews to maintain high code quality and standards.\n• Work closely with cross-functional teams, including marketing, product, and operations, to deliver impactful solutions.",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1717086544,
        "job_posted_at_datetime_utc": "2024-05-30T16:29:04.000Z",
        "job_city": "Bengaluru",
        "job_state": "KA",
        "job_country": "IN",
        "job_latitude": 12.971599,
        "job_longitude": 77.59457,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=nA0dhgRVjYwzlfZ5AAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=nA0dhgRVjYwzlfZ5AAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2024-06-29T04:28:53.000Z",
        "job_offer_expiration_timestamp": 1719635333,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": "Senior",
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "bJ2BF-vroOVzXvXqAAAAAA==",
        "employer_name": "Capital Engineering",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0Hng611AEMsjLsTdGeQN558tkU3nHPAB93jG&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "LinkedIn",
        "job_employment_type": "FULLTIME",
        "job_title": "Web Developer",
        "job_apply_link": "https://in.linkedin.com/jobs/view/web-developer-at-capital-engineering-3927007739",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5875,
        "apply_options": [
          {
            "publisher": "LinkedIn",
            "apply_link": "https://in.linkedin.com/jobs/view/web-developer-at-capital-engineering-3927007739",
            "is_direct": false
          },
          {
            "publisher": "Drjobpro.com",
            "apply_link": "https://www.drjobpro.com/job/view/2586018",
            "is_direct": false
          },
          {
            "publisher": "Trabajo.org",
            "apply_link": "https://in.trabajo.org/job-1940-d9560f9df2f1b8fce47c846c924729d9",
            "is_direct": false
          },
          {
            "publisher": "Baghdad Jobs",
            "apply_link": "https://baghdadjobs.info/job/web-developer-india-jobs-hiring-open-1963-53506-india/",
            "is_direct": false
          }
        ],
        "job_description": "Walstar Technologies\n\nSkills & Qualification\n\nExcellent debugging and problem solving capability\n\nExcellent proficiency in applied technologies (Javascript / HTML / CSS / Php / Angular / Bootstrap / React / Wordpress/Android)\n\nMotivated team player who goes over and above what is asked\n\nBachelor's or Masters degree in Electronics, electrical , mechanical\n\nIdeal Candidate\n\nYou have a deep interest and passion for technology.\n\nYou love writing and owning codes and enjoy working with people who will keep challenging you at every stage.\n\nYou have strong problem solving, analytic, decision-making and excellent communication with interpersonal skills.\n\nYou are self-driven and motivated with the desire to work in a fast-paced, results-driven agile environment with varied responsibilities.\n\nSkills: project,communication,interpersonal communication,interpersonal leadership,interpersonal skills,mechanical analysis,mechatronics,mechanical assembly,cad,cad tools,design",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1715794579,
        "job_posted_at_datetime_utc": "2024-05-15T17:36:19.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "IN",
        "job_latitude": 20.593683,
        "job_longitude": 78.96288,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=bJ2BF-vroOVzXvXqAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=bJ2BF-vroOVzXvXqAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2024-11-11T17:36:20.000Z",
        "job_offer_expiration_timestamp": 1731346580,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": true,
          "degree_preferred": true,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "CfhpFZ_eK4Qb0EjCAAAAAA==",
        "employer_name": "iTrade Media",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksCj3KPfoYlPUts9r4KlyeLQn6ItpcIDLEb5v&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "Up2staff",
        "job_employment_type": "FULLTIME",
        "job_title": "Web Developer / Graphic Designer",
        "job_apply_link": "https://up2staff.com/remote-job/web-developer-graphic-designer",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.4982,
        "apply_options": [
          {
            "publisher": "Up2staff",
            "apply_link": "https://up2staff.com/remote-job/web-developer-graphic-designer",
            "is_direct": false
          },
          {
            "publisher": "Look Remote Jobs",
            "apply_link": "https://lookremote.work/jobs/web-developer-graphic-designer-itrade-media",
            "is_direct": false
          }
        ],
        "job_description": "Hi!\n\nMy name is Tateyanna – I am the Vice President at iTrade Pay/ iTrade Media in Phoenix, AZ in the United States. We are looking for a website developer/ graphic designer, it is a full time position with new projects every day.\n\nWe have up to 3 websites that you may be working on and adding onto as well as ads that we will rely on you to design for various placement mediums including print, digital, out of home and more.\n\nWhile this position is remote you will be working closely with myself and the team here in Phoenix to carry out requests of our clients. You must be available to work full time hours within hours that our corporate office is in operation.\n\nThis is a salary position at $1000 USD/ Monthly.\n\nIf you are interested please email me at the address below – you must include your resume as well as attached examples of websites and ad designs that you have created.",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1705454113,
        "job_posted_at_datetime_utc": "2024-01-17T01:15:13.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": null,
        "job_latitude": null,
        "job_longitude": null,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=CfhpFZ_eK4Qb0EjCAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=CfhpFZ_eK4Qb0EjCAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2024-07-26T11:26:40.000Z",
        "job_offer_expiration_timestamp": 1721993200,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "A-hj1lyhLFn1AGUtAAAAAA==",
        "employer_name": "NR Consulting",
        "employer_logo": null,
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "Talentify",
        "job_employment_type": "FULLTIME",
        "job_title": "Application Developer - Java & Web Technologies",
        "job_apply_link": "https://www.talentify.io/job/application-developer-java-and-web-technologies---nr-consulting-22-02716",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5044,
        "apply_options": [
          {
            "publisher": "Talentify",
            "apply_link": "https://www.talentify.io/job/application-developer-java-and-web-technologies---nr-consulting-22-02716",
            "is_direct": false
          }
        ],
        "job_description": "Application Developer - Java & Web Technologies\n\nLocation: Remote\n\nContract\n\nRequired Skills:\nStrong application developer - Java & Web Technologies\nGood communication skill\nCommon Platforms / Languages (Java, .Net, JS, HTML, CSS, Unix, PHP, Perl)",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1649894400,
        "job_posted_at_datetime_utc": "2022-04-14T00:00:00.000Z",
        "job_city": "Ghaziabad",
        "job_state": "UP",
        "job_country": "IN",
        "job_latitude": 28.606993,
        "job_longitude": 77.43153,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=A-hj1lyhLFn1AGUtAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=A-hj1lyhLFn1AGUtAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113200",
        "job_onet_job_zone": "4",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "3jcSDZioTygGh6FjAAAAAA==",
        "employer_name": "CodersBrain",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElKPduobcv6lnpZcqUzsCzvcMvZbfOfu1u1Gy&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "LinkedIn",
        "job_employment_type": "FULLTIME",
        "job_title": "Web Developer (3+ yrs.)(Timing:- 3am- 1 pm)_Bharti",
        "job_apply_link": "https://in.linkedin.com/jobs/view/web-developer-3%2B-yrs-timing-3am-1-pm-bharti-at-codersbrain-3712146612",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5758,
        "apply_options": [
          {
            "publisher": "LinkedIn",
            "apply_link": "https://in.linkedin.com/jobs/view/web-developer-3%2B-yrs-timing-3am-1-pm-bharti-at-codersbrain-3712146612",
            "is_direct": false
          },
          {
            "publisher": "Jobgether",
            "apply_link": "https://jobgether.com/offer/65e5bf6a59244f3a71db72fb-web-developer-3-yrs.-timing---3am--1-pm-_bharti",
            "is_direct": false
          }
        ],
        "job_description": "Greetings from Coders Brain Technology Pvt. Ltd.\n\nCoders Brain is a global leader in its services, digital, and business solutions that partners with its clients to simplify, strengthen, and transform their businesses. We ensure the highest levels of certainty and satisfaction through a deep-set commitment to our clients, comprehensive industry expertise, and a global network of innovation and delivery centers.\n\nRole: Web Developer\n\nLocation: Remote\n\nTimings: Australia Timezone - 3 Am to 1PM\n\nExperience: 3+ Years\n\nMandate Skills\n\nWordPress, Zakeke, Javascript, HTML, CSS, Three.js/Blender, PHP, Node.js, SQL\n\nJD -\n• 3+ Yrs of experience as web developer\n• The goal is to find a mid-level talent here, with skills and experience not only on the technical side but with design as well.\n• Someone who can work independently, without micromanagement and who can bring new ideas to the table.\n\nStack: WordPress, Zakeke, Javascript, HTML, CSS, Three.js/Blender, PHP, Node.js, SQL\n\nIf you are interested then click on apply button else send your resume on prerna.jain@codersbrain.com / pooja.gupta@codersbrain.com\n\nSkills: three.js/blender,wordpress,css,sql,blender,javascript,zakeke,three.js,node.js,php,html",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1694589569,
        "job_posted_at_datetime_utc": "2023-09-13T07:19:29.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "IN",
        "job_latitude": 20.593683,
        "job_longitude": 78.96288,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=3jcSDZioTygGh6FjAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=3jcSDZioTygGh6FjAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2024-10-17T10:12:53.000Z",
        "job_offer_expiration_timestamp": 1729159973,
        "job_required_experience": {
          "no_experience_required": true,
          "required_experience_in_months": 36,
          "experience_mentioned": true,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      },
      {
        "job_id": "jN8RevWKeNRA35YbAAAAAA==",
        "employer_name": "Henderson Scott",
        "employer_logo": null,
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "JavaScript Works - WorksHub",
        "job_employment_type": "FULLTIME",
        "job_title": "Remote Web Developer - Remote working - Henderson Scott",
        "job_apply_link": "https://javascript.works-hub.com/jobs/web-developer-remote-working-430",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5667,
        "apply_options": [
          {
            "publisher": "JavaScript Works - WorksHub",
            "apply_link": "https://javascript.works-hub.com/jobs/web-developer-remote-working-430",
            "is_direct": false
          }
        ],
        "job_description": "html\n\nSoftware Engineer (React and Next.js)\n\nReact | Next.js | JavaScript | TypeScript | Azure DevOps | Git | HTML | CSS | Bootstrap\n\nJob Description\n\nThey're looking to strengthen the team with a strong mid-level developer who can work across a wide variety of front-end technologies.\n\n",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1712361600,
        "job_posted_at_datetime_utc": "2024-04-06T00:00:00.000Z",
        "job_city": "Manchester",
        "job_state": null,
        "job_country": "GB",
        "job_latitude": 53.48076,
        "job_longitude": -2.2426305,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+chennai+tamil+nadu+india&start=0&ltype=1&chips=employment_type:FULLTIME,employment_type:PARTTIME,requirements:no_experience&schips=employment_type;FULLTIME;PARTTIME,requirements;no_experience&ibp=htl;jobs&htidocid=jN8RevWKeNRA35YbAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+chennai+tamil+nadu+india&htidocid=jN8RevWKeNRA35YbAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
  
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_occupational_categories": null,
        "job_naics_code": null,
        "job_naics_name": null
      }
    ]
  }.data;
  //res.send({jobs:result});
  res.render("jobs.ejs",{message:"Late is better than NEVER",
jobs:result});
});




app.post("/waiting",async (req,res)=>{
   
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
    res.render("jobs.ejs",{jobs:result.data});

    

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