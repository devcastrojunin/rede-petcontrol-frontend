import { Box, Center } from "@chakra-ui/react";
import { FormClientes } from "../../../components/FormClientes";

export default function Editar() {
    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Editar cliente</Box>

                <Box width={400} lineHeight={8}>
                    <FormClientes button="Salvar"/>
                </Box>
            </Box>
        </Center>
    );
}