import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonials = () => {
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonials;