import React from 'react'
import HeroImage from '../../assets/Hero.png';
import { SlideUp } from '../../utility/animation';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section>
        <div className='bg-primary rounded-3xl container grid grid-cols-1 
        md:grid-cols-2 gap-6 min-h-[650px]'>
            {/*Text sec*/}
            <div className='flex flex-col justify-center gap-4 xl:pr-40'>
            <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left'>

          
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial" 
              className="text-5xl font-bold text-grisTxt"
              >
              Industrial Air Quality Monitoring System
              </motion.h1>

              <motion.p
  variants={SlideUp(0.4)}
  whileInView="animate"
  initial="initial"
  className="text-lg text-secondaryGris"
>
  An innovative solution designed to enhance safety in industrial environments
  by monitoring air quality and detecting harmful gas levels.
  This system helps prevent fires and gas leaks, providing real-time alerts to ensure a 
  secure working environment for employees and protecting valuable assets.
</motion.p>

{/* Image section */}
<motion.div
  variants={SlideUp(0.6)}
  whileInView={{ opacity: 1, scale: 1 }}
  initial="initial"
  transition={{ duration: 0.5, delay: 0.6 }}
  className="bg-rose text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg"
>
  <button>Learn More</button>
</motion.div>

            </div>
            </div>
            {/*img sec*/}
            <motion.div  initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
                <img src={HeroImage} alt=''></img>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero