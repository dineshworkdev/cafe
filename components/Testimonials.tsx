/**
 * Testimonials Component
 * 
 * Customer testimonials carousel/slider.
 * Features:
 * - Swiper.js carousel for smooth sliding
 * - Navigation arrows for manual control
 * - Multiple testimonial cards with quotes
 * - Displays customer name and profession
 * - Responsive design
 */

// Swiper React components for carousel functionality
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS styles (required for carousel to work properly)
import "swiper/css";
import "swiper/css/navigation";

// Swiper modules - Navigation enables prev/next arrow buttons, Autoplay for auto-slide
import { Navigation, Autoplay } from "swiper/modules";

// React Icons - Quote icon for testimonials
import { IoMdQuote } from "react-icons/io";

// Cafe Retroo reputation data - Based on verified Google information
const testimonials = [
  {
    message:
      "Rated 4.8 out of 5 on Google — Cafe Retroo is one of Coimbatore's most loved cafés, backed by over 989 customer reviews.",
    name: "Cafe Retroo",
    profession: "Saibaba Colony, Coimbatore · 4.8 ★ on Google",
  },
  {
    message:
      "Find us at 2nd Floor, 191/3-4, Raja Annamalai Rd, Jawahar Nagar, Saibaba Colony, Coimbatore, Tamil Nadu 641011. Call us at 090809 90620.",
    name: "Visit Us",
    profession: "Open for dine-in · ₹200–₹400 per person",
  },
  {
    message:
      "From bold Shrimp Dynamite and crispy Peri Peri Wings to hearty Chicken Wraps and refreshing Oreo Shakes — Cafe Retroo has something for every mood and every occasion.",
    name: "Cafe Retroo",
    profession: "Raja Annamalai Road, Saibaba Colony, Coimbatore",
  },
];

const Testimonials = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        {/* Swiper Carousel Component */}
        {/* navigation={true}: Shows prev/next arrow buttons */}
        {/* modules={[Navigation]}: Enables navigation functionality */}
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-[400px]"
        >
          {testimonials.map((person, index) => (
            // Each testimonial is a slide
            <SwiperSlide key={index} className="w-full h-full">
              <div className="flex justify-center h-full xl:pt-14">
                {/* Testimonial Card Content */}
                <div className="max-w-[60%] text-primary">
                  {/* Quote Icon - Large, centered */}
                  <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                  
                  {/* Testimonial Message */}
                  <p className="text-2xl font-secondary text-center mb-8">
                    {person.message}
                  </p>
                  
                  {/* Customer Information */}
                  <div className="text-center">
                    {/* Customer Name - Bold */}
                    <p className="text-xl font-bold mb-1">{person.name}</p>
                    {/* Customer Profession - Secondary color */}
                    <p className="text-secondary">{person.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
