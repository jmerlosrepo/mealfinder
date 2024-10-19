import {
  InputGroup,
  InputLeftElement,
  Input,
  Container,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import { SearchForm } from "../types";

type Props = {
  onSubmit: (data: SearchForm) => void;
};
function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();

  return (
    <Container mt="1" maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdSearch color="gray" />
          </InputLeftElement>
          <Input
            mr="2"
            {...register("search", { required: true })}
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            type="text"
            isInvalid={!!formState.errors.search}
            placeholder="Intenta con 'chicken' o 'beans'..."
          />
          <Button type="submit" bgColor="blue.400" color="white">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
