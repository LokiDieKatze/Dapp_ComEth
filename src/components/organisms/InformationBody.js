import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PeopleButton from "../atoms/PeopleButton";
import BudgetButton from "../atoms/BudgetButton";
import StatsButton from "../atoms/StatsButton";

const InformationBody = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        spacing="40px"
        mr={{ base: "1rem", sm: "3rem" }}
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        ml={{ base: "1rem", sm: "3rem", md: "10rem", lg: "12rem" }}
      >
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height="90%">
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="#2ac9c7"
            mb={{ base: "25%", sm: "25%" }}
          >
            Ici sont les proposition déjà voter avec leurs paramettres
          </Box>
          <StatsButton />
        </Box>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height="90%">
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="#2ac9c7"
            mb={{ base: "25%", sm: "25%" }}
          >
            Ici c'est pour voir les budgets utilisé et totaux
          </Box>{" "}
          <BudgetButton />
        </Box>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height="90%">
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="#2ac9c7"
            mb={{ base: "25%", sm: "25%" }}
          >
            Ici c'est pour voir qui est actif, qui est banni, qui fait partie de
            ta ComEth
          </Box>
          <PeopleButton />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default InformationBody;
