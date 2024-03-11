import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Us
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              We, dummy company, situated at area, city, state, provide a wide
              range of dairy food items such as milk, buttermilk, cheese,
              butter, paneer, tofu, shrikhand, yoghurt, etc. Our aim is to meet
              the growing demands and source as many dairy products as possible
              from the local suppliers. We strive to avail only the best quality
              and highest customer satisfaction with our dedicated supply and
              unrivalled service. We only deal with the premium brands and make
              sure to avail them to our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
