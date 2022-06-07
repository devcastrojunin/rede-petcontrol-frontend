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
                <FormLabel marginBottom={0}>Nome</FormLabel>
                <Input
                    placeholder="Nome do pet"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    {...register("name", { required: true })} />
            </FormControl>

            <HStack marginBottom={3}>
                <FormControl id="raça" isRequired>
                    <FormLabel marginBottom={0}>Raça</FormLabel>
                    <Input
                        placeholder="Raça do pet"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        {...register("raca", { required: true })} />
                </FormControl>

                <FormControl id="categoria" isRequired>
                    <FormLabel marginBottom={0}>Categoria</FormLabel>

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
                <FormLabel marginBottom={0}>Nome papai ou mamãe</FormLabel>
                <Select
                    placeholder="Selecione"
                    type="text"
                    {...register("cliente", { required: true })}>
                    <option value="dog">Ivanilda de jesus aparecida</option>
                </Select>
            </FormControl>

            <Button
                mt={8}
                bg={'#00a9b6'}
                color={'white'}
                _hover={{bg: '#07727a'}}
                width="100%"
                type="submit">
                {button}
            </Button>
        </form>
    )
}