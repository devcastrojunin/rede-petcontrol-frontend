
import { useEffect } from "react"
import { Box, Center} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GlobalTable from "../../components/GlobalTable";


export default function Clientes() {
    let tableHead = ["Nome", "Email", "Endereço", "Pets"]

    useEffect(() => {
        axios
        .get(
            "https://rocky-savannah-85609.herokuapp.com/api/v1/clientes")
        .then(res => {
            console.log(res.data)
        })
        .catch(e => console.log(e))
    }, [])

    const navigate = useNavigate();
  
    let tableHead = ["Nome", "Email", "Endereço", "Pets" ];

  
    const goToAdd = () => navigate('/clientes/cadastrar')
    return (
        <Center>
            <Box w="75%" h="100%">
                <Box fontWeight="bold" fontSize="30px" mb={61} mt={10} pl={4}>Todos os Clientes</Box>
                
                <GlobalTable tableHead={tableHead} goToAdd={goToAdd}/>
            </Box>
        </Center>
    )
}
