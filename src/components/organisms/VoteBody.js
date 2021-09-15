import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Select,
  Input,
  HStack,
  Circle,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";
const VoteBody = () => {
  const comEth = useContext(ComEthContext);
  const [id, setId] = useState("");
  const [proposal, setProposal] = useState({
    nbYes: null,
    NbNo: null,
    statuVote: null,
    createdAt: "",
    autor: "",
    title: "",
    receiver: "",
    amount: 0,
  });
  const [choice, setChoice] = useState("");

  const handleChangeId = (e) => {
    try {
      setId(e.target.value);
    } catch (e) {
      console.log(e.error);
    }
  };

  const handleClickSearchId = async () => {
    setProposal(proposal);
    console.log("ok", id, proposal);
    try {
      let ide = await comEth.proposalById(id);
      const pr = ide.toString().split(",");

      setProposal({
        ...proposal,
        nbYes: pr[0],
        NbNo: pr[1],
        statuVote: pr[2],
        createdAt: pr[3],
        autor: pr[4],
        title: pr[5],
        receiver: pr[6],
        amount: pr[7],
      });
    } catch (e) {
      console.log(e.error);
    }
  };
  const handleChangeChoice = (e) => {
    try {
      setChoice(Number(e.target.value));
    } catch (e) {
      console.log(e.error);
    }
  };
  const handleClickVote = async () => {
    try {
      await comEth.vote(id, choice);
    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <>
      <Center>
        <Box
          ml={{ base: "5rem", lg: "12rem" }}
          fontWeight="bold"
          mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        >
          ID de la proposition*
          <Input
            w="15%"
            onChange={handleChangeId}
            placeholder="1"
            ml="3rem"
            mr="1rem"
            position="static"
          ></Input>
          <Button
            onClick={handleClickSearchId}
            position="static"
            m={{ base: "1rem", sm: "2rem", md: "0" }}
          >
            Cherchez
          </Button>
        </Box>
      </Center>
      <Center>
        <Box
          mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
          ml={{ sm: "0rem", md: "4rem" }}
          boxShadow="lg"
          w={{ base: "20rem", sm: "30rem", lg: "40rem" }}
          backgroundColor="blackAlpha.200"
          position="static"
          rounded="md"
        >
          <FormControl w={{ base: "17rem", sm: "32rem" }} margin="2rem">
            <FormLabel fontWeight="bold" fontSize="lg" margin="1rem">
              {proposal.title}
            </FormLabel>
            {proposal.statuVote === "0" ? (
              <>
                <HStack column="row" position="static">
                  <Circle
                    p="2%"
                    mt="2%"
                    mb="4%"
                    w="2%"
                    backgroundColor="orange"
                  ></Circle>{" "}
                  <Box mt="2%">Proposition toujours en cours de vote</Box>
                </HStack>
              </>
            ) : proposal.statuVote === "1" ? (
              <>
                <HStack column="row" position="static">
                  <Circle
                    p="2%"
                    mt="2%"
                    mb="4%"
                    w="2%"
                    backgroundColor="green"
                  ></Circle>{" "}
                  <Box mt="2%">Proposition votée et validée</Box>
                </HStack>
              </>
            ) : proposal.statuVote === "2" ? (
              <>
                <HStack column="row" position="static">
                  <Circle
                    p="2%"
                    mt="2%"
                    mb="4%"
                    w="2%"
                    backgroundColor="red"
                  ></Circle>{" "}
                  <Box mt="2%">Proposition votée et refusée</Box>
                </HStack>
              </>
            ) : (
              ""
            )}
            <Box
              fontWeight="bold"
              w={{ sm: "80%", md: "79%", lg: "80%" }}
              backgroundColor="teal.400"
              rounded="md"
              mb="2%"
            >
              Auteur de la proposition : {proposal.autor}
            </Box>
            <Box
              fontWeight="bold"
              w={{ sm: "80%", md: "79%", lg: "80%" }}
              backgroundColor="teal.400"
              rounded="md"
              mb="2%"
            >
              Montant de la proposition : {proposal.amount / 10 ** 18} ETH
            </Box>
            <Box
              fontWeight="bold"
              w={{ sm: "80%", md: "79%", lg: "80%" }}
              backgroundColor="teal.400"
              rounded="md"
              mb="2%"
            >
              Durée de la proposition : {proposal.createdAt}
            </Box>
            <Select
              boxShadow="lg"
              margin="1rem"
              fontSize={{ base: "15px" }}
              w={{ sm: "60%", md: "59%", lg: "80%" }}
              placeholder="Selectionnez votre réponse"
              onChange={handleChangeChoice}
            >
              <option value={"1"}>Oui</option>
              <option value={"0"}>Non</option>
            </Select>
            <Box
              fontWeight="bold"
              w={{ sm: "80%", md: "79%", lg: "80%" }}
              backgroundColor="teal.400"
              rounded="md"
              mb="2%"
            >
              Destinataire des fonds de la proposition :
            </Box>
            <Box>{proposal.receiver}</Box>
            {proposal.statuVote === "0" ? (
            <Center>
              <Button
                onClick={handleClickVote}
                boxShadow="lg"
                margin="2re"
                _hover={{ bg: "#21bdbf" }}
              >
                Votez
              </Button>
            </Center>) : "" }
          </FormControl>
        </Box>
      </Center>
    </>
  );
};

export default VoteBody;
