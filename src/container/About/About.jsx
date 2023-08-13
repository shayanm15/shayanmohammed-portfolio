import React from 'react';
import {motion} from 'framer-motion'
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';

const About = () => {
  const abouts = [
    {title: 'Front-End Developer', description: 'I dedicate myself to developing user-friendly, accessible, and stylish user interfaces to provide an accessible, user-friendly experience. My technical strengths in HTML, CSS, and JavaScript allow me to craft intuitive and interactive user interfaces that captivate users. My dedication to clean code, user-centric design, and continuous learning sets me apart as a proficient front-end developer.', imgUrl: images.frontend},
    {title: 'Back-End Developer', description: 'I have strong skills in implementing web applications and services. My proficiency in programming, combined with my in-depth knowledge of databases and server-side technologies, enables me to craft efficient back-end systems. I enjoy designing and optimizing database schemas, developing intuitive APIs, and ensuring the performance and success of applications.', imgUrl: images.backend},
    {title: 'Data Developer', description: 'I am a competent SQL and data developer, as my expertise in SQL and database management allows me to efficiently design tables, code queries, and optimize databases, ensuring seamless data retrieval and manipulation. I am well-versed in changing raw data into significant and actionable information. Overall, I am a valuable asset in data-centric projects.', imgUrl: images.datadev},
    {title: 'UI/UX Designer', description: 'I am a fluent UI/UX designer. I like to compose intuitively enthralling digital experiences. I enjoy solving challenging concepts into elegant and user-centered designs. I am well-versed in design tools and methodologies, allowing me to develop seamless user flows, stunning interfaces, and interactive prototypes. Thus, I always produce solutions that go above and beyond user expectations.', imgUrl: images.uiux},
  ]
  return (
    <>
      <h2 className='head-text'>I'm an aspiring <span>Software Engineer</span> <br/> who aims to provide the <span>Best User Experience</span></h2>
      <div id='about' className='app__profiles'>
        <motion.div
           whileInView={{opacity: 1}}
          //  whileHover={{scale: 1.1}}
           transition={{duration: 0.5, type: 'tween'}}
           className='about-me-container'
        >
          <h2>About Me</h2>
          <p className='about-me-p'>
          Hi! I'm Shayan Mohammed, a 22-year-old passionate about collaboration, creativity, and reliability.  
          I possess exceptional problem-solving skills since I am dedicated to satisfying people's needs and wants. 
          Beyond my studies/work, you'll find me outdoors, engaging in sports like volleyball, basketball, and soccer with my friends. 
          I enjoy communicating since I’m open-minded, drawn to diverse perspectives and endless possibilities. My dedication to personal 
          growth and skill development is persistent. I thrive in academic arenas like Mathematics, Chemistry, Physics, and Computer Science, 
          where I've strengthened my problem-solving skill, a vital attribute for making important decisions. I am patient, stress-tolerant, empathic, 
          and an attentive listener, as I excel in verbal communication, which helps when guiding and supporting others. I approach every task with 
          unwavering diligence, dependability, and a contagious enthusiasm that fuels my dedication to delivering outstanding results. Thus, possessing 
          my skills, I eagerly seek full-time opportunities within the tech realm. I desire to develop new skills, engineer innovative systems, and 
          gain experience that shapes me into an exceptional aspiring Software Engineer.
          </p>
        </motion.div>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

// export default AppWrap(About, 'about', 'app__whitebg')

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')