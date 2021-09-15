import {
    Box,
    Center,
    Circle,
    Input,
    Button,
    Stack,
  } from "@chakra-ui/react";
  import { useContext, useState } from "react";
  import { ComEthContext } from "../../context/ComEthContext";
  

const PoepleBody = () => {
    const [active, setActive] = useState("")
    const [estActif, setEstActif] = useState(null)
    const comEth = useContext(ComEthContext);
  
    const handleAddress = (e) => {
      try {
        setActive(e.target.value)
      }catch(e){
      }
    }

    const handlActive = async (e) => {
      
      try {
       const act =  await comEth.getUser(active);
       setEstActif(act.hasPaid)
       console.log("banni ou pas :", act.hasPaid)
      } catch (e) {
        console.log(e.error);
      }
    };

    return (
        <>
            <Box
        rounded="md"
        boxShadow="lg"
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        ml={{ sm: "3rem", md: "11rem", lg: "19rem" }}
        w={{ sm: "80%", md: "75%", lg: "40%" }}
        backgroundColor="blackAlpha.200"
        p="1rem"
      >
        <Center>
        <Box backgroundColor="#2ac9c7" rounded="md" p="1rem" fontWeight="bold" m="1rem">Activités au seint de la ComEth</Box>
        </Center>
        <Box >
          <Box ml={{ md: "1rem" }}>
            <Box padding="1rem" fontWeight="black">
              Voir qui est Actif :
            </Box>
            <Stack direction="row">
              <Input
                onChange={handleAddress}
                backgroundColor="teal.600"
                placeholder="0x0..."
                ></Input>
              <Button
              onClick={handlActive}
              backgroundColor="whiteAlpha.300"
              _hover={{ bg: "#21bdbf" }}
              >
                Chercher
              </Button>
            </Stack>
                {estActif === true ? (
                  <Circle
                    w={{ sm: "57%", md: "41%", lg: "42%" }}
                    m="0.5rem"
                    backgroundColor="green"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    Est actif
                  </Circle>
                ) : estActif === false ? (
                  <Circle
                    w={{ sm: "59%", md: "37%", lg: "40%" }}
                    m="0.5rem"
                    backgroundColor="red.600"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    N'est pas actif
                  </Circle>
                ) : ""}
          </Box>
        </Box>
      </Box>
        </>
    );
};

export default PoepleBody;