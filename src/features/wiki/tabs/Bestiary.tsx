import { Box, Button, Collapse, Divider, Flex, Image, ListItem, Table, Tbody, Td, Text, Textarea, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { bestiaryData } from 'features/wiki/data'
import { parseCreatureData } from 'features/wiki/helpers'
import { SortByBestiary } from 'features/wiki/types'
import { CollapseTile } from 'lib/components'
import { capitalizeWords } from 'lib/utils/capitalizeWords'
import React, { Fragment, useMemo, useState } from 'react'
import { SuggestChanges, WikiMenu } from '../components'
import { useSendSuggestion } from '../hooks'

type CreatureInformation = {
  name: string,
  missingKills: number,
  points: number,
  difficulty: number,
  effortPoints: number
}
type CalculatedBestiary = Array<CreatureInformation>

export const Bestiary: React.FC = () => {
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
  const [isEasyOpen, setIsEasyOpen] = useState(false)
  const [isMediumOpen, setIsMediumOpen] = useState(false)
  const [isHardOpen, setIsHardOpen] = useState(false)
  const [isExtremeOpen, setIsExtremeOpen] = useState(false)
  const hiddenMonsters = ['White Shade', 'Dragon Hatchling', 'Slime', 'Gazer']
  const [textAreaValue, setTextAreaValue] = useState('')
  const [calculatedBestiary, setCalculatedBestiary] = useState<CalculatedBestiary>()
  const [sortBy, setSortBy] = useState<SortByBestiary>(SortByBestiary.EFFORTPOINTS)
  const sortedBestiary = useMemo(() => {
    if (!calculatedBestiary) {
      return []
    }

    return [...calculatedBestiary].sort((a, b) => {
      switch (sortBy) {
        case SortByBestiary.DIFFICULTY:
          return a?.difficulty - b?.difficulty
        case SortByBestiary.NAME:
          return a.name.localeCompare(b.name)
        case SortByBestiary.MISSINGKILLS:
          return a.missingKills - b.missingKills
        default:
        case SortByBestiary.EFFORTPOINTS:
          return a.effortPoints - b.effortPoints
      }
    })
  }, [calculatedBestiary, sortBy])

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
        </Text>
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
              {bestiaryData.filter(monster => monster.difficulty === 1).map(monster => (
                <ListItem key={monster.name} display="flex" alignItems="center">
                  <Image src={monster.image} mr="10px" />
                  <Text>
                    {monster.name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
          <CollapseTile isOpen={isMediumOpen} setIsOpen={setIsMediumOpen} title="Medium" />
          <Collapse in={isMediumOpen}>
            <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
              {bestiaryData.filter(monster => monster.difficulty === 2 && !hiddenMonsters.includes(monster.name)).map(monster => (
                <ListItem key={monster.name} display="flex" alignItems="center">
                  <Image src={monster.image} mr="10px" />
                  <Text>
                    {monster.name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
          <CollapseTile isOpen={isHardOpen} setIsOpen={setIsHardOpen} title="Hard" />
          <Collapse in={isHardOpen}>
            <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
              {bestiaryData.filter(monster => monster.difficulty === 5 && !hiddenMonsters.includes(monster.name)).map(monster => (
                <ListItem key={monster.name} display="flex" alignItems="center">
                  <Image src={monster.image} mr="10px" />
                  <Text>
                    {monster.name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
          <CollapseTile isOpen={isExtremeOpen} setIsOpen={setIsExtremeOpen} title="Extreme" />
          <Collapse in={isExtremeOpen}>
            <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
              {bestiaryData.filter(monster => monster.difficulty > 5).map(monster => (
                <ListItem key={monster.name} display="flex" alignItems="center">
                  <Image src={monster.image} mr="10px" />
                  <Text>
                    {monster.name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
        </Flex>
        <Text mb={2} mt={4}>
          If you need help with choosing which creature to hunt next in order to get maximum amount of bestiary points paste entire Bestiary below.
        </Text>
        <Text mb={2}>
          It should start with "You have collected X Charm Points." And end with "Your pet is XXX. (1234 XP) or with one of the bosses."
        </Text>
        <Textarea onChange={event => setTextAreaValue(event.target.value)} value={textAreaValue} mb={4} />
        <Button colorScheme="orange" size="md" onClick={() => setCalculatedBestiary(parseCreatureData(textAreaValue))} mb={6}>
          Send
        </Button>
        {Boolean(sortedBestiary.length) && (
          <Fragment>
            <Text mb={4} mt={4}>
              We recommend to use effort points to decide which creature to hunt, the lower the better.
            </Text>
            <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.NAME)} cursor="pointer" color={sortBy === SortByBestiary.NAME ? colors.yellow : colors.text}>Name</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.MISSINGKILLS)} cursor="pointer" color={sortBy === SortByBestiary.MISSINGKILLS ? colors.yellow : colors.text}>Missing Kills</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.DIFFICULTY)} cursor="pointer" color={sortBy === SortByBestiary.DIFFICULTY ? colors.yellow : colors.text}>Difficulty Factor</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.EFFORTPOINTS)} cursor="pointer" color={sortBy === SortByBestiary.EFFORTPOINTS ? colors.yellow : colors.text}>Effort Points</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedBestiary.map((creature, index) => (
                  <Tr key={index}>
                    <Td>
                      <Image src={bestiaryData.find(monster => monster.name.toLowerCase() === creature?.name)?.image} />
                    </Td>
                    <Td>{capitalizeWords(creature?.name)}</Td>
                    <Td>{creature?.missingKills}</Td>
                    <Td>{creature?.difficulty}</Td>
                    <Td>{creature?.effortPoints}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Fragment>
        )}
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
