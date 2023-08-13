import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Work.scss';


const Work = () => {
  // const [works, setWorks] = useState([]);
  // const [filterWork, setFilterWork] = useState([]);
  // const [activeFilter, setActiveFilter] = useState('All');
  // const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  // const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);

  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);

  //     if (item === 'All') {
  //       setFilterWork(works);
  //     } else {
  //       setFilterWork(works.filter((work) => work.tags.includes(item)));
  //     }
  //   }, 500);
  // };

  const works = [
    {name: 'AI News Reader/Fetcher Application', imgUrl: [images.newsAppPic1, images.newsAppPic2, images.newsAppPic3], title: 'AI News Reader/Fetcher Application' , description: 'This responsive application allows users to search and fetch the latest news, news by categories, news by terms/keywords, or news by sources, all through the help of vocal or text commands to artificial intelligence. For example, the user can say: “Give me the latest news”, thus returning custom preview cards of the articles and reading each title to the user. The user can also vocally or text commands ask the application to open a specific article link. I used JavaScript, React, NodeJs, material UI, Alan Ai Studio to program vocal commands, and NewsAPI to create API calls to fetch news article data.', projectLink: '', codeLink: '' },
    {name: 'Video Sharing Social Media App (YouTube Clone)', imgUrl: [images.videoAppPic1, images.videoAppPic2, images.videoAppPic3, images.videoAppPic4], title: 'Video Sharing Social Media App (YouTube Clone)' , description: 'This full-stack social media app replicates YouTube. Users can sign up or login or use a Google authentication account to watch videos from other users. Users can subscribe, like/dislike videos, comment on videos, and view trending, subscribed, or suggested videos. Also, logged-in users can upload their videos. Additionally, users can search for videos based on keywords of the video’s titles or tags. I created this application using React, NodeJS, Redux Toolkit, JWT Cookies, Firebase Storage, and MongoDB to develop my own API to handle all functionality, storing, and manipulating video/user data.', projectLink: '', codeLink: '' },
    {name: 'Estore Application', imgUrl: [images.estorePic1, images.estorePic2, images.estorePic3], title: 'Estore Application' , description: 'The Estore is a GUI project in Java that acts as a library storing information about media of books and electronics through user input or input within a text file. The media data inputted can be added and searched based on user-decided criteria such as name, productID, company, price, etc. Results of adding products or returned searched products are displayed in GUI’s message box to view data. Overall, the application allows users to develop their catalog of media products. This project expanded my knowledge of building GUI interfaces, utilizing data structures like HashMap, and incorporating OOP concepts like polymorphism, inheritance, and reading/writing into files.', projectLink: '', codeLink: '' },
    {name: 'GPX Parser', imgUrl: [images.gpxParserPic1, images.gpxParserPic2, images.gpxParserPic3], title: 'GPX Parser' , description: 'The GPX Parser is a programmed GPX application that parses an XML file consisting of data about waypoints, routes, and tracks. The parsed data is displayed in tables, showcasing the distances between points of interest, and coordinates for the given inputted waypoints, routes, and tracks. Additionally, users can create their custom waypoints and the routes/tracks within their waypoints. I used HTML, CSS, JavaScript, jQuery, and Node.js to develop the front end of the website. For the backend system, I used C to create functions and APIs that store and manipulate the data in the linked list. Additionally, I used SQL to store the data in tables and programmed queries for searching for data.', projectLink: '', codeLink: '' }
  ]
  return (
    <>
      <h2 className="head-text">My <span>Projects</span></h2>

      {/* <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div> */}

      <motion.div
        // animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}        
            key={work.name + index}
          >
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              {/* <img src={work.imgUrl} alt={work.name} /> */}

              <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} >
              {work.imgUrl.map((image, index) => (
                <div>
                    <img src={image} alt='project picture'/>
                </div>
                ))}
            </Carousel>

              {/* <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div> */}
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              {/* <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div> */}
            </div>
          </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);