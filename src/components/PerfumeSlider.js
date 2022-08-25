import React from "react";
import Slider from "react-slick";
import "../styles/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../styles/slick-theme.css"

export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="slide-perfume" src="/images/perfume1.jpg" alt="메종 프란시스 커정 아쿠아 셀레스티아 오 드 뚜왈렛" />
        <span className="slide-title">메종 프란시스 커정 아쿠아 셀레스티아 오 드 뚜왈렛</span>
        <span className="slide-text">빙하얼음을 분쇄한 듯, 청량함을 담아 지적이고 깨끗한 향기</span>
      </div>
      <div>
        <img className="slide-perfume" src="/images/perfume2.jpg" alt="조말론 다크 앰버 앤 진저 릴리 코롱 인텐스" />
        <span className="slide-title">조말론 다크 앰버 앤 진저 릴리 코롱 인텐스</span>
        <span className="slide-text">성별 무관, 시간을 느리게 흐르게 만드는 몽환적인 달콤함</span>
      </div>
      <div>
        <img className="slide-perfume" src="/images/perfume3.jpg" alt="딥디크 오듀엘르 오 드 퍼퓸 75ml" />
        <span className="slide-title">딥디크 오듀엘르 오 드 퍼퓸 75ml</span>
        <span className="slide-text">따뜻한 햇살이 내려앉는 마당의 흙과 나무 그리고 바닐라가 어우러진 아늑한 향기</span>
      </div>
      <div>
        <img className="slide-perfume" src="/images/perfume4.jpg" alt="킬리안 스트레이트 투헤븐 화이트크리스탈 오 드 퍼퓸 50ml" />
        <span className="slide-title">킬리안 스트레이트 투헤븐 화이트크리스탈 오 드 퍼퓸 50ml</span>
        <span className="slide-text">풍부한 부드러움과 깊이감 가득한 오우드 나무를 닮아 분위기를 압도하는 사내의 향기</span>
      </div>
      <div>
        <img className="slide-perfume" src="/images/perfume5.jpg" alt="르페르소나 LP04 골든 젬 오 드 퍼퓸" />
        <span className="slide-title">르페르소나 LP04 골든 젬 오 드 퍼퓸</span>
        <span className="slide-text">잊을 수 없는 무도회의 한 장면, 달콤한 바닐라와 무화과가 깊은 인상을 남기고 유유히 사라지는 순간의 향기</span>
      </div>
    </Slider>
  );
}