import { React, useEffect, useState } from "react";
import { Box, Circle, useToast, Input, Center, Text } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";

import { ComEthFactoryContext } from "../../App";
import { ComEthAddressContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";
import { ethers } from 'ethers';

const CreateComethForm = () => {
  const [created , setCreated ] = useState(false)
  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);
  const { comEthAddress, setComEthAddress } = useContext(ComEthAddressContext);
  const [subscriptionPrice, setSubscriptionPrice] = useState("");

  const toast = useToast();

  // subscription price parametter <------------------------
  const handleChangeSubscription = (e) => {
    setSubscriptionPrice(e.target.value.toString());
    console.log("ETH",e.target.value)
  };
  //-------------------------------------------------------------

  const handleClickCreate = async () => {
    try {
      let tx = await comEthFactory.createComEth(ethers.utils.parseEther(subscriptionPrice)); // <------------
      await tx.wait();
      toast({
        title: "Confirmed transaction",
        description: `Transaction hash: ${tx.hash}`, // hash de la transac
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: "Transaction signature denied",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      console.log(e);
      
    }
  };
  useEffect(() => {
    // si simpleStorage est pas null alors
    if (comEthFactory) {
      const cb = (ComEthAddress) => {
          setComEthAddress(ComEthAddress);
          localStorage.setItem("AddressComEth", JSON.stringify(ComEthAddress))
          toast({
            title: "Votre communauté à sa propre addresse Ethereum !",
            description: `L'addresse de votre communauté : ${ComEthAddress}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
      };
      // ecouter sur l'event DataSet
      comEthFactory.on("ComEthCreated", cb);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        comEthFactory.off("ComEthCreated", cb);
        setCreated(!created);
      };
    }
  }, [
    comEthFactory,
    web3State.account,
    toast,
    setComEthAddress,
    comEthAddress,
    created,
  ]);

  return (
    <>
      <Box
        boxShadow="lg"
        w={{ base: "90%", md: "35rem" }}
        p="1rem"
        ml="4%"
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        rounded="md"
        backgroundColor="blackAlpha.200"
      >
        <Box
          fontWeight="bold"
          fontSize={{ base: "md", sm: "lg" }}
          textAlign="center"
          m={{ base: "0.5rem", sm: "0" }}
          backgroundColor="teal.400"
          boxShadow="inner"
          p="0.5rem"
          rounded="md"
        >
          La souscription est le montant de l'adhésion mensuelle en Ethereum
        </Box>
        <Center>
          <Box
            boxShadow="lg"
            fontSize={{ base: "sm", sm: "lg" }}
            w={{ base: "90%", sm: "80%" }}
            p="1rem"
            mt="3rem"
            rounded="md"
            backgroundColor="teal.400"
          ><Text textAlign="center" mb={{base:"0.3rem", sm:"0"}}>
            Montant de la souscription
            </Text>
            <Input
              onChange={handleChangeSubscription}
              ml="2rem"
              mr="0.5rem"
              w="25%"
              placeholder="10"
            ></Input>
            ETH
          </Box>
        </Center>
        <Circle
          fontWeight="bold"
          textAlign="center"
          fontSize={{ base: "md", sm: "lg" }}
          backgroundColor="whiteAlpha.400"
          boxShadow="lg"
          onClick={handleClickCreate}
          _hover={{ bg: "#0db5aa" }}
          _selected={{ bg: "#17d4c7" }}
          p="0.5em"
          margin="2rem"
        >
          Créez votre ComEth
        </Circle>
      </Box>
      {created && <Redirect exact from="/create" to="/home" />}
    </>
  );
};

export default CreateComethForm;
