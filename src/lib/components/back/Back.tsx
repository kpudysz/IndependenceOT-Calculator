import React from 'react'
import { Button, Flex, useMediaQuery } from '@chakra-ui/react'
import { Icons } from 'assets'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type BackProps = {
    onClick: VoidFunction
}

export const Back: React.FunctionComponent<BackProps> = ({ onClick }) => {
    const { t } = useTranslation('translation')
    const [isMobile] = useMediaQuery('(max-width: 768px)')

    return (
        <Flex position="absolute" top={isMobile ? "20px" : "50px"} left={isMobile ? "20px" : "50px"} color={colors.text} cursor="pointer" onClick={onClick}>
            <Button
                padding={isMobile ? 0 : "8px 22px"}
                borderRadius="4px"
                border="1px solid"
                leftIcon={<Icons.ArrowLeft/>}
                borderColor={colors.orange}
                background={colors.background}
                _hover={{
                    color: colors.yellow,
                    borderColor: colors.yellow,
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    boxShadow: "0 8px 16px #E5FF60",
                    transform: "translateY(-4px)"
                }}
                _active={{
                    background: colors.background,
                    color: "lightgreen",
                    borderColor: "lightgreen",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    boxShadow: "0 8px 16px lightgreen",
                    transform: "translateY(-4px)"
                }}
                color={colors.orange}
            >
                {isMobile ? '' : t('basic.back')}
            </Button>
        </Flex>
    )
}
