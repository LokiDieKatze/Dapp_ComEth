import { Text, Box, Popover, PopoverTrigger, Circle, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody,PopoverFooter
     } from "@chakra-ui/react";
   import React ,
   { useState } 
   from "react";
   import { LinkIcon } from '@chakra-ui/icons'
const ComEthAddressPopover = () => {

  const [localAddress, setLocalAddress] = useState(JSON.parse(localStorage.getItem("AddressComEth")) || null)

  const handleChangeAddress = () =>{
    setLocalAddress(JSON.parse(localStorage.getItem("AddressComEth")))
  }

    return (
        <>
            <Box ml={{base:"3rem", md:"10rem",lg:"11rem"}} mt="1%">
      <Popover>
  <PopoverTrigger>
    <Circle backgroundColor="whiteAlpha.800" w={{base:"8%",sm:"5%", lg:"2%"}} p={{base:"1%",sm:"1%", lg:"0.5%"}} boxShadow="inner">
  <LinkIcon />
  </Circle>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>L'addresse Ethereum de votre Communauté</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <Text onChange={handleChangeAddress}>{localAddress}</Text>
      </PopoverBody>
      <PopoverFooter>À partager pour agrandir votre ComEth !</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
      </Box>
        </>
    );
};

export default ComEthAddressPopover;