import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
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
          Basics
        </Text>
        <Text mb={4} fontSize="2xl">
          Choosing your first charm
        </Text>
        <Flex mt="20px" alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/monsters/war_wolf.gif" mr="10px" />
          Most people pick Wolf Whispering as their first charm.
          Wolf whispering gives high boost to damage and therefore is often picked as the first charm.
          You can get your first charm around level 20-25 if you decide to kill various creatures evenly.
          It allows you to tame a wolf that will help you fight enemies on your journey.
          For more information about charms check out section Charms.
        </Flex>
        <Text mt="20px" fontSize="2xl">
          New mechanics
        </Text>
        <Text mt="20px">
          There are many new mechanics added - Auto loot, fishing, herbalism, collecting branches, new cooking recipes, woodcutting, mining, skinning, planting vegetables, watering fruits, alchemy, crafting items, reaping, making rum, opening world changes and others.
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
        <Flex mt="20px" alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/mounts/rented_horse.gif" mr="10px" />
          The easiest way to get your first mount it to rent a horse from a Seymour.
          Renting a horse lasts for 24 hours, and costs 500gp.
        </Flex>
        <Flex mt="20px" alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/mounts/rapid_boar.gif" mr="10px" />
          Easiest permanent mount to acquire is Rapid Boar.
        </Flex>
        <Flex alignItems="center">
          You can get it by giving Horatio 100 <Image src="https://tibiopedia.pl/images/static/items/rabbits_foot.gif" /> Rabbit's Foot for <Image src="https://tibiopedia.pl/images/static/items/hunting_horn.gif" p="0 6px" /> Hunting Horn.
        </Flex>
        <Flex alignItems="center">
          After that activate Pig World Change, meet <Image src="https://tibiopedia.pl/images/static/monsters/boar.gif" p="0 6px" /> The Hog and catch him by using <Image src="https://tibiopedia.pl/images/static/items/hunting_horn.gif" p="0 6px" /> Hunting Horn.
        </Flex>
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
