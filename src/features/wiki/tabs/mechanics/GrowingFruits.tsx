import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { images } from "assets"
import { colors } from "common"
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import { useSendSuggestion } from "features/wiki/hooks"
import React from 'react'

export const GrowingFruits: React.FC = () => {
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
					Growing Fruits
				</Flex>
				<Flex mb={4} alignItems="center">
					<Image src="https://tibiopedia.pl/images/static/items/watering_can.gif" />
					To grow fruits you need watering can. It can be purchased from Billy for 800 gp.
				</Flex>
				<Text mb={4}>
					After you have watering can approach fruit tree - these can be mostly found near Billy in town.
					Use watering can on the tree, from now on it should have pool of water beneath it, which means that fruits are growing.
					It takes 6 hours for fruits to appear on a tree, after that they can be harvested.
				</Text>
				<Flex mb={4} alignItems="center">
					<Text>
						You can use fertilizer
					</Text>
					<Image src="https://tibiopedia.pl/images/static/items/bone_meal.gif" mr={1} ml={1} />
					<Text>
						bone meal on trees to speed up the process.
					</Text>
				</Flex>
				<Text mb={4}>
					Fertilizer has roughly 30% success chance, after success the fruits will appear on a tree and will be ready to be harvested.
				</Text>
				<Text mb={4}>
					Fruits can be eaten or sold to Billy for 10gp/each.
				</Text>
				<Flex justifyContent="center">
					<Image src={images.wateringFruits} />
				</Flex>
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
