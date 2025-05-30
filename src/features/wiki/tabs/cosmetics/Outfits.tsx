import { Box, Collapse, Divider, Flex, Image, Text, Tooltip } from "@chakra-ui/react"
import { faFileContract } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "common/constants"
import { WikiMenu } from "features/wiki"
import { SuggestChanges } from "features/wiki/components"
import { outfitsData } from "features/wiki/data"
import { CollapseTile } from "lib/components"
import { capitalizeWords } from 'lib/utils'
import React, { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSendSuggestion } from '../../hooks'

const initialState: Record<string, boolean> = {
	citizen: false,
	mage: false,
	noble: false,
	summoner: false,
	warrior: false,
	druid: false,
	afflicted: false,
	lupine: false,
	ranger: false
}

export const Outfits: React.FC = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki' })
	const { mutate: sendSuggestion, isLoading, isSuccess, isError } = useSendSuggestion()
	const [isOutfitOpen, setIsOutfitOpen] = useState(initialState)
	const outfits = outfitsData()

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
					{t('outfits.outfits')}
				</Text>
				<Flex flexDirection="column" gap="15px">
					{outfits.map(outfit => (
						<Fragment key={outfit.name}>
							<CollapseTile
								isOpen={isOutfitOpen[outfit.name]}
								setIsOpen={() => setIsOutfitOpen(prevState => ({ ...prevState, [outfit.name]: !prevState[outfit.name] }))}
								title={capitalizeWords(outfit.name) || ''}
							/>
							<Collapse in={isOutfitOpen[outfit.name]}>
								{outfit.baseOutfit && outfit.baseOutfitFemale && outfit.description && (
									<Flex alignItems="center" mb={5}>
										<Image src={outfit.baseOutfit} />
										<Image src={outfit.baseOutfitFemale} mr={5} />
										<Text mt={2}>
											{outfit.description}
										</Text>
									</Flex>
								)}
								{outfit.descriptionFirst && outfit.femaleFirst && outfit.firstAddon && (
									<Flex alignItems="center" mb={5}>
										<Image src={outfit.firstAddon} />
										<Image src={outfit.femaleFirst} mr={5} />
										<Text mt={2}>
											{outfit.descriptionFirst}
										</Text>
									</Flex>
								)}
								{outfit.descriptionSecond && outfit.femaleSecond && outfit.secondAddon && (
									<Flex alignItems="center" mb={5}>
										<Image src={outfit.secondAddon} />
										<Image src={outfit.femaleSecond} mr={5} />
										<Text mt={2}>
											{outfit.descriptionSecond}
										</Text>
									</Flex>
								)}
							</Collapse>
						</Fragment>
					))}
				</Flex>
				<Flex justifyContent="flex-end" mt={8}>
					<Tooltip label={t('outfits.createdBy')} fontSize="md" hasArrow>
						<FontAwesomeIcon icon={faFileContract} />
					</Tooltip>
				</Flex>
				<Divider my={4} />
				<SuggestChanges
					source={WikiMenu.Outfits}
					isLoading={isLoading}
					isSuccess={isSuccess}
					isError={isError}
					onSend={(content, source, author) => sendSuggestion({ content, source, author })}
				/>
			</Box >
		</Flex >
	)
}
