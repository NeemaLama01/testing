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
      <div className="absolute -top-12 -left-12 w-[300px] h-[300px] bg-[#ac7139] blur-[120px]"/>
      <div className="absolute bottom-0 -right-12 w-[300px] h-[300px] bg-[#749cb6] blur-[100px]"/>
      <div> 
        <motion.img src="/images/organic.png" alt="art" className="w-[100px] absolute top-[50px] right-[360px] animate-spin-slow" variants={organicAnimation} initial="hidden" animate="show"/>
      </div>
      <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
        <div className="absolute left-[200px] top-[200px] h-[100px] flex items-center overflow-hidden"> 
          <motion.div className="relative flex text-6xl font-bold text-[orange] drop-shadow-lg z-50" variants={titleAnimation} initial="hidden" animate="show"> 
            {Array.from("Farmtastic-Finds").map((letter,idx)=>(
              <motion.span key={idx} variants={titleAnimationChildren}>{letter}</motion.span>
            ))}
          </motion.div>
        </div>
        <div className="h-[500px] m-auto">
          <motion.img src="/images/j.png" alt="art" className="object-cover" variants={imgAnimation} initial="hidden" animate="show" />
        </div>
        <motion.div className="bg-[green] p-4 w-[300px] absolute bottom-[150px] right-[200px] drop-shadow-lg z-50" variants={explainAnimation} initial="hidden" animate="show">
          <p className="text-[#eaeaea] text-sm text-justify">
            THE MARKETPLACE APP FOR LOCAL FOOD & FARMS
            to buy homegrown produce, backyard chicken eggs, honey, plants, trees, garden supplies, and more.
          </p>
          {/* Shop Now Button */}
          <button className="bg-white hover:bg-green-300 text-green font-bold py-2 px-4 rounded mt-4">
            Shop Now
          </button>
        </motion.div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
