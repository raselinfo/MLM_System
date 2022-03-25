import React from 'react';
import './Hfeatures.css'
import hf from '../../../Image/Banner/hf.jpeg'

const componentName = () => {
    return (
        <div>
            <div className='h-fe'>
                <div className='container'>
                    <div className='hf-flex'>
                        <div className='hf-ib'>
                            <img className='hf-i' src={hf} alt='' />
                        </div>
                        <div className='hf-info'>
                            <h4 className='hf-h4'>Salient Features of MLM</h4>
                            <p className='hf-p mt-4'>User Friendly, reliable and easy to operate fully based on Web2.0 Standards.</p>
                            <p className='hf-p'>Auto SMS Sending Facility after Registration, Payouts, Awards, Rewards.</p>
                            <p className='hf-p'>Fully Organized member and administration section / Module.</p>
                            <p className='hf-p'>Cheque printing software integration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;