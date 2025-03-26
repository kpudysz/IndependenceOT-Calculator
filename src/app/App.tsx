import React from 'react'
import { ChooseCalculator } from '../features'
import { ChakraProvider, Flex, theme } from '@chakra-ui/react'
import { images } from '../assets'

export const App: React.FunctionComponent = () => (
    <Flex minHeight="100vh" width="auto" flexDirection="column" backgroundImage={images.background} backgroundSize="cover">
        <ChakraProvider theme={theme}>
            <ChooseCalculator/>
        </ChakraProvider>
    </Flex>
)
