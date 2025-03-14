import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

/**
 * App Component
 *
 * The main application component that renders the entire website layout.
 * - Contains the navigation bar (`Navbar`).
 * - Displays various sections such as `Hero`, `Stats`, `Business`, `Billing`, etc.
 * - Uses global styling from `styles.js`.
 *
 * @component
 * @returns {JSX.Element} The complete website UI
 */

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Main Content Sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> {/* Key statistics about the platform */}
          <Business /> {/* Business solutions section */}
          <Billing /> {/* Billing and payment management section */}
          <CardDeal /> {/* Card deals and offers section */}
          <Testimonials /> {/* Customer feedback and testimonials */}
          <Clients /> {/* Display of partnered clients */}
          <CTA /> {/* Call-to-action section to encourage user engagement */}
          <Footer /> {/* Website footer with links and copyright */}
        </div>
      </div>
    </div>
  );
};

export default App;
