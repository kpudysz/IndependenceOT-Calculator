import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'
import { WikiMenu } from 'features/wiki'
import { useTranslation } from 'react-i18next'

export const Cooking: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.cooking' })
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
          {t('cooking')}
        </Flex>
        <Text mb={4}>
          {t('cookingOne')}
          {t('cookingTwo')}
          {t('cookingThree')}
        </Text>
        <Text mb={4}>
          {t('cookingFour')}
        </Text>
        <Text mb={4}>
          {t('cookingFive')}
        </Text>
        <Flex flexDirection="column" gap={2}>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/brown_bread.gif" mr={2} />
            Brown Bread
          </Flex>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/roll.gif" mr={2} />
            Roll
          </Flex>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/rat_cheese.gif" mr={2} />
            Cheddar Cheese
          </Flex>
          <Flex alignItems="center">
            <Image src="https://tibiopedia.pl/images/static/items/soft_cheese.gif" mr={2} />
            Camembert Cheese
          </Flex>
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Cooking}
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
