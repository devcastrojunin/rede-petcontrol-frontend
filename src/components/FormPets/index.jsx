import { Button, FormControl, FormLabel, HStack, Input, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function FormPets({ button }) {

    const { register, handleSubmit, /*formState: { errors }*/ } = useForm();

    const petRegister = (value) => {
        console.log(value)
    }

    return (
        <form onSubmit={handleSubmit(petRegister)}>
            <FormControl id="nome" marginBottom={3} isRequired>
                <FormLabel>Nome</FormLabel>
                <Input
                    placeholder="Nome do pet"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    {...register("name", { required: true })} />
            </FormControl>

            <HStack>
                <FormControl id="raça" marginBottom={3} isRequired>
                    <FormLabel>Raça</FormLabel>
                    <Input
                        placeholder="Raça do pet"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        {...register("raca", { required: true })} />
                </FormControl>

                <FormControl id="categoria" marginBottom={3} isRequired>
                    <FormLabel>Categoria</FormLabel>

                    <Select
                        placeholder="Tipo de pet"
                        type="text"
                        {...register("categoria", { required: true })}>
                        <option value="dog">Cachorro</option>
                        <option value="cat">Gato</option>
                        <option value="bird">Ave</option>
                    </Select>
                </FormControl>
            </HStack>

            <FormControl id="cliente" marginBottom={3} isRequired>
                <FormLabel>Nome papai ou mamãe</FormLabel>
                <Select
                    placeholder="Selecione"
                    type="text"
                    {...register("cliente", { required: true })}>
                    <option value="dog">Ivanilda de jesus aparecida</option>
                </Select>
            </FormControl>

            <Button
                mt={8}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                    bg: 'blue.500'
                }}
                width="100%"
                type="submit">
                {button}
            </Button>
        </form>
    )
}