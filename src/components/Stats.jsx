import { stats } from "../constants";
import styles from "../style";

/**
 * Stats Component
 *
 * This component displays key statistics in a flexible row format.
 * - Each stat consists of a value and a title.
 * - The text is styled responsively for different screen sizes.
 * - The stats are retrieved from a predefined `stats` array in `constants.js`.
 *
 * @component
 * @returns {JSX.Element} The Stats section UI
 */
const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        {/* Statistic Value */}
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>

        {/* Statistic Title */}
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
