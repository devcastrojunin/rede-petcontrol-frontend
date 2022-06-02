import { Box, Button, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

export default function Novo() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const clientRegister = (value) => {
        console.log(value)
    }

    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Cadastre um novo cliente</Box>

                <form onSubmit={handleSubmit(clientRegister)}>
                    <FormControl id="nome" isRequired>
                        <FormLabel>Nome</FormLabel>
                        <Input
                            placeholder="Seu nome"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            width={400}
                            {...register("name", { required: true })} />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            placeholder="email@email.com"
                            type="email"
                            width={400}
                            {...register("email", { required: true })} />
                    </FormControl>

                    <FormControl id="telefone" isRequired>
                        <FormLabel>Telefone</FormLabel>
                        <Input
                            as={InputMask}
                            mask="(99) 99999-9999"
                            placeholder="(11) 99999-9999"
                            type="text"
                            width={400}
                            {...register("telephone", { required: true })} />
                    </FormControl>

                    <FormControl id="endereço" isRequired>
                        <FormLabel>Endereço</FormLabel>
                        <Input
                            type="text"
                            width={400}
                            {...register("address", { required: true })} />
                    </FormControl>

                    <FormControl id="pet" isRequired>
                        <FormLabel>Pet</FormLabel>
                        <Input
                            placeholder="Nome do pet"
                            type="text"
                            width={400}
                            {...register("pets", { required: true })} />
                    </FormControl>

                    <Button
                        mt={10}  
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        width={400}
                        type="submit">
                        Cadastrar
                    </Button>
                </form>
            </Box>
        </Center>
    );
}