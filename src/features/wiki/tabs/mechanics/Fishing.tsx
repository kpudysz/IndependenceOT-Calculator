import { Box, Divider, Flex, Image, ListItem, Text, Tooltip, UnorderedList } from '@chakra-ui/react'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { images } from 'assets'
import { colors } from 'common/constants'
import { SuggestChanges } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'
import { WikiMenu } from 'features/wiki'
import { useTranslation } from 'react-i18next'

export const Fishing: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.fishing' })
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
          {t('fishing')}
        </Flex>
        <Text mb={4}>
          {t('fishingOne')}
        </Text>
        <Text mb={4}>
          {t('fishingDescription')}
        </Text>
        <Text mb={2}>
          {t('fishingDescriptionTwo')}
        </Text>
        <Text mb={4}>
          {t('fishingTwo')}
        </Text>
        <Flex mb={2} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/fish.gif" mr={2} />
          <Text>{t('fishDescription')}</Text>
        </Flex>
        <Flex mb={2} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/northern_pike.gif" mr={2} />
          <Text>{t('northernPikeDescription')}</Text>
        </Flex>
        <Flex mb={2} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/green_perch.gif" mr={2} />
          <Text>{t('greenPerchDescription')}</Text>
        </Flex>
        <Flex mb={4} alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/rainbow_trout.gif" mr={2} />
          <Text>{t('rainbowTroutDescription')}</Text>
        </Flex>
        <Text mb={6} fontSize={["2xl", "3xl", "4xl"]}>
          {t('standardFishing')}
        </Text>
        <Text mb={4}>
          {t('standardFishingOne')}
        </Text>
        <Image mb={4} src={images.manualFishing} />
        <Text mb={4}>
          {t('standardFishingTwo')}
        </Text>
        <Text mb={4}>
          {t('standardFishingThree')}
        </Text>
        <Text mb={6} fontSize={["2xl", "3xl", "4xl"]}>
          {t('netFishingHeader')}
        </Text>
        <Text mb={4}>
          {t('netFishing')}
        </Text>
        <Image mb={4} src={images.netFishing} />
        <Text mb={2}>
          {t('netFishingDescription')}
        </Text>
        <Text mb={6} fontSize={["2xl", "3xl", "4xl"]}>
          {t('garbageFishingHeader')}
        </Text>
        <Text mb={4}>
          {t('garbageFishing')}
        </Text>
        <Image mb={4} src={images.garbageFishing} />
        <Text mb={4}>
          {t('garbageFishingDescription')}
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
          <ListItem>White deer antlers</ListItem>
          <ListItem>Creature products</ListItem>
          <ListItem>Light shovel</ListItem>
          <ListItem>Silver amulets</ListItem>
          <ListItem>Bronze amulets</ListItem>
          <ListItem>Wooden planks</ListItem>
          <ListItem>Wolf tooth chain</ListItem>
        </UnorderedList>
        <Flex justifyContent="flex-end">
          <Tooltip label={t('createdBy')} fontSize="md" hasArrow>
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
