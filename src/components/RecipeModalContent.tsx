import React from "react";
import { MealDetails } from "../types";
import {
  Heading,
  ListItem,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  OrderedList,
  Image,
  Text,
  Button,
  Collapse,
  ModalFooter,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { BiChat, BiLike } from "react-icons/bi";

type Props = {
  data?: MealDetails;
  ingredients: string[];
};

function RecipeModalContent({ data, ingredients }: Props) {
  const [show, setShow] = React.useState(false)
  const handleToggle = ()=> setShow(!show)
  return (
    <>
      <ModalHeader>{data?.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
          <Image
          width="100%"
          borderRadius="lg"
          src={data?.strMealThumb}
          alt={data?.strMeal}
        />
        <Heading mt="4" mb="4" size="md">
          Ingredients <TimeIcon color ="yellow.500"/>
        </Heading>
        <OrderedList>
          {ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
        </OrderedList>
        <Button mt="4" onClick={handleToggle} >Show {show ? "Less": "Recipe"}</Button>
        <Collapse in={show} animateOpacity>
           <Text whiteSpace="pre-line">
              {data?.strInstructions}
            </Text>
        </Collapse>
      </ModalBody>
      <ModalFooter>
          <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
          Comment
        </Button>
      </ModalFooter>
    </>
  );
}

export default RecipeModalContent;


