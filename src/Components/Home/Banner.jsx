import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Banner = () => {
    return (
        <div className="w-full px-4 md:px-12 lg:px-20 py-3">
            <Swiper
                pagination={{ dynamicBullets: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="rounded-2xl overflow-hidden"
            >
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[650px] w-full">
                        <img
                            src="https://i.ibb.co.com/LdV02qQt/8-1-1024x731.jpg"
                            alt="Travel Banner"
                            className="w-full h-full  rounded-2xl"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative h-[300px] md:h-[650px] w-full">
                        <img
                            src="https://i.ibb.co.com/YFMwF0xQ/17.jpg"
                            alt="Travel Banner"
                            className="w-full h-full  rounded-2xl"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative h-[300px] md:h-[650px] w-full">
                        <img
                            src="https://i.ibb.co.com/1GpN2MBN/travel-concept-with-landmarks-23-2149153256.jpg"
                            alt="Travel Banner"
                            className="w-full h-full  rounded-2xl"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative h-[300px] md:h-[650px] w-full">
                        <img
                            src="https://i.ibb.co.com/JwykS379/motivational-inspiration-quote-travel-ultimate-inspiration-motivational-inspiration-quote-travel-ult.webp"
                            alt="Travel Banner"
                            className="w-full h-full  rounded-2xl"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
