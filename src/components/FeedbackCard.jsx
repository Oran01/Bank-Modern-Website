import { quotes } from "../assets";

/**
 * FeedBackCard Component
 *
 * This component displays a testimonial-style feedback card.
 * It includes:
 * - A quote icon at the top.
 * - A feedback message.
 * - User details (name, title, and profile image).
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.content - The feedback text provided by the user
 * @param {string} props.name - The name of the person giving feedback
 * @param {string} props.title - The title/position of the person giving feedback
 * @param {string} props.img - The image URL of the person giving feedback
 * @returns {JSX.Element} The feedback card UI
 */
const FeedBackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* Quote Icon */}
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />

    {/* Feedback Content */}
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>

    {/* User Information */}
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

      {/* User Details */}
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;
