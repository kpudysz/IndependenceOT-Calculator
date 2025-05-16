import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import { colors } from "common/constants"
import React from 'react'
import { SuggestChanges, WikiMenu } from "../components"
import { useSendSuggestion } from '../hooks'

export const Commands: React.FC = () => {
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()

  return (
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
        fontSize="lg"
      >
        <Text fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          Commands
        </Text>
        <Text mb={4}>
          !time - command which shows your total time spend in game.
        </Text>
        <Text mb={4}>
          !autoloot (add,show,clear) for example !autoloot add, gold coin. For more info check section Autoloot.
        </Text>
        <Text mb={4}>
          !online - show information about current number of online players.
        </Text>
        <Text mb={4}>
          !uptime - shows how long the server has been online.
        </Text>
        <Text mb={4}>
          /pos - shows your current position, might be sometimes useful when reporting a bug.
        </Text>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Commands}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          onSend={(content, source, author) => {
            sendSuggestion({ content, source, author })
          }}
        />
      </Box>
    </Flex>
  )
}
