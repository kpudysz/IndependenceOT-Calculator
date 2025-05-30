import { Box, Divider, Flex, Text, Tooltip } from "@chakra-ui/react"
import { faFileContract } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "common/constants"
import React from 'react'
import { SuggestChanges } from "../components"
import { useSendSuggestion } from '../hooks'
import { WikiMenu } from "features/wiki"
import { useTranslation } from "react-i18next"

export const Commands: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.commands' })
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
          {t('commands')}
        </Text>
        <Text mb={4}>
          !loot - {t('loot')}
        </Text>
        <Text mb={4}>
          !time - {t('time')}
        </Text>
        <Text mb={4}>
          !autoloot add, "itemname" - {t('autolootAdd')}
        </Text>
        <Text mb={4}>
          !autoloot remove, "itemname" - {t('autolootRemove')}
        </Text>
        <Text mb={4}>
          !autoloot show - {t('autolootShow')}
        </Text>
        <Text mb={4}>
          !autoloot clear - {t('autolootClear')}
        </Text>
        <Text mb={4}>
          !online - {t('online')}
        </Text>
        <Text mb={4}>
          !uptime - {t('uptime')}
        </Text>
        <Text mb={4}>
          !pos or /pos - {t('pos')}
        </Text>
        <Text mb={4}>
          !serverinfo - {t('serverinfo')}
        </Text>
        <Text mb={6}>
          !kills - {t('kills')}
        </Text>
        <Text fontSize="3xl" mb={4}>
          {t('houseCommands')}
        </Text>
        <Text mb={4}>
          {t('houseCommandsDescription')}
        </Text>
        <Text mb={4}>
          !buyhouse - {t('buyhouse')}
        </Text>
        <Text mb={4}>
          !sellhouse - {t('sellhouse')}
        </Text>
        <Text mb={4}>
          !leavehouse - {t('leavehouse')}
        </Text>
        <Text mb={4}>
          aleta grav - {t('aletaGrav')}
        </Text>
        <Text fontSize="3xl" mb={4}>
          {t('houseCommandsInside')}
        </Text>
        <Text mb={4}>
          aleta sio - {t('aletaSio')}
        </Text>
        <Text mb={4}>
          aleta som - {t('aletaSom')}
        </Text>
        <Text mb={8}>
          alana sio "nickname" - {t('alanaSio')}
        </Text>
        <Flex justifyContent="flex-end">
          <Tooltip label={t('createdBy')} fontSize="md" hasArrow>
            <FontAwesomeIcon icon={faFileContract} />
          </Tooltip>
        </Flex>
        <Divider my={4} />
        <SuggestChanges
          source={WikiMenu.Commands}
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
