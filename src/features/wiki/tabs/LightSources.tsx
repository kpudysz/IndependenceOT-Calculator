import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { images } from 'assets'
import { colors } from 'common'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from 'features/wiki/components'
import { useSendSuggestion } from 'features/wiki/hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LightSources: React.FunctionComponent = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.lightSources' })
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
					{t('lightSources')}
				</Text>
				<Text mb={4}>
					{t('lightSourcesDescription')}
				</Text>
				<Flex mb={5} alignItems="center" flexDirection="column" px={{ base: 4, md: 8 }} textAlign="center" maxW="800px" mx="auto">
					<Image src="https://tibiopedia.pl/images/static/items/torch.gif" mr="10px" />
					<Text>
						{t('torches')}
					</Text>
					<Text>
						{t('lightRadius')}
					</Text>
					<Text>
						{t('torchLight')}
					</Text>
					<Text>
						{t('torchStages')}
					</Text>
					<Text>
						{t('torchBuy')}
					</Text>
				</Flex>
				<Flex mb={5} alignItems="center" flexDirection="column" px={{ base: 4, md: 8 }} textAlign="center" maxW="800px" mx="auto">
					<Image src="https://tibiopedia.pl/images/static/items/magic_light_wand.gif" mr="10px" />
					<Text>
						{t('magicLightWands')}
					</Text>
					<Text>
						{t('magicLightWandsOne')}
					</Text>
					<Text>
						{t('magicLightWandsTwo')}
					</Text>
					<Text>
						{t('magicLightWandsThree')}
					</Text>
					<Text>
						{t('magicLightWandsFour')}
					</Text>
					<Text>
						{t('magicLightWandsFive')}
					</Text>
				</Flex>
				<Flex alignItems="center" flexDirection="column" px={{ base: 4, md: 8 }} textAlign="center" maxW="800px" mx="auto">
					<Image src={images.blueSparkles} mr="10px" />
					<Text>
						{t('magic')}
					</Text>
					<Text>
						{t('magicOne')}
					</Text>
					<Text>
						{t('magicTwo')}
					</Text>
					<Text>
						{t('magicThree')}
					</Text>
					<Text>
						{t('magicFour')}
					</Text>
					<Text>
						{t('magicFive')}
					</Text>
				</Flex>
				<Divider my={4} />
				<SuggestChanges
					source={WikiMenu.LightSources}
					isLoading={isLoading}
					isSuccess={isSuccess}
					isError={isError}
					onSend={(content, source, author) => sendSuggestion({ content, source, author })}
				/>
			</Box>
		</Flex>
	)
}
