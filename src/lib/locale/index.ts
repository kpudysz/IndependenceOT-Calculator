import { Languages, LocalStorageKeys } from 'lib/types'
import { en } from './en'
import { pl } from './pl'
import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources: Resource = {
    en,
    pl
}

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem(LocalStorageKeys.LANGUAGE) || Languages.En,
    ns: typeof resources[Languages.En],
    fallbackLng: Languages.En,
    interpolation: {
        escapeValue: false
    },
    returnNull: false
})

export default i18n
