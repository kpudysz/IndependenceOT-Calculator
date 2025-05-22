import { Box, Divider, Flex, Image, ListItem, Table, Tbody, Td, Text, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import { colors } from 'common'
import { SuggestChanges, WikiMenu } from 'features/wiki/components'
import { useSendSuggestion } from 'features/wiki/hooks'
import React from 'react'

export const Magic: React.FunctionComponent = () => {
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
				fontSize={{ base: 'md', md: 'lg' }}
			>
				<Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold" mb={6} textAlign="center">
					Magic
				</Text>
				<Text mb={4}>
					To learn magic you first have to reach magic level 1.
				</Text>
				<Flex mb={4} alignItems="center" flexWrap="wrap">
					<Text as="span" mr={1}>
						The only way to reach it is by using
					</Text>
					<Image
						src="https://tibiopedia.pl/images/static/items/wand_of_vortex.gif"
						boxSize="24px"
						mx={1}
						alt="Wand of Vortex"
					/>
					<Text mr={1}>
						magic wand.
					</Text>
					<Text>
						It is a very rare drop from
					</Text>
					<Image
						src="https://tibiopedia.pl/images/static/monsters/kraknaknork.gif"
						boxSize="24px"
						mx={1}
						alt="Kraknaknork"
					/>
					<Text as="span">Kraknaknork.</Text>
				</Flex>
				<Text mb={2}>
					There are three spells available:
				</Text>
				<UnorderedList>
					<ListItem>Light - Utevo Lux</ListItem>
					<ListItem>Find Person - Exiva</ListItem>
					<ListItem>Levitate - Exani Hur</ListItem>
				</UnorderedList>
				<Text mb={4} mt={4}>
					You can learn them at temple roof from blackboard near Asralius.
				</Text>
				<Text mb={4}>
					Magic Wand is also very powerful weapon because it has high average damage.
					Wand deals energy damage and its damage depends on your magic level.
					Wand requires 1 mana per hit.
				</Text>
				<Table>
					<Thead>
						<Tr>
							<Td>Magic Level</Td>
							<Td>Lowest Damage</Td>
							<Td>Average Damage</Td>
							<Td>Highest Damage</Td>
						</Tr>
					</Thead>
					<Tbody>
						{magicTable.map(level => (
							<Tr key={level}>
								<Td>{level}</Td>
								<Td>{level * 4 + 8}</Td>
								<Td>{level * 6 + 8}</Td>
								<Td>{level * 8 + 8}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
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
