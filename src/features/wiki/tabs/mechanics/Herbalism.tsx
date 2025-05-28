import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { images } from 'assets'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'

export const Herbalism: React.FC = () => {
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
          Herbalism
        </Flex>
        <Flex mb={4} alignItems="center">
          You can gather
          <Image src="https://tibiopedia.pl/images/static/items/moon_flower.gif" />
          moon flowers and
          <Image src="https://tibiopedia.pl/images/static/items/heaven_blossom.gif" />
          heaven blossoms from the ground.
        </Flex>
        <Text mb={4}>
          To gather flower right click it. For each gathered flower you will gain one flower in your inventory and 5 experience.
        </Text>
        <Text mb={4}>
          Flowers will respawn in the same spot after 60 minutes.
        </Text>
        <Text mb={4}>
          You can use these flowers for crafting potions or sell them to players/NPCs.
        </Text>
        <Flex justifyContent="center">
          <Image src={images.herbalism} />
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Herbalism}
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
