import React from 'react';
import img1 from '../../assets/nada.png';
import img2 from '../../assets/ines.png';
import img3 from '../../assets/nour.png';

const TestimonialsData = [
  {
    id: 1,
    name: "Nada Albouchi",
    text: "The air quality monitoring system has revolutionized our operations. We can now detect hazardous gas levels in real-time, ensuring a safer work environment for our team.",
    img: img1,
    delay: 0.2,
    location: "Beja, Tunisie",
  },
  {
    id: 2,
    name: "Ines Ben Moussa",
    text: "Since implementing this air sensor, we've significantly reduced our risk of gas leaks. The immediate alerts allow us to take action before problems escalate.",
    img: img2, 
    delay: 0.4,
    location: "Tunis, Tunisie",
  },
  {
    id: 3,
    name: "Nour Louhichi",
    text: "The user-friendly interface and real-time monitoring capabilities have made it easy to stay on top of air quality. This technology is a game-changer for industrial safety.",
    img: img3, 
    delay: 0.6,
    location: "Bizerte, Tunisie",
  },
];

function Testimonial() {
  return (
    <div className='py-14 mb-10'>
      <div className='container mx-auto'>
        {/* Header section */}
        <div className='space-y-4 p-6 text-center max-w-[1000px] mx-auto mb-10'>
          <h1 className='uppercase font-semibold text-ahmer text-600'>
            Our Testimonials
          </h1>
          <p className='text-secondaryGris font-semibold text-3xl'>
            What our customers have to say about us
          </p>
        </div>
        {/* Testimonials section */}
        <div className='flex justify-center gap-8 flex-wrap'>
          {TestimonialsData.map((item) => {
            return (
              <div key={item.id} className='flex flex-col gap-4 p-8 shadow rounded-xl bg-primary max-w-[300px] flex-1'>
                {/* upper part */}
                <div className='flex justify-start items-center gap-5'>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                    <img src={item.img} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div>
                    <p className='text-xl font-semibold text-black/80'>{item.name}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
                {/* lower part */}
                <div className="py-6 space-y-4">
                  <p className='text-sm text-gray-500'>{item.text}</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
