import Link from "next/link";
import { useRouter } from "next/router";
import React, {useEffect} from "react";
import Transition from "../transitions";
import Lottie from "lottie-react";
import lottieAnimation from "/public/under-construction.json"

const steps = [
  { link: '/book-a-repair', name: "Detail section" },
  { link: "/book-a-repair/address", name: "Address Details" },
  { link: "/book-a-repair/review", name: "Review Details" }
]

export default function BookRepairLayout({ children }) {
  const router = useRouter()
  const activeIndex = steps.indexOf
  return (
    <Transition>
      <div className="container py-8">
        <div className="grid grid-cols-12 gap-6 place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="brand-heading text-center lg:text-left mb-6">page under <span>construction!</span></h1>
            <p className='text-secondary text-xl mb-6 text-center lg:text-left'>For Book A Repair Download Our App</p>
            <a href="https://play.google.com/store/apps/details?id=com.app.devicecure">
              <img src="/googleplay.png" alt="" className='max-w-[300px] w-4/5 mx-auto lg:mx-0' />
            </a>
            <div className="flex justify-center lg:justify-start">
            <Link href="/">
              <button className="brand-btn mt-6">Go Back</button>
            </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Lottie animationData={lottieAnimation} loop={true}  width={"100%"}/>
          </div>
        </div>
      </div>
      
      {/* <div className="book_a_repair_bg">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 w-full py-12">
            <a href="#" className="col-span-12">
              <img src="/logo_full_land.png" alt="brand_logo " className='block md:hidden w-60 mx-auto mb-6' />
            </a>
            <div className="col-span-12 xl:col-span-3 lg:col-span-4 white-glass-repair pt-6 pb-2 lg:py-16 px-6 rounded-xl flex lg:flex-col  items-center justify-between">
              <Link href="/" className="hidden  lg:block"><img src="/logo_full_land.png" alt="" className="w-52 cursor-pointer" /></Link>

              <div className="flex items-center mb-4">
                <div className="step Complete"><p>1</p></div>
                <p className="hidden lg:block">Details Section</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="step active"><p>2</p></div>
                <p className="hidden lg:block">Address Details</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="step"><p>3</p></div>
                <p className="hidden lg:block">Review Details</p>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-9 lg:col-span-8 white-glass-repair py-6 md:py-16 px-6 rounded-xl stop_at_point">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div> */}
    </Transition>
  );
}
