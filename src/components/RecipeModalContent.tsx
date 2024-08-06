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
import { useTranslation } from "react-i18next";

type Props = {
  data?: MealDetails;
  ingredients: string[];
};

function RecipeModalContent({ data, ingredients }: Props) {
  const [show, setShow] = React.useState(false)
  const handleToggle = ()=> setShow(!show)
  const {t} = useTranslation();
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
          {
            t('INGREDIENTS')
          }<TimeIcon color ="yellow.500" ml ="2"/>
        </Heading>
        <OrderedList>
          {ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
        </OrderedList>
        <Button mt="4" onClick={handleToggle} >{t('SHOW')} {show ? t('LESS'):t('RECIPE') }</Button>
        <Collapse in={show} animateOpacity >
           <Text whiteSpace="pre-line" mt="4">
              {data?.strInstructions}
            </Text>
        </Collapse>
      </ModalBody>
      <ModalFooter>
          <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
          {
            t('LIKE')
          }
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
        {
          t('COMENT')
        }
        </Button>
      </ModalFooter>
    </>
  );
}

export default RecipeModalContent;


