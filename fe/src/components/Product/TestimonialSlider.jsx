import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

const testimonials = [
  {
    name: "Đoàn Trang",
    position: "Kinh doanh",
    title: "Đơn vị thiết kế web uy tín với nhiều giải thưởng",
    content:
      "Web43 tự hào là một trong những đơn vị hàng đầu trong lĩnh vực thiết kế website tại Việt Nam. Với hơn 22 năm kinh nghiệm...",
    avatar: "/img/product/group11821.png",
  },
  {
    name: "Nguyễn Minh",
    position: "Marketing",
    title: "Thiết kế ấn tượng, tốc độ triển khai nhanh",
    content:
      "Web43 không chỉ mang đến giao diện đẹp mà còn tối ưu trải nghiệm người dùng. Tôi thực sự ấn tượng với tốc độ triển khai.",
    avatar: "/img/product/group11821.png",
  },
  {
    name: "Lê Thảo",
    position: "Doanh nhân",
    title: "Dịch vụ toàn diện và chuyên nghiệp",
    content:
      "Tôi đã hợp tác với nhiều đơn vị, nhưng Web43 là nơi mang đến dịch vụ toàn diện nhất. Từ thiết kế, SEO đến hỗ trợ kỹ thuật.",
    avatar: "/img/product/group11821.png",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = testimonials.length;

  const handleSlideChange = (direction) => {
    if (animating) return;

    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + direction + total) % total);
      setAnimating(false);
    }, 300);
  };

  const { name, position, content, title, avatar } = testimonials[index];

  return (
    <section className="bg-white py-16 px-4 flex justify-center items-center mb-16">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Avatar */}
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-md flex items-center justify-center shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Testimonial Content */}
        <div
          className={clsx(
            "relative bg-white rounded-2xl p-8 shadow-xl w-full max-w-xl transition-all duration-300 transform",
            animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          )}
        >
          {/* Decorative Quote */}
          <div className="text-8xl text-yellow-300 absolute top-0 left-0 opacity-20 -translate-x-4 -translate-y-4 font-serif select-none">
            ““
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-green-800 mb-3 relative z-10">
            {title}
          </h3>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
            {content}
          </p>

          {/* Author */}
          <p className="text-sm text-gray-600 relative z-10">
            <strong className="text-base text-gray-800">{name}</strong> |{" "}
            <span className="text-gray-500">{position}</span>
          </p>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex gap-3 z-20">
            <button
              onClick={() => handleSlideChange(-1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 transition duration-200 shadow"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => handleSlideChange(1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 transition duration-200 shadow"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
