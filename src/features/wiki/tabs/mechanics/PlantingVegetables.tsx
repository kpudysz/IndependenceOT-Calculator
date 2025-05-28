import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { images } from 'assets'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'

export const PlantingVegetables: React.FC = () => {
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
          Planting Vegetables
        </Flex>
        <Text mb={2}>
          You can plant all vegetables whenever fields are empty.
        </Text>
        <Flex mb={2} flexWrap="wrap" alignItems="center">
          <Text>
            To plant vegetable you will need a
          </Text>
          <Text>
            hoe and a vegetable of your choice.
          </Text>
        </Flex>
        <Text mb={2}>
          You can purchase hoe from Willy for 800 gp.
        </Text>
        <Text mb={2}>
          Put vegetable on empty field then click on the hoe and select "use with", then select vegetable.
        </Text>
        <Text mb={6}>
          Vegetable will start growing and you will be able to gather it after 6 hours.
        </Text>
        <Flex mb={2} alignItems="center">
          There is a way to speed up growth process by using fertilizer
          bone meal on growing vegetable.
        </Flex>
        <Text mb={2}>
          Fertilizer has roughly 30% chance of success. If it succeeds growth will speed up to the next stage.
        </Text>
        <Text mb={2}>Planted vegetables have three stages, when they are planted, growing and when they are ready to be harvested.</Text>
        <Text mb={4}>When vegetables are ready you will gain 5-25 XP and 1-5 of the vegetable that you have planted.</Text>
        <Text mb={4}>Vegetables can be eaten or sold to NPC Willy at a price of 10 gp/each.</Text>
        <Flex justifyContent="center">
          <Image src={images.growingVegetables} />
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.PlantingVegetables}
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
