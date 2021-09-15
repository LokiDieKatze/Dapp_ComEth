import React from 'react';
import {  Circle} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const ProposButton = () => {
    return (
        <>
            <Link to="/proposition">
            <Circle as="button" fontWeight="bold" backgroundColor="whiteAlpha.700" w="85%" m="7%" padding="3%"  _hover= {{bg:"#21bdbf"}} _selected={{bg:"#17d4c7"}} >Propositions</Circle>
            </Link>
        </>
    );
};

export default ProposButton;