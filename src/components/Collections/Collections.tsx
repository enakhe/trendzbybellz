import { Fragment } from "react"
import DefaultProduct from "../Product/DefaultProduct"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const Collections = () => {
  return (
    <Fragment>
      <div className="pt-10 mb-20">
        <div className="flex justify-center items-center">
          <div className="content">
            <h1 className="text-2xl text-center">Check Out Our Collections</h1>
          </div>
        </div>
        <div className="products p-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
            modules={[Pagination, Autoplay]}
            className="mySwiper mb-2"
          >
            <SwiperSlide className="w-full mb-5">
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
      </div>
    </Fragment>
  )
}

export default Collections
