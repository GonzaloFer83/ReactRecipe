import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalOverlay,
  } from "@chakra-ui/react";
  import { MealDetails } from "../types";
  import RecipeModalLoading from "./RecipeModalSkeleton";
  import RecipeModalContent from "./RecipeModalContent";
import { useTranslation } from "react-i18next";
  
  type Props = {
    onClose: () => void;
    isOpen: boolean;
    loading: boolean;
    data?: MealDetails;
  };
  
  const calculateIngredients = (
    data: Props["data"],
    ingredientsArray: number[]
  ) =>
    data
      ? ingredientsArray
          .map((_, i) => {
            const ingredient = data[`strIngredient${i + 1}`];
            const measure = data[`strMeasure${i + 1}`];
            return data[`strIngredient${i + 1}`]
              ? `${ingredient} - ${measure}`
              : "";
          })
          .filter((x) => x)
      : [];
  
  function RecipeModal({ onClose, isOpen, data, loading }: Props) {
    const {t} = useTranslation();
    if (!loading && !data) return;
    const ingredientsArray: number[] = Array(20).fill(0);
    const ingredients = calculateIngredients(data, ingredientsArray);
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxWidth="800px">
            {loading ? (
              <RecipeModalLoading />
            ) : (
              <RecipeModalContent data={data} ingredients={ingredients} />
            )}
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                {
                  t('CLOSE')
                }
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default RecipeModal;
  