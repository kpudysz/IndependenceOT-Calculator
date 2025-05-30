import { Box, Divider, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { images } from 'assets'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from "features/wiki/components"
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSendSuggestion } from '../../hooks'

export const Skinning: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.skinning' })
  const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()

  return (
    <Flex justify="center" align="flex-start" w="100%" h="100%" px={{ base: 2, md: 4 }}>
      <Box
        border="1px solid #9CA0A6"
        borderRadius="lg"
        w="100%"
        maxW="900px"
        color={colors.text}
        bg={colors.background}
        p={{ base: 4, md: 6, lg: 8 }}
        boxShadow="md"
        fontSize={{ base: 'md', md: 'lg' }}
      >
        <Flex fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={6} justifyContent="center" textAlign="center">
          {t('skinning')}
        </Flex>
        <Text mb={4}>
          {t('skinningOne')}
        </Text>
        <Text mb={4}>
          {t('skinningTwo')}
        </Text>
        <Text mb={4}>
          {t('skinningThree')}
        </Text>
        <Flex justifyContent="center">
          <Image src={images.skinning} mb={4} />
        </Flex>
        <Flex justifyContent="flex-end">
          <Tooltip label={t('createdBy')} fontSize="md" hasArrow>
            <FontAwesomeIcon icon={faFileContract} />
          </Tooltip>
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Skinning}
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
