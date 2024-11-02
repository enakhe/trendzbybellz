import { Fragment } from "react"
import DefaultProduct from "../Product/DefaultProduct"
import { Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import {Pagination} from "swiper/modules";

const Collections = () => {
  return (
    <Fragment>
      <div className="pt-10 mb-100 flex justify-center items-center">
        <div className="content">
          <h1 className="text-2xl text-center">Check Out Our Collections</h1>
        </div>
      </div>
      <div className="products p-5">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
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
          modules={[Pagination]}
          className="mySwiper"
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
