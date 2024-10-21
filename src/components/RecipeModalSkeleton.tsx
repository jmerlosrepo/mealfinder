import { Container, SkeletonText } from "@chakra-ui/react";

type Props = {};

function RecipeModalSkeleton({}: Props) {
  return (
    <Container>
      <SkeletonText skeletonHeight="8" mt="4" mb="5" noOfLines={1} />
      <SkeletonText skeletonHeight="280" noOfLines={1} borderRadius={200} />
      <SkeletonText mt="4" noOfLines={5} spacing={4} />
    </Container>
  );
}

export default RecipeModalSkeleton;
