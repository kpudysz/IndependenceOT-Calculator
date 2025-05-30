import { Box, Divider, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from "features/wiki/components"
import { otherWorldChangeData, worldChangeData } from 'features/wiki/data/worldChangeData'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSendSuggestion } from '../hooks'

export const WorldChanges: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.worldChange' })
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
  const worldChange = worldChangeData()
  const otherWorldChange = otherWorldChangeData()

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
          {t('worldChanges')}
        </Flex>
        <Text mb={4}>
          {t('worldChangesOne')}
        </Text>
        <Text mb={4}>
          {t('worldChangesTwo')}
        </Text>
        <Text mb={4}>
          {t('worldChangesThree')}
        </Text>
        <Text mb={4}>
          {t('worldChangesFour')}
        </Text>
        <Text mb={4}>
          {t('worldChangesFive')}
        </Text>
        <Box overflowX="auto">
          <Table>
            <Thead>
              <Tr>
                <Th>{t('name')}</Th>
                <Th>{t('requirement')}</Th>
                <Th>{t('description')}</Th>
                <Th>{t('place')}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {worldChange.map(worldChange => (
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
          {t('otherMeans')}
        </Text>
        <Box overflowX="auto">
          <Table>
            <Thead>
              <Tr>
                <Th>{t('name')}</Th>
                <Th>{t('requirement')}</Th>
                <Th>{t('description')}</Th>
                <Th>{t('place')}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {otherWorldChange.map(worldChange => (
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
