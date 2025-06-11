import { Box, Collapse, Divider, Flex, Image, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { anvilData, brewingData, fletchingData, forgeData, magicData, woodworkData } from 'features/wiki/data'
import { CollapseTile } from 'lib/components'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CraftingTableHeader, SuggestChanges } from '../components'
import { useSendSuggestion } from '../hooks'

export const Crafting: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.crafting' })
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
  const [isAnvilOpen, setIsAnvilOpen] = useState(false)
  const [isForgeOpen, setIsForgeOpen] = useState(false)
  const [isBrewingOpen, setIsBrewingOpen] = useState(false)
  const [isWoodworkOpen, setIsWoodworkOpen] = useState(false)
  const [isMagicOpen, setIsMagicOpen] = useState(false)
  const [isFletchingOpen, setIsFletchingOpen] = useState(false)

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
        <Flex fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          {t('crafting')}
        </Flex>
        <Text mb={4}>
          {t('craftingDescription')}
        </Text>
        <Flex gap="10px" flexDirection="column">
          <CollapseTile title="Anvil" isOpen={isAnvilOpen} setIsOpen={setIsAnvilOpen} />
          <Collapse in={isAnvilOpen} animateOpacity>
            <Box overflowX="auto" width="100%">
              <Table width="100%">
                <CraftingTableHeader withCrafting />
                <Tbody>
                  {anvilData.map((item, index) => (
                    <Tr key={`${index}-${item.name}`} wordBreak="break-word" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                      <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                        <Flex alignItems="center">
                          <Image src={item.image} mr="10px" />
                          <Text>{item.name}</Text>
                        </Flex>
                      </Td>
                      <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.level}</Td>
                      <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.chance}</Td>
                      <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                        {item.ingredients.map((ingredient, i) => (
                          <Flex key={`${i}-${ingredient.name}`} alignItems="center" mb="5px" wrap="wrap">
                            <Image src={ingredient.image} mr="8px" />
                            <Text mr="5px">{ingredient.count}</Text>
                            <Text>{ingredient.name}</Text>
                          </Flex>
                        ))}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Collapse>
          <CollapseTile title="Forge" isOpen={isForgeOpen} setIsOpen={setIsForgeOpen} />
          <Collapse in={isForgeOpen}>
            <Table>
              <CraftingTableHeader />
              <Tbody>
                {forgeData.map((item, index) => (
                  <Tr key={`${index}-${item.name}`} wordBreak="break-word" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                      <Flex alignItems="center">
                        <Image src={item.image} mr="10px" />
                        <Text>
                          {item.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.level}</Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.ingredients.map((ingredient, index) => (
                      <Flex alignItems="center" mb="5px" key={`${index}-${ingredient.name}`}>
                        <Image src={ingredient.image} mr="10px" />
                        <Text mr="5px">
                          {ingredient.count}
                        </Text>
                        <Text>
                          {ingredient.name}
                        </Text>
                      </Flex>
                    ))}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Collapse>
          <CollapseTile title="Brewing" isOpen={isBrewingOpen} setIsOpen={setIsBrewingOpen} />
          <Collapse in={isBrewingOpen}>
            <Table>
              <CraftingTableHeader />
              <Tbody>
                {brewingData.map((item, index) => (
                  <Tr key={`${index}-${item.name}`} wordBreak="break-word" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                      <Flex alignItems="center">
                        <Image src={item.image} mr="10px" />
                        <Text>
                          {item.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.level}</Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.ingredients.map((ingredient, index) => (
                      <Flex alignItems="center" mb="5px" key={`${index}-${ingredient.name}`}>
                        <Image src={ingredient.image} mr="10px" />
                        <Text mr="5px">
                          {ingredient.count}
                        </Text>
                        <Text>
                          {ingredient.name}
                        </Text>
                      </Flex>
                    ))}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Collapse>
          <CollapseTile title="Woodwork" isOpen={isWoodworkOpen} setIsOpen={setIsWoodworkOpen} />
          <Collapse in={isWoodworkOpen}>
            <Table>
              <CraftingTableHeader />
              <Tbody>
                {woodworkData.map((item, index) => (
                  <Tr key={`${index}-${item.name}`} wordBreak="break-word" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                      <Flex alignItems="center">
                        <Image src={item.image} mr="10px" />
                        <Text>
                          {item.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.level}</Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.ingredients.map((ingredient, index) => (
                      <Flex alignItems="center" mb="5px" key={`${index}-${ingredient.name}`}>
                        <Image src={ingredient.image} mr="10px" />
                        <Text mr="5px">
                          {ingredient.count}
                        </Text>
                        <Text>
                          {ingredient.name}
                        </Text>
                      </Flex>
                    ))}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Collapse>
          <CollapseTile title="Magic" isOpen={isMagicOpen} setIsOpen={setIsMagicOpen} />
          <Collapse in={isMagicOpen}>
            <Table>
              <CraftingTableHeader />
              <Tbody>
                {magicData.map((item, index) => (
                  <Tr key={`${index}-${item.name}`} wordBreak="break-word" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                      <Flex alignItems="center">
                        <Image src={item.image} mr="10px" />
                        <Text>
                          {item.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.level}</Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.ingredients.map((ingredient, index) => (
                      <Flex alignItems="center" mb="5px" key={`${index}-${ingredient.name}`}>
                        <Image src={ingredient.image} mr="10px" />
                        <Text mr="5px">
                          {ingredient.count}
                        </Text>
                        <Text>
                          {ingredient.name}
                        </Text>
                      </Flex>
                    ))}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Collapse>
          <CollapseTile title="Fletching" isOpen={isFletchingOpen} setIsOpen={setIsFletchingOpen} />
          <Collapse in={isFletchingOpen}>
            <Table>
              <CraftingTableHeader />
              <Tbody>
                {fletchingData.map((item, index) => (
                  <Tr key={`${index}-${item.name}`} wordBreak="break-word" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
                      <Flex alignItems="center">
                        <Image src={item.image} mr="10px" />
                        <Text>
                          {item.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.level}</Td>
                    <Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{item.ingredients.map((ingredient, index) => (
                      <Flex alignItems="center" mb="5px" key={`${index}-${ingredient.name}`}>
                        <Image src={ingredient.image} mr="10px" />
                        <Text mr="5px">
                          {ingredient.count}
                        </Text>
                        <Text>
                          {ingredient.name}
                        </Text>
                      </Flex>
                    ))}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Collapse>
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Crafting}
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
