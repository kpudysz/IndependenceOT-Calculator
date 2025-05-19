import { ChakraProvider, Flex, theme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'lib/api/axios'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { images } from '../assets'
import { ChooseCalculator } from '../features'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            staleTime: Infinity
        }
    }
})

export const App: React.FunctionComponent = () => (
    <Flex
        background={`linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${images.background}) no-repeat center top`}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        minHeight="100vh"
        width="auto"
        flexDirection="column"
    >
        <ToastContainer />
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <ChooseCalculator />
            </QueryClientProvider>
        </ChakraProvider>
    </Flex>
)
