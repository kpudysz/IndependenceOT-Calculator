type SpeedModifiers = {
    withVenore: boolean,
    withMount: boolean,
    withBoh: boolean,
    withHaste: boolean
}

export const findOutBreakpoints = (level: number, speedModifiers: SpeedModifiers) => {
    const drawbridge = [120, 147, 192, 278, 499]
    const floorMarbleCobble = [113, 135, 167, 219, 321, 592]
    const dirtTown = [126, 150, 187, 248, 367]
    const rock = [120, 139, 167, 208, 278, 417]
    const dirtFloorFast = [115, 131, 153, 183, 230, 310, 472, 944]
    const grass = [120, 135, 155, 181, 219, 278, 380, 595]
    const dirtFloorSnowSand = [116, 129, 145, 167, 196, 238, 304, 419, 663]
    const water = [112, 124, 138, 156, 179, 212, 258, 331, 459, 737]
    const wheat = [120, 132, 148, 167, 192, 227, 279, 359, 502, 818]
    const muddyFloor = [114, 124, 135, 149, 167, 190, 219, 261, 322, 419, 597, 998]
    const speed = level + 109
    const withBoh = speedModifiers.withBoh ? 20 : 0
    const withMount = speedModifiers.withMount ? 10 : 0
    const withVenore = speedModifiers.withVenore ? 10 : 0
    const withHaste = speedModifiers.withHaste ? 1.3 : 1
    const summedModifiers = (speed + withBoh + withMount + withVenore) * withHaste

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
        muddyFloor: findBreakpoint(muddyFloor, summedModifiers)
    }
}

const findBreakpoint = (breakpointArray: Array<number>, speed: number) => {
    const breakpointIndex = breakpointArray.findIndex(breakpoint => speed < breakpoint)
    const nextBreakpoint = breakpointArray[breakpointIndex + 1]
    const missingSpeed = nextBreakpoint ? nextBreakpoint - speed : 0

    return {
        breakpointLevel: breakpointIndex + 1,
        missingSpeed
    }
}
