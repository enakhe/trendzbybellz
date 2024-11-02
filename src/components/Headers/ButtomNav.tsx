import { Fragment } from "react"
import {
  BuildingStorefrontIcon,
  HomeIcon,
  StarIcon
} from "@heroicons/react/24/outline"


const ButtomNav = () => {
  return (
    <Fragment>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 shadow-lg z-50">
        <div className="flex justify-around py-2">
          {/* Home Button */}
          <button className="flex flex-col items-center text-gray-700 hover:text-black">
            <HomeIcon className="h-6 w-6 mb-1" />
            <span className="text-sm">Home</span>
          </button>

          {/* Shop Button */}
          <button className="flex flex-col items-center text-gray-700 hover:text-black">
            <BuildingStorefrontIcon className="h-6 w-6 mb-1" />
            <span className="text-sm">Shop</span>
          </button>

          {/* Wishlist Button */}
          <button className="flex flex-col items-center text-gray-700 hover:text-black">
            <StarIcon className="h-6 w-6 mb-1" />
            <span className="text-sm">Wishlist</span>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default ButtomNav
