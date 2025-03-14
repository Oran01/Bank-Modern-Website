import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { useRef, useState } from "react";

/**
 * ImageTilt Component
 *
 * This component applies a 3D tilt effect to its content when hovered.
 * - Uses `perspective`, `rotateX`, and `rotateY` transformations.
 * - Smoothly resets when the mouse leaves.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {JSX.Element} props.children - The content inside the tilted container
 * @param {string} [props.className] - Additional CSS classes for styling
 * @returns {JSX.Element} The interactive tilting container
 */
const ImageTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState(""); // Stores the tilt transformation
  const itemRef = useRef(null); // Reference to the tilt container

  /**
   * Handles mouse movement to update the tilt effect.
   * @param {MouseEvent} e - The mouse event
   */
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5; // Adjust tilt intensity
    const tiltY = (relativeX - 0.5) * -5;

    // Apply the 3D tilt effect
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  /**
   * Resets the transformation when the mouse leaves.
   */
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.4s ease-out", // Smooth transition effect
      }}
    >
      {/* Main Image with Gradient Effects */}
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] "
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] top-20 bottom-20 blue__gradient" />
    </div>
  );
};

/**
 * Hero Component
 *
 * Displays the main landing section of the website.
 * - Includes a discount banner.
 * - Features a dynamic headline with a call-to-action button.
 * - Uses the `ImageTilt` component for an interactive image effect.
 *
 * @component
 * @returns {JSX.Element} The Hero section UI
 */
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left Side: Text & Call to Action */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* Discount Banner */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      {/* Main Headline */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        {/* Right-Side Call-To-Action Button (Only on Large Screens) */}
        <div className="ss:flex hidden  md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      {/* Sub-Headline */}
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>

      {/* Description Text */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    {/* Right Side: Interactive Tilt Image */}
    <ImageTilt
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
    />

    {/* Call-To-Action Button (Visible on Small Screens) */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
