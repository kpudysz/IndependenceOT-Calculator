import { Box, Collapse, Divider, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
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
          Bestiary works a little different on IndependenceOT.
          <UnorderedList margin={"20px 0 20px"}>
            <ListItem>By killing 100 monsters you get 1 charm point.</ListItem>
            <ListItem>By killing 1000 monsters you get 2 charm points.</ListItem>
            <ListItem>By killing 10000 monsters you get 3 charm points and so on.</ListItem>
          </UnorderedList>
          The amount of points that you get is cumulative therefore if you kill for example 1000 trolls you will have 3 points(1 + 2).
          After reaching 50 points you can get one of seven charms from Stephan.
          <Text margin="20px 0 20px">
            Here is the known list of monsters split into categories of how hard it is to reach high amount of kills:
          </Text>
          <Flex flexDirection="column" gap="15px">
            <CollapseTile isOpen={isEasyOpen} setIsOpen={setIsEasyOpen} title="Easy" />
            <Collapse in={isEasyOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 30px">
                <ListItem>Bat</ListItem>
                <ListItem>Bear</ListItem>
                <ListItem>Cave rat</ListItem>
                <ListItem>Chicken</ListItem>
                <ListItem>Dwarf Miner</ListItem>
                <ListItem>Orc</ListItem>
                <ListItem>Pig</ListItem>
                <ListItem>Poison spider</ListItem>
                <ListItem>Rat</ListItem>
                <ListItem>Sheep</ListItem>
                <ListItem>Skeleton</ListItem>
                <ListItem>Snake</ListItem>
                <ListItem>Spider</ListItem>
                <ListItem>Swamp troll</ListItem>
                <ListItem>Troll</ListItem>
                <ListItem>Wolf</ListItem>
              </UnorderedList>
            </Collapse>
            <CollapseTile isOpen={isMediumOpen} setIsOpen={setIsMediumOpen} title="Medium" />
            <Collapse in={isMediumOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 30px">
                <ListItem>Bug</ListItem>
                <ListItem>Deer</ListItem>
                <ListItem>Frost Troll</ListItem>
                <ListItem>Goblin</ListItem>
                <ListItem>Goblin Assassin</ListItem>
                <ListItem>Goblin Scavenger</ListItem>
                <ListItem>Larva</ListItem>
                <ListItem>Minotaur</ListItem>
                <ListItem>Orc Spearman</ListItem>
                <ListItem>Rabbit</ListItem>
                <ListItem>Rotworm</ListItem>
                <ListItem>Skeleton Warrior</ListItem>
                <ListItem>Troll guard</ListItem>
                <ListItem>Wasps</ListItem>
              </UnorderedList>
            </Collapse>
            <CollapseTile isOpen={isHardOpen} setIsOpen={setIsHardOpen} title="Hard" />
            <Collapse in={isHardOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 30px">
                <ListItem>Badger</ListItem>
                <ListItem>Carrion worm</ListItem>
                <ListItem>Crazed Dwarf</ListItem>
                <ListItem>Island troll</ListItem>
                <ListItem>Orc Warrior</ListItem>
                <ListItem>Polar bear</ListItem>
                <ListItem>Silver rabbit</ListItem>
                <ListItem>Squirrel</ListItem>
                <ListItem>Winter wolf</ListItem>
              </UnorderedList>
            </Collapse>
            <CollapseTile isOpen={isExtremeOpen} setIsOpen={setIsExtremeOpen} title="Extreme" />
            <Collapse in={isExtremeOpen}>
              <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 30px">
                <ListItem>Black sheep</ListItem>
                <ListItem>Hyena</ListItem>
                <ListItem>Insect Swarm</ListItem>
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
