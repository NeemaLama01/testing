import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import React from 'react';

const App = () => {
  const titleAnimation = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.2,
      }
    }
  }

  const titleAnimationChildren = {
    hidden:{
      y:-100
    },
    show:{
      y:0,
      transition:{
        duration:0.3,
        ease:'easeInOut'
      }
    }
  }

  const imgAnimation = {
    hidden:{
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
    },
    show:{
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition:{
        delay:2.2,
        duration:0.5,
        ease:'easeInOut'
      }
    }
  }

  const explainAnimation = {
    hidden:{
      clipPath: "polygon(0 0, 100% 0,100% 0, 0 0)"
    },
    show:{
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition:{
        delay:2.3,
        duration:0.5,
        ease:'easeInOut'
      }
    }
  }
  
  const opaqueAnimation = {
    hidden:{
      clipPath: "polygon(0 0, 100% 0,100% 0, 0 0)"
    },
    show:{
      opacity: 0.2,
      zIndex:-1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition:{
        delay:2.3,
        duration:0.5,
        ease:'easeInOut'
      }
    }
  }

  const organicAnimation = {
    hidden:{
      scale:0,
      zIndex:1
    },
    show:{
      scale:1,
      transition:{
        delay:3.2,
        duration:0.5,
        ease:'easeInOut'
      }
    }
  }

  return (
    <div className="h-screen px-12 relative overflow-hidden">
      {/* Navbar */}
      <Navbar />
      
      <div className="absolute -top-10 -left-12 w-[300px] h-[300px] bg-[#aed334] blur-[120px]"/>
      <div className="absolute bottom-10 -right-12 w-[300px] h-[300px] bg-[#aed334] blur-[100px]"/>
     

      <div> 
        <motion.img src="/images/organic.png" alt="art" className="w-[100px] absolute top-[50px] right-[215px] animate-spin-slow" variants={organicAnimation} initial="hidden" animate="show"/>
      </div>
      <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
        <div className="absolute left-[200px] top-[50px] h-[100px] flex items-center overflow-hidden"> 
          <motion.div className="relative flex text-4xl font-bold text-[(72,60,70)] drop-shadow-lg z-50 " variants={titleAnimation} initial="hidden" animate="show"> 
          {Array.from("Savoring Freshness!").map((letter,idx)=>(
              <motion.span key={idx} variants={titleAnimationChildren} style={{ marginRight: letter === ' ' ? '1rem' : 0 }}>{letter}</motion.span>
            ))}
          </motion.div>
        </div>
        {/* Add the j.png image at the right side */}
        <motion.img src="/images/bg_remove.png" alt="Your Image" className="object-cover absolute right-24 top-0 h-[550px]" variants={imgAnimation} initial="hidden" animate="show" />
        
        <motion.div className="bg-[#aed334] p-10 w-[1020px] h-[480px] absolute bottom-[100px] left-[200px] drop-shadow-lg z-50 rounded mt-4" variants={opaqueAnimation} initial="hidden" animate="show">
        </motion.div>
        


        {/* Shop Now Button */}
        <motion.button 
  className="bg-white hover:bg-green-300 text-[(72,60,70)] font-bold py-2 px-4 rounded mt-4 absolute bottom-[150px] left-[290px] z-50" 
  variants={explainAnimation} 
  initial="hidden" 
  animate="show"
  style={{ backgroundColor: 'orange' }} // Set background color before hovering
>
  Shop Now
</motion.button>


      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
