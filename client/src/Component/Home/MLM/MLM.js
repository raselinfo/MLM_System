import React from 'react';
import './MLM.css'
import mlm from '../../../Image/Banner/mlm.jpg'



const componentName = () => {
    return (
        <div>
            <div className='mlm container'>
                <div className='mlm-flex'>
                    <div className='mlm-info'>
                        <h2 className='mlm-h2'>What is MLM? </h2>
                        <p className='mlm-p'>Multi-level marketing (MLM) is a marketing strategy in which the sales force is compensated not only for sales they personally generate, but also for the sales of the other salespeople that they recruit. This recruited sales force is referred to as the participant’s “downline”, and can provide multiple levels of compensation. Other terms for MLM include pyramid selling, network marketing, and referral marketing.</p>
                    </div>
                    <div className='mlm-i'>
                        <img className='mlm-img' src={mlm} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;