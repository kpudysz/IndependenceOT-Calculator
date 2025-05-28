import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../hooks'

export const WorldChanges: React.FC = () => {
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
          World Changes
        </Flex>
        <Text mb={4}>
          World Changes are events that will take place until the next server save.
        </Text>
        <Text mb={4}>
          Most of world changes are triggered by players. Current progress towards unlocking world changes can be checked at Seymour's book, above the city library.
        </Text>
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
