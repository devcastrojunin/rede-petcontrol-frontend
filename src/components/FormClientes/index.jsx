import { Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Text, Link, Spinner } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export function FormClientes({ button }) {

    const { register, handleSubmit, getValues, setValue, formState: { errors }} = useForm();
    const [loading, setLoading] = useState(false);

    const getCep = () => {
        setLoading(true);
        const cep = getValues("cep")
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                setValue('rua', res.data.logradouro)
                setValue('bairro', res.data.bairro)
                setValue('cidade', res.data.localidade)
                setValue('estado', res.data.uf)
                setLoading(false);
            })
            .catch(() => {
                setLoading(true);
            })
    }

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
                        {...register("telephone", { required: true, pattern: /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/ })} />
                </FormControl>
            </HStack>

            <FormControl width={260} mt={11} id="cpf" isInvalid={errors.cpf}>
                <FormLabel mb={0}>CPF <span style={{ color: "#e53e3e" }}>*</span></FormLabel>
                <Input
                    as={InputMask}
                    mask="999.999.999-99"
                    placeholder="___.___.___-__"
                    type="text"
                    {...register("cpf", { required: true, pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ })} />
                <FormErrorMessage>Preenchimento obrigatório.</FormErrorMessage>

            </FormControl>

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
                    _hover={{ bg: 'blue.600' }}
                    width={70}
                    type="button"
                    onClick={getCep}
                    disabled={loading}>
                    {loading ? <Spinner/> : 'Buscar'}
                </Button>
            </HStack>

            <Text fontSize={12}>
                Não sabe seu cep? <Link href= 'https://buscacepinter.correios.com.br/app/endereco/index.php' isExternal textDecoration="underline">click aqui.</Link></Text>

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
                        readOnly
                        {...register("bairro")} />
                </FormControl>
            </HStack>

            <HStack mt={11}>
                <FormControl id="cidade" width={500} >
                    <FormLabel mb={0}>Cidade</FormLabel>
                    <Input
                        placeholder="São Paulo"
                        type="text"
                        readOnly
                        {...register("cidade")} />
                </FormControl>

                <FormControl id="estado" width={300}>
                    <FormLabel mb={0}>Estado</FormLabel>
                    <Input
                        placeholder="São Paulo"
                        type="text"
                        readOnly
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