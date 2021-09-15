import React from 'react';
import {  Circle} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const PeopleButton = () => {
    return (
        <>
            <Link to="/people">
                <Circle as="button" fontWeight="bold" backgroundColor="whiteAlpha.700" w="85%" m="3%" ml="7%" padding="3%"   _hover= {{bg:"#21bdbf"}} _selected={{bg:"#17d4c7"}} >Membres</Circle>
            </Link>
        </>
    );
};

export default PeopleButton;