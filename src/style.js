/**
 * Global Styles Object
 *
 * This object contains reusable Tailwind CSS class definitions for styling consistency across the project.
 * - Provides standardized width, typography, flex utilities, and spacing.
 *
 * @constant {Object} styles
 */
const styles = {
  /** Maximum width for containers */
  boxWidth: "xl:max-w-[1280px] w-full",

  /** Heading styles for section titles */
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  /** Paragraph styles for descriptive text */
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  /** Flexbox utilities */
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  /** Padding utilities for horizontal, vertical, and general padding */
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  /** Margin utilities for horizontal, vertical, and general margin */
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

/**
 * Layout Styles Object
 *
 * Defines reusable layout styles for section organization and image positioning.
 *
 * @constant {Object} layout
 */
export const layout = {
  /** Standard section layout with padding */
  section: `flex md:flex-row flex-col ${styles.paddingY}`,

  /** Reversed section layout (for alternating content) */
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  /** Layout for section images with reversed order */
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  /** Layout for section images */
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  /** Layout for section text content */
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
