export const capitalizeWords = (words?: string) => words?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
