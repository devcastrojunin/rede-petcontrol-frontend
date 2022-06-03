import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function GlobalTable({ tableHead }) {
    return (
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
    )
}