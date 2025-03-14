import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

/**
 * CardDeal Component
 *
 * This component represents a section that highlights the benefits of finding a better card deal.
 * It includes:
 * - A heading and description
 * - A "Get Started" button for user interaction
 * - A card image on the right side for visual appeal
 *
 * @component
 * @returns {JSX.Element} The CardDeal section UI
 */
const CardDeal = () => (
  <section className={layout.section}>
    {/* Left Side: Text and Call to Action */}
    <div className={layout.sectionInfo}>
      {/* Section Heading */}
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>

      {/* Section Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      {/* Call to Action Button */}
      <Button styles="mt-10" />
    </div>

    {/* Right Side: Card Image */}
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] " />
    </div>
  </section>
);

export default CardDeal;
