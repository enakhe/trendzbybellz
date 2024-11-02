import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"

import productImg from "../../assets/product1.jpg";


const DefaultProduct = () => {
  return (
    <Fragment>
      <div className="w-full mx-5 bg-white shadow-sm rounded-md overflow-hidden pb-20 my-5">
        <div className="relative">
          <img
            src={productImg}
            alt="Check-In Luggage"
            className="w-full h-64 object-cover"
          />
          <button
            className="absolute top-3 right-3 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            aria-label="Add to cart"
          >
            <ShoppingBagIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-md font-medium text-gray-900">
            Customized Belts
          </h3>
          <p className="text-md font-semibold text-gray-800 mt-2">
            &#8358; 2,780.00
          </p>

          <div className="flex mt-2">
            <span className="w-5 h-5 rounded-full bg-black border border-gray-300 mr-2"></span>
            <span className="w-5 h-5 rounded-full bg-gray-800 border border-gray-300 mr-2"></span>
            <span className="w-5 h-5 rounded-full bg-brown-600 border border-gray-300"></span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default DefaultProduct
