import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { images } from 'assets'
import { colors } from 'common'
import { SuggestChanges, WikiMenu } from 'features/wiki/components'
import { useSendSuggestion } from 'features/wiki/hooks'
import React from 'react'

export const LightSources: React.FunctionComponent = () => {
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
					Light Sources
				</Text>
				<Text mb={4}>
					There are few light sources available but most of them are not used because of low light radius. Below you can find light sources that are commonly used by players.
				</Text>
				<Flex mb={5} alignItems="center" flexDirection="column" px={{ base: 4, md: 8 }} textAlign="center" maxW="800px" mx="auto">
					<Image src="https://tibiopedia.pl/images/static/items/torch.gif" mr="10px" />
					<Text>
						Torches are a good choice for beginners since they are very cheap.
					</Text>
					<Text>
						They have average light radius and last for 20 minutes.
					</Text>
					<Text>
						As the torch gets used the light gets weaker and torch gets shorter.
					</Text>
					<Text>
						The first stage lasts 10 minutes, second and third stage lasts 5 minutes.
					</Text>
					<Text>
						They can be bought for 2 gp from Lee'delle and Al'dee, or 1 gp from Jeronimo.
					</Text>
				</Flex>
				<Flex mb={5} alignItems="center" flexDirection="column" px={{ base: 4, md: 8 }} textAlign="center" maxW="800px" mx="auto">
					<Image src="https://tibiopedia.pl/images/static/items/magic_light_wand.gif" mr="10px" />
					<Text>
						Magic Light Wands are often used by experienced players because they are much harder to get and are expensive to use.
					</Text>
					<Text>
						They have very high light radius and last for 1 hour.
					</Text>
					<Text>
						After time runs out they can be recharged at the temple roof for 1k gold near Asralius.
					</Text>
					<Text>
						Since temple roof can only be accessed by players that know how to use magic this light source is limited for experienced players.
					</Text>
					<Text>
						Some players ask players with temple roof access to repair the used magic light wands for them.
					</Text>
					<Text>
						They cannot be bought from NPC's and are available from hidden daily spawns or may drop from Apprentice Sheng.
					</Text>
				</Flex>
				<Flex alignItems="center" flexDirection="column" px={{ base: 4, md: 8 }} textAlign="center" maxW="800px" mx="auto">
					<Image src={images.blueSparkles} mr="10px" />
					<Text>
						Magic is one of the best light sources since it can be used indefinetly for free just from mana regeneration.
					</Text>
					<Text>
						It has average light radius and lasts for 6 minutes and 10 seconds.
					</Text>
					<Text>
						Similar to torch it gets weaker with time but mana regeneration allows it to apply it every 2 minutes.
					</Text>
					<Text>
						It can be used by players that know magic.
					</Text>
					<Text>
						It might be a bit annoying since it has to be reapplied constantly and thats why some players prefer to use magic light wands over magic.
					</Text>
					<Text>
						Magic is also often used by players using distance fighting since arrows take the "arrow slot", meaning you cannot use torch or magic light wand.
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
