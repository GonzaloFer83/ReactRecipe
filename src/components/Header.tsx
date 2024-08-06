import {
    Button,
    Container,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  import { IoMdSearch } from "react-icons/io";
  import { HeaderSearchForm } from "../types";
import { useTranslation } from "react-i18next";
import { useState } from "react";
  type Props = {
    onSubmit: (data: HeaderSearchForm) => void;
  };
  
  function Header({ onSubmit }: Props) {
    const { register, handleSubmit, formState } = useForm<HeaderSearchForm>();
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState('es')
    const onChangeLanguaje = () =>{
      i18n.changeLanguage(language);
      if(language === 'es'){
          setLanguage('en');
        }else{
          setLanguage('es')
        }
    }
    return (
      <Container mt="1" maxW="3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoMdSearch color="gray" />
            </InputLeftElement>
            <Input
              focusBorderColor={
                !!formState.errors.search ? "crimson" : "blue.400"
              }
              isInvalid={!!formState.errors.search}
              {...register("search", { required: true })}
              mr="2"
              type="text"
              placeholder="Try 'chicken' o 'beans'"
            />{" "}
            <Button type="submit" color="white" bgColor="blue.400">
              {
                t('SEARCH')
              }
            </Button>
            <Button onClick = {onChangeLanguaje} position="relative" ml="5px">
              {
                t('LANGUAGE')
              }
            </Button>
              {/* {<img alt="Español" src="https://unpkg.com/language-icons/icons/es.svg"  width="25%" height="25%" sizes="25%"/>  } */}
          </InputGroup>
        </form>
      </Container>
    );
  }
  
  export default Header;
  