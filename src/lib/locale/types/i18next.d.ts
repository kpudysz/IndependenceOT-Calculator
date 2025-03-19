import 'i18next'
import { en } from '../en'

declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false,
        resources: typeof en
    }
}
