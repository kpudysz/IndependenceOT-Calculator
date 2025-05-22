import { Box, Divider, Flex, Image, Link, Text } from '@chakra-ui/react'
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
        <Text mt="10px">
          IndependenceOT is free to play and there are no hidden costs. There is no "premium" or other paid content.
        </Text>
        <Text fontSize="lg" mt="10px">
          We are open minded and trying our best to provide accurate and up-to-date information about the game.
          If you ever feel like something is outdated or can be put in better words, don't hesitate to use "Suggest Changes" at the bottom of the page or reach me on discord.
          For best player experience we recommend you to join local community on <Link color={colors.orange} href={"https://discord.com/invite/AeEFxZje5J"}>Discord</Link>.
        </Text>
        <Text fontSize="4xl" mt="20px" mb="20px">
          Official information
        </Text>
        <Image src="https://imgur.com/YbXhFUx.jpeg" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text>
          After years of being a neglected province, Rookgaard gained independence from Thais.
        </Text>
        <Text mb={4}>
          Seymour was elected as Mayor and moved his office upstairs, repurposing the Oracle room. He now keeps a book tracking global tasks - and they are many.
        </Text>
        <Image src="https://imgur.com/s2ZalDa.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          With newfound autonomy, Rookgaardians cleared tree lines blocking passage across the island, built rental houses in the town, and established stables with rentable horses.
          They removed the vocation propaganda from the academy, added deposit boxes at the bank, and lifted the gold deposit limit.
          Turtel was invited to run the new post office, with mailboxes placed around the island and Haste delivering the mails.
        </Text>
        <Image src="https://imgur.com/QJcaBoD.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Seymour signed a trade deal with Thais, Venore and Carlin for the delivery of 10,000 fish daily, but the fisherman he hired struggles with alcohol, so citizens must help to fulfill the order using fishing rods and nets on the eastern shore.
          Climate changes have brought exotic fish to the area, and floating debris has been spotted.
          Some believe Goblins are behind a water-based smuggling operation nearby.
        </Text>
        <Image src="https://imgur.com/8ugam31.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Seymour invited dwarves to establish a mining operation in the abandoned wolf lair in the east to mine and sell iron.
          However, the dwarves began building a city without authorization, and their expansion must be stopped.
          Some structures can be destroyed for rewards.
        </Text>
        <Image src="https://imgur.com/ntOmZdI.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          On the other side of the island, the Spider Queen's lair was eradicated with toxic gas, leaving it contaminated.
          The Dwarves want to establish a second mine there, and offer payment for destroying spider-made objects.
          Supporting or opposing them could affect the island.
        </Text>
        <Image src="https://imgur.com/Km8svCk.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Seymour also invited Horatio from the Royal Academy of Science, to lead an expedition that studies creatures.
          Helping him unlocks new locations and is rewarded with outfits, mounts and access to the new locations.
          Tom buys all creature products now, and when enough items are sold, a new expedition begins.
          Horatio may also notice increased farm activity and bring more livestock to the island.
        </Text>
        <Image src="https://imgur.com/DdorcOR.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Obi's forge is now available for blacksmithing, allowing players to smelt brass and iron into ingots and craft advanced weapons and armor, including brass armor, steel axes, daramian maces, and steel shields.
          Jagged swords and soldier helmets can be repaired on an anvil using broken items and steel.
        </Text>
        <Image src="https://imgur.com/PPY2bgQ.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Lily has opened her potion brewing business, now selling only small health potions.
          Players can craft health, mana and antidote potions using ingredients like moon flowers, heaven blossoms, and herbs carried by swamp trolls, who recently arrived to the island.
          The improved antidote potion not only cures poison, but also grants temporary immunity to it.
        </Text>
        <Image src="https://imgur.com/wkE5hpc.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Stephan, an experienced hunter, built a hut near the Wasp Tower.
          He teaches taming wolves, skinning with knives, and keeping bestiary records.
          Tamed wolves assist in hunting and can evolve with training.
          Skinning improves the extraction of creature products for Horatio, while bestiary knowledge gives permanent hunting bonuses.
          Stephan's pet bear, Ben, who used to belong to Grizzly Addams, has escaped and may be dangerous.
        </Text>
        <Image src="https://imgur.com/qGXHm7N.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Billy discovered a thermal spring near his mill and now grows exotic fruits and sugar cane for rum production.
          His jealous cousin, Willie, founded vegetable farms near Lily's shop.
          Both sell tools and products for food production, and players can choose whom to support.
          Favoring one will upset the other and affect global experience, respawn, and loot rates.
        </Text>
        <Image src="https://imgur.com/pEfd3zG.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          New invasive species like squirrels and badgers arrived on the ships with the newcomers, some of whom were housed in the Salmon Lofts housing project.
          Many lost their dogs in the nearby bog.
          Swamp trolls have colonized the swamp, and rumors suggest rare island trolls live deep in the island dungeons.
          Bats have been spotted, but their lair remains undiscovered.
        </Text>
        <Image src="https://imgur.com/ixLs5LC.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Cold northern winds can freeze the shore, opening a passage to a small Ice Island inhabited by arctic creatures, including the rare White Deer, whose valuable antlers are sought after.
          Winter wolf fur and polar bear paws may interest Stephan, who is fascinated by wolves and bears, and is likely to reward players for such.
        </Text>
        <Image src="https://imgur.com/fwQaqN2.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Vascalir has taken charge of the library and significantly updated its contents.
          During an expedition to abandoned Rookie Guard quest locations, he discovered that orcs have sealed off the fortress entrance and are growing in numbers and strength, led by the shaman Kraknaknork.
          They've rebuilt the old tower and founded an underground settlement in nearby, ancient tunnels.
        </Text>
        <Image src="https://imgur.com/pfVLG5y.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          A new passage was found between Minotaur Hell and Bear Room, but requires maintenance to stay accessible.
          Additional caves were discovered in Poison Cave, accessible by climbing the roof, and more were found in Bear Cave and around Katana Room, where stronger Rotworms dwell.
          A Minotaur Horn prison was also uncovered, where minotaurs hold and torture orcs, trolls, and goblins.
        </Text>
        <Image src="https://imgur.com/LToTTPM.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Trolls have taken over the Burning Library, now completely cut off from the academy.
          They've begun training and equipping themselves as Troll Guards.
          With the right resources, the fire could be extinguished, and some lost knowledge might be recovered.
        </Text>
        <Image src="https://imgur.com/vEqeGVl.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          The Teleskor Crypt has been revealed to be far larger and more ominous than once believed.
          Some Skeleton Warriors have begun wearing armor, an unprecedented event on the island.
          The Cemetery Crypt also shows unsettling signs, such as explorers being unable to light torches and reports of ghost sightings.
        </Text>
        <Image src="https://imgur.com/9Rz91ep.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Lee'Delle has been troubled by an infestation beneath her shop, discovering a species of Larva native to the Ankrahmun desert, though she doesn't know how they arrived.
          She wonders if this is linked to the recently discovered Apiary — a wasp nest run by bears beneath Bear Rock — or rumors of the Maze of Fury reopening, with goblins reportedly reinforcing themselves, and training into scavengers and assassins.
        </Text>
        <Image src="https://imgur.com/sW14uS1.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          There are warnings about the Spike Sword Seekers cult, who have established a hideout in the island's north.
          They are obsessed with solving the spike sword mystery and are rumored to go to extreme lengths to prove their "humility" and obtain it.
        </Text>
        <Image src="https://i.imgur.com/IcazOR9.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Asralius is researching why the island is resistant to magic and suspects a cosmic influence.
          He should not be disturbed unless magic use is reported on the island.
        </Text>
        <Image src="https://imgur.com/oVYVWu3.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
        <Text mb={4}>
          Hyacinth has regained his youth through an elixir of youth, and is willing to share the recipe for a small favor.
          Some mushrooms in dark, moist caves hold magical properties necessary for the potion, and are in high demand from the local population.
        </Text>
        <Image src="https://imgur.com/IQ7pRFH.png" mb="20px"
          maxWidth="100%"
          height="auto"
        />
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
