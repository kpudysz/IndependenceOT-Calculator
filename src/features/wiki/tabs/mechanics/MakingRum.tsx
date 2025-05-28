import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { images } from "assets"
import { colors } from "common"
import { SuggestChanges, WikiMenu } from "features/wiki/components"
import { useSendSuggestion } from "features/wiki/hooks"
import React from 'react'

export const MakingRum: React.FC = () => {
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
					Making Rum
				</Flex>
				<Text mb={4}>
					To make rum you first need bunch of sugar cane. You can find such field just below NPC Lee'delle.
				</Text>
				<Text mb={4}>
					To cut sugar cane use scythe on it. Buy up to 15 empty flask of rum from Billy near the distillery and use bunch of sugar cane on it.
				</Text>
				<Text mb={4}>
					Now use empty flasks on distillery, you can do it for about 15-20 seconds before it will stop working.
				</Text>
				<Text mb={4}>
					Now go a little bit to the south to the boat and throw the flasks onto the boxes that are on the boat.
				</Text>
				<Flex justifyContent="center">
					<Image src={images.rum} />
				</Flex>
				<Text mb={4} mt={4}>
					You will get 50 experience for using sugar cane on distillery and 5 experience for each flask thrown on the box.
					Additionally you will get 20 gold for each flask thrown.
				</Text>
				<Text mb={4}>
					Sugar canes are often used for powerleveling characters so they are valueable and a good way of making gold.
					It takes a lot of effort to process sugar canes into the rum but in the end it gives high profit and a lot of experience.
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
