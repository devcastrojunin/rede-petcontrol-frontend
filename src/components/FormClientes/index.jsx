import { Button, FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

export function FormClientes({ button }) {

    const { register, handleSubmit, /*formState: { errors }*/ } = useForm();

    const clientRegister = (value) => {
        console.log(value)
    }

    return (
        <form onSubmit={handleSubmit(clientRegister)}>
            <Text fontSize={25} fontWeight={700} color="#718096a1">Dados pessoais</Text>
            <HStack mt={21}>
                <FormControl id="nome" isRequired>
                    <FormLabel mb={0}>Nome</FormLabel>
                    <Input
                        placeholder="Seu nome"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        {...register("name", { required: true })} />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel mb={0}>Email</FormLabel>
                    <Input
                        placeholder="email@email.com"
                        type="email"
                        {...register("email", { required: true })} />
                </FormControl>

                <FormControl id="telefone" isRequired>
                    <FormLabel mb={0}>Telefone</FormLabel>
                    <Input
                        as={InputMask}
                        mask="(99) 99999-9999"
                        placeholder="(11) 99999-9999"
                        type="text"
                        {...register("telephone", { required: true })} />
                </FormControl>
            </HStack>

            <Text
                fontSize={25}
                fontWeight={700}
                color="#718096a1"
                mt={35}>
                Endereço
            </Text>

            <HStack alignItems="end" mt={11}>
                <FormControl id="cep" width={200}>
                    <FormLabel mb={0}>CEP</FormLabel>
                    <Input
                        as={InputMask}
                        mask="99999-999"
                        placeholder="99999-999"
                        type="text"
                        {...register("cep")} />
                </FormControl>

                <Button
                    mt={8}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{ bg: 'blue.600' }}>
                    Buscar
                </Button>
            </HStack>

            <HStack mt={11}>
                <FormControl id="rua" width={600}>
                    <FormLabel mb={0}>Rua/Avenida</FormLabel>
                    <Input
                        placeholder="Avenida Humberto Campos"
                        type="text"
                        {...register("rua")} />
                </FormControl>

                <FormControl id="numero" width={200}>
                    <FormLabel mb={0}>Número</FormLabel>
                    <Input
                        placeholder="9999"
                        type="text"
                        {...register("numero")} />
                </FormControl>
            </HStack>

            <HStack mt={11}>
                <FormControl id="complemento">
                    <FormLabel mb={0}>Complemento</FormLabel>
                    <Input
                        placeholder="Conjunto 2"
                        type="text"
                        {...register("complemento")} />
                </FormControl>

                <FormControl id="bairro">
                    <FormLabel mb={0}>Bairro</FormLabel>
                    <Input
                        placeholder="Bairro do Limão"
                        type="text"
                        {...register("bairro")} />
                </FormControl>
            </HStack>

            <HStack mt={11}>
                <FormControl id="cidade" width={500} >
                    <FormLabel mb={0}>Cidade</FormLabel>
                    <Input
                        placeholder="São Paulo"
                        type="text"
                        {...register("cidade")} />
                </FormControl>

                <FormControl id="estado" width={300}>
                    <FormLabel mb={0}>Estado</FormLabel>
                    <Input
                        placeholder="São Paulo"
                        type="text"
                        {...register("estado")} />
                </FormControl>
            </HStack>


            <Button
                mt={8}
                bg={'teal.600'}
                color={'white'}
                _hover={{ bg: 'teal.700' }}
                width={130}
                type="submit">
                {button}
            </Button>

        </form>
    )
}