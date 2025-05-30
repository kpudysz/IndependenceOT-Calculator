import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { colors } from "common/constants"
import { WikiMenu } from "features/wiki"
import React from 'react'
import { useTranslation } from "react-i18next"
import { SuggestChanges } from "../components"
import { useSendSuggestion } from '../hooks'

export const Basics: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.basics' })
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
        <Text fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          {t('basics')}
        </Text>
        <Text mb={4} fontSize="2xl">
          {t('basicsCharm')}
        </Text>
        <Flex mt="20px" alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/monsters/war_wolf.gif" mr="10px" />
          {t('basicsCharmOne')}
          {t('basicsCharmTwo')}
          {t('basicsCharmThree')}
          {t('basicsCharmFour')}
          {t('basicsCharmFive')}
        </Flex>
        <Text mt="20px" fontSize="2xl">
          {t('basicsMechanics')}
        </Text>
        <Text mt="20px">
          {t('basicsMechanicsOne')}
        </Text>
        <Text mt="20px">
          {t('basicsMechanicsTwo')}
          {t('basicsMechanicsThree')}
          {t('basicsMechanicsFour')}
          {t('basicsMechanicsFive')}
        </Text>
        <Text mt="20px">
          {t('basicsMechanicsSix')}
          {t('basicsMechanicsSeven')}
          {t('basicsMechanicsEight')}
          {t('basicsMechanicsNine')}
        </Text>
        <Text mt="20px" fontSize="2xl">
          {t('mounts')}
        </Text>
        <Flex mt="20px" alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/mounts/rented_horse.gif" mr="10px" />
          {t('mountsOne')}
        </Flex>
        <Flex mt="20px" alignItems="center">
          <Image src="https://tibiopedia.pl/images/static/mounts/rapid_boar.gif" mr="10px" />
          {t('mountsTwo')}
        </Flex>
        <Flex alignItems="center">
          {t('mountsThree')}
          <Image src="https://tibiopedia.pl/images/static/items/rabbits_foot.gif" />
          {t('mountsFour')}
          <Image src="https://tibiopedia.pl/images/static/items/hunting_horn.gif" p="0 6px" />
          Hunting Horn.
        </Flex>
        <Flex alignItems="center">
          {t('mountsFive')}
          <Image src="https://tibiopedia.pl/images/static/monsters/boar.gif" p="0 6px" />
          {t('mountsSix')}
          <Image src="https://tibiopedia.pl/images/static/items/hunting_horn.gif" p="0 6px" />
          Hunting Horn.
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Basics}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          onSend={(content, source, author) => sendSuggestion({ content, source, author })}
        />
      </Box>
    </Flex>
  )
}
