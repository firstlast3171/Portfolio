import CustomContact from "../components/CustomContact";
import MainCard from "../components/MainCard";
import { FaPhone, FaFacebook, FaFacebookMessenger, FaTelegram, FaGithub } from "react-icons/fa";
import Project from "../components/Project";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Header from "../components/Header";
import Footer from "../components/Footer";


function Home() {
     useEffect(()=>{
          console.log('AOS is initializing...');
          Aos.init()
     },[])
     const profile = {
          title : "Bhone Thit",
          muteContent : [
               "Full Stack Developer",
          ],
          description : "Hello there! 👋 I'm Bhone Thit Ko Ko. I'm 20 years old. I am a passionate and dedicated Junior Full Stack Developer with a flair for Web Development who based in Magway. I am out from school on some conditions and start apply some job and study at programming languages while working."
     }
     // a passionate and dedicated Junior Full Stack Developer with a flair for Web Development. I thrive on turning innovative ideas into reality and am deeply committed to creating meaningful and impactful solutions.
     const aboutProgress = {
          title : "I studied for 2 years.",
          muteContent : [
               "React",
               "Php",
               "Laravel",
               "Express",
               "Bootstrap",
               "GitHub" 
          ],
          description : "I started my learning about 2 years ago. I studied basice html, css, javascript and php with my private teacher and then start learning php oop and laravel on <Sayar Ei Maung's Professional Web Developer Book>. React, Express and gitHub are on <Angla Yu's Couse on Udemy>. I am more than happy to learn React and Laravel."
     }
     const TextBoxStyle = {
          main : {
           paddingLeft : '50px',
          },
         description : {
          textAlign: "justify",     
         }
     }
     const BoxStyle = {
          main : {
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
          },
     }
     const progress = {
          react : {
               percent : 80,
               color : "#61dafb"
          },
          // php : {
          //      percent : 70,
          //      color : "#8892bf"
          // },
          laravel : {
               percent : 70,
               color : "#f16529"
          },
          express : {
               percent : 40,
               color : "#555555"
          },
          bootstrap : {
               percent : 85,
               color : "#7952b3"
          },
          github : {
               percent : 60,
               color : "#4078c0"
          },
     }
     const contacts = {
          Phone : {
               info : '+959683407873',
               icon : <FaPhone />,
               color : '#007bff'
          },
          Facebook : {
               info : 'https://www.facebook.com/bhone.thit.7',
               icon : <FaFacebook />,
               color : '#3b5998'
          },
          Messenger : {
               info : 'https://m.me/bhone.thit.7',
               icon : <FaFacebookMessenger />,
               color : '#00b2ff'
          },
          Telegram : {
               info : 'https://t.me/bhonethik3171',
               icon : <FaTelegram />,
               color : '#0088cc'
          },
          Github : {
               info : 'https://github.com/firstlast3171',
               icon : <FaGithub  />,
               color : '#333'
          },
     }

     const project = [
          {
               image : 'test.jpg',
               link : '#'
          },       
          {
               image : 'test.jpg',
               link : '#'
          },
          {
               image : 'test.jpg',
               link : '#'
          },       
          {
               image : 'test.jpg',
               link : '#'
          },
          {
               image : 'test.jpg',
               link : '#'
          },       
          {
               image : 'test.jpg',
               link : '#'
          },

     ]

     return ( 
          <>
          <Header />
          <div className="container">

      
          <div data-aos="zoom-out" data-aos-duration="1000">
          <MainCard image={"profile.jpg"} justify="reverse" profile={profile} TextBoxStyle={TextBoxStyle} BoxStyle={BoxStyle} />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
          <MainCard progress={progress} justify="row" profile={aboutProgress} TextBoxStyle={TextBoxStyle}  />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
          <Project project={project} />
          </div>
          <div>
          <CustomContact contacts={contacts} />
          </div>

          </div>
          <Footer />

          </>
      );
}

export default Home;