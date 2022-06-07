import { Box, Center} from "@chakra-ui/react";
import GlobalTable from "../../components/GlobalTable";

export default function Usuarios() {

    let tableHead = ["Nome", "Usuário", "Perfil", "Data de cadastro" ];
    
    return (
        
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Todos os Usuários</Box>

                <GlobalTable tableHead={tableHead}/>
            </Box>
        </Center>
        
    );
}