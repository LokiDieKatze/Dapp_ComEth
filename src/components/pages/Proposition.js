import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import PropositionTemplate from "../templates/PropositionTemplate";
import { ComEthContext } from "../../context/ComEthContext";
const Proposition = () => {
  const comEth = useContext(ComEthContext);
  return (
    <>
      <Box minH="91.7vh" maxW="100%" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <PropositionTemplate />
        <NavLat />
      </Box>
    </>
  );
};
export default Proposition;
