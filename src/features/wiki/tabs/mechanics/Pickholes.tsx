import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { SuggestChanges, WikiMenu } from 'features/wiki/components'
import { useSendSuggestion } from 'features/wiki/hooks'
import React from 'react'

export const Pickholes: React.FC = () => {
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
					Pickholes
				</Flex>
				<Text mb={4}>There are three types of pickholes.</Text>
				<Text mb={6}>
					Standard - These work the same as always: you use a pick and it reveals a pickhole for 5 minutes.
					After that, the hole disappears and you have to use your pick again.
				</Text>
				<Text mb={6}>
					Automatic - These holes open by themselves at a random time after the server save.
					Picks are not necessary. They open on their own between 30 minutes and 23 hours after the save.
					This type is mostly used for bonus rooms.
				</Text>
				<Text mb={6}>
					Fragile - These have a 20% chance of being revealed. If successful, the pickhole is revealed for 5 minutes.
					If failed, you'll see a "poof" and the pickhole is locked until the next server save.
					These are tricky because if someone else tried and failed, it won't show any indication.
					Fragile pickholes are usually for bonus or secret rooms.
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
