import React from 'react';
import bgImg from '../../assets/images/appointment.png';

const ConnectUs = () => {
    return (
        <section style={{
            background: `url(${bgImg})`,
            backgroundSize: 'cover'
        }} 
         className="hero min-h-screen">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    
                                    <input type="text" placeholder="Email Address" className="input input-bordered" />
                                    <input type="text" placeholder="Subject" className="input input-bordered" />
                                    <input type="text-area" name="" id="" />
                                    <input type="text" placeholder="Subject" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default ConnectUs;