import { Box, Divider, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { images } from "assets"
import { colors } from "common/constants"
import { WikiMenu } from "features/wiki"
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SuggestChanges } from "../components"
import { useSendSuggestion } from '../hooks'

export const GettingStarted: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.gettingStarted' })
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
          {t('gettingStarted')}
        </Text>
        <Text mb={4}>
          {t('gettingStartedDescription')}
        </Text>
        <UnorderedList>
          <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/items/legion_helmet.gif" />Legion Helmet</ListItem>
          <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/items/chain_armor.gif" />Chain Armor</ListItem>
          <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/items/studded_legs.gif" />Studded Legs</ListItem>
          <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/items/leather_boots.gif" />Leather Boots</ListItem>
          <ListItem display="flex" alignItems="center"><Image src="https://tibiopedia.pl/images/static/items/copper_shield.gif" />Copper Shield</ListItem>
          <ListItem display="flex" alignItems="center">
            {t('weaponOfChoice')}
            <Image src="https://tibiopedia.pl/images/static/items/katana.gif" /> Katana
            <Image src="https://tibiopedia.pl/images/static/items/mace.gif" /> Mace
            <Image src="https://tibiopedia.pl/images/static/items/hatchet.gif" /> Hatchet
          </ListItem>
        </UnorderedList>
        <Flex mt="10px" alignItems="flex-start">
          <Image src="https://tibiopedia.pl/images/static/items/torch.gif" mr="10px" />
          {t('lightSource')}
        </Flex>
        <Flex mt="10px" alignItems="flex-start">
          <Image src="https://tibiopedia.pl/images/static/items/gold_pouch.gif" mr="10px" />
          {t('autolootDescription')}
        </Flex>
        <Divider my={4} />
        <Text mt="20px">
          {t('options')}
        </Text>
        <Text mt="20px" fontSize={"xl"}>
          {t('earningGoldHeader')}
        </Text>
        <Text mt="20px">
          {t('earningGoldDescription')}
        </Text>
        <Flex mt="20px" alignItems="flex-start">
          <Image src="https://tibiopedia.pl/images/static/items/skinning_knife.gif" mr="10px" />
          {t('skinningKnifeDescription')}
        </Flex>
        <Flex mt="20px" alignItems="flex-start">
          <Image src="https://tibiopedia.pl/images/static/items/unholy_book.gif" mr="10px" />
          {t('bestiaryBookDescription')}
        </Flex>
        <Flex mt="20px" alignItems="flex-start">
          <Image src={images.achievementBook} mr="10px" />
          {t('achievementBookDescription')}
        </Flex>
        <Text mt="20px">
          {t('goldMakingOne')}
        </Text>
        <Text mt="20px">
          {t('goldMakingTwo')}
        </Text>
        <UnorderedList mt="10px" gap="8px" display="flex" flexDirection="column">
          <ListItem display="flex" alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/brass_helmet.gif" mr="10px" />
            Brass Helmet /
            <Image src="https://tibiopedia.pl/images/static/items/brass_shield.gif" mr="10px" />
            Brass Shield - 500gp
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/honeycomb.gif" mr="10px" />
            Honeycomb - 400gp</ListItem>
          <ListItem display="flex" alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/northern_pike.gif" />
            <Image src="https://tibiopedia.pl/images/static/items/green_perch.gif" />
            <Image src="https://tibiopedia.pl/images/static/items/rainbow_trout.gif" pr="10px" />
            Fishing
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/iron_ore.gif" mr="10px" />
            {t('mining')} iron ore 300-350gp
            <Image src="https://tibiopedia.pl/images/static/items/coal.gif" mr="10px" ml="10px" />
            coal 40-50gp
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/bunch_of_sugar_cane.gif" mr="10px" />
            {t('craftingRum')}</ListItem>
          <ListItem display="flex" alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/stamped_letter.gif" mr="10px" />
            {t('haste')}</ListItem>
          <ListItem display="flex" alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/monsters/rotworm.gif" mr="10px" />
            {t('huntingBosses')}
          </ListItem>
        </UnorderedList>
        <Flex mt="20px" alignItems="center">
          {t('worldChanges')}
        </Flex>
        <Flex mt="20px" alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/items/small_health_potion.gif" mr="5px" />
          {t('healingDescription')}
        </Flex>
        <Text mt="20px">
          {t('ownPath')}
        </Text>
        <UnorderedList mt="10px" gap="5px" display="flex" flexDirection="column">
          <ListItem>
            {t('huntingBosses')}
          </ListItem>
          <ListItem>
            {t('leveling')}
          </ListItem>
          <ListItem>
            {t('pacifist')}
          </ListItem>
          <ListItem>
            {t('fishing')}
          </ListItem>
          <ListItem>
            {t('bestiary')}
          </ListItem>
          <ListItem>
            {t('achievements')}
          </ListItem>
          <ListItem>
            {t('mysteries')}
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
