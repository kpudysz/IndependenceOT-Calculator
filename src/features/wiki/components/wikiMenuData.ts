import { WikiMenu } from './WikiMenu'

export const wikiMenuData = [
  { key: WikiMenu.Welcome, label: 'Welcome' },
  { key: WikiMenu.GettingStarted, label: 'Getting Started' },
  { key: WikiMenu.Basics, label: 'Basics' },
  { key: WikiMenu.Commands, label: 'Commands' },
  { key: WikiMenu.Bestiary, label: 'Bestiary' },
  { key: WikiMenu.Bosses, label: 'Bosses' },
  { key: WikiMenu.Crafting, label: 'Crafting' },
  { key: WikiMenu.LightSources, label: 'Light Sources' },
  { key: WikiMenu.Magic, label: 'Magic' },
  { key: WikiMenu.WorldChanges, label: 'World Changes' },
  { key: WikiMenu.Achievements, label: 'Achievements' },
  {
    key: WikiMenu.Mechanics,
    label: 'Mechanics',
    children: [
      { key: WikiMenu.Charms, label: 'Charms' },
      { key: WikiMenu.Pickholes, label: 'Pickholes' },
      { key: WikiMenu.Fishing, label: 'Fishing' },
      { key: WikiMenu.Herbalism, label: 'Herbalism' },
      { key: WikiMenu.Mining, label: 'Mining' },
      { key: WikiMenu.Skinning, label: 'Skinning' },
      { key: WikiMenu.PlantingVegetables, label: 'Planting Vegetables' },
      { key: WikiMenu.Cooking, label: 'Cooking' },
      { key: WikiMenu.GrowingFruits, label: 'Growing Fruits' },
      { key: WikiMenu.MakingRum, label: 'Making Rum' }
    ]
  },
  {
    key: WikiMenu.Cosmetics,
    label: 'Cosmetics',
    children: [
      { key: WikiMenu.Outfits, label: 'Outfits' },
      { key: WikiMenu.Mounts, label: 'Mounts' }
    ]
  }
]
