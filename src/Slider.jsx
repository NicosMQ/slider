import { Swiper, SwiperSlide } from "swiper/react";
import sliderOne from "../src/assets/images/etape-1.svg";
import sliderTwo from "../src/assets/images/etape-2.svg";
import sliderThree from "../src/assets/images/etape-3.svg";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="upText">
            <p id="how">Comment ça marche ?</p>
            <p className="number" id="how">
              &nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <div className="downTextImg">
            <img src={sliderOne} />
            <div className="downText">
              <p className="question">Vous avez besoin dun super héro ? </p>
              <p className="response">
                Que ça soit pour un anniversaire, un déménagement ou un cours
                particulier ! Notre site est fait pour ça !{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="upText">
            <p id="how">Comment ça marche ?</p>
            <p className="number2" id="how">
              &nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <div className="downTextImg">
            <img src={sliderTwo} />
            <div className="downText">
              <p className="question">Vous trouvez votre super-héro. </p>
              <p className="response">
                Vous pouvez réserver les services de vos super-héros en fonction
                de vos besoins !{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="upText">
            <p id="how">Comment ça marche ?</p>
            <p className="number3" id="how">
              &nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <div className="downTextImg">
            <img src={sliderThree} />
            <div className="downText">
              <p className="question">Vous profitez de votre super-héro. </p>
              <p className="response">
                Il ne vous reste quà passer du bon temps queqlque soit
                loccasion !{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
