type SpeedModifiers = {
    withVenore: boolean,
    withMount: boolean,
    withBoh: boolean,
    withHaste: boolean
}

export const findOutBreakpoints = (level: number, speedModifiers: SpeedModifiers) => {
    const drawbridge = [110, 120, 147, 192, 278, 499]
    const floorMarbleCobble = [110, 113, 135, 167, 219, 321, 592]
    const dirtTown = [110, 126, 150, 187, 248, 367]
    const rock = [110, 120, 139, 167, 208, 278, 417]
    const dirtFloorFast = [110, 115, 131, 153, 183, 230, 310, 472, 944]
    const grass = [110, 120, 135, 155, 181, 219, 278, 380, 595]
    const dirtFloorSnowSand = [110, 116, 129, 145, 167, 196, 238, 304, 419, 663]
    const water = [110, 112, 124, 138, 156, 179, 212, 258, 331, 459, 737]
    const wheat = [110, 120, 132, 148, 167, 192, 227, 279, 359, 502, 818]
    const muddyFloor = [110, 114, 124, 135, 149, 167, 190, 219, 261, 322, 419, 597, 998]
    const speed = level + 109
    const withBoh = speedModifiers.withBoh ? 20 : 0
    const withMount = speedModifiers.withMount ? 10 : 0
    const withVenore = speedModifiers.withVenore ? 10 : 0
    const summedModifiers = Math.floor(speed + withBoh + withMount + withVenore)

    return {
        drawbridge: findBreakpoint(drawbridge, summedModifiers),
        floorMarbleCobble: findBreakpoint(floorMarbleCobble, summedModifiers),
        dirtTown: findBreakpoint(dirtTown, summedModifiers),
        rock: findBreakpoint(rock, summedModifiers),
        dirtFloorFast: findBreakpoint(dirtFloorFast, summedModifiers),
        grass: findBreakpoint(grass, summedModifiers),
        dirtFloorSlower: findBreakpoint(dirtFloorSnowSand, summedModifiers),
        water: findBreakpoint(water, summedModifiers),
        wheat: findBreakpoint(wheat, summedModifiers),
        muddyFloor: findBreakpoint(muddyFloor, summedModifiers),
        speed: summedModifiers
    }
}

const findBreakpoint = (breakpointArray: Array<number>, speed: number) => {
    const breakpointIndex = breakpointArray.findIndex(breakpoint => speed < breakpoint)
    const currentBreakpoint = breakpointArray[breakpointIndex - 1]
    const nextBreakpoint = breakpointArray[breakpointIndex]
    const missingSpeed = nextBreakpoint ? nextBreakpoint - speed : 0

    return {
        currentSpeed: currentBreakpoint,
        breakpointLevel: breakpointIndex,
        missingSpeed
    }
}

export const resolveBonusText = (speedModifiers: SpeedModifiers) => {
    const { withVenore, withBoh, withHaste, withMount } = speedModifiers
    const venoreText = withVenore ? 'venore world change - ' : ''
    const bohText = withBoh ? 'boots of haste charm - ' : ''
    const mountText = withMount ? 'mount bonus - ' : ''
    const hasteText = withHaste ? 'haste spell - ' : ''

    return venoreText.concat(bohText).concat(mountText).concat(hasteText)
}
