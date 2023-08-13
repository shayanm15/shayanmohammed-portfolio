import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Tooltip } from 'react-tooltip'
import {images} from '../../constants';
import 'react-tooltip/dist/react-tooltip.css';

import './Skills.scss';

const Skills = () => {

  const skills = [
    {name:'HTML', icon: images.html, bgColor: 'rgb(237, 242, 248)'},
    {name:'CSS', icon: images.css, bgColor: 'rgb(237, 242, 248)'},
    {name:'JavaScript', icon: images.javascript, bgColor: 'rgb(237, 242, 248)'},
    {name:'NodeJS', icon: images.node, bgColor: 'rgb(237, 242, 248)'},
    {name:'React', icon: images.react, bgColor: 'rgb(237, 242, 248)'},
    {name:'React Redux', icon: images.redux, bgColor: 'rgb(237, 242, 248)'},
    {name:'TypeScript', icon: images.typescript, bgColor: 'rgb(237, 242, 248)'},
    {name:'API', icon: images.api, bgColor: 'rgb(237, 242, 248)'},
    {name:'SQL', icon: images.sql, bgColor: 'rgb(237, 242, 248)'},
    {name:'C', icon: images.c, bgColor: 'rgb(237, 242, 248)'},
    {name:'C#', icon: images.cSharp, bgColor: 'rgb(237, 242, 248)'},
    {name:'Java', icon: images.java, bgColor: 'rgb(237, 242, 248)'},
    {name:'Python', icon: images.python, bgColor: 'rgb(237, 242, 248)'},
    {name:'Git', icon: images.git, bgColor: 'rgb(237, 242, 248)'},
    {name:'Figma', icon: images.figma, bgColor: 'rgb(237, 242, 248)'}
  ]

  const experiences = [
    {year: '2021', works:[{name:'Full Stack Developer Co-op (Sept - Dec)', company: 'Kenna', desc:'Developed a New Transfer Order Page for BASF products client submissions, and a Thread Page allowing clients to add, edit, delete, and reply to comments. Also, handled, and moderated overnight data transfers.'}]},
    {year: '2022', works:[{name:'Full Stack Developer Co-op (May - Aug) ', company: 'Kenna', desc:'Provided refined solutions for QA items for Event Management Calendar and created a Payment Adjustment Tool for managing under and overpayments for different programs.'}]},
    {year: '2023', works:[{name:'Full Stack Developer Co-op (Jan - Aug) ', company: 'Kenna', desc:'Effectively handled QA ticket resolutions for Retail Connect and assisted in the creation and launch of the AgConnect Product Assurance application that allows growers to place orders for crops/fields by entering/saving retailers, problem products, crops, settlement amounts, area treated, and many more data fields.'}]}
  ]

  const brands = [
    {imgUrl: images.kenna, name: 'Kenna'}
  ]
  return (
    <>
      <h2 className='head-text'> <span>Skills</span> and <span>Experience</span></h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5}}
            className='app__skills-item app__flex'
            key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>          
    </>
  )
}

// export default Skills

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);