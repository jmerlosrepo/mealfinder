import { Card, CardBody, SkeletonText } from "@chakra-ui/react";

type Props = {};

function SkeletonCard({}: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <SkeletonText mt="1" noOfLines={1} spacing="6" skeletonHeight="220" />
        <SkeletonText mt="4" noOfLines={1} spacing="2" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;
