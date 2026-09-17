/**
 * Explore Component
 * 
 * Showcases different coffee types and varieties.
 * Features:
 * - Three-column layout: Left items, Center image, Right items
 * - Parallax effect on center image using Locomotive Scroll
 * - Responsive: Stacks vertically on mobile, horizontal on desktop
 * - Each side displays 2 coffee type items
 */

import Image from "next/image";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        {/* Three-column layout: Left | Center | Right */}
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Left Column - First 2 items, right-aligned on desktop */}
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 1: Rich Espresso Blends */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end" // Right-align on desktop
              icon="coffee-1.svg"
              text={{
                title: "Handcrafted Coffee",
                description:
                  "From a smooth cappuccino to a bold espresso, our coffees are made with care. The perfect cup to start your day or unwind with in our cozy space.",
              }}
            />
            {/* Item 2: Indulgent Desserts */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-2.svg"
              text={{
                title: "Bold Starters",
                description:
                  "Treat yourself to our Shrimp Dynamite, Peri Peri Wings, or Crispy Garlic Chicken. Each dish is crafted to be a memorable experience, not just a starter.",
              }}
            />
          </div>
          
          {/* Center Column - Coffee cup image with parallax effect (desktop only) */}
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority // Priority loading for above-the-fold image
                data-scroll         // Locomotive Scroll: enables parallax
                data-scroll-speed="0.1" // Very slow parallax (0.1x scroll speed)
              />
            </div>
          </div>
          {/* Right Column - Last 2 items, left-aligned on desktop */}
          <div className="flex-1  flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 3: Smooth Cold Brews */}
            <ExploreItem
              itemCSS="xl:text-left items-start" // Left-align on desktop
              icon="coffee-3.svg"
              text={{
                title: "Hearty Mains",
                description:
                  "Craving something satisfying? Our Chicken Wrap, Chicken Sandwich, and Pizza bring bold, satisfying flavours to every visit.",
              }}
            />
            {/* Item 4: Warm Atmosphere */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-4.svg"
              text={{
                title: "Warm Atmosphere",
                description:
                  "A welcoming space on Raja Annamalai Road, Saibaba Colony, Coimbatore — perfect for a casual catch-up, a solo afternoon, or a relaxed work session.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
