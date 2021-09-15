import React, { useContext} from "react";
import { Circle, Center, useToast} from "@chakra-ui/react";
import { ComEthContext } from "../../context/ComEthContext";
import { Web3Context } from "web3-hooks";

const AddUserAndPay = () => {
  const [web3State] = useContext(Web3Context);
  const comEth = useContext(ComEthContext);
  const toast = useToast();

  const handleAddUser = async (isLoadingAd) => {
    try {
      await comEth.addUser();
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: "Transaction refusé à la signature",
          description: e.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }else {
        toast({
          title: "Vous faites déjà partie de la ComEth",
          description: "Vous êtes déjà un membre à part entière de cette ComEth !",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      console.log(e.error);
    }
  };
  const handleClickPay = async () => {
   const get = await comEth.getAmountToBePaid(web3State.account);
   console.log(get.toString());
    try {
      const get = await comEth.getAmountToBePaid(web3State.account)
      await comEth.pay({value : get._hex});
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: "Transaction refusé à la signature",
          description: e.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Vous avez déjà régularisé votre situation pour ce moi",
          description: "Vous avez déjà payé, attendez le moi prochain avant de régulariser votre situation",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      console.log(e.error);
    }
  };


  return (
    <>
      <Center>
        <Circle
          onClick={handleAddUser}
          backgroundColor="blackAlpha.300"
          w={{base:"40%",md:"20%"}}
          mr={{base:"0.5rem",md:"2rem"}}
          mt="2rem"
          p="1rem"
          textAlign="center"
          fontWeight="bold"
          _hover= {{bg:"#1e3b45"}}
        >
          {" "}
          Se rajouter
        </Circle>
        <Circle
          onClick={handleClickPay}
          w={{base:"50%",md:"20%"}}
          backgroundColor="blackAlpha.300"
          p="1rem"
          mt="2rem"
          textAlign="center"
          fontWeight="bold"
          _hover= {{bg:"#1e3b45"}}
        >
          {" "}
          Se mettre à jour
        </Circle>
      </Center>
    </>
  );
};

export default AddUserAndPay;
