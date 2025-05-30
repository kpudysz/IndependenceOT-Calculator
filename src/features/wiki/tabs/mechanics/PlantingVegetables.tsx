import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { images } from 'assets'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from "features/wiki/components"
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSendSuggestion } from '../../hooks'

export const PlantingVegetables: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.plantingVegetables' })
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
        <Flex fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          {t('plantingVegetables')}
        </Flex>
        <Text mb={2}>
          {t('plantingVegetablesOne')}
        </Text>
        <Flex mb={2} flexWrap="wrap" alignItems="center">
          <Text>
            {t('plantingVegetablesTwo')}
          </Text>
        </Flex>
        <Text mb={2}>
          {t('plantingVegetablesThree')}
        </Text>
        <Text mb={2}>
          {t('plantingVegetablesFour')}
        </Text>
        <Text mb={6}>
          {t('plantingVegetablesFive')}
        </Text>
        <Flex mb={2} alignItems="center">
          {t('plantingVegetablesSix')}
        </Flex>
        <Text mb={2}>
          {t('plantingVegetablesSeven')}
        </Text>
        <Text mb={2}>
          {t('plantingVegetablesEight')}
        </Text>
        <Text mb={4}>
          {t('plantingVegetablesNine')}
        </Text>
        <Flex justifyContent="center">
          <Image src={images.growingVegetables} />
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.PlantingVegetables}
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
