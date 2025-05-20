import { Box, Divider, Flex, Image, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from 'features/wiki/components'
import React from 'react'
import { bossesData } from '../data'
import { useSendSuggestion } from '../hooks'

export const Bosses: React.FunctionComponent = () => {
	const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()

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
					Bosses
				</Text>
				<Text mb={4}>
					At the start of each server save, a script determines which bosses will spawn that day and at what time.
					The process is randomized, and there's a high chance that specific bosses won't appear at all during that day.
					Typically, only one boss spawns per server save, but there's a small chance the same boss may appear twice during a single server save.
				</Text>
				<Text mb={4}>
					There are 17 bosses overall. Some are still unknown until this day.
				</Text>
				<Table>
					<Thead>
						<Tr>
							<Td>Name</Td>
							<Td>Location</Td>
							<Td>Common</Td>
							<Td>Rare</Td>
							<Td>Very rare</Td>
						</Tr>
					</Thead>
					<Tbody>
						{bossesData.map(boss => (
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
