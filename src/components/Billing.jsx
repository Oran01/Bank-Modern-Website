import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

/**
 * Billing Component
 *
 * This component represents the "Billing & Invoicing" section of the website.
 * It showcases a billing image with gradient overlays and provides download
 * links for the Apple and Google Play stores.
 *
 * @component
 * @returns {JSX.Element} The Billing section UI
 */
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Left Side: Image Section */}
    <div className={layout.sectionImgReverse}>
      {/* Billing Image */}
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* White Gradient Overlay (Top-Left) */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />

      {/* Pink Gradient Overlay (Bottom-Left) */}
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    {/* Right Side: Text and Download Buttons */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing{" "}
      </h2>

      {/* Section Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.{" "}
      </p>

      {/* App Store & Google Play Download Buttons */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* Apple Store Button */}
        <img
          src={apple}
          alt="app_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />

        {/* Google Play Button */}
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
