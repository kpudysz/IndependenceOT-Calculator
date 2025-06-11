import { Box, Collapse, Divider, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { CollapseTile } from 'lib/components'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SuggestChanges } from '../../components'
import { useSendSuggestion } from '../../hooks'

export const Charms: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.charms' })
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
  const [isBerserkOpen, setIsBerserkOpen] = useState(false)
  const [isLootOpen, setIsLootOpen] = useState(false)
  const [isWolfOpen, setIsWolfOpen] = useState(false)
  const [isBootsOpen, setIsBootsOpen] = useState(false)
  const [isScavengeOpen, setIsScavengeOpen] = useState(false)
  const [isRegenerationOpen, setIsRegenerationOpen] = useState(false)
  const [isObsidianOpen, setIsObsidianOpen] = useState(false)

  return (
    <Flex justify="center" align="flex-start" w="100%" h="100%" p={[2, 4]}>
      <Box
        border="1px solid #9CA0A6"
        borderRadius="lg"
        w="100%"
        maxW="900px"
        minW={["100%", "100%", "800px"]}
        color={colors.text}
        bg={colors.background}
        p={[4, 6, 8]}
        boxShadow="md"
        fontSize={["md", "lg"]}
      >
        <Flex fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" mb={[6, 8, 10]} justifyContent="center">
          {t('charms')}
        </Flex>
        <Text mb={4}>
          {t('charmOne')}
        </Text>
        <Text mb={4}>{t('charmTwo')}</Text>
        <Text mb={4}>{t('charmThree')}</Text>
        <Flex flexDirection="column" gap="10px">
          <CollapseTile title="Berserk Potion" isOpen={isBerserkOpen} setIsOpen={setIsBerserkOpen} />
          <Collapse in={isBerserkOpen}>
            <Text mb={4} mt={4}>
              {t('berserkPotionOne')}
            </Text>
            <Text mb={2}>
              {t('berserkPotionTwo')}
            </Text>
            <Text mb={2}>
              {t('berserkPotionThree')}
            </Text>
            <Text mb={2}>
              {t('berserkPotionFour')}
            </Text>
            <Text mb={6}>
              {t('berserkPotionFive')}
            </Text>
          </Collapse>
          <CollapseTile title="Double Loot" isOpen={isLootOpen} setIsOpen={setIsLootOpen} />
          <Collapse in={isLootOpen}>
            <Text mb={4} mt={4}>
              {t('doubleLootOne')}
            </Text>
            <Text mb={2}>
              {t('doubleLootTwo')}
            </Text>
            <Text mb={6}>
              {t('doubleLootThree')}
            </Text>
          </Collapse>
          <CollapseTile title="Wolf Whispering" isOpen={isWolfOpen} setIsOpen={setIsWolfOpen} />
          <Collapse in={isWolfOpen}>
            <Text mb={4} mt={4}>
              {t('wolfWhisperingOne')}
            </Text>
            <Flex mb={2} alignItems="center">
              <Image src="https://tibiopedia.pl/images/static/items/wolf_paw.gif" mr="10px" />
              {t('wolfWhisperingTwo')}
            </Flex>
            <Flex mb={2} alignItems="center">
              <Image src="https://tibiopedia.pl/images/static/items/fleshy_bone.gif" mr="10px" />
              {t('wolfWhisperingThree')}
            </Flex>
            <Text mb={4}>{t('wolfWhisperingFour')}</Text>
            <Text mb={4}>
              {t('wolfWhisperingDescription')}
            </Text>
            <Table>
              <Thead>
                <Tr wordBreak="break-word">
                  <Th px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('looks')}</Th>
                  <Th px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('name')}</Th>
                  <Th px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('experienceNeeded')}</Th>
                  <Th px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('outfit')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr wordBreak="break-word">
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}><Image src="https://tibiopedia.pl/images/static/monsters/war_wolf.gif" /></Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>Zephyr</Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>0</Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}><Image src="https://outfit-images.ots.me/animatedOutfits1099/animoutfit.php?id=899&addons=0&head=0&body=38&legs=123&feet=0" /></Td>
                </Tr>
                <Tr wordBreak="break-word">
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}><Image src="https://tibiopedia.pl/images/static/monsters/ghost_wolf.gif" /></Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>Specter</Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>100,000</Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}><Image src="https://outfit-images.ots.me/animatedOutfits1099/animoutfit.php?id=899&addons=1&head=0&body=38&legs=123&feet=0" /></Td>
                </Tr>
                <Tr wordBreak="break-word">
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}><Image src="https://tibiopedia.pl/images/static/monsters/gloom_wolf.gif" /></Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>Dyster</Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>1,000,000</Td>
                  <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}><Image src="https://outfit-images.ots.me/animatedOutfits1099/animoutfit.php?id=899&addons=3&head=0&body=38&legs=123&feet=0" /></Td>
                </Tr>
              </Tbody>
            </Table>
            <Text mt={4} mb={2}>
              {t('wolfWhisperingFive')}
            </Text>
            <Text mb={2}>
              {t('wolfWhisperingSix')}
            </Text>
            <Text mb={2}>
              {t('wolfWhisperingSeven')}
            </Text>
            <Text mb={2}>
              {t('wolfWhisperingEight')}
            </Text>
            <Text mb={2}>
              {t('wolfWhisperingNine')}
            </Text>
            <Flex mb={2} alignItems="center">
              <Image src="https://tibiopedia.pl/images/static/items/bone_meal.gif" mr="10px" />
              <Text>
                {t('wolfWhisperingTen')}
              </Text>
            </Flex>
            <Text mb={4}>
              {t('wolfWhisperingEleven')}
            </Text>
            <Flex alignItems="center" justifyContent="flex-start" mb={6} maxW="600px" flexWrap="wrap">
              <Image src="https://tibiopedia.pl/images/static/items/skull.gif" m="0 10px 0 5px" />
              <Text>
                Skull
              </Text>
              <Image src="https://tibiopedia.pl/images/static/items/bone.gif" m="0 10px 0 5px" />
              <Text>
                5 Bones
              </Text>
              <Image src="https://tibiopedia.pl/images/static/items/big_bone.gif" m="0 10px 0 5px" />
              <Text>
                5 Big Bones
              </Text>
              <Image src="https://tibiopedia.pl/images/static/items/pelvis_bone.gif" m="0 10px 0 5px" />
              <Text>
                Pelvis Bone
              </Text>
            </Flex>
          </Collapse >
          <CollapseTile title="Boots of Haste" isOpen={isBootsOpen} setIsOpen={setIsBootsOpen} />
          <Collapse in={isBootsOpen}>
            <Text mb={4} mt={4}>{t('bootsOfHasteOne')}</Text>
            <Text mb={2}>{t('bootsOfHasteTwo')}</Text>
            <Text mb={6}>{t('bootsOfHasteThree')}</Text>
          </Collapse>
          <CollapseTile title="Scavenge" isOpen={isScavengeOpen} setIsOpen={setIsScavengeOpen} />
          <Collapse in={isScavengeOpen}>
            <Text mb={4} mt={4}>{t('scavengeOne')}</Text>
            <Text mb={6}>{t('scavengeTwo')}</Text>
          </Collapse>
          <CollapseTile title="Regeneration" isOpen={isRegenerationOpen} setIsOpen={setIsRegenerationOpen} />
          <Collapse in={isRegenerationOpen}>
            <Text mb={4} mt={4}>{t('regenerationOne')}</Text>
            <Text mb={4}>
              {t('regenerationTwo')}
            </Text>
            <Text mb={6}>
              {t('regenerationThree')}
            </Text>
          </Collapse>
          <CollapseTile title="Obsidian Knife" isOpen={isObsidianOpen} setIsOpen={setIsObsidianOpen} />
          <Collapse in={isObsidianOpen}>
            <Text mb={4} mt={4}>{t('obsidianKnifeOne')}</Text>
            <Text mb={4}>{t('obsidianKnifeTwo')}</Text>
            <Text mb={4}>{t('obsidianKnifeThree')}</Text>
            <Text mb={6}>{t('obsidianKnifeFour')}</Text>
          </Collapse>
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Charms}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          onSend={(content, source, author) => {
            sendSuggestion({ content, source, author })
          }}
        />
      </Box >
    </Flex >
  )
}
