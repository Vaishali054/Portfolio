import React from 'react';
import ProgressBar from './progressBar';





export default function Skills(){
    const skill1="HTML";
    const skill2="CSS";
    const skill3="JS";
    const skill4="REACT";
   const progressValueHTML=70;
   const progressValueCSS=60;
   const progressValueJS=40;
   const progressValueREACT=25;
   

    return(
        <>
          <hr/>
          <div className='container'>
                <div className='section-title ' style={{paddingBottom: 50}}>
                    <h2 >Skills</h2>
                </div>
                
                
                 <div className="animated fadeInUp">
                    <ProgressBar value={progressValueHTML} skillName={skill1} />
                    <ProgressBar value={progressValueCSS} skillName={skill2} />
                    <ProgressBar skillName={skill3} value={progressValueJS} ></ProgressBar>
                    <ProgressBar value={progressValueREACT} skillName={skill4} />
                </div>   
           </div>  
           <hr/>
           <div className='container'>
                <div id="resume" className='section-title'>
                    <h2>Resume</h2>
                </div>
                <div className='text-center'>
                    <a href="https://flowcv.com/resume/k8er42o65s"  target="_blank"className='animated-button1'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                          Resume
                    </a>
                </div>
            </div>   
                  
                    
                
                
                
                
                
                


                
                 
                    
                
                

        </>
    )
}