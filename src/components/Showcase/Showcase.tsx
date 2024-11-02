import { Fragment } from "react"
import DefaultButton from "../Buttons/DefaultButton"
import Marquee from "react-fast-marquee"

import showcaseImg from "../../assets/showvcase-main.jpg"
import customizedBracelet from "../../assets/customized-bracelet.jpg";

const Showcase = () => {
  return (
    <Fragment>
      <div className="pt-20">
        <img alt="" src={showcaseImg} className="h-full w-full" />
        <div className="showcase-message flex justify-center items-center my-5">
          <div className="px-4 my-4">
            <h1 className="text-center text-3xl font-bold">
              Leather{" "}
              <span className="bg-[#9B0A65] text-white px-1">Modern</span>{" "}
              Products
            </h1>
            <p className="text-center my-2">
              Unleash Your Bold Side – Premium Leather Crafted to Last, Styled
              to Stand Out. Shop Now for Timeless Quality and Unmatched Comfort.
            </p>
            <p className="text-center my-2">
              Own the Look. Elevate Your Style with Premium Leather – Shop Now.
            </p>
            <div className="flex justify-center items-center">
              <div className="grid gap-4 grid-cols-2">
                <DefaultButton
                  type="button"
                  bgColor="#9B0A65"
                  textColor="#ffffff"
                  hoverColor="#D01B59"
                  isDisabled={true}
                  text="Shop Now"
                />

                <DefaultButton
                  type="button"
                  bgColor="#9B0A65"
                  textColor="#ffffff"
                  hoverColor="#f9aofb"
                  isDisabled={false}
                  text="View All"
                />
              </div>
            </div>
          </div>
        </div>
        <Marquee className="bg-[#000000] text-white text-xl py-3">
          <span className="mx-10">Premium Belts</span>
          <span className="mx-10">Luxury Wallets</span>
          <span className="mx-10">Stylish Keyholders</span>
          <span className="mx-10">Durable Bags</span>
          <span className="mx-10">Quality Leather</span>
          <span className="mx-10">Elegant Accessories</span>
          <span className="mx-10">Timeless Style</span>
        </Marquee>
        <img alt="" src={customizedBracelet} className="h-full w-full" />
        <div className="showcase-message flex bg-[#232f2d] justify-center items-center py-5">
          <div className="px-4 my-4">
            <h1 className="text-center text-white text-3xl font-bold">
              Customized Bracelets
            </h1>
            <p className="text-center text-white my-2">
              Discover our exclusive range of customized bracelets, designed to
              reflect your unique style and personality. Crafted with premium
              leather and attention to detail, each piece is tailored to fit you
              perfectly
            </p>
            <div className="flex justify-center items-center">
              <div className="grid gap-4 grid-cols-2">
                <DefaultButton
                  type="button"
                  bgColor="#ffffff"
                  textColor="#000000"
                  hoverColor="#f9aofb"
                  isDisabled={true}
                  text="Shop Now"
                />

                <DefaultButton
                  type="button"
                  bgColor="#ffffff"
                  textColor="#000000"
                  hoverColor="#f9aofb"
                  isDisabled={false}
                  text="View All"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Showcase
