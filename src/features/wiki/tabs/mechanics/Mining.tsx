import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { images } from 'assets'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'

export const Mining: React.FC = () => {
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
        <Flex fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          Mining
        </Flex>
        <Text mb={4}>
          You need pickaxe to mine rocks. Only specific rocks at specific locations can be mined.
        </Text>
        <Text mb={4}>
          Main spot for mining is dwarven mine at north-east part of the island.
        </Text>
        <Flex mb={4} alignItems="center">
          From mining you can get
          <Image src="https://tibiopedia.pl/images/static/items/iron_ore.gif" ml={1} />
          iron ores and
          <Image src="https://tibiopedia.pl/images/static/items/coal.gif" ml={2} mr={2} />
          coal.
        </Flex>
        <Text mb={4}>
          You can use them to craft various items or alternatively they can be sold to players or Warden NPC. Rocks respawn at random time from 9 to 11 minutes.
        </Text>
        <Flex justifyContent="center">
          <Image src={images.mining} />
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Mining}
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
