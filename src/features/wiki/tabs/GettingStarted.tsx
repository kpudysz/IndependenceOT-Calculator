import React from 'react'
import { SuggestChanges } from "../components"
import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import { colors } from "common/constants"

export const GettingStarted: React.FC = () => (
    <Flex justify="center" align="flex-start" w="100%" h="100%">
      <Box
          border="1px solid #9CA0A6"
          borderRadius="lg"
          maxW="900px"
          color={colors.text}
          minW="800px"
          w="100%"
          bg={colors.background}
          p={8}
          boxShadow="md"
        >
        <Flex fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          Getting Started
        </Flex>
        <Text mb={4}>
          Example
        </Text>
        <Divider my={4} />
        <SuggestChanges/>
      </Box>
    </Flex>
  )
