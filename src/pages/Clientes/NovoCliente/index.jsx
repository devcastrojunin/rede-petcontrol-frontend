import { Box, Center} from "@chakra-ui/react";
import { FormClientes } from "../../../components/FormClientes";

export default function Novo() {

    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Cadastre um novo cliente</Box>

                <Box width={800} lineHeight={8}>
                    <FormClientes button="Cadastrar"/>
                </Box>
            </Box>
        </Center>
    );
}