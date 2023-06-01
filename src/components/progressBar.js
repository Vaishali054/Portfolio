import React from 'react';

const ProgressBar = (props) => {
    const value=props.value;
    const skill=props.skillName;
  return (
    <>
    <div className='skills'>
                    
                           <h6 class="progress-element">{skill}</h6>
                           <h6  class="progress-value">{value}%</h6>
                    
                   <div className="progressBar">
                  <div className="progress animated fadeInRight" style={{ width: `${value}%` }}></div>
                  </div>
    </div>
    </>
  );
};

export default ProgressBar;
