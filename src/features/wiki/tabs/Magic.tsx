import { Box, Divider, Flex, Image, ListItem, Table, Tbody, Td, Text, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import { colors } from 'common'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from 'features/wiki/components'
import { useSendSuggestion } from 'features/wiki/hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Magic: React.FunctionComponent = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.magic' })
	const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
	const magicTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

	return (
		<Flex justify="center" align="flex-start" w="100%" h="100%" px={2}>
			<Box
				border="1px solid #9CA0A6"
				borderRadius="lg"
				width={{ base: '100%', md: '90%', lg: '900px' }}
				maxW="900px"
				color={colors.text}
				bg={colors.background}
				p={{ base: 4, md: 6, lg: 8 }}
				boxShadow="md"
				fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
			>
				<Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold" mb={6} textAlign="center">
					{t('magic')}
				</Text>
				<Text mb={4}>{t('magicOne')}</Text>
				<Flex
					mb={4}
					alignItems="center"
					flexWrap="wrap"
					gap={2}
					fontSize={{ base: 'sm', md: 'md' }}
				>
					<Text as="span">{t('magicTwo')}</Text>
					<Image
						src="https://tibiopedia.pl/images/static/items/wand_of_vortex.gif"
						boxSize="24px"
						alt="Wand of Vortex"
					/>
					<Text as="span">{t('magicThree')}</Text>
					<Text as="span">{t('magicFour')}</Text>
					<Image
						src="https://tibiopedia.pl/images/static/monsters/kraknaknork.gif"
						boxSize="24px"
						alt="Kraknaknork"
					/>
					<Text as="span">Kraknaknork.</Text>
				</Flex>
				<Text mb={2}>{t('magicFive')}</Text>
				<UnorderedList spacing={2}>
					<ListItem>Light - Utevo Lux</ListItem>
					<ListItem>Find Person - Exiva</ListItem>
					<ListItem>Levitate - Exani Hur</ListItem>
				</UnorderedList>
				<Text mb={4} mt={4}>{t('magicSix')}</Text>
				<Text mb={4}>{t('magicDescription')}</Text>
				<Box overflowX="auto">
					<Table>
						<Thead>
							<Tr wordBreak="break-word">
								<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('magicLevel')}</Td>
								<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('lowestDamage')}</Td>
								<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('averageDamage')}</Td>
								<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{t('highestDamage')}</Td>
							</Tr>
						</Thead>
						<Tbody>
							{magicTable.map(level => (
								<Tr key={level} wordBreak="break-word">
									<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{level}</Td>
									<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{level * 4 + 8}</Td>
									<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{level * 6 + 8}</Td>
									<Td px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>{level * 8 + 8}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
				<Divider my={4} />
				<SuggestChanges
					source={WikiMenu.Magic}
					isLoading={isLoading}
					isSuccess={isSuccess}
					isError={isError}
					onSend={(content, source, author) => sendSuggestion({ content, source, author })}
				/>
			</Box>
		</Flex>
	)
}
