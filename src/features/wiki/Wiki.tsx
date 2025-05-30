import { Flex } from '@chakra-ui/react'
import { GrowingFruits, MakingRum } from 'features/wiki/tabs/mechanics'
import React, { useState } from 'react'
import { WikiSidebar } from './components/WikiSidebar'
import {
  Basics,
  Bestiary,
  Bosses,
  Charms,
  Commands,
  Cooking,
  Crafting,
  Fishing,
  GettingStarted,
  Herbalism,
  LightSources,
  Magic,
  Mining,
  Mounts,
  Outfits,
  Pickholes,
  PlantingVegetables,
  Skinning,
  WorldChanges
} from './tabs'
import { Welcome } from './tabs/Welcome'
import { WikiMenu } from './types'

export const Wiki: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<WikiMenu>(WikiMenu.Welcome)

  return (
    <Flex minW="100vw" minH="100vh" justifyContent="center">
      <WikiSidebar selected={selectedTab} onSelect={setSelectedTab} />
      <Flex pl={{ base: 4, md: 12 }} pr={{ base: 2, md: 8 }}>
        {selectedTab === WikiMenu.Welcome && <Welcome />}
        {selectedTab === WikiMenu.GettingStarted && <GettingStarted />}
        {selectedTab === WikiMenu.Basics && <Basics />}
        {selectedTab === WikiMenu.Commands && <Commands />}
        {selectedTab === WikiMenu.Crafting && <Crafting />}
        {selectedTab === WikiMenu.Bestiary && <Bestiary />}
        {selectedTab === WikiMenu.Charms && <Charms />}
        {selectedTab === WikiMenu.Fishing && <Fishing />}
        {selectedTab === WikiMenu.Herbalism && <Herbalism />}
        {selectedTab === WikiMenu.Mining && <Mining />}
        {selectedTab === WikiMenu.Skinning && <Skinning />}
        {selectedTab === WikiMenu.PlantingVegetables && <PlantingVegetables />}
        {selectedTab === WikiMenu.Cooking && <Cooking />}
        {selectedTab === WikiMenu.WorldChanges && <WorldChanges />}
        {selectedTab === WikiMenu.Bosses && <Bosses />}
        {selectedTab === WikiMenu.LightSources && <LightSources />}
        {selectedTab === WikiMenu.Magic && <Magic />}
        {selectedTab === WikiMenu.Pickholes && <Pickholes />}
        {selectedTab === WikiMenu.GrowingFruits && <GrowingFruits />}
        {selectedTab === WikiMenu.MakingRum && <MakingRum />}
        {selectedTab === WikiMenu.Mounts && <Mounts />}
        {selectedTab === WikiMenu.Outfits && <Outfits />}
      </Flex>
    </Flex>
  )
}
