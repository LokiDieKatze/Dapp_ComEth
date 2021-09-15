import React from 'react';
import {  Circle} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const InfoButton = () => {
    return (
        <>
            
            <Link to="/info">
            <Circle as="button" fontWeight="bold" backgroundColor="whiteAlpha.700" w="85%" mt="5%" ml="7%" padding="3%"   _hover= {{bg:"#21bdbf"}} _selected={{bg:"#17d4c7"}} >Infos</Circle>
            </Link>
        </>
    );
};

export default InfoButton;