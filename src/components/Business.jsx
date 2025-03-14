import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";
import { useEffect, useState, useRef } from "react";

/**
 * FeatureCard Component
 *
 * Displays a feature card containing an icon, title, and description.
 * Used to showcase individual features in the Business section.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.icon - The icon image source
 * @param {string} props.title - The title of the feature
 * @param {string} props.content - The description of the feature
 * @param {number} props.index - The index of the feature (used for styling)
 * @returns {JSX.Element} The FeatureCard UI
 */
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    {/* Feature Icon */}
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    {/* Feature Text Content */}
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

/**
 * Business Component
 *
 * Displays the Business section, which highlights key features of a product or service.
 * The section includes a heading, description, and a list of features with animated visibility on scroll.
 *
 * @component
 * @returns {JSX.Element} The Business section UI
 */
const Business = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    /**
     * Intersection Observer to trigger animations when the section enters the viewport.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting); // Update state every time section is visible
      },
      { threshold: 0.3 } // Adjust threshold to trigger animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`${layout.section} transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left Side: Text & Button */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      {/* Right Side: Features List */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
