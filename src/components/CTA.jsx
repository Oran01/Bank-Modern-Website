import styles from "../style";
import Button from "./Button";
import { useState, useRef } from "react";

/**
 * CardTilt Component
 *
 * A wrapper component that applies a 3D tilt effect when the user moves the mouse over it.
 * - The effect is achieved using `perspective`, `rotateX`, and `rotateY` transformations.
 * - Resets smoothly when the mouse leaves.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {JSX.Element} props.children - The content inside the tilted container
 * @param {string} [props.className] - Additional CSS classes for styling
 * @returns {JSX.Element} The interactive tilting container
 */
const CardTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState(""); // Stores tilt transformation
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
   * Resets the transformation when the mouse leaves with a smooth transition.
   */
  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
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
      {children} {/* This ensures the CTA section is rendered inside */}
    </div>
  );
};

/**
 * CTA (Call-To-Action) Component
 *
 * Displays a call-to-action section encouraging users to try the service.
 * - Wrapped inside `CardTilt` for a 3D hover effect.
 * - Includes a title, description, and a call-to-action button.
 *
 * @component
 * @returns {JSX.Element} The CTA section UI
 */
const CTA = () => (
  <CardTilt className="w-full">
    {" "}
    {/* Wrap the CTA inside CardTilt */}
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      {/* Left Side: Title & Description */}
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/* Right Side: Call-To-Action Button */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  </CardTilt>
);

export default CTA;
