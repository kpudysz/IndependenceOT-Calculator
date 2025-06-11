import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { images } from 'assets'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from "features/wiki/components"
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSendSuggestion } from '../../hooks'

export const Herbalism: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.herbalism' })
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
          {t('herbalism')}
        </Flex>
        <Flex
          mb={4}
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Text as="span">{t('herbalismOne')}</Text>
          <Image src="https://tibiopedia.pl/images/static/items/moon_flower.gif" />
          <Text as="span">{t('herbalismTwo')}</Text>
          <Image src="https://tibiopedia.pl/images/static/items/heaven_blossom.gif" />
          <Text as="span">{t('herbalismThree')}</Text>
        </Flex>
        <Text mb={4}>
          {t('herbalismFour')}
        </Text>
        <Text mb={4}>
          {t('herbalismFive')}
        </Text>
        <Text mb={4}>
          {t('herbalismSix')}
        </Text>
        <Flex justifyContent="center">
          <Image src={images.herbalism} />
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Herbalism}
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
