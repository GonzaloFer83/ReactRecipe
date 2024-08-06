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
  Box,
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
        <Box display="flex" alignItems="flex-start" marginBottom="20px">
          <Box width="500px" height="500px" overflow="hidden" mr="20px">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="lg"
              src={data?.strMealThumb}
              alt={data?.strMeal}
            />
          </Box>
          <Box>
            <Heading mt="4" mb="4" size="md" display="flex" alignItems="center">
              {t('INGREDIENTS')}
              <TimeIcon color="yellow.500" ml="2" />
            </Heading>
            <OrderedList>
              {ingredients.map((ingredient) => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
              ))}
            </OrderedList>
          </Box>
        </Box>
          
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


