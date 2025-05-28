import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'

export const Cooking: React.FC = () => {
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
        <Flex fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          Cooking
        </Flex>
        <Text mb={4}>
          There are four additional recipes added. Two types of pastry and two types of cheese.
          Pastry can be created in the same way as you make bread but require achievement that you get after making a lot of bread.
          After gaining achievement you will have 2% chance to make one of the new pastry.
        </Text>
        <Text mb={4}>
          You can find how to make new cheese types in the city library along with the recipe.
        </Text>
        <Text mb={4}>
          Here is the list of the new recipes:
        </Text>
        <Flex flexDirection="column" gap={2}>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/brown_bread.gif" mr={2} />
            Brown Bread
          </Flex>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/roll.gif" mr={2} />
            Roll
          </Flex>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/rat_cheese.gif" mr={2} />
            Cheddar Cheese
          </Flex>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/soft_cheese.gif" mr={2} />
            Camembert Cheese
          </Flex>
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Cooking}
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
