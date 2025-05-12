import React, { useState } from 'react'
import { WikiSidebar } from './components/WikiSidebar'
import { Flex } from '@chakra-ui/react'
import { WikiMenu } from './components/WikiMenu'
import { Welcome } from './tabs/Welcome'
import { Advanced, Basics, Commands, Crafting, GettingStarted, Bestiary, Charms, Cooking, Fishing, Herbalism, Mining, PlantingVegetables, Skinning, WorldChanges } from './tabs'

export const Wiki: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<WikiMenu>(WikiMenu.Welcome)

  return (
    <Flex w="100vw" minH="100vh" justifyContent="center">
      <WikiSidebar selected={selectedTab} onSelect={setSelectedTab} />
      <Flex pl={{ base: 4, md: 12 }} pr={{ base: 2, md: 8 }}>
        {selectedTab === WikiMenu.Welcome && <Welcome />}
        {selectedTab === WikiMenu.GettingStarted && <GettingStarted />}
        {selectedTab === WikiMenu.Basics && <Basics />}
        {selectedTab === WikiMenu.Advanced && <Advanced />}
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
      </Flex>
    </Flex>
  )
}
