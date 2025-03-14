import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

/**
 * Testimonials Component
 *
 * This section displays customer testimonials using `FeedbackCard` components.
 * - Features a heading and a short description.
 * - Dynamically maps through `feedback` data to render multiple testimonials.
 * - Uses a blue gradient background for visual appeal.
 *
 * @component
 * @returns {JSX.Element} The Testimonials section UI
 */
const Testimonials = () => (
  <section
    id="client"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* Background Gradient Decoration */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    {/* Header Section: Title & Description */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>

      {/* Section Description */}
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    {/* Testimonials: Mapping Through Feedback Data */}
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
