import { Box, Button, Collapse, Divider, Flex, Image, ListItem, Table, Tbody, Td, Text, Textarea, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { CreatureInformation, SortByBestiary, WikiMenu } from 'features/wiki'
import { bestiaryData } from 'features/wiki/data'
import { calculateTimeTillCharm, parseCreatureData } from 'features/wiki/helpers'
import { CollapseTile } from 'lib/components'
import { formatTime } from 'lib/utils'
import { capitalizeWords } from 'lib/utils/capitalizeWords'
import React, { Fragment, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SuggestChanges } from '../components'
import { useSendSuggestion } from '../hooks'

export const Bestiary: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.bestiary' })
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
  const [isEasyOpen, setIsEasyOpen] = useState(false)
  const [isMediumOpen, setIsMediumOpen] = useState(false)
  const [isHardOpen, setIsHardOpen] = useState(false)
  const [isExtremeOpen, setIsExtremeOpen] = useState(false)
  const hiddenMonsters = ['White Shade', 'Dragon Hatchling', 'Slime', 'Gazer']
  const [textAreaValue, setTextAreaValue] = useState('')
  const [calculatedBestiary, setCalculatedBestiary] = useState<Array<CreatureInformation>>()
  const [sortBy, setSortBy] = useState<SortByBestiary>(SortByBestiary.EFFORTPOINTS)
  const sortedBestiary = useMemo(() => {
    if (!calculatedBestiary) {
      return []
    }

    return [...calculatedBestiary].sort((a, b) => {
      switch (sortBy) {
        case SortByBestiary.DIFFICULTY:
          return a?.difficulty - b?.difficulty
        case SortByBestiary.POINTS:
          return a?.points - b?.points
        case SortByBestiary.NAME:
          return a.name.localeCompare(b.name)
        case SortByBestiary.MISSINGKILLS:
          return a.missingKills - b.missingKills
        case SortByBestiary.TTF:
          return (a?.effortPoints * a?.points) - (b?.effortPoints * b?.points)
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
          {t('bestiary')}
        </Text>
        <Text mb={4}>
          {t('bestiaryOne')}
        </Text>
        <UnorderedList margin={"20px 0 20px"} display="flex" flexDirection="column" gap="6px">
          <ListItem>{t('bestiaryTwo')}</ListItem>
          <ListItem>{t('bestiaryThree')}</ListItem>
          <ListItem>{t('bestiaryFour')}</ListItem>
        </UnorderedList>
        <Text>
          {t('bestiaryDescription')}
        </Text>
        <Text mb={4} mt={4}>
          {t('bestiaryFive')}
        </Text>
        <Text margin="20px 0 20px">
          {t('bestiarySix')}
        </Text>
        <Flex flexDirection="column" gap="15px">
          <CollapseTile isOpen={isEasyOpen} setIsOpen={setIsEasyOpen} title={t('easy')} />
          <Collapse in={isEasyOpen}>
            <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
              {bestiaryData.filter(monster => monster.difficulty <= 15 && !hiddenMonsters.includes(monster.name)).map(monster => (
                <ListItem key={monster.name} display="flex" alignItems="center">
                  <Image src={monster.image} mr="10px" />
                  <Text>
                    {monster.name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
          <CollapseTile isOpen={isMediumOpen} setIsOpen={setIsMediumOpen} title={t('medium')} />
          <Collapse in={isMediumOpen}>
            <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
              {bestiaryData.filter(monster => monster.difficulty > 15 && monster.difficulty <= 30 && !hiddenMonsters.includes(monster.name)).map(monster => (
                <ListItem key={monster.name} display="flex" alignItems="center">
                  <Image src={monster.image} mr="10px" />
                  <Text>
                    {monster.name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
          <CollapseTile isOpen={isHardOpen} setIsOpen={setIsHardOpen} title={t('hard')} />
          <Collapse in={isHardOpen}>
            <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
              {bestiaryData.filter(monster => monster.difficulty > 30 && monster.difficulty <= 60 && !hiddenMonsters.includes(monster.name)).map(monster => (
                <ListItem key={monster.name} display="flex" alignItems="center">
                  <Image src={monster.image} mr="10px" />
                  <Text>
                    {monster.name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
          <CollapseTile isOpen={isExtremeOpen} setIsOpen={setIsExtremeOpen} title={t('extreme')} />
          <Collapse in={isExtremeOpen}>
            <UnorderedList gap="8px" display="flex" flexDirection="column" border={`1px solid ${colors.text}`} ml="0" padding="15px 0 15px 15px">
              {bestiaryData.filter(monster => monster.difficulty > 60 && !hiddenMonsters.includes(monster.name)).map(monster => (
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
          {t('bestiarySeven')}
        </Text>
        <Text mb={2}>
          {t('bestiaryEight')}
        </Text>
        <Textarea onChange={event => setTextAreaValue(event.target.value)} value={textAreaValue} mb={4} />
        <Button colorScheme="orange" size="md" onClick={() => setCalculatedBestiary(parseCreatureData(textAreaValue))} mb={6}>
          {t('send')}
        </Button>
        {Boolean(sortedBestiary.length) && (
          <Fragment>
            <Text mb={4} mt={4}>
              {t('minutesPerHundred')}
            </Text>
            <Text mb={4}>
              {t('tpcDescription')}
            </Text>
            <Text mb={4}>
              {t('ttfDescription')}
            </Text>
            <Text mb={4}>
              {t('predictedTime')} {calculateTimeTillCharm(sortedBestiary, sortedBestiary[0].charmPoints)}. ({sortedBestiary[0].charmPoints} {t('charmPoints')})
            </Text>
            <Table>
              <Thead>
                <Tr>
                  <Th>{t('image')}</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.NAME)} cursor="pointer" color={sortBy === SortByBestiary.NAME ? colors.yellow : colors.text}>{t('name')}</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.POINTS)} cursor="pointer" color={sortBy === SortByBestiary.POINTS ? colors.yellow : colors.text}>{t('points')}</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.MISSINGKILLS)} cursor="pointer" color={sortBy === SortByBestiary.MISSINGKILLS ? colors.yellow : colors.text}>{t('missingKills')}</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.DIFFICULTY)} cursor="pointer" color={sortBy === SortByBestiary.DIFFICULTY ? colors.yellow : colors.text}>{t('difficulty')}</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.EFFORTPOINTS)} cursor="pointer" color={sortBy === SortByBestiary.EFFORTPOINTS ? colors.yellow : colors.text}>{t('tpc')}</Th>
                  <Th onClick={() => setSortBy(SortByBestiary.TTF)} cursor="pointer" color={sortBy === SortByBestiary.TTF ? colors.yellow : colors.text}>{t('ttf')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedBestiary.map((creature, index) => (
                  <Tr key={index}>
                    <Td>
                      <Image src={bestiaryData.find(monster => monster.name.toLowerCase() === creature?.name)?.image} />
                    </Td>
                    <Td>{capitalizeWords(creature?.name)}</Td>
                    <Td>{creature?.points}</Td>
                    <Td>{creature?.missingKills}</Td>
                    <Td>{creature?.difficulty}</Td>
                    <Td>{formatTime(creature?.effortPoints)}</Td>
                    <Td>{formatTime(creature?.effortPoints * creature?.points)}</Td>
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
