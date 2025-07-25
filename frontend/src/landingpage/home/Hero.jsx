import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto mb-9 mt-8">
      <div className="h-[500px] w-96 flex justify-end">
        <img
          src="media/images/hero.jpg"
          className="w-full h-full  object-cover rounded-xl"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
