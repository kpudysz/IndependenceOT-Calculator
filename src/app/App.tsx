import React from 'react'
import { ChooseCalculator } from '../features'
import { ChakraProvider, Flex, theme } from '@chakra-ui/react'
import { images } from '../assets'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App: React.FunctionComponent = () => (
    <Flex minHeight="100vh" width="auto" flexDirection="column" backgroundImage={images.background} backgroundSize="cover">
        <ToastContainer />
        <ChakraProvider theme={theme}>
            <ChooseCalculator/>
        </ChakraProvider>
    </Flex>
)
