import { Box, Divider, Flex, Image, ListItem, Text, Tooltip, UnorderedList } from '@chakra-ui/react'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { images } from 'assets'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'

export const Fishing: React.FC = () => {
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()

  return (
    <Flex justify="center" align="flex-start" w="100%" h="100%" px={[2, 4, 6]}>
      <Box
        border="1px solid #9CA0A6"
        borderRadius="lg"
        w="100%"
        maxW="900px"
        color={colors.text}
        bg={colors.background}
        p={[4, 6, 8]}
        boxShadow="md"
        fontSize={["md", "lg"]}
      >
        <Flex fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" mb={[6, 8, 10]} justifyContent="center">
          Fishing
        </Flex>
        <Text mb={4}>
          During fishing you may catch 4 types of fish, one standard and three rare.
        </Text>
        <Text mb={4}>
          Catching standard fish will give you +1 experience, catching rare fish will give you +10 experience.
          Rare fish are usually bought by players for 50gp/each or can be sold to Lily for 15gp/each.
        </Text>
        <Text mb={2}>
          Rare fish are also often used to exchange them for premium stickers from Frosch/Jeronimo NPC.
          These stickers are used to obtain mounts or nobleman addon.
        </Text>
        <Text mb={4}>
          Here is the list of available fish:
        </Text>
        <Flex mb={2} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/fish.gif" mr={2} />
          <Text>Fish - Standard fish, can be thrown into barrel for world changes or sold to Jeronimo for 1gp/each</Text>
        </Flex>
        <Flex mb={2} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/northern_pike.gif" mr={2} />
          <Text>Northern Pike - Rare fish used for crafting mana potions</Text>
        </Flex>
        <Flex mb={2} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/green_perch.gif" mr={2} />
          <Text>Green Perch - Rare fish used for crafting health potions </Text>
        </Flex>
        <Flex mb={4} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/rainbow_trout.gif" mr={2} />
          <Text>Rainbow Trout - Rare fish used for crafting antidote potions</Text>
        </Flex>
        <Text mb={4}>
          Catching standard fish will give you +1 experience, catching rare fish will give you +10 experience.
        </Text>
        <Text mb={6} fontSize={["2xl", "3xl", "4xl"]}>
          Standard Fishing:
        </Text>
        <Text mb={4}>
          Requires Fishing rod and worms, works the same way as usually.
        </Text>
        <Image mb={4} src={images.manualFishing} />
        <Text mb={4}>
          To achieve best results, you can do Net and Standard fishing simultaneously.
        </Text>
        <Text mb={4}>
          When you are fishing in a standard way your chance to get rare fishes greatly increases.
        </Text>
        <Text mb={6} fontSize={["2xl", "3xl", "4xl"]}>
          Net Fishing:
        </Text>
        <Text mb={4}>
          To do it, you don't need any items simply go to east shore of Rookgaard and click on the fishing net.
        </Text>
        <Image mb={4} src={images.netFishing} />
        <Text mb={2}>
          You will be fishing automatically for one minute.
          Once you finish you can repeat a process as many times as you want.
        </Text>
        <Text mb={6} fontSize={["2xl", "3xl", "4xl"]}>
          Garbage Fishing:
        </Text>
        <Text mb={4}>
          This type of fishing only requires fishing rod.
        </Text>
        <Image mb={4} src={images.garbageFishing} />
        <Text mb={4}>
          Waters of Rookgaard getting flooded with all kind of garbage.
          They spawn randomly across the waters - use your fishing rod on floating garbage to collect it.
          By keeping waters clean and collecting garbage, you have a chance to fish out following items:
        </Text>
        <UnorderedList mb={6}>
          <ListItem>Gold</ListItem>
          <ListItem>Platinum coin</ListItem>
          <ListItem>Crowbar</ListItem>
          <ListItem>Most types of food</ListItem>
          <ListItem>Star ring</ListItem>
          <ListItem>Colourful powders</ListItem>
          <ListItem>Bone Meals</ListItem>
          <ListItem>Iron ores</ListItem>
          <ListItem>Coals</ListItem>
          <ListItem>Skulls</ListItem>
          <ListItem>Iron ingots</ListItem>
          <ListItem>Brass ingots</ListItem>
          <ListItem>Elixir of youth</ListItem>
          <ListItem>Mana potions</ListItem>
          <ListItem>Health potions</ListItem>
          <ListItem>Antidote potions</ListItem>
          <ListItem>Skinning knife</ListItem>
          <ListItem>Wooden Flute</ListItem>
          <ListItem>All types of runes</ListItem>
          <ListItem>Book of orc language</ListItem>
          <ListItem>Magic light wand</ListItem>
          <ListItem>Knife</ListItem>
          <ListItem>Fish</ListItem>
          <ListItem>Rubish</ListItem>
          <ListItem>Create products (inc. White deer antlers)</ListItem>
          <ListItem>Light shovel</ListItem>
          <ListItem>Silver amulets</ListItem>
          <ListItem>Bronze amulets</ListItem>
          <ListItem>Wooden planks</ListItem>
        </UnorderedList>
        <Flex justifyContent="flex-end">
          <Tooltip label="Created by Land Conquistador" fontSize="md" hasArrow>
            <FontAwesomeIcon icon={faFileContract} />
          </Tooltip>
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Fishing}
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
