import { Box, Center} from "@chakra-ui/react";
import { FormPets } from "../../../components/FormPets";

export default function Editar() {
    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Editar pet</Box>

                <Box width={400} lineHeight={8}>
                    <FormPets button="Salvar"/>
                </Box>
            </Box>
        </Center>
    );
}