import { Box, Divider, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import { otherWorldChangeData, worldChangeData } from 'features/wiki/data/worldChangeData'
import React from 'react'
import { useSendSuggestion } from '../hooks'

export const WorldChanges: React.FC = () => {
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()

  return (
    <Flex justify="center" align="flex-start" w="100%" h="100%" px={{ base: 2, md: 0 }}>
      <Box
        border="1px solid #9CA0A6"
        borderRadius="lg"
        width={{ base: '100%', md: '90%', lg: '1000px' }}
        maxWidth="1000px"
        color={colors.text}
        bg={colors.background}
        p={{ base: 4, md: 6, lg: 8 }}
        boxShadow="md"
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        overflowX="hidden"
      >
        <Flex fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={8} justifyContent="center" textAlign="center">
          World Changes
        </Flex>
        <Text mb={4}>
          World Changes are events that will take place until the next server save.
        </Text>
        <Text mb={4}>
          Most of world changes are triggered by players. Current progress towards unlocking world changes can be checked at Seymour's book, above the city library.
        </Text>
        <Text mb={4}>
          After all players sell enough creature products to NPC Tom, world change will take place after server save and will last for 24 hours.
        </Text>
        <Text mb={4}>
          If all players don't sell enough creature products the progress will be kept until enough is gathered.
        </Text>
        <Text mb={4}>
          Below you can find list of world changes that are happening after you sell specific creature products to NPC Tom:
        </Text>
        <Box overflowX="auto">
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Requirement</Th>
                <Th>Description</Th>
                <Th>Place</Th>
              </Tr>
            </Thead>
            <Tbody>
              {worldChangeData.map(worldChange => (
                <Tr key={worldChange.name}>
                  <Td>
                    <Flex alignItems="center">
                      <Image src={worldChange.image} mr={2} />
                      <Text>
                        {worldChange.name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems="center">
                      <Image src={worldChange.requirementImage} mr={2} />
                      <Text>
                        {worldChange.requirement}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>{worldChange.description}</Td>
                  <Td>{worldChange.place}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Text mt={6} mb={4}>
          There are also other world changes that are triggered by other means:
        </Text>
        <Box overflowX="auto">
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Requirement</Th>
                <Th>Description</Th>
                <Th>Place</Th>
              </Tr>
            </Thead>
            <Tbody>
              {otherWorldChangeData.map(worldChange => (
                <Tr key={worldChange.name}>
                  <Td>
                    <Text>
                      {worldChange.name}
                    </Text>
                  </Td>
                  <Td>
                    <Flex alignItems="center">
                      <Image src={worldChange.requirementImage} mr={2} />
                      <Text>
                        {worldChange.requirement}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>{worldChange.description}</Td>
                  <Td>{worldChange.place}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.WorldChanges}
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
