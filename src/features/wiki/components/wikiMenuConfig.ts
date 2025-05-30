import { useTranslation } from 'react-i18next'
import { WikiMenu } from '../types'

export const wikiMenuConfig = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'wiki.menu' })

  return [
    { key: WikiMenu.Welcome, label: t('welcome') },
    { key: WikiMenu.GettingStarted, label: t('gettingStarted') },
    { key: WikiMenu.Basics, label: t('basics') },
    { key: WikiMenu.Commands, label: t('commands') },
    { key: WikiMenu.Bestiary, label: t('bestiary') },
    { key: WikiMenu.Bosses, label: t('bosses') },
    { key: WikiMenu.Crafting, label: t('crafting') },
    { key: WikiMenu.LightSources, label: t('lightSources') },
    { key: WikiMenu.Magic, label: t('magic') },
    { key: WikiMenu.WorldChanges, label: t('worldChanges') },
    {
      key: WikiMenu.Mechanics,
      label: t('mechanics'),
      children: [
        { key: WikiMenu.Charms, label: t('charms') },
        { key: WikiMenu.Pickholes, label: t('pickholes') },
        { key: WikiMenu.Fishing, label: t('fishing') },
        { key: WikiMenu.Herbalism, label: t('herbalism') },
        { key: WikiMenu.Mining, label: t('mining') },
        { key: WikiMenu.Skinning, label: t('skinning') },
        { key: WikiMenu.PlantingVegetables, label: t('plantingVegetables') },
        { key: WikiMenu.Cooking, label: t('cooking') },
        { key: WikiMenu.GrowingFruits, label: t('growingFruits') },
        { key: WikiMenu.MakingRum, label: t('makingRum') }
      ]
    },
    {
      key: WikiMenu.Cosmetics,
      label: t('cosmetics'),
      children: [
        { key: WikiMenu.Outfits, label: t('outfits') },
        { key: WikiMenu.Mounts, label: t('mounts') }
      ]
    }
  ]
}
