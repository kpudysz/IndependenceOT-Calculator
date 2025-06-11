import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { images } from "assets"
import { colors } from "common"
import { WikiMenu } from "features/wiki"
import { SuggestChanges } from "features/wiki/components"
import { useSendSuggestion } from "features/wiki/hooks"
import React from 'react'
import { useTranslation } from "react-i18next"

export const MakingRum: React.FC = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.makingRum' })
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
					{t('makingRum')}
				</Flex>
				<Text mb={4}>
					{t('rumOne')}
				</Text>
				<Text mb={4}>
					{t('rumTwo')}
				</Text>
				<Text mb={4}>
					{t('rumThree')}
				</Text>
				<Text mb={4}>
					{t('rumFour')}
				</Text>
				<Flex justifyContent="center">
					<Image src={images.rum} />
				</Flex>
				<Text mb={4} mt={4}>
					{t('rumDescription')}
				</Text>
				<Text mb={4}>
					{t('rumDescriptionContinuation')}
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
