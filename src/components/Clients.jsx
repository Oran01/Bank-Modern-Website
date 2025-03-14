import { clients } from "../constants";
import styles from "../style";

/**
 * Clients Component
 *
 * This component displays a list of client logos in a responsive grid format.
 * Each logo has a hover effect that slightly enlarges and rotates it, creating a modern interactive feel.
 *
 * @component
 * @returns {JSX.Element} The Clients section UI
 */
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          {/* Client Logo with Hover Effects */}
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain transition-transform duration-500 ease-out transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 hover:rotate-1"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
