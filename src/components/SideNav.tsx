import { Heading, SkeletonText } from "@chakra-ui/react";
import Categories from "./Categories";
import { Category } from "../types";
import { useTranslation } from "react-i18next";

type Props = {
  loading: boolean;
  selectCategory: (category: Category) => void;
  selectedCategory: Category | undefined;
  categories: Category[];
};

function SideNav({
  loading,
  selectCategory,
  selectedCategory,
  categories,
}: Props) {
  const {t} = useTranslation();

  return loading ? (
    <SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        {
          t('CATEGORIES').toUpperCase()
        }
      </Heading>
      <Categories
        onClick={selectCategory}
        selected={selectedCategory}
        data={categories}
      />
    </>
  );
}

export default SideNav;
