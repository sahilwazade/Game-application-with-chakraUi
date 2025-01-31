import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  var color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} borderRadius={5}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
