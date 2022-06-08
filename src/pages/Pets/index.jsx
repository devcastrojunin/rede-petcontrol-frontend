import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Center, Flex, HStack, Spacer, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import api from "../../services/api";


export default function Pets() {

    const navigate = useNavigate();
    let tableHead = ["Nome", "Raça", "Dono", "Categoria", "Ações"];
    const [pets, setPets] = useState([]);

    const goToAdd = () => navigate('/pets/cadastrar')

    useEffect(() => {
        // api.get('/pets')
        //     .then((res) => {
        //         setPets(res);
        //         console.log(res)
        //     })
        //     .catch((err) => {
        //         console.log(`vish algo deu errado no pets ${err}`)
        //     })
    }, [])

    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Todos os Pets</Box>
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

                        {pets.map((pet) => (
                            <Tr>
                                <Td key={pet.id}>{pet.name}</Td>
                                <Td>{pet.email}</Td>
                                <Td>Endereço</Td>
                                <Td>Lolozinho</Td>
                                <Td >
                                    <HStack>
                                        <Link to={"/pets/editar/6"}><GrEdit /></Link>
                                        <RiDeleteBin6Line />
                                    </HStack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Center>
    )
}