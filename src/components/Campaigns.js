import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Banners from 'api/banners.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Title from './ui/Title';

function NextBtn({ onClick, className }) {
  return (
    <button
      className={`text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevBtn({ onClick, className }) {
  return (
    <button
      className={`text-purple-700 absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaings() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: 'linear',

    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block px-2">
                <img
                  src={banner.image}
                  alt={banner.id}
                  className="rounded-lg"
                ></img>
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaings;
