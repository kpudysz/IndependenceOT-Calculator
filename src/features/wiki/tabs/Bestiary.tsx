import { Box, Collapse, Divider, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { CollapseTile } from 'lib/components'
import React, { useState } from 'react'
import { SuggestChanges, WikiMenu } from '../components'
import { useSendSuggestion } from '../hooks'

export const Bestiary: React.FC = () => {
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
  const [isEasyOpen, setIsEasyOpen] = useState(false)
  const [isMediumOpen, setIsMediumOpen] = useState(false)
  const [isHardOpen, setIsHardOpen] = useState(false)
  const [isExtremeOpen, setIsExtremeOpen] = useState(false)

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
          Bestiary
        </Text>
        <Text mb={4}>
          Bestiary works a little bit different on IndependenceOT.
          <UnorderedList margin={"20px 0 20px"} display="flex" flexDirection="column" gap="6px">
            <ListItem>By killing 100 monsters you get 1 charm point.</ListItem>
            <ListItem>By killing 1000 monsters you get 2 charm points.</ListItem>
            <ListItem>By killing 10000 monsters you get 3 charm points and so on.</ListItem>
          </UnorderedList>
          The amount of points that you get is cumulative therefore if you kill for example 1000 trolls you will have 3 points(1 + 2).
          After reaching 50 points you can get one of seven charms from Stephan.
          <Text mb={4} mt={4}>Currently there are 49 monsters in bestiary, some of them are still unknown.</Text>
          <Text margin="20px 0 20px">
            Here is the known list of monsters split into categories of how hard it is to reach high amount of kills:
          </Text>
          <Flex flexDirection="column" gap="15px">
            <CollapseTile isOpen={isEasyOpen} setIsOpen={setIsEasyOpen} title="Easy" />
            <Collapse in={isEasyOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/bat.gif" mr="10px" />Bat</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/bear.gif" mr="10px" />Bear</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/cave_rat.gif" mr="10px" />Cave rat</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/chicken.gif" mr="10px" />Chicken</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/dwarf_miner.gif" mr="10px" />Dwarf Miner</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/orc.gif" mr="10px" />Orc</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/pig.gif" mr="10px" />Pig</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/poison_spider.gif" mr="10px" />Poison spider</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/rat.gif" mr="10px" />Rat</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/sheep.gif" mr="10px" />Sheep</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/skeleton.gif" mr="10px" />Skeleton</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/snake.gif" mr="10px" />Snake</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/spider.gif" mr="10px" />Spider</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/swamp_troll.gif" mr="10px" />Swamp troll</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/troll.gif" mr="10px" />Troll</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/wolf.gif" mr="10px" />Wolf</ListItem>
              </UnorderedList>
            </Collapse>
            <CollapseTile isOpen={isMediumOpen} setIsOpen={setIsMediumOpen} title="Medium" />
            <Collapse in={isMediumOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/bug.gif" mr="10px" />Bug</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/deer.gif" mr="10px" />Deer</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/frost_troll.gif" mr="10px" />Frost Troll</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/goblin.gif" mr="10px" />Goblin</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/goblin_assassin.gif" mr="10px" />Goblin Assassin</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/goblin_scavenger.gif" mr="10px" />Goblin Scavenger</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/larva.gif" mr="10px" />Larva</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/minotaur.gif" mr="10px" />Minotaur</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/orc_spearman.gif" mr="10px" />Orc Spearman</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/rabbit.gif" mr="10px" />Rabbit</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/rotworm.gif" mr="10px" />Rotworm</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/skeleton_warrior.gif" mr="10px" />Skeleton Warrior</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/troll_guard.gif" mr="10px" />Troll guard</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/wasp.gif" mr="10px" />Wasps</ListItem>
              </UnorderedList>
            </Collapse>
            <CollapseTile isOpen={isHardOpen} setIsOpen={setIsHardOpen} title="Hard" />
            <Collapse in={isHardOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/badger.gif" mr="10px" />Badger</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/carrion_worm.gif" mr="10px" />Carrion worm</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/crazed_dwarf.gif" mr="10px" />Crazed Dwarf</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/island_troll.gif" mr="10px" />Island troll</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/orc_warrior.gif" mr="10px" />Orc Warrior</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/polar_bear.gif" mr="10px" />Polar bear</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/silver_rabbit.gif" mr="10px" />Silver rabbit</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/squirrel.gif" mr="10px" />Squirrel</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/winter_wolf.gif" mr="10px" />Winter wolf</ListItem>
              </UnorderedList>
            </Collapse>
            <CollapseTile isOpen={isExtremeOpen} setIsOpen={setIsExtremeOpen} title="Extreme" />
            <Collapse in={isExtremeOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/black_sheep.gif" mr="10px" />Black sheep</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/hyaena.gif" mr="10px" />Hyaena</ListItem>
                <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/monsters/insect_swarm.gif" mr="10px" />Insect Swarm</ListItem>
              </UnorderedList>
            </Collapse>
          </Flex>
        </Text>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Bestiary}
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
