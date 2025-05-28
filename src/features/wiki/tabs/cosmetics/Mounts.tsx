import { Box, Divider, Flex, Image, Table, Tbody, Td, Text, Thead, Tooltip, Tr } from "@chakra-ui/react"
import { faFileContract } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "common/constants"
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import { mountsData } from "features/wiki/data"
import React from 'react'
import { useSendSuggestion } from '../../hooks'

export const Mounts: React.FC = () => {
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
					Mounts
				</Text>
				<Table>
					<Thead>
						<Tr>
							<Td>Name</Td>
							<Td>Description</Td>
						</Tr>
					</Thead>
					<Tbody>
						{mountsData.map(mount => (
							<Tr key={mount.name}>
								<Td>
									<Flex alignItems="center">
										<Image src={mount.image} mr={6} />
										<Text>
											{mount.name}
										</Text>
									</Flex>
								</Td>
								<Td>{mount.description}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
				<Flex justifyContent="flex-end" mt={8}>
					<Tooltip label="Created by Zosix" fontSize="md" hasArrow>
						<FontAwesomeIcon icon={faFileContract} />
					</Tooltip>
				</Flex>
				<Divider my={4} />
				<SuggestChanges
					source={WikiMenu.Mounts}
					isLoading={isLoading}
					isSuccess={isSuccess}
					isError={isError}
					onSend={(content, source, author) => sendSuggestion({ content, source, author })}
				/>
			</Box>
		</Flex>
	)
}
