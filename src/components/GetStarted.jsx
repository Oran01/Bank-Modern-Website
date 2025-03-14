import styles from "../style";
import { arrowUp } from "../assets";

/**
 * GetStarted Component
 *
 * A call-to-action button styled as a circular interactive element.
 * - Uses a gradient background with hover effects.
 * - Displays "Get Started" text with an animated arrow icon.
 * - On hover, the button slightly enlarges (`hover:scale-105`) and adds a glow effect.
 * - The arrow moves upwards slightly on hover (`hover:translate-y-[-3px]`).
 *
 * @component
 * @returns {JSX.Element} The animated Get Started button
 */
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50`}
  >
    {/* Inner Circle */}
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full relative overflow-hidden`}
    >
      {/* "Get Started" Text & Arrow Icon */}
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        {/* Animated Arrow Icon */}
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
        />

        {/* "Started" Text */}
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
