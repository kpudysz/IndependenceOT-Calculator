import { Box, Divider, Flex, Link, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import React from 'react'
import { SuggestChanges, WikiMenu } from '../components'
import { useSendSuggestion } from '../hooks'

export const Welcome: React.FC = () => {
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
      >
        <Text fontSize="4xl" fontWeight="bold" mb={10} textAlign="center">
          Welcome
        </Text>
        <Text margin="20px 0 20px" fontSize="2xl" fontWeight="bold">
          Rookgaard Independence Wiki
        </Text>
        <Text fontSize="lg">
          This wiki is a community-driven project to document the game on <Link color={colors.orange} href="https://rookgaard.live">Rookgaard Independence</Link>.
        </Text>
        <Text fontSize="lg" mt="10px">
          If you are new player, we recommend you to check out Getting Started and Basics section to know the most important things about the game.
        </Text>
        <Text fontSize="lg" mt="10px">
          We are open minded and trying our best to provide accurate and up-to-date information about the game.
          If you ever feel like something is outdated or can be put in better words, don't hesitate to use Suggest Changes at the bottom of the page or reach me on discord.
          For best player experience we recommend you to join local community on <Link color={colors.orange} href={"https://discord.com/invite/AeEFxZje5J"}>Discord</Link>.
        </Text>
        <Text fontSize="lg" mt="10px">Guntrip</Text>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Welcome}
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
