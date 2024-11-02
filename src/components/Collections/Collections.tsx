import { Fragment } from "react"
import DefaultProduct from "../Product/DefaultProduct"
import { Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from "swiper/modules";

const Collections = () => {
  return (
    <Fragment>
      <div className="pt-10 mb-100 flex justify-center items-center">
        <div className="content">
          <h1 className="text-2xl text-center">Check Out Our Collections</h1>
        </div>
      </div>
      <div className="products">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
        >
          <SwiperSlide>
            <DefaultProduct />
          </SwiperSlide>
          <SwiperSlide>
            <DefaultProduct />
          </SwiperSlide>
          <SwiperSlide>
            <DefaultProduct />
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  )
}

export default Collections
