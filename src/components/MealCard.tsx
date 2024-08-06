import {
    Card,
    Text,
    Image,
    CardBody,
    Heading,
    CardFooter,
    Button,
  } from "@chakra-ui/react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
  
  type Props = {
    photo: string;
    text: string;
    openMeal: () => void;
  };
  
  function MealCard({ photo, text, openMeal }: Props) {
    const {t} = useTranslation();
    return (
      <Card boxShadow="lg">
        <CardBody>
          <Image width="100%" borderRadius="lg" src={photo} alt={text} />
          <Heading size="md" color="blue.400">
            <Text mt="4">{text}</Text>
          </Heading>
        </CardBody>
  
        <CardFooter pt="0">
          <Button onClick={openMeal} bgColor="blue.400" color="white">
            {
              t('SHOW_MEAL')
            }
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  export default MealCard;
  