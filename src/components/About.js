import React from 'react';

import Skills from './skills'
// import { Dimensions } from 'react-native'

export default function About() {
    const about=`Welcome to my profile! I'm Vaishali Thakur, a dedicated and passionate student currently pursuing a dual degree in Computer Science and Engineering at NIT Hamirpur. I am currently in my second year of study, and I am proud to maintain a CGPA of 9.07.

    With a focus on front-end development. On the technical side, my proficiency in ReactJS allows me to create visually appealing and user-friendly interfaces that leave a lasting impact. I am committed to staying up-to-date with the latest industry trends and best practices, continuously expanding my skill set to deliver cutting-edge solutions.
    
 I have excelled in sports, earning regional recognition in Kho-Kho, which has not only enhanced my physical abilities but also taught me valuable lessons in teamwork and perseverance. Moreover, I have demonstrated my strong communication and critical thinking skills by securing a regional accolade in a debate competition.
    
    Beyond my personal achievements, I strongly believe in giving back to society. As an active participant in the National Service Scheme (NSS) and the Scout and Guide programs, I have actively contributed to various community service initiatives. These experiences have instilled in me a sense of responsibility, empathy, and the importance of making a positive impact on the lives of others.
    
    For the past two years, I have been an integral part of SRIJAN, our esteemed annual magazine. As a writer for SRIJAN, I have had the opportunity to channel my creativity and connect with readers through my written works. This experience has further enhanced my communication and storytelling abilities.
    
    Thank you for visiting my profile, and feel free to explore my portfolio and get in touch for collaboration opportunities.`
    
    


return(
    <>
        <section id='about' className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2 >About</h2>
                </div>
                
                
                    <img  src="https://tripur3121.github.io/Tripur/assets/img/giphy.webp" className='img-fluid fadeInRight animated '></img>
                
                    <div class="about-text">

                    <p class="fst-italic fadeInLeft animated ">
                       {about}
                    </p>
                    </div>
                    
             <Skills/> 
                
                </div>
            
        </section>
    
    </>
)

}