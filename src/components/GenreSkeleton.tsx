import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <Card padding={2} margin={2}>
        <Skeleton height="20px">
          <HStack>
            <SkeletonCircle size="10" />
            <SkeletonText />
          </HStack>
        </Skeleton>
      </Card>
    </>
  );
};

export default GenreSkeleton;
