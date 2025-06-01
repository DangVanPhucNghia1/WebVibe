import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Section3 = ({onScrollToSection4}) => {
  const stats = [
    { label: "Web bán hàng", percent: 41 },
    { label: "Web giới thiệu doanh nghiệp", percent: 27 },
    { label: "Web nội thất", percent: 20 },
    { label: "Web bất động sản", percent: 12 },
  ];

  const projects = [
    {
      image: "/img/motor.png",
      video: "/video/kinpizza.mp4",
      title: "Website Streetwear",
      category: "Bán hàng",
      link: "https://antmotor.vn/",
    },
    {
      image: "/img/wisdom_robotic.png",
      video: "/video/wisdom.mp4",
      title: "Website Mỹ Phẩm",
      category: "Làm đẹp",
      link: "https://wisdomrobotics.org/",
    },
    {
      image: "/img/homepage/website_bg_pizza.png",
      video: "/video/construction.mp4",
      title: "Website Quảng Bá",
      category: "Quảng Bá",
      link: "https://wisdomconstruction.wisdombrain.org/",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // iPad & smaller
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Stats Section */}
      <div className="relative rounded-2xl p-6 lg:p-8 text-white overflow-hidden max-w-full lg:col-span-3">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a6c] to-[#b21f1f] opacity-95" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                #67AE6E,   /* Light green at the top */
                #6cb28e,   /* Slightly darker green */
                #3a7f6a,   /* Darker green */
                #4a6e5d,   /* Milder dark green */
                #2a4136    /* Subtle dark green at the bottom */
              ),
              radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.08) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "100% 100%, 20px 20px",
            opacity: 1,
          }}

        />
        <div className="relative z-10">
          <h2 className="text-lg font-semibold uppercase">
            TOP WEBSITE <br />
            <span className="text-2xl font-extrabold">ĐƯỢC QUAN TÂM NHẤT</span> <br />
            TRONG THÁNG
          </h2>
          <div className="mt-6 space-y-5">
            {stats.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <div className="flex items-center gap-2 w-48">
                    <Link to="/contact" >
                      <span>{item.label}</span>
                    </Link>
                  </div>
                  <span>{item.percent}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={onScrollToSection4} className="mt-6 w-full bg-white text-[#1a2a6c] font-semibold py-3 rounded-md hover:bg-gray-100 transition">
            Đăng ký ngay
          </button>
        </div>
      </div>

      {/* Project Slider Section */}
      <div className="relative z-10 px-6  rounded-2xl max-w-full lg:col-span-7">
        <h3 className="text-[1.8rem] font-bold mb-4 text-[#67AE6E]">Dự Án Tiêu Biểu</h3>
        <p className="text-sm text-gray-600 mb-4">Click below to preview demo</p>
        <Slider {...sliderSettings}>
          {projects.map((project, i) => (
            <div key={i} className="px-2">
              <div className="block relative h-[400px] rounded-2xl overflow-hidden shadow-lg group bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:object-bottom transition-[object-position] duration-[10000ms] ease-in-out"
                />



                {/* Nút "View Demo" riêng biệt, không bao toàn thẻ */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <p className="text-sm uppercase tracking-wider">{project.category}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#67AE6E] text-white font-semibold px-4 py-2 rounded-lg shadow-md"
                  >
                    Xem Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section3;
