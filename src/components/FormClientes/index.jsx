import {Button,FormControl, FormLabel,Input} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

export function FormClientes({button}){

    const { register, handleSubmit, /*formState: { errors }*/ } = useForm();

    const clientRegister = (value) => {
        console.log(value)
    }

    return(
        <form onSubmit={handleSubmit(clientRegister)}>
                        <FormControl id="nome" isRequired>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                placeholder="Seu nome"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                {...register("name", { required: true })} />
                        </FormControl>

                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="email@email.com"
                                type="email"
                                {...register("email", { required: true })} />
                        </FormControl>

                        <FormControl id="telefone" isRequired>
                            <FormLabel>Telefone</FormLabel>
                            <Input
                                as={InputMask}
                                mask="(99) 99999-9999"
                                placeholder="(11) 99999-9999"
                                type="text"
                                {...register("telephone", { required: true })} />
                        </FormControl>

                        <FormControl id="endereço" isRequired>
                            <FormLabel>Endereço</FormLabel>
                            <Input
                                placeholder="Rua exemplo, 999, Bairro exemplo, Cidade exemplo"
                                type="text"
                                {...register("address", { required: true })} />
                        </FormControl>

                        <Button
                            mt={10}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500'}}
                            width="100%"                    
                            type="submit">
                            {button}
                        </Button>
                    </form>
    )
}