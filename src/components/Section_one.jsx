import React from 'react';
import '../components/css/Section_one.css';
import Image from '../assets/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg';




const ComponentName = () => {
    return (
        <div className="section-one">
            <div className="section-one-l">
            <img src={Image} alt="Description" />
            </div>
            <div className="section-one-r">
                <h1>Use the best resume maker as your guide!</h1>
                <br/>
                <p>Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, imporved by data, trusted by millions of professionals.</p>
                <div className="btn-group">
                    <button className="btn btn-primary">CREATE NEW RESUME</button>
                    <button className="btn btn-secondary">WATCH VIDEO</button>
                </div>
            </div>
        </div>
    );
};

export default ComponentName;
