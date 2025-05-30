import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges } from 'features/wiki/components'
import { useSendSuggestion } from 'features/wiki/hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { WikiMenu } from 'features/wiki'

export const Pickholes: React.FC = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.pickholes' })
	const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()

	return (
		<Flex justify="center" align="flex-start" w="100%" h="100%" px={[2, 4, 6]}>
			<Box
				border="1px solid #9CA0A6"
				borderRadius="lg"
				w="100%"
				maxW="900px"
				color={colors.text}
				bg={colors.background}
				p={[4, 6, 8]}
				boxShadow="md"
				fontSize={["md", "lg"]}
			>
				<Flex fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" mb={[6, 8, 10]} justifyContent="center">
					{t('pickholes')}
				</Flex>
				<Text mb={4}>{t('pickholesOne')}</Text>
				<Text mb={6}>
					{t('pickholesTwo')}
				</Text>
				<Text mb={6}>
					{t('pickholesThree')}
				</Text>
				<Text mb={6}>
					{t('pickholesFour')}
				</Text>
				<Divider my={4} />
				<SuggestChanges
					source={WikiMenu.Pickholes}
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
