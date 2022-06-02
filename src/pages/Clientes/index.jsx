import { Box, Center, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function Clientes() {
    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Todos os Clientes</Box>

                <Table size='md' fontSize="14px">
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th w="22%">Nome</Th>
                            <Th w="22%">E-mail</Th>
                            <Th w="22%">Endereço</Th>
                            <Th w="22%">Pets</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr>
                            <Td>Junior Castro</Td>
                            <Td>teste@teste.com</Td>
                            <Td>Rua teste, 1234, SP</Td>
                            <Td>Meus Pets</Td>
                        </Tr>

                        <Tr>
                            <Td>Junior Castro</Td>
                            <Td>teste@teste.com</Td>
                            <Td>Rua teste, 1234, SP</Td>
                            <Td>Meus Pets</Td>
                        </Tr>

                        <Tr>
                            <Td>Junior Castro</Td>
                            <Td>teste@teste.com</Td>
                            <Td>Rua teste, 1234, SP</Td>
                            <Td>Meus Pets</Td>
                        </Tr>

                        <Tr>
                            <Td>Junior Castro</Td>
                            <Td>teste@teste.com</Td>
                            <Td>Rua teste, 1234, SP</Td>
                            <Td>Meus Pets</Td>
                        </Tr>

                        <Tr>
                            <Td>Junior Castro</Td>
                            <Td>teste@teste.com</Td>
                            <Td>Rua teste, 1234, SP</Td>
                            <Td>Meus Pets</Td>
                        </Tr>

                        <Tr>
                            <Td>Junior Castro</Td>
                            <Td>teste@teste.com</Td>
                            <Td>Rua teste, 1234, SP</Td>
                            <Td>Meus Pets</Td>
                        </Tr>
                        
                        <Tr>
                            <Td>Junior Castro</Td>
                            <Td>teste@teste.com</Td>
                            <Td>Rua teste, 1234, SP</Td>
                            <Td>Meus Pets</Td>
                        </Tr>
                    </Tbody>

                </Table>
            </Box>
        </Center>
    );
}