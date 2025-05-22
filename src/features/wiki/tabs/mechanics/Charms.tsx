import { Box, Collapse, Divider, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { CollapseTile } from 'lib/components'
import React, { useState } from 'react'
import { SuggestChanges, WikiMenu } from '../../components'
import { useSendSuggestion } from '../../hooks'

export const Charms: React.FC = () => {
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
          Charms
        </Flex>
        <Text mb={4}>
          There are seven charms available, they can be learnt from Stephan near wasp tower.
        </Text>
        <Text mb={4}>Each charm requires 50 charms points.</Text>
        <Text mb={4}>Here is the list of available charms</Text>
        <Flex flexDirection="column" gap="10px">
          <CollapseTile title="Berserk Potion" isOpen={isBerserkOpen} setIsOpen={setIsBerserkOpen} />
          <Collapse in={isBerserkOpen}>
            <Text mb={4} mt={4}>
              Berserk Potion provides a +2 permanent base damage.
            </Text>
            <Text mb={2}>
              This charm doesn't work on wand damage since it is not affected by attack value.
            </Text>
            <Text mb={2}>
              Despite it having a name "Berserk Potion", it doesn't give you physical item.
            </Text>
            <Text mb={2}>
              It doesn't mean that your hits now will always hit for at least 2, it gives you same power as having 10 levels more.
            </Text>
            <Text mb={6}>
              This is a very strong charm for fist fighters as they have increased attack speed.
            </Text>
          </Collapse>
          <CollapseTile title="Double Loot" isOpen={isLootOpen} setIsOpen={setIsLootOpen} />
          <Collapse in={isLootOpen}>
            <Text mb={4} mt={4}>
              Gives you 2% chance of getting double loot from all slain monsters and bosses.
            </Text>
            <Text mb={2}>
              This charm is currently not visible in server log/loot channels so it is hard to tell when its being triggered.
            </Text>
            <Text mb={6}>
              It does work, its simply hard to tell when it's triggered.
            </Text>
          </Collapse>
          <CollapseTile title="Wolf Whispering" isOpen={isWolfOpen} setIsOpen={setIsWolfOpen} />
          <Collapse in={isWolfOpen}>
            <Text mb={4} mt={4}>The Wolf Whispering charm ensures that taming wolves is always possible, regardless of their numbers in the wild.</Text>
            <Flex mb={2} alignItems="center"><Image src="https://tibiopedia.pl/images/static/items/wolf_paw.gif" mr="10px" />By getting this charm you no longer need to have wolf world change active to tame wolves.</Flex>
            <Flex mb={2} alignItems="center"><Image src="https://tibiopedia.pl/images/static/items/fleshy_bone.gif" mr="10px" />You can tame wolfes by using fleshy bone, it can be bought from Stephan for 2k gold.</Flex>
            <Text mb={4}>Taming wolf often takes multiple tries and you can lose fleshy bone during the process.</Text>
            <Text mb={4}>
              After u tame a wolf he will teleport to you if you run too far away or change floors.
              With time it becomes a powerful companion since it gathers experience along with you.
              Here is the table of requirements for evolution:
            </Text>
            <Table>
              <Thead>
                <Tr>
                  <Th>Looks</Th>
                  <Th>Name</Th>
                  <Th>Experience needed</Th>
                  <Th>Outfit</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td><Image src="https://tibiopedia.pl/images/static/monsters/war_wolf.gif" /></Td>
                  <Td>Zephyr</Td>
                  <Td>0</Td>
                  <Td><Image src="https://outfit-images.ots.me/animatedOutfits1099/animoutfit.php?id=899&addons=0&head=0&body=38&legs=123&feet=0" /></Td>
                </Tr>
                <Tr>
                  <Td><Image src="https://tibiopedia.pl/images/static/monsters/ghost_wolf.gif" /></Td>
                  <Td>Specter</Td>
                  <Td>100,000</Td>
                  <Td><Image src="https://outfit-images.ots.me/animatedOutfits1099/animoutfit.php?id=899&addons=1&head=0&body=38&legs=123&feet=0" /></Td>
                </Tr>
                <Tr>
                  <Td><Image src="https://tibiopedia.pl/images/static/monsters/gloom_wolf.gif" /></Td>
                  <Td>Dyster</Td>
                  <Td>1,000,000</Td>
                  <Td><Image src="https://outfit-images.ots.me/animatedOutfits1099/animoutfit.php?id=899&addons=3&head=0&body=38&legs=123&feet=0" /></Td>
                </Tr>
              </Tbody>
            </Table>
            <Text mt={4} mb={2}>
              Despite your summon getting experience it will not steal experience from you, and even if he kills the enemy just by himself you will still get bestiary entry.
            </Text>
            <Text mb={2}>
              Each evolution has 200hp and health regeneration of 1hp/s.
            </Text>
            <Text mb={2}>
              After evolving your companion gets bonus defense, attack value boost and you get Lupine Warden outfit/addons.
            </Text>
            <Text mb={2}>
              Your summon always gets 100% of experience even when world changes are active that affect experience gain, you have "green" stamina or you are under effect of elixir of youth.
            </Text>
            <Text mb={2}>
              After you logout or your summon dies, you can tame new wolf.
            </Text>
            <Flex mb={2} alignItems="center">
              <Image src="https://tibiopedia.pl/images/static/items/bone_meal.gif" mr="10px" />
              <Text>
                You can heal friendly summon by using bone meal on him, it heals for 60-90 hp.
              </Text>
            </Flex>
            <Text mb={4}>
              You can obtain bone meal by using follwing items on the mill:
            </Text>
            <Flex alignItems="center" justifyContent="flex-start" mb={6}>
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
            <Text mb={4} mt={4}>Gives you a permanent boost of +20 to your movement speed</Text>
            <Text mb={2}>This might not give you any speed boost, depending on your level due to how speed breakpoints work.</Text>
            <Text mb={6}>If you are unsure, use Speed Breakpoints calculator to determine if its worth taking this charm.</Text>
          </Collapse>
          <CollapseTile title="Scavenge" isOpen={isScavengeOpen} setIsOpen={setIsScavengeOpen} />
          <Collapse in={isScavengeOpen}>
            <Text mb={4} mt={4}>Permanently increases your carrying capacity by 20%</Text>
            <Text mb={6}>To determine how much effect it will have on you, use capacity calculator.</Text>
          </Collapse>
          <CollapseTile title="Regeneration" isOpen={isRegenerationOpen} setIsOpen={setIsRegenerationOpen} />
          <Collapse in={isRegenerationOpen}>
            <Text mb={4} mt={4}>Regeneration enables your health to regenerate twice as fast.</Text>
            <Text mb={4}>
              Despite saying that it regenerates your health two times faster it only doubles base regeneration so it will always regenerate additional 1hp/12s.
            </Text>
            <Text mb={6}>
              Even if you have much higher regeneration from world changes or items it will not double these effects.
            </Text>
          </Collapse>
          <CollapseTile title="Obsidian Knife" isOpen={isObsidianOpen} setIsOpen={setIsObsidianOpen} />
          <Collapse in={isObsidianOpen}>
            <Text mb={4} mt={4}>Obsidian Knife increases your chance of successfully skinning a creature to 11 percent.</Text>
            <Text mb={4}>Base chance for successful skinnning is 10%, so this charm increases your chances for successful skinning by additional 10%</Text>
            <Text mb={4}>Despite it having a name "Obsidian Knife", it doesn't give you physical item and only affects skinning knife.</Text>
            <Text mb={6}>After taking this charm you will successfully skin on average 1/9 creatures instead of 1/10.</Text>
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
