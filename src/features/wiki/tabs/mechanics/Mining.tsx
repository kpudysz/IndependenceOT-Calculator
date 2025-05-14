import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import { sendSuggestion } from '../../helpers'

export const Mining: React.FC = () => (
    <Flex justify="center" align="flex-start" w="100%" h="100%">
      <Box
          border="1px solid #9CA0A6"
          borderRadius="lg"
          maxW="900px"
          color={colors.text}
          minW="800px"
          w="100%"
          bg={colors.background}
          p={8}
          boxShadow="md"
        >
        <Flex fontSize="4xl" fontWeight="bold" mb={10} justifyContent="center">
          Mining
        </Flex>
        <Text mb={4}>
          Example
        </Text>
        <Divider my={4} />
        <SuggestChanges source={WikiMenu.Mining} onSend={(content, source, author) => sendSuggestion(content, source, author)}/>
      </Box>
    </Flex>
  )
