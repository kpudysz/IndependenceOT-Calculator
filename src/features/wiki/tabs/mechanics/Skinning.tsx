import { Box, Divider, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { images } from 'assets'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import React from 'react'
import { useSendSuggestion } from '../../hooks'

export const Skinning: React.FC = () => {
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
          Skinning
        </Flex>
        <Text mb={4}>
          In order to skin creatures you need to purchase skinning knife from Stephan for 50,000 gold.
        </Text>
        <Text mb={4}>
          Skinning allows you to obtain additional creature products from monsters.
        </Text>
        <Text mb={4}>
          Most creatures are skinnable. Creature products can be sold to Tom to trigger certain world changes.
        </Text>
        <Flex justifyContent="center">
          <Image src={images.skinning} mb={4} />
        </Flex>
        <Flex justifyContent="flex-end">
          <Tooltip label="Created by Land Conquistador" fontSize="md" hasArrow>
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
