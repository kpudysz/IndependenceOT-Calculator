import { Box, Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { colors } from "common/constants"
import React from 'react'
import { SuggestChanges, WikiMenu } from "../components"
import { useSendSuggestion } from '../hooks'

export const GettingStarted: React.FC = () => {
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
        <Text fontSize="4xl" fontWeight="bold" mb={10} textAlign="center">
          Getting Started
        </Text>
        <Text mb={4}>
          The beginning is very similar to usual gameplay on rookgaard, the best thing that you can do at beginning is to get basic equipment which will help you for a while.
          There is better equipment available but it takes a while to aquire it.
          When chosing the starting weapon axes, clubs and swords are viable options since hatchet, mace and katana have 16 atk.
          We recommend that you get following items:
        </Text>
        <UnorderedList>
          <ListItem>Legion Helmet</ListItem>
          <ListItem>Chain Armor</ListItem>
          <ListItem>Studded Legs</ListItem>
          <ListItem>Leather Boots</ListItem>
          <ListItem>Copper Shield</ListItem>
          <ListItem>Katana - Mace - Hatchet up to your choice</ListItem>
        </UnorderedList>
        <Text mt="10px">
          One of the differences on IndependenceOT is that you actually need light source when exploring the caves.
          Make sure you carry some torches with you. Later on there are better light sources available.
        </Text>
        <Text mt="10px">
          There is option to loot items automatically called autoloot.
          To use it you need to right click on the item that you want to collect and choose "Add to autoloot".
          Whenever a monster drops selected item it will automatically appear in your inventory, if you don't have capacity you will see read warning on your screen.
          To learn more about autoloot check out section Autoloot.
        </Text>
        <Divider my={4} />
        <Text mt="20px">
          After that there are various options on what to do next.
          Most players choose to earn some gold or explore the new areas added on rookgaard.
        </Text>
        <Text mt="20px" fontSize={"xl"}>
          Earning gold and why do you need it
        </Text>
        <Text mt="20px">
          Main reason why you need gold is to purchase a house.
          Since offline training is only available by using bed and skills are important early in the game, it is recommended to buy one as fast as possible.
          Cheapest houses cost from 20k to even 120k gold.
        </Text>
        <Text>
          Another reason is because there are many tools that will help you along the way.
          Skinning knife is often the next purchase since it allows you to skin killed creatures and obtain creature products from them (similar to obsidian knife).
          It's worth to mention that it's possible to skin way more creatures than normally, and you can skin spiders, deers, orcs, trolls and many others.
          Creature products are either used for addons or you can sell them to Tom, in order to activate certain world changes the following day.
          Skinning knife costs 50k and you can buy it from Stephan near the wasp tower.
        </Text>
        <Text mt="20px">
          The last items that players try to buy quickly are Bestiary Book (can be bought from Stephan) and Achievement Book (can be bought from Vascalir).
          Bestiary Book contains a record of all creatures/bosses that you killed and how many have you killed.
          Achievement Book contains a record of all achievements that you have completed and which achievements are possible to get.
          Some achievements are secret, and cannot be seen unless you get them.
          Bestiary Book costs 10k and Achievement Book is quite cheap priced at 1234gp.
        </Text>
        <Text mt="20px">
          After that gold is mainly used to trade with players to get items that you might need.
        </Text>
        <Text mt="20px">
          Currently best gold making way is to help high level players and collect some things that they need. Some things are always sought after so don't throw them away.
        </Text>
        <UnorderedList>
          <ListItem>Collecting Brass Helmet/Brass Shields - usually 500gp/each</ListItem>
          <ListItem>Collecting Honeycombs - usually 400gp/each</ListItem>
          <ListItem>Fishing, selling rare fish - usually 50gp/each</ListItem>
          <ListItem>Mining iron ore(300-350gp/each), coal(40-50gp/each) or selling it to NPC for 250gp/20gp</ListItem>
          <ListItem>Crafting rum from sugar cane</ListItem>
          <ListItem>Delivering letters from NPC Haste to NPC's (50gp/letter)</ListItem>
          <ListItem>Hunting bosses</ListItem>
        </UnorderedList>
        <Text mt="20px">
          To read more about exploring new areas, check out section World Changes. These areas are easy to find and offer a lot of new content.
        </Text>
        <Text mt="20px">
          Players after a bit of time choose their own way of gameplay, so here is the list what people usually focus on:
        </Text>
        <UnorderedList>
          <ListItem>
            Hunting Bosses
          </ListItem>
          <ListItem>
            Leveling
          </ListItem>
          <ListItem>
            Playing as pacifist - leveling without killing any monsters
          </ListItem>
          <ListItem>
            Fishing
          </ListItem>
          <ListItem>
            Completing as much bestiary as possible
          </ListItem>
          <ListItem>
            Completing achievements
          </ListItem>
          <ListItem>
            Finding and solving mysteries
          </ListItem>
        </UnorderedList>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.GettingStarted}
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
