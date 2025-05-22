import { Box, Divider, Flex, Text, Tooltip } from "@chakra-ui/react"
import { faFileContract } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        width={{ base: '100%', md: '90%', lg: '900px' }}
        maxWidth="900px"
        color={colors.text}
        bg={colors.background}
        p={{ base: 2, md: 6, lg: 8 }}
        boxShadow="md"
        fontSize={{ base: 'md', md: 'lg' }}
        overflowX="auto"
      >
        <Text fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          Commands
        </Text>
        <Text mb={4}>
          !loot - enables/disables loot information on the middle of the screen.
        </Text>
        <Text mb={4}>
          !time - command which shows your total time spend in game.
        </Text>
        <Text mb={4}>
          !autoloot add, "itemname" - for example !autoloot add, gold coin. Adds selected item to your autoloot list.
        </Text>
        <Text mb={4}>
          !autoloot remove, "itemname" - for example !autoloot remove, gold coin. Removes selected item from your autoloot list.
        </Text>
        <Text mb={4}>
          !autoloot show - shows list of items that are on your autoloot list.
        </Text>
        <Text mb={4}>
          !autoloot clear - clears your autoloot list.
        </Text>
        <Text mb={4}>
          !online - show information about current number of online players.
        </Text>
        <Text mb={4}>
          !uptime - shows how long the server has been online.
        </Text>
        <Text mb={4}>
          !pos or /pos - shows your current position, might be sometimes useful when reporting a bug.
        </Text>
        <Text mb={4}>
          !serverinfo - command used to check server rates
        </Text>
        <Text mb={6}>
          !kills - command used to check unjustified kills
        </Text>
        <Text fontSize="3xl" mb={4}>
          House Commands
        </Text>
        <Text mb={4}>
          Use these commands in front of the house door:
        </Text>
        <Text mb={4}>
          !buyhouse - command used to purchase empty house
        </Text>
        <Text mb={4}>
          !sellhouse - command used to sell house to another player
        </Text>
        <Text mb={4}>
          !leavehouse - command used to leave house
        </Text>
        <Text mb={4}>
          aleta grav - used to set players that can open doors that you are in front of, that person must have permission to enter the house or it won't work.
        </Text>
        <Text fontSize="3xl" mb={4}>
          Use these commands inside your house:
        </Text>
        <Text mb={4}>
          aleta sio - used to set players that can enter the house
        </Text>
        <Text mb={4}>
          aleta som - used to set players that are subowners of your house, they will have permissions to invite other players to your house
        </Text>
        <Text mb={8}>
          alana sio "nickname" - used to kick player name from your house. It can be used on yourself when you get stuck as well as other players, or to leave your house quicker.
        </Text>
        <Flex justifyContent="flex-end">
          <Tooltip label="Created by Mdrake and Zosix" fontSize="md" hasArrow>
            <FontAwesomeIcon icon={faFileContract} />
          </Tooltip>
        </Flex>
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
