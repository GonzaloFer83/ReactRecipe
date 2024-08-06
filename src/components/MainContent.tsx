import { SimpleGrid } from "@chakra-ui/react";
import { Meal } from "../types";
import SkeletonCard from "./SkeletonCard";
import MealCard from "./MealCard";

type Props = {
  loading: boolean;
  openMeal: (meal: Meal) => void;
  meals?: Meal[];
};

function MainContent({ loading, meals, openMeal }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
    
    {meals === null ? (<img width="100%" src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"/>)  
      :(
       <SimpleGrid columns={{ lg: 3, sm: 2 }} spacingX="20px" spacingY="20px">
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loading &&
        meals?.map((meal) => (
          <MealCard
            openMeal={() => openMeal(meal)}
            key={meal.idMeal}
            photo={meal.strMealThumb}
            text={meal.strMeal}
          />
        ))}
    </SimpleGrid> 
      )}
    
    </>
  );
}

export default MainContent;
