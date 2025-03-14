import React from "react";

/**
 * Button Component
 *
 * A reusable button component with smooth hover animations, including:
 * - A scaling effect (`hover:scale-105`)
 * - A slight upward movement (`hover:-translate-y-1`)
 * - A soft glow effect (`hover:shadow-blue-500/50`)
 * - A ripple effect on hover (`hover:scale-150 hover:opacity-10`)
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.styles] - Additional CSS classes for customization
 * @returns {JSX.Element} The animated button
 */
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`relative overflow-hidden py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 ${styles} rounded-[10px]`}
    >
      Get Started
      {/* Ripple Effect */}
      <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 rounded-full scale-0 hover:scale-150 hover:opacity-10"></span>
    </button>
  );
};

export default Button;
