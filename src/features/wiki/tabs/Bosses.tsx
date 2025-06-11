import { Box, Divider, Flex, Image, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { WikiMenu } from 'features/wiki'
import { SuggestChanges } from 'features/wiki/components'
import React, { Fragment } from 'react'
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
				p={{ base: 4, md: 6, lg: 8 }}
				boxShadow="md"
				fontSize={{ base: 'md', md: 'lg' }}
			>
				<Text fontSize="4xl" fontWeight="bold" mb={6} textAlign="center">
					{t('bosses')}
				</Text>
					<Fragment>
						<Text mb={4}>{t('bossesDescription')}</Text>
						<Text mb={6}>{t('bossesCount')}</Text>
						<Box display={{ base: 'block', md: 'none' }}>
							{bosses.map(boss => (
								<Box key={boss.name} borderWidth="1px" borderRadius="md" p={4} mb={4}>
									<Flex align="center" mb={2}>
										<Image src={boss.image} mr={2} />
										<Text fontWeight="bold">{boss.name}</Text>
									</Flex>
									<Text mb={2}><strong>{t('location')}:</strong> {boss.location}</Text>
									<Box mb={2}>
										<Text fontWeight="semibold">{t('common')}:</Text>
										{boss.common.map(item => (
											<Flex key={item.name} align="center" mt={1}>
												<Image src={item.image} mr={2} />
												<Text>{item.name}</Text>
											</Flex>
										))}
									</Box>
									<Box mb={2}>
										<Text fontWeight="semibold">{t('rare')}:</Text>
										{boss.rare.map(item => (
											<Flex key={item.name} align="center" mt={1}>
												<Image src={item.image} mr={2} />
												<Text>{item.name}</Text>
											</Flex>
										))}
									</Box>
									<Box>
										<Text fontWeight="semibold">{t('veryRare')}:</Text>
										{boss.veryRare.map(item => (
											<Flex key={item.name} align="center" mt={1}>
												<Image src={item.image} mr={2} />
												<Text>{item.name}</Text>
											</Flex>
										))}
									</Box>
								</Box>
							))}
						</Box>
					</Fragment>
				<Box display={{ base: 'none', md: 'block' }} overflowX="auto">
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
											<Flex key={item.name} alignItems="center" mb={1}>
												<Image src={item.image} mr="6px" />
												<Text>{item.name}</Text>
											</Flex>
										))}
									</Td>
									<Td>
										{boss.rare.map(item => (
											<Flex key={item.name} alignItems="center" mb={1}>
												<Image src={item.image} mr="6px" />
												<Text>{item.name}</Text>
											</Flex>
										))}
									</Td>
									<Td>
										{boss.veryRare.map(item => (
											<Flex key={item.name} alignItems="center" mb={1}>
												<Image src={item.image} mr="6px" />
												<Text>{item.name}</Text>
											</Flex>
										))}
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
				<Divider my={6} />
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
