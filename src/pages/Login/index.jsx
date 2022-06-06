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
} from '@chakra-ui/react';

export default function Login() {
    return (
        
            <Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'}>Login</Heading>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={6}>
                            {/* <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Lembre-me</Checkbox>
                                <Link color={'#00a9b6'}>Esqueceu a senha?</Link>
                            </Stack> */}
                            <Button bg={'#00a9b6'} color="white" _hover={{bg: '#07727a'}}>
                                Entrar
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://media.gazetadopovo.com.br/viver-bem/2018/10/dogvoto-768x612-4a097ac0.jpg'
                        }
                    />
                </Flex>
            </Stack>
       
    );
}
