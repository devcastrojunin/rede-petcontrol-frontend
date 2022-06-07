import { Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GlobalTable from "../../components/GlobalTable";

export default function Pets() {

    const navigate = useNavigate();

    let tableHead = ["Nome", "Raça", "Dono", "Categoria" ];

    const goToAdd = () => navigate('/pets/cadastrar')

    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Todos os Pets</Box>

                <GlobalTable tableHead={tableHead} goToAdd={goToAdd}/>
            </Box>
        </Center>
    );
}