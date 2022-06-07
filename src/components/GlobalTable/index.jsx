import { Button, Flex, Spacer, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function GlobalTable({ tableHead, goToAdd }) {
    return (
        <>
            <Flex>
                <Spacer />
                <Button rightIcon={<FaPlus />}
                    colorScheme='teal'
                    variant='outline'
                    mb={8}
                    fontWeight={700}
                    onClick={goToAdd}>
                    Adicionar Novo
                </Button>
            </Flex>
            <Table size='md' fontSize="14px">
                <Thead>
                    <Tr>
                        {tableHead.map((listaHead, index) => (

                            <Th w="22%" key={index}>{listaHead}</Th>

                        ))}
                    </Tr>
                </Thead>

                <Tbody>
                    <Tr>
                        <Td>Junior Castro</Td>
                        <Td>teste@teste.com</Td>
                        <Td>Rua teste, 1234, SP</Td>
                        <Td>Meus Pets</Td>
                    </Tr>
                </Tbody>

            </Table>
        </>
    )
}