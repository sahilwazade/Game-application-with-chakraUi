import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumpsUp from "../assets/thumbs-up.webp";

interface Props {
  ratings: number;
}

const Emoji = ({ ratings }: Props) => {
  if (ratings < 3) return null;

  const emojiToMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpsUp, alt: "recomended", boxSize: "20px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
  };

  return (
    <>
      <Image {...emojiToMap[ratings]} />
    </>
  );
};

export default Emoji;
