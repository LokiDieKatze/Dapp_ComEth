import { Circle, Center } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Center>
        <Circle  fontWeight="bold" backgroundColor="whiteAlpha.200" m={{base:"0.8rem",lg:"1rem"}} w={{base:"4rem",lg:"5rem"}} h={{base:"4rem",lg:"5rem"}} textColor="whiteAlpha.400" _selected={{bg:"#17d4c7"}} >
          <Link to="/home">Logo</Link>
        </Circle>
      </Center>
    </>
  );
};

export default Logo;
