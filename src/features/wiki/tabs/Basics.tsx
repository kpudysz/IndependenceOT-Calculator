import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import { colors } from "common/constants"
import React from 'react'
import { SuggestChanges, WikiMenu } from "../components"
import { useSendSuggestion } from '../hooks'

export const Basics: React.FC = () => {
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
          Basics
        </Text>
        <Text mb={4} fontSize="2xl">
          Choosing your first charm
        </Text>
        <Text mt="20px">
          Most people pick Wolf Whispering as their first charm.
          Wolf whispering gives high boost to damage and therefore is often picked as the first charm.
          You can get your first charm around level 20-25 if you decide to kill various creatures evenly.
          It allows you to tame a wolf that will help you fight enemies on your journey.
          For more information about charms check out section Charms.
        </Text>
        <Text mt="20px" fontSize="2xl">
          New mechanics
        </Text>
        <Text mt="20px">
          There are many new mechanics added - Auto loot, fishing, herbalism, collecting branches, new cooking recipes, woodcutting, mining, skinning, planting vegetables, watering fruits, alchemy, crafting items, reaping, making rum, opening world changes and probably many others.
        </Text>
        <Text mt="20px">
          Each of these have their specific section, and while it might be overwhelming at first it's just a bonus content that still fits to entire rookgaard theme.
          The changes are non-invasive and don't invalidate your everyday gameplay.
          Feel free to explore them at your own pace.
          For example you can collect flowers, gain 5 experience from it and gain ingredient for alchemy that you can sell to NPC.
        </Text>
        <Text mt="20px" fontSize="2xl">
          Getting your first mount
        </Text>
        <Text mt="20px">
          The easiest way to get your first mount it to rent a horse from a Seymour.
          Renting a horse lasts for 24 hours, and costs 500gp.
        </Text>
        <Text mt="20px">
          Easiest permanent mount to acquire is Rapid Boar.
          You can get it by giving Horatio, 100 Rabbit foot (Requires skinning knife) for Hunting Horn.
          After that activate Pig World Change, try to meet The Hog and catch him by using Hunting Horn.
        </Text>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Basics}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          onSend={(content, source, author) => sendSuggestion({ content, source, author })}
        />
      </Box>
    </Flex>
  )
}
