import React from "react";

const Banner = () => {
  return (
    <div className="mt-5 ">
      <div className="hero bg-base-200 rounded-xl ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="mockup-phone border-primary">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">MobileHunt</div>
            </div>
          </div>
          <div>
          
            <h1 className="text-5xl font-bold">
              Get/Save money for your used smartphone
            </h1>
            <p className="py-6">
            <span className="font-bold">Buying/Selling</span> your smartphone has just become… handy.
              <span className="font-bold">MobileHunt</span> gets your smartphone
              off your hands pronto and at top dollar!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
