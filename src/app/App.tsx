import React from 'react'
import { Calculator } from '../features'
import { ChakraProvider, Flex, theme } from '@chakra-ui/react'

export const App: React.FunctionComponent = () => (
    <Flex height="100vh" width="auto" flexDirection="column" backgroundColor="lightgrey">
        <ChakraProvider theme={theme}>
            <Calculator/>
        </ChakraProvider>
    </Flex>
)
