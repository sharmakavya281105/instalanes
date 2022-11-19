import React from "react";
import Banner from "./Banner";
import Form from "./Form";

export default function HeroSection() {
  return (
    <section className="hero mt-4 lg:mt-8">
      <div className="container">
        <div className="grid grid-cols-3 lg:grid-rows-3 lg:grid-flow-col gap-6 item-center">
          <div className="lg:row-span-3 hidden lg:block lg:col-span-1">
            <Form />
          </div>
          <div className="col-span-3 lg:col-span-2 bannersection">
            <h1 className="brand-heading text-center md:text-left">
              Get repaired your mobile at your <span>doorstep</span>
            </h1>
          </div>
          <div className="lg:row-span-2 col-span-3 lg:col-span-2">
            <Banner />
          </div>
        </div>
      </div>
    </section>
  );
}
