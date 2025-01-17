import { Link } from "react-router-dom";
import React from "react";
import { Center, Box, Heading } from "@chakra-ui/react";
import ToggleModeDark from "./ToggleModeDark";

const MainHeader = () => {
    return (
        <>
            <Box right="0" left="0" w="100%" backgroundColor="teal.400"  boxShadow="dark-lg">
                <Box marginLeft="9rem">
                <Link to="/home">Logo</Link>
                </Box>
                <Center>
                    <Heading marginBottom="2rem">Main Header</Heading>
                </Center>
                <ToggleModeDark />
            </Box>
        </>
    );
};

export default MainHeader;
