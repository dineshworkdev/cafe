/**
 * Menu Component
 * 
 * Displays the coffee shop menu with a grid of menu items.
 * Features:
 * - Grid layout: 1 column on mobile, 2 columns on desktop
 * - 10 menu items displayed
 * - Section header with title and separator
 * - Call-to-action button
 */

import Separator from "../Separator";
import MenuItem from "./MenuItem";

// Menu items data - Cafe Retroo offerings with images, names, and descriptions
const menuItems = [
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Shrimp Dynamite",
    description: "Crispy shrimp tossed in a bold, spicy dynamite sauce",
    price: 3.3,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Chicken Wrap",
    description: "Grilled chicken wrapped with fresh veggies and sauce",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Chicken Sandwich",
    description: "Grilled chicken with fresh fillings in a toasted bun",
    price: 4.2,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Pizza",
    description: "Wood-fired pizza with a perfectly crisp base",
    price: 3.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Peri Peri Wings",
    description: "Juicy chicken wings glazed with fiery peri peri sauce",
    price: 5.4,
  },
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Oreo Shake",
    description: "Thick, creamy milkshake blended with crunchy Oreo cookies",
    price: 3.75,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Crispy Garlic Chicken",
    description: "Tender chicken fried to golden perfection with garlic seasoning",
    price: 4.25,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Chicken Sandwich",
    description: "Grilled chicken with fresh fillings",
    price: 3.75,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Peri Peri Wings",
    description: "Crispy wings with bold peri peri glaze",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Oreo Shake",
    description: "Rich Oreo milkshake, chilled and creamy",
    price: 6.5,
  },
] as const; // as const makes the array readonly for TypeScript type inference

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          {/* Section Description */}
          <p className="text-center max-w-[620px] mx-auto">
            A curated selection of our most-loved food and drinks — from bold starters
            and hearty bites to refreshing shakes. Something for every mood.
          </p>
        </div>
        
        {/* Menu Grid and Button */}
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          {/* Menu Items Grid - Responsive: 1 column mobile, 2 columns desktop */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  key={index}
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                />
              );
            })}
          </div>
          {/* Call-to-Action Button */}
          <button className="btn">View full menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
