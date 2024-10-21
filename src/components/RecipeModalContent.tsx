import {
  Heading,
  Image,
  ListItem,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  let ingredients = [];

  for (let index = 1; index <= 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingredient !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return ingredients;
};

function RecipeModalContent({ data }: Props) {
  const ingredients = joinIngredients(data);
  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
          alt={data.strMeal}
        />
        <Heading mt="4" mb="4" size="md">
          Ingredientes
        </Heading>
        <OrderedList>
          {ingredients.map((i) => (
            <ListItem key={i}>{i}</ListItem>
          ))}
        </OrderedList>
        <Text whiteSpace="pre-line">{data.strInstructions}</Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
