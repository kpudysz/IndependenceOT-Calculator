import { WikiMenu } from './WikiMenu'

export const wikiMenuData = [
  { key: WikiMenu.Welcome, label: 'Welcome' },
  { key: WikiMenu.GettingStarted, label: 'Getting Started' },
  { key: WikiMenu.Basics, label: 'Basics' },
  { key: WikiMenu.Advanced, label: 'Advanced' },
  { key: WikiMenu.Commands, label: 'Commands' },
  { key: WikiMenu.Crafting, label: 'Crafting' },
  { key: WikiMenu.Bestiary, label: 'Bestiary' },
  {
    key: WikiMenu.Mechanics,
    label: 'Mechanics',
    children: [
      { key: WikiMenu.Charms, label: 'Charms' },
      { key: WikiMenu.Fishing, label: 'Fishing' },
      { key: WikiMenu.Herbalism, label: 'Herbalism' },
      { key: WikiMenu.Mining, label: 'Mining' },
      { key: WikiMenu.Skinning, label: 'Skinning' },
      { key: WikiMenu.PlantingVegetables, label: 'Planting Vegetables' },
      { key: WikiMenu.Cooking, label: 'Cooking' },
      { key: WikiMenu.WorldChanges, label: 'World Changes' }
    ]
  }
]
