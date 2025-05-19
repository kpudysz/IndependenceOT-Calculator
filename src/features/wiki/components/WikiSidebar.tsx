import { Box, Flex } from '@chakra-ui/react'
import { colors } from 'common/constants'
import React, { useState } from 'react'
import { WikiMenu } from './WikiMenu'
import { wikiMenuData } from './wikiMenuData'

type SidebarProps = {
  selected: WikiMenu,
  onSelect(key: WikiMenu): void
}

export const WikiSidebar: React.FC<SidebarProps> = ({ onSelect, selected }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<Array<Record<WikiMenu, boolean>>>([])

  const handleToggle = (key: WikiMenu) => {
    setIsMenuOpen(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <Flex
      width="240px"
      direction="column"
      bg={colors.background}
      color={colors.text}
      height="100%"
      borderRadius="6px"
    >
      <Box as="ul" listStyleType="none" w="100%">
        {wikiMenuData.map(item => {
          const isOpen = isMenuOpen[item.key] || false
          const isSelected = selected === item.key
          const isAnyChildSelected = item.children?.some(child => child.key === selected)

          return (
            <Box as="li" key={item.key} w="100%">
              <Flex
                align="center"
                justify="space-between"
                px="20px"
                py="12px"
                cursor="pointer"
                border={isOpen || isAnyChildSelected ? `1px solid ${colors.orange}` : isSelected ? `1px solid ${colors.yellow}` : 'none'}
                bg={isSelected ? colors.selected : 'transparent'}
                color={isOpen || isAnyChildSelected ? colors.orange : isSelected ? colors.yellow : colors.text}
                transition="background 0.15s"
                _hover={{ bg: colors.selected }}
                onClick={() => {
                  if (item.children) {
                    return handleToggle(item.key)
                  }

                  onSelect(item.key)
                }}
              >
                <Box as="span">{item.label}</Box>
                {item.children && (
                  <Box
                    as="span"
                    ml={2}
                    transition="transform 0.3s"
                    style={{
                      display: 'inline-block',
                      transform: isOpen ? 'rotate(90deg)' : 'none'
                    }}
                  >
                    ▶
                  </Box>
                )}
              </Flex>
              {item.children && (
                <Box
                  as="ul"
                  bg={'transparent'}
                  listStyleType="none"
                  overflow="hidden"
                  mt="6px"
                  pl="0"
                  borderLeft={`1px solid ${colors.gray}`}
                  borderBottom={`1px solid ${colors.gray}`}
                  style={{
                    maxHeight: isOpen ? `${item.children.length * 40}px` : '0',
                    transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {item.children.map((child, index, array) => {
                    const isChildSelected = selected === child.key

                    return (
                      <Box
                        as="li"
                        key={child.key}
                        w="100%"
                        mt={!index ? '6px' : 0}
                        mb={array.length - 1 === index ? '6px' : 0}
                        onClick={() => onSelect(child.key)}
                      >
                        <Flex
                          align="center"
                          pl="20px"
                          pr="16px"
                          py="10px"
                          fontSize="15px"
                          fontWeight="normal"
                          cursor="pointer"
                          bg={isChildSelected ? colors.selected : 'transparent'}
                          color={isChildSelected ? colors.yellow : colors.text}
                          border={isChildSelected ? `1px solid ${colors.yellow}` : 'none'}
                          borderRadius="0 4px 4px 0"
                          transition="background 0.15s"
                          _hover={{ bg: colors.selected }}
                        >
                          {child.label}
                        </Flex>
                      </Box>
                    )
                  })}
                </Box>
              )}
            </Box>
          )
        })}
      </Box>
    </Flex>
  )
}
