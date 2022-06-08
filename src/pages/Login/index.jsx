import {
    Button,
    // Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    // Link,
    Stack,
    Image,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { setAuthToken } from "../../auth/AuthGuard"
import api from "../../services/api"

export default function Login() {

    const { register, handleSubmit, /*formState: { errors }*/ } = useForm();

    const handlerLogin = (data) => {
        api.post("/login", data)
            .then(res => {
                console.log(res.data)
                //get token from response
                const token = res.data.token

                //set JWT token to local
                localStorage.setItem("token", token)

                //set token to axios common header
                setAuthToken(token)

                //redirect user to home page
                window.location.href = "/home"
            })
            .catch(e => console.log(e))
    }

    return (
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={4} w={"full"} maxW={"md"}>
                    <Heading fontSize={"2xl"}>Login</Heading>

                    <form onSubmit={handleSubmit(handlerLogin)}>
                        <FormControl id="usuario">
                            <FormLabel>Usuário</FormLabel>
                            <Input type="text" borderColor="#A0AEC0"
                                {...register("username", { required: true })} />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" borderColor="#A0AEC0"
                                {...register("password", { required: true })} />
                        </FormControl>

                        <Stack spacing={6}>
                            {/* <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Lembre-me</Checkbox>
                                <Link color={'#00a9b6'}>Esqueceu a senha?</Link>
                            </Stack> */}
                            <Button
                                bg={"#00a9b6"}
                                color="white"
                                _hover={{ bg: "#07727a" }}
                                type="submit"
                            >
                                Entrar
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={"Login Image"}
                    objectFit={"cover"}
                    src={
                        "https://media.gazetadopovo.com.br/viver-bem/2018/10/dogvoto-768x612-4a097ac0.jpg"
                    }
                />
            </Flex>
        </Stack>
    )
}
