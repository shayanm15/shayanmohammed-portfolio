import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div style={{cursor: 'pointer'}}>
            <BsLinkedin onClick={() => window.open("https://www.linkedin.com/in/shayanmohammed", '_blank', "noreferrer")}/>
        </div>
        <div style={{cursor: 'pointer'}}>
            <BsGithub onClick={() => window.open("https://github.com/shayanm15", '_blank', "noreferrer")}/>
        </div>
    </div>
  )
}

export default SocialMedia