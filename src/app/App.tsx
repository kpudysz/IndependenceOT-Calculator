import React from 'react'
import { ChooseCalculator } from '../features'
import { ChakraProvider, Flex, theme } from '@chakra-ui/react'

export const App: React.FunctionComponent = () => (
    <Flex height="100vh" width="auto" flexDirection="column" backgroundColor="black">
        <ChakraProvider theme={theme}>
            <ChooseCalculator/>
        </ChakraProvider>
    </Flex>
)
