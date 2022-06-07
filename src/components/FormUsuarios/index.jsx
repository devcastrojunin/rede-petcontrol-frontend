import { Button, FormControl, FormLabel, HStack, Input, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function FormUsuarios({ button }) {

    const { register, handleSubmit, /*formState: { errors }*/ } = useForm();

    const usuarioRegister = (value) => {
        console.log(value)
    }

    return (
        <form onSubmit={handleSubmit(usuarioRegister)}>
            <FormControl id="nome" marginBottom={3} isRequired>
                <FormLabel marginBottom={0}>Nome</FormLabel>
                <Input
                    placeholder="Nome do usuario"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    {...register("nome", { required: true })} />
            </FormControl>

            <HStack marginBottom={3}>
                <FormControl id="userName" isRequired>
                    <FormLabel marginBottom={0}>Usuário</FormLabel>
                    <Input
                        placeholder="userName"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        {...register("userName", { required: true })} />
                </FormControl>

                <FormControl id="perfil" isRequired>
                    <FormLabel marginBottom={0}>Perfil</FormLabel>

                    <Select
                        placeholder="selecione"
                        type="text"
                        {...register("perfil", { required: true })}>
                        <option value="1">Super_admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Employees</option>
                    </Select>
                </FormControl>
            </HStack>

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