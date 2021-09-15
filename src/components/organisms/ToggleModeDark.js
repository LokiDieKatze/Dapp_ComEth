import { Circle, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ToggleModeDark = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Circle as="button" fontWeight="black" p="0.5rem" backgroundColor="blackAlpha.400" boxShadow="lg" onClick={toggleColorMode} pos="absolute" top="2" right="2">{colorMode === "light" ? "Dark" : "Light"}</Circle>
        </>
    );
};

export default ToggleModeDark;