import {
  Box,
  Circle,
  Center,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { ComEthContext } from "../../context/ComEthContext";
import { useContext, useEffect, useState } from "react";

//import { Web3Context } from "web3-hooks";
const ethers = require("ethers");
const SubmitProposalForm = () => {
  //   const [web3State] = useContext(Web3Context);
  const comEth = useContext(ComEthContext);

  // const [optionVote, setOptionVote] = useState([""]);;

  const [proposition, setProposition] = useState({
    // voteOption: optionVote,
    title: "",
    timeLimit: 0,
    target: "",
    sum: 0,
  });
  
  useEffect(() => {
    console.log(proposition);
  }, [proposition]);

  const handleChangeProposition = (e) => {
    try {
      // setOptionVote(optionVote)
      setProposition({ ...proposition, title: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChangeTimeLimit = (e) => {
    try {
      setProposition({ ...proposition, timeLimit: Number(e.target.value) });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangeAddressReceive = (e) => {
    try {
      setProposition({ ...proposition, target: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangeAmount = (e) => {
    try {
      setProposition({
        ...proposition,
        sum: ethers.utils.parseEther(e.target.value),
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmitAll = async () => {
    try {
      //fonction ComEth submitProposal a remplir grace au form voteOption,
      const {  title, timeLimit, target, sum } = proposition;
       await comEth.submitProposal(
        // voteOption,
        title,
        timeLimit,
        target,
        sum
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Center>
        <Box
          position="static"
          boxShadow="lg"
          backgroundColor="blackAlpha.200"
          padding="2rem"
          w={{ sm: "86%", md: "43rem", lg: "40rem" }}
          ml={{ sm: "0.5rem", md: "9rem" }}
          mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        >
          <FormLabel fontWeight="bold">
            Titre de proposition proposition
          </FormLabel>
          <Input
            onChange={handleChangeProposition}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            placeholder="Salle de sport ?"
            margin="1rem"
            position="static"
          />

          <FormLabel p="-0" fontWeight="bold">
            Choisir votre limie de temps
          </FormLabel>
          <Select
            onChange={handleChangeTimeLimit}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            margin="1rem"
          >
            <option value="604800">1 semaine</option>
            <option value="1209600">2 semaines</option>
            <option value="1814400">3 semaines</option>
            <option value="2419200">4 semaines</option>
          </Select>

          <FormLabel fontWeight="bold">Amount</FormLabel>
          <Input
            onChange={handleChangeAmount}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            placeholder="0.75"
            margin="1rem"
          />
          <FormLabel fontWeight="bold">Paiement reveiver</FormLabel>
          <Input
            onChange={handleChangeAddressReceive}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            placeholder="0x00...."
            margin="1rem"
          />
          <Center>
            <Circle
              as="button"
              backgroundColor="whiteAlpha.400"
              p="1rem"
              m="0.5rem"
              fontWeight="bold"
              onClick={handleSubmitAll}
              _hover={{ bg: "#21bdbf" }}
            >
              Valider
            </Circle>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default SubmitProposalForm;
