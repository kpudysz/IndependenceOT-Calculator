import { Box, Divider, Flex, Image, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from 'features/wiki/components'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { bossesData } from '../data'
import { useSendSuggestion } from '../hooks'

export const Bosses: React.FunctionComponent = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.bosses' })
	const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
	const bosses = bossesData()

	return (
		<Flex justify="center" align="flex-start" w="100%" h="100%">
			<Box
				border="1px solid #9CA0A6"
				borderRadius="lg"
				width={{ base: '100%', md: '90%', lg: '900px' }}
				color={colors.text}
				bg={colors.background}
				p={{ base: 2, md: 6, lg: 8 }}
				boxShadow="md"
				fontSize={{ base: 'md', md: 'lg' }}
			>
				<Text fontSize="4xl" fontWeight="bold" mb={10} textAlign="center">
					{t('bosses')}
				</Text>
				<Text mb={4}>
					{t('bossesDescription')}
				</Text>
				<Text mb={4}>
					{t('bossesCount')}
				</Text>
				<Table>
					<Thead>
						<Tr>
							<Td>{t('name')}</Td>
							<Td>{t('location')}</Td>
							<Td>{t('common')}</Td>
							<Td>{t('rare')}</Td>
							<Td>{t('veryRare')}</Td>
						</Tr>
					</Thead>
					<Tbody>
						{bosses.map(boss => (
							<Tr key={boss.name}>
								<Td>
									<Flex alignItems="center">
										<Image src={boss.image} mr="10px" />
										<Text>{boss.name}</Text>
									</Flex>
								</Td>
								<Td>{boss.location}</Td>
								<Td>
									{boss.common.map(item => (
										<Flex key={item.name} alignItems="center" padding="5px">
											<Image src={item.image} mr="10px" />
											<Text>{item.name}</Text>
										</Flex>
									))}
								</Td>
								<Td>
									{boss.rare.map(item => (
										<Flex key={item.name} alignItems="center" padding="5px">
											<Image src={item.image} mr="10px" />
											<Text>{item.name}</Text>
										</Flex>
									))}
								</Td>
								<Td>
									{boss.veryRare.map(item => (
										<Flex key={item.name} alignItems="center" padding="5px">
											<Image src={item.image} mr="10px" />
											<Text>{item.name}</Text>
										</Flex>
									))}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
				<Divider my={4} />
				<SuggestChanges
					source={WikiMenu.Bosses}
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
