//Add icons
var tree = L.icon ({
    iconUrl: 'images/log.png',
    iconSize: [40,40]
})
var plant = L.icon ({
    iconUrl: 'images/plant.png',
    iconSize: [40,40]
})
var mineral = L.icon ({
    iconUrl: 'images/mineral.png',
    iconSize: [40,40]
})
var soil = L.icon ({
    iconUrl: 'images/soil.png',
    iconSize: [40,40]
})
var fish = L.icon ({
    iconUrl: 'images/fish.png',
    iconSize: [40,40]
})

//Add markers for each gathering node
var agavePlant1 = L.marker ([12.9, 27.7]),
    agavePlant2 = L.marker ([13.6, 25.4]),
    agavePlant3 = L.marker ([12.9, 28.2]),
    agavePlant4 = L.marker ([12.8, 29.6]),
    agavePlant5 = L.marker ([16.5, 29.9]),
    agavePlant6 = L.marker ([16.5, 28.8]),
    agavePlant7 = L.marker ([17.5, 28.7]),
    agavePlant8 = L.marker ([18.2, 28.4]),
    agavePlant9 = L.marker ([18.7, 28.4]),
    agavePlant10 = L.marker ([18.7, 28.7]),
    agavePlant11 = L.marker ([19.5, 28.9]),
    agavePlant12 = L.marker ([19.9, 29.4]),
    agavePlant13 = L.marker ([20.6, 29.8]),
    agavePlant14 = L.marker ([21.8, 25.9]),
    agavePlant15 = L.marker ([21.3, 20.4]),
    agavePlant16 = L.marker ([24.9, 19.8]),
    agavePlant17 = L.marker ([28.6, 19.3]),
    agavePlant18 = L.marker ([30.6, 20.3]),
    agavePlant19 = L.marker ([29.2, 18.5]),
    agavePlant20 = L.marker ([31.8, 20.2]),
    agavePlant21 = L.marker ([31.8, 20.0]),
    agavePlant22 = L.marker ([29.6, 29.9]),
    agavePlant23 = L.marker ([26.2, 33.4]),
    agavePlant24 = L.marker ([23.2, 32.5]),
    agavePlant25 = L.marker ([23.6, 31.5]),
    agavePlant26 = L.marker ([20.3, 17.9]),
    agavePlant27 = L.marker ([20.9, 16.7]),
    agavePlant28 = L.marker ([21.8, 11.7]),
    agavePlant29 = L.marker ([27.1, 14.4]),
    agavePlant30 = L.marker ([29.5, 15.9]),
    agavePlant31 = L.marker ([30.9, 16.7]),
    agavePlant32 = L.marker ([29.2, 14.7])

var bluishRock1 = L.marker ([14.3, 30.0]),
    bluishRock2 = L.marker ([13.5, 30.5]),
    bluishRock3 = L.marker ([13.6, 31.3]),
    bluishRock4 = L.marker ([14.5, 31.8]),
    bluishRock5 = L.marker ([14.7, 31.5]),
    bluishRock6 = L.marker ([15.1, 31.6]),
    bluishRock7 = L.marker ([15.3, 29.2]),
    bluishRock8 = L.marker ([14.3, 30.8]),
    bluishRock9 = L.marker ([30.8, 31.3]),
    bluishRock10 = L.marker ([31.6, 30.3]),
    bluishRock11 = L.marker ([32.6, 29.0]),
    bluishRock12 = L.marker ([33.0, 28.4]),
    bluishRock13 = L.marker ([32.9, 24.3]),
    bluishRock14 = L.marker ([26.5, 17.0]),
    bluishRock15 = L.marker ([27.4, 16.3]),
    bluishRock16 = L.marker ([27.7, 16.5]),
    bluishRock17 = L.marker ([26.5, 17.6]),
    bluishRock18 = L.marker ([27.3, 17.4]),
    bluishRock19 = L.marker ([27.5, 17.4]),
    bluishRock20 = L.marker ([27.7, 17.5])

var coralFormation1 = L.marker ([19.2, 32.5]),
    coralFormation2 = L.marker ([18.5, 32.9]),
    coralFormation3 = L.marker ([18.0, 32.6]),
    coralFormation4 = L.marker ([17.9, 32.3]),
    coralFormation5 = L.marker ([17.9, 32.1]),
    coralFormation6 = L.marker ([17.0, 32.0]),
    coralFormation7 = L.marker ([16.7, 32.3]),
    coralFormation8 = L.marker ([16.5, 32.6])

var crystalBandedRock1 = L.marker ([22.0, 31.7]),
    crystalBandedRock2 = L.marker ([22.0, 31.7]),
    crystalBandedRock3 = L.marker ([22.0, 31.6]),
    crystalBandedRock4 = L.marker ([21.9, 31.6]),
    crystalBandedRock5 = L.marker ([21.9, 31.6]),
    crystalBandedRock6 = L.marker ([21.8, 31.7]),
    crystalBandedRock7 = L.marker ([30.8, 19.2]),
    crystalBandedRock8 = L.marker ([30.7, 19.3]),
    crystalBandedRock9 = L.marker ([30.8, 19.4]),
    crystalBandedRock10 = L.marker ([30.9, 19.3])

//New cotton plant nodes were added in a later patch, remember to go back and add these
var cottonPlant1 = L.marker ([13.9, 27.3]),
    cottonPlant2 = L.marker ([13.8, 27.4]),
    cottonPlant3 = L.marker ([13.9, 27.5]),
    cottonPlant4 = L.marker ([13.8, 27.5]),
    cottonPlant5 = L.marker ([13.7, 27.6]),
    cottonPlant6 = L.marker ([13.8, 27.7]),
    cottonPlant7 = L.marker ([13.7, 27.8]),
    cottonPlant8 = L.marker ([21.8, 26.9]),
    cottonPlant9 = L.marker ([16.9, 24.0]),
    cottonPlant10 = L.marker ([25.9, 19.1]),
    cottonPlant11 = L.marker ([32.8, 20.7]),
    cottonPlant12 = L.marker ([30.2, 27.0]),
    cottonPlant13 = L.marker ([24.1, 33.8]),
    cottonPlant14 = L.marker ([21.6, 31.0]),
    cottonPlant15 = L.marker ([20.6, 16.9]),
    cottonPlant16 = L.marker ([22.9, 12.5]),
    cottonPlant17 = L.marker ([24.8, 12.6]),
    cottonPlant18 = L.marker ([25.4, 13.9]),
    cottonPlant19 = L.marker ([25.2, 16.7]),
    cottonPlant20 = L.marker ([29.1, 13.7])

var islandAppleTree1 = L.marker ([16.2, 18.1]),
    islandAppleTree2 = L.marker ([16.2, 19.5]),
    islandAppleTree3 = L.marker ([16.1, 20.3]),
    islandAppleTree4 = L.marker ([16.0, 23.5]),
    islandAppleTree5 = L.marker ([20.0, 26.1]),
    islandAppleTree6 = L.marker ([21.4, 23.5]),
    islandAppleTree7 = L.marker ([18.4, 23.5]),
    islandAppleTree8 = L.marker ([17.5, 23.8]),
    islandAppleTree9 = L.marker ([17.6, 21.5]),
    islandAppleTree10 = L.marker ([17.6, 20.8]),
    islandAppleTree11 = L.marker ([18.0, 20.3]),
    islandAppleTree12 = L.marker ([18.4, 19.6]),
    islandAppleTree13 = L.marker ([22.0, 22.0]),
    islandAppleTree14 = L.marker ([22.5, 20.3]),
    islandAppleTree15 = L.marker ([23.0, 20.5]),
    islandAppleTree16 = L.marker ([27.2, 20.1]),
    islandAppleTree17 = L.marker ([31.1, 20.2]),
    islandAppleTree18 = L.marker ([30.1, 18.9]),
    islandAppleTree19 = L.marker ([30.3, 23.7]),
    islandAppleTree20 = L.marker ([29.7, 28.6])

var largeShell1 = L.marker ([32.9, 15.3]),
    largeShell2 = L.marker ([33.2, 15.4]),
    largeShell3 = L.marker ([32.6, 17.7]),
    largeShell4 = L.marker ([32.4, 18.0]),
    largeShell5 = L.marker ([33.1, 18.5]),
    largeShell6 = L.marker ([32.0, 18.4]),
    largeShell7 = L.marker ([32.5, 18.9]),
    largeShell8 = L.marker ([32.9, 18.8])

var lightlyGnawedPumpkin1 = L.marker ([16.5, 18.7]),
    lightlyGnawedPumpkin2 = L.marker ([16.6, 18.8]),
    lightlyGnawedPumpkin3 = L.marker ([16.6, 18.6]),
    lightlyGnawedPumpkin4 = L.marker ([16.6, 18.5]),
    lightlyGnawedPumpkin5 = L.marker ([16.6, 18.7]),
    lightlyGnawedPumpkin6 = L.marker ([16.7, 19.5]),
    lightlyGnawedPumpkin7 = L.marker ([16.7, 19.5]),
    lightlyGnawedPumpkin8 = L.marker ([16.9, 19.7]),
    lightlyGnawedPumpkin9 = L.marker ([16.7, 19.8]),
    lightlyGnawedPumpkin10 = L.marker ([16.8, 20.1])

var mahoganyTree1 = L.marker ([15.4, 26.1]),
    mahoganyTree2 = L.marker ([14.9, 27.8]),
    mahoganyTree3 = L.marker ([22.0, 28.6]),
    mahoganyTree4 = L.marker ([20.5, 22.6]),
    mahoganyTree5 = L.marker ([17.9, 22.5]),
    mahoganyTree6 = L.marker ([18.6, 22.0]),
    mahoganyTree7 = L.marker ([18.2, 21.2]),
    mahoganyTree8 = L.marker ([18.4, 20.6]),
    mahoganyTree9 = L.marker ([19.4, 19.5]),
    mahoganyTree10 = L.marker ([21.7, 19.2]),
    mahoganyTree11 = L.marker ([21.7, 18.5]),
    mahoganyTree12 = L.marker ([20.8, 19.1]),
    mahoganyTree13 = L.marker ([22.8, 19.1]),
    mahoganyTree14 = L.marker ([31.3, 24.2]),
    mahoganyTree15 = L.marker ([30.1, 28.0]),
    mahoganyTree16 = L.marker ([27.2, 32.6]),
    mahoganyTree17 = L.marker ([30.0, 30.7]),
    mahoganyTree18 = L.marker ([22.5, 17.0]),
    mahoganyTree19 = L.marker ([22.2, 14.5]),
    mahoganyTree20 = L.marker ([24.4, 15.9]),
    mahoganyTree21 = L.marker ([26.7, 13.2])

var moundOfDirt1 = L.marker ([17.0, 22.5]),
    moundOfDirt2 = L.marker ([17.0, 22.6]),
    moundOfDirt3 = L.marker ([16.9, 22.7]),
    moundOfDirt4 = L.marker ([17.0, 22.8]),
    moundOfDirt5 = L.marker ([16.9, 22.8]),
    moundOfDirt6 = L.marker ([16.9, 22.9]),
    moundOfDirt7 = L.marker ([16.9, 22.9]),
    moundOfDirt8 = L.marker ([15.5, 28.8]),
    moundOfDirt9 = L.marker ([19.1, 29.5]),
    moundOfDirt10 = L.marker ([20.8, 30.0]),
    moundOfDirt11 = L.marker ([17.5, 29.4]),
    moundOfDirt12 = L.marker ([16.6, 24.7]),
    moundOfDirt13 = L.marker ([24.4, 18.1]),
    moundOfDirt14 = L.marker ([28.1, 19.2]),
    moundOfDirt15 = L.marker ([24.3, 18.1]),
    moundOfDirt16 = L.marker ([29.6, 15.2]),
    moundOfDirt17 = L.marker ([29.5, 14.9])

var palmTree1 = L.marker ([16.7, 18.2]),
    palmTree2 = L.marker ([17.3, 18.4]),
    palmTree3 = L.marker ([17.3, 19.5]),
    palmTree4 = L.marker ([12.4, 27.6]),
    palmTree5 = L.marker ([15.3, 29.9]),
    palmTree6 = L.marker ([16.6, 29.1]),
    palmTree7 = L.marker ([17.5, 28.8]),
    palmTree8 = L.marker ([17.8, 27.9]),
    palmTree9 = L.marker ([19.2, 28.9]),
    palmTree10 = L.marker ([20.8, 29.6]),
    palmTree11 = L.marker ([19.5, 19.1]),
    palmTree12 = L.marker ([20.2, 19.0]),
    palmTree13 = L.marker ([30.0, 29.3]),
    palmTree14 = L.marker ([24.4, 33.6]),
    palmTree15 = L.marker ([22.6, 31.7]),
    palmTree16 = L.marker ([19.3, 17.5]),
    palmTree17 = L.marker ([20.1, 18.1]),
    palmTree18 = L.marker ([20.0, 17.6]),
    palmTree19 = L.marker ([20.9, 18.0]),
    palmTree20 = L.marker ([20.7, 17.8]),
    palmTree21 = L.marker ([30.0, 16.1]),
    palmTree22 = L.marker ([29.8, 17.0]),
    palmTree23 = L.marker ([29.1, 17.3]),
    palmTree24 = L.marker ([29.8, 15.4]),
    palmTree25 = L.marker ([29.7, 14.2])

var partiallyConsumedCabbage1 = L.marker ([22.5, 17.6]),
    partiallyConsumedCabbage2 = L.marker ([22.6, 17.5]),
    partiallyConsumedCabbage3 = L.marker ([22.7, 17.5]),
    partiallyConsumedCabbage4 = L.marker ([22.8, 17.5]),
    partiallyConsumedCabbage5 = L.marker ([22.9, 17.5]),
    partiallyConsumedCabbage6 = L.marker ([23.1, 15.7])

var quartzFormation1 = L.marker ([24.5, 29.3]),
    quartzFormation2 = L.marker ([23.9, 26.7]),
    quartzFormation3 = L.marker ([23.6, 27.3]),
    quartzFormation4 = L.marker ([32.7, 28.0])

var roughBlackRock1 = L.marker ([23.4, 28.9]),
    roughBlackRock2 = L.marker ([24.1, 29.5]),
    roughBlackRock3 = L.marker ([24.3, 29.2]),
    roughBlackRock4 = L.marker ([23.3, 27.5]),
    roughBlackRock5 = L.marker ([22.9, 26.7]),
    roughBlackRock6 = L.marker ([23.3, 26.0]),
    roughBlackRock7 = L.marker ([23.3, 26.1]),
    roughBlackRock8 = L.marker ([23.3, 26.0]),
    roughBlackRock9 = L.marker ([23.4, 24.5]),
    roughBlackRock10 = L.marker ([23.6, 26.5]),
    roughBlackRock11 = L.marker ([23.9, 27.0]),
    roughBlackRock12 = L.marker ([23.7, 27.2]),
    roughBlackRock13 = L.marker ([30.5, 24.3]),
    roughBlackRock14 = L.marker ([29.4, 29.1]),
    roughBlackRock15 = L.marker ([32.0, 29.7]),
    roughBlackRock16 = L.marker ([33.0, 29.0])

var seaweedTangle1 = L.marker ([19.5,33.0]),
    seaweedTangle2 = L.marker ([19.3,32.2]),
    seaweedTangle3 = L.marker ([18.7,33.2]),
    seaweedTangle4 = L.marker ([18.8,32.2]),
    seaweedTangle5 = L.marker ([17.5, 32.7]),
    seaweedTangle6 = L.marker ([17.2, 32.7]),
    seaweedTangle7 = L.marker ([16.3, 32.8]),
    seaweedTangle8 = L.marker ([16.0,32.4]),
    seaweedTangle9 = L.marker ([32.7, 13.9]),
    seaweedTangle10 = L.marker ([32.4, 15.1]),
    seaweedTangle11 = L.marker ([33.2, 15.4]),
    seaweedTangle12 = L.marker ([33.1, 17.8]),
    seaweedTangle13 = L.marker ([32.7, 17.5]),
    seaweedTangle14 = L.marker ([32.3, 18.9]),
    seaweedTangle15 = L.marker ([32.9, 19.1])

var smoothWhiteRock1 = L.marker ([17.0, 22.4]),
    smoothWhiteRock2 = L.marker ([20.4, 28.8]),
    smoothWhiteRock3 = L.marker ([20.1, 27.7]),
    smoothWhiteRock4 = L.marker ([21.5, 28.8]),
    smoothWhiteRock5 = L.marker ([21.7, 28.8]),
    smoothWhiteRock6 = L.marker ([31.7, 21.6]),
    smoothWhiteRock7 = L.marker ([31.6, 22.0]),
    smoothWhiteRock8 = L.marker ([31.8, 24.3]),
    smoothWhiteRock9 = L.marker ([22.7, 29.1]),
    smoothWhiteRock10 = L.marker ([21.0, 29.1]),
    smoothWhiteRock11 = L.marker ([32.1, 26.3]),
    smoothWhiteRock12 = L.marker ([31.7, 27.2]),
    smoothWhiteRock13 = L.marker ([18.6, 17.4]),
    smoothWhiteRock14 = L.marker ([19.1, 17.6]),
    smoothWhiteRock15 = L.marker ([18.7, 16.8]),
    smoothWhiteRock16 = L.marker ([20.0, 18.5]),
    smoothWhiteRock17 = L.marker ([20.3, 18.5]),
    smoothWhiteRock18 = L.marker ([20.2, 18.4]),
    smoothWhiteRock19 = L.marker ([20.3, 18.3]),
    smoothWhiteRock20 = L.marker ([20.4, 18.4]),
    smoothWhiteRock21 = L.marker ([20.5, 18.4]),
    smoothWhiteRock22 = L.marker ([20.8, 18.2]),
    smoothWhiteRock23 = L.marker ([27.9, 14.7]),
    smoothWhiteRock24 = L.marker ([27.8, 15.0]),
    smoothWhiteRock25 = L.marker ([27.8, 17.3]),
    smoothWhiteRock26 = L.marker ([28.3, 15.5]),
    smoothWhiteRock27 = L.marker ([28.3, 15.1]),
    smoothWhiteRock28 = L.marker ([28.7, 14.3]),
    smoothWhiteRock29 = L.marker ([29.4, 14.0])

var speckledRock1 = L.marker ([23.5, 28.9]),
    speckledRock2 = L.marker ([24.3, 29.7]),
    speckledRock3 = L.marker ([24.1, 28.9]),
    speckledRock4 = L.marker ([23.4, 27.6]),
    speckledRock5 = L.marker ([22.9, 26.9]),
    speckledRock6 = L.marker ([23.3, 24.3]),
    speckledRock7 = L.marker ([23.2, 23.8]),
    speckledRock8 = L.marker ([30.3, 32.2]),
    speckledRock9 = L.marker ([31.0, 31.1]),
    speckledRock10 = L.marker ([31.7, 31.9]),
    speckledRock11 = L.marker ([31.8, 31.4]),
    speckledRock12 = L.marker ([31.7, 30.5]),
    speckledRock13 = L.marker ([32.1, 29.9]),
    speckledRock14 = L.marker ([32.5, 29.5]),
    speckledRock15 = L.marker ([33.4, 29.2]),
    speckledRock16 = L.marker ([32.9, 27.5]),
    speckledRock17 = L.marker ([32.8, 26.4])

var submergedSand1 = L.marker ([17.1, 21.8]),
    submergedSand2 = L.marker ([17.0, 23.3]),
    submergedSand3 = L.marker ([16.3, 25.8]),
    submergedSand4 = L.marker ([16.3, 27.4]),
    submergedSand5 = L.marker ([25.2, 17.8]),
    submergedSand6 = L.marker ([26.0, 17.7]),
    submergedSand7 = L.marker ([24.3, 17.6]),
    submergedSand8 = L.marker ([22.7, 18.1]),
    submergedSand9 = L.marker ([22.5, 18.1]),
    submergedSand10 = L.marker ([22.1, 18.0]),
    submergedSand11 = L.marker ([21.8, 18.2]),
    submergedSand12 = L.marker ([21.2, 18.1]),
    submergedSand13 = L.marker ([21.0, 18.2]),
    submergedSand14 = L.marker ([20.6, 18.6]),
    submergedSand15 = L.marker ([27.3, 17.9]),
    submergedSand16 = L.marker ([28.6, 17.8]),
    submergedSand17 = L.marker ([29.8, 18.0])

var sugarcane1 = L.marker ([17.2, 20.4]),
    sugarcane2 = L.marker ([17.0, 21.3]),
    sugarcane3 = L.marker ([16.0, 25.8]),
    sugarcane4 = L.marker ([17.3, 23.2]),
    sugarcane5 = L.marker ([26.0, 18.5]),
    sugarcane6 = L.marker ([25.9, 18.5]),
    sugarcane7 = L.marker ([25.6, 18.1]),
    sugarcane8 = L.marker ([25.5, 18.3]),
    sugarcane9 = L.marker ([25.4, 18.1]),
    sugarcane10 = L.marker ([25.1, 18.2]),
    sugarcane11 = L.marker ([25.0, 18.1]),
    sugarcane12 = L.marker ([18.6, 17.6]),
    sugarcane13 = L.marker ([19.7, 18.4]),
    sugarcane14 = L.marker ([25.1, 17.3]),
    sugarcane15 = L.marker ([25.2, 17.4]),
    sugarcane16 = L.marker ([25.4, 17.3]),
    sugarcane17 = L.marker ([25.5, 17.4])

var tualongTree1 = L.marker ([15.9, 19.0]),
    tualongTree2 = L.marker ([17.2, 19.8]),
    tualongTree3 = L.marker ([17.0, 20.6]),
    tualongTree4 = L.marker ([16.4, 22.0]),
    tualongTree5 = L.marker ([16.1, 21.4]),
    tualongTree6 = L.marker ([16.5, 23.1]),
    tualongTree7 = L.marker ([14.7, 28.0]),
    tualongTree8 = L.marker ([12.4, 25.7]),
    tualongTree9 = L.marker ([20.6, 27.5]),
    tualongTree10 = L.marker ([23.8, 30.1]),
    tualongTree11 = L.marker ([22.2, 24.5]),
    tualongTree12 = L.marker ([19.9, 24.6]),
    tualongTree13 = L.marker ([17.6, 22.9]),
    tualongTree14 = L.marker ([17.8, 23.9]),
    tualongTree15 = L.marker ([17.5, 21.9]),
    tualongTree16 = L.marker ([17.8, 21.3]),
    tualongTree17 = L.marker ([23.9, 21.3]),
    tualongTree18 = L.marker ([26.3, 20.5]),
    tualongTree19 = L.marker ([29.1, 20.5]),
    tualongTree20 = L.marker ([30.9, 22.0]),
    tualongTree21 = L.marker ([31.7, 25.2]),
    tualongTree22 = L.marker ([31.0, 26.7]),
    tualongTree23 = L.marker ([28.2, 30.3]),
    tualongTree24 = L.marker ([27.8, 31.4]),
    tualongTree25 = L.marker ([24.8, 32.4]),
    tualongTree26 = L.marker ([32.3, 23.5]),
    tualongTree27 = L.marker ([31.9, 29.3]),
    tualongTree28 = L.marker ([21.4, 16.5]),
    tualongTree29 = L.marker ([22.9, 13.8]),
    tualongTree30 = L.marker ([25.7, 13.1]),
    tualongTree31 = L.marker ([26.3, 16.7]),
    tualongTree32 = L.marker ([27.1, 12.5])

var wildParsnip1 = L.marker ([14.4, 30.3]),
    wildParsnip2 = L.marker ([14.2, 29.1]),
    wildParsnip3 = L.marker ([12.8, 26.2]),
    wildParsnip4 = L.marker ([12.3, 26.4]),
    wildParsnip5 = L.marker ([18.6, 26.4]),
    wildParsnip6 = L.marker ([18.5, 27.0]),
    wildParsnip7 = L.marker ([19.3, 26.8]),
    wildParsnip8 = L.marker ([19.5, 27.5]),
    wildParsnip9 = L.marker ([19.6, 27.8]),
    wildParsnip10 = L.marker ([20.0, 28.1]),
    wildParsnip11 = L.marker ([19.4, 26.4]),
    wildParsnip12 = L.marker ([21.0, 22.6]),
    wildParsnip13 = L.marker ([19.3, 22.9]),
    wildParsnip14 = L.marker ([19.6, 21.7]),
    wildParsnip15 = L.marker ([19.7, 20.2]),
    wildParsnip16 = L.marker ([24.3, 18.8]),
    wildParsnip17 = L.marker ([22.9, 14.8]),
    wildParsnip18 = L.marker ([25.6, 14.7]),
    wildParsnip19 = L.marker ([27.3, 12.9]),
    wildParsnip20 = L.marker ([27.4, 13.4]),
    wildParsnip21 = L.marker ([27.6, 12.6]),
    wildParsnip22 = L.marker ([27.9, 12.9]),
    wildParsnip23 = L.marker ([28.2, 13.1]),
    wildParsnip24 = L.marker ([27.6, 14.1]),
    wildParsnip25 = L.marker ([29.1, 13.3])

var wildPopoto1 = L.marker ([16.0, 25.0]),
    wildPopoto2 = L.marker ([17.0, 25.9]),
    wildPopoto3 = L.marker ([16.8, 25.0]),
    wildPopoto4 = L.marker ([17.7, 25.9]),
    wildPopoto5 = L.marker ([17.7, 25.6]),
    wildPopoto6 = L.marker ([18.3, 25.6]),
    wildPopoto7 = L.marker ([19.1, 23.2]),
    wildPopoto8 = L.marker ([16.7, 24.4]),
    wildPopoto9 = L.marker ([17.1, 24.6]),
    wildPopoto10 = L.marker ([20.1, 21.8]),
    wildPopoto11 = L.marker ([22.5, 15.1]),
    wildPopoto12 = L.marker ([19.8, 16.6]),
    wildPopoto13 = L.marker ([22.0, 10.7]),
    wildPopoto14 = L.marker ([29.9, 13.0]),
    wildPopoto15 = L.marker ([30.4, 13.2]),
    wildPopoto16 = L.marker ([30.6, 13.1]),
    wildPopoto17 = L.marker ([30.6, 12.7]),
    wildPopoto18 = L.marker ([30.8, 13.3]),
    wildPopoto19 = L.marker ([31.1, 12.9]),
    wildPopoto20 = L.marker ([31.5, 13.2])

//Group individual nodes
var agavePlants = L.layerGroup ([agavePlant1,agavePlant2,agavePlant3,agavePlant4,agavePlant5,agavePlant6,agavePlant7,
    agavePlant8,agavePlant9,agavePlant10,agavePlant11,agavePlant12,agavePlant13,agavePlant14,agavePlant15,agavePlant16,
    agavePlant17,agavePlant18,agavePlant19,agavePlant20,agavePlant21,agavePlant22,agavePlant23,agavePlant24,agavePlant25,
    agavePlant26,agavePlant27,agavePlant28,agavePlant29,agavePlant30,agavePlant31,agavePlant32]);

agavePlants.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(plant);
        layer.bindPopup("<b>Agave Plant</b></br><ul><li id=\"islewort\">Islewort</li>" +
        "<li id=\"hemp\">Island Hemp (Requires Islekeep's Copper Scythe, Rank 6)</li></ul>");
    }
});

var bluishRocks = L.layerGroup ([bluishRock1, bluishRock2, bluishRock3, bluishRock4, bluishRock5, bluishRock6,
    bluishRock7, bluishRock8, bluishRock9, bluishRock10, bluishRock11, bluishRock12, bluishRock13, bluishRock14,bluishRock15,
    bluishRock16, bluishRock17, bluishRock18, bluishRock19, bluishRock20]);

bluishRocks.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(mineral);
        layer.bindPopup("<b>Bluish Rock</b></br><ul><li id=\"stone\">Island Stone</li>" +
        "<li id=\"copper\">Island Copper Ore (Requires Islekeep's Stone Hammer, Rank 3)</li>"+
        "<li id=\"mythril\">Island Mythril Ore (Requires Islekeep's Steel Hammer, Rank 13)</li></ul>");
    }
});

var coralFormations = L.layerGroup ([coralFormation1, coralFormation2, coralFormation3, coralFormation4, coralFormation5, coralFormation6,
    coralFormation7, coralFormation8]);

coralFormations.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(fish);
        layer.bindPopup("<b>Coral Formation</b></br><ul><li id=\"coral\">Island Coral</li>" +
        "<li id=\"jellyfish\">Island Jellyfish (Requires Islekeep's Bronze Gig, Rank 7)</li></ul>");
    }
});

var crystalBandedRocks = L.layerGroup ([crystalBandedRock1, crystalBandedRock2, crystalBandedRock3, crystalBandedRock4, crystalBandedRock5, crystalBandedRock6,
    crystalBandedRock7, crystalBandedRock8, crystalBandedRock9, crystalBandedRock10]);

crystalBandedRocks.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(mineral);
        layer.bindPopup("<b>Crystal-banded Rock</b></br><ul><li id=\"stone\">Island Stone</li>" +
        "<li id=\"rocksalt\">Island Rock Salt (Requires Islekeep's Stone Hammer, Rank 3)</li></ul>");
    }
});

var cottonPlants = L.layerGroup ([cottonPlant1, cottonPlant2, cottonPlant3, cottonPlant4, cottonPlant5, cottonPlant6,
    cottonPlant7, cottonPlant8, cottonPlant9, cottonPlant10, cottonPlant11, cottonPlant12, cottonPlant13, cottonPlant14, cottonPlant15,
    cottonPlant16, cottonPlant17, cottonPlant18, cottonPlant19, cottonPlant20]);

cottonPlants.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(plant);
        layer.bindPopup("<b>Cotton Plant</b></br><ul><li id=\"islewort\">Islewort</li>" +
        "<li id=\"cotton\">Island Cotton Boll (Requires Islekeep's Copper Scythe, Rank 6)</li></ul>");
    }
});

var islandAppleTrees = L.layerGroup ([islandAppleTree1, islandAppleTree2, islandAppleTree3, islandAppleTree4, islandAppleTree5, islandAppleTree6,
    islandAppleTree7, islandAppleTree8, islandAppleTree9, islandAppleTree10, islandAppleTree11, islandAppleTree12, islandAppleTree13, islandAppleTree14, islandAppleTree15,
    islandAppleTree16, islandAppleTree17, islandAppleTree18, islandAppleTree19, islandAppleTree20]);

islandAppleTrees.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(tree);
        layer.bindPopup("<b>Island Apple Tree</b></br><ul><li id=\"apple\">Island Apple (Requires Islekeep's Stone Hatchet)</li>" +
        "<li id=\"vine\">Island Vine (Requires Islekeep's Stone Hatchet)</li>"+
        "<li id=\"beehive\">Island Beehive Chip (Requires Islekeep's Iron Hatchet, Rank 9)</li></ul>");
    }
});

var largeShells = L.layerGroup ([largeShell1, largeShell2, largeShell3, largeShell4, largeShell5, largeShell6, largeShell7, largeShell8]);

largeShells.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(fish);
        layer.bindPopup("<b>Large Shell</b></br><ul><li id=\"clam\">Island Clam</li>" +
        "<li id=\"islefish\">Islefish (Requires Islekeep's Bronze Gig, Rank 7)</li></ul>");
    }
});

var lightlyGnawedPumpkins = L.layerGroup ([lightlyGnawedPumpkin1, lightlyGnawedPumpkin2, lightlyGnawedPumpkin3, lightlyGnawedPumpkin4, lightlyGnawedPumpkin5, lightlyGnawedPumpkin6,
    lightlyGnawedPumpkin7, lightlyGnawedPumpkin8, lightlyGnawedPumpkin9, lightlyGnawedPumpkin10]);

lightlyGnawedPumpkins.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(plant);
        layer.bindPopup("<b>Lightly Gnawed Pumpkin</b></br><ul><li id=\"pumpkin\">Island Pumpkin Seeds</li></ul>");
    }
});

var mahoganyTrees = L.layerGroup ([mahoganyTree1, mahoganyTree2, mahoganyTree3, mahoganyTree4, mahoganyTree5, mahoganyTree6,
    mahoganyTree7, mahoganyTree8, mahoganyTree9, mahoganyTree10, mahoganyTree11, mahoganyTree12, mahoganyTree13, mahoganyTree14, mahoganyTree15,
    mahoganyTree16, mahoganyTree17, mahoganyTree18, mahoganyTree19, mahoganyTree20, mahoganyTree21]);

mahoganyTrees.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(tree);
        layer.bindPopup("<b>Mahogany Tree</b></br><ul><li id=\"log\">Island Log (Requires Islekeep's Stone Hatchet)</li>" +
        "<li id=\"sap\">Island Sap (Requires Islekeep's Stone Hatchet)</li>"+
        "<li id=\"opal\">Island Wood Opal (Requires Islekeep's Iron Hatchet, Rank 9)</li></ul>");
    }
});

var moundsOfDirt = L.layerGroup ([moundOfDirt1, moundOfDirt2, moundOfDirt3, moundOfDirt4, moundOfDirt5, moundOfDirt6,
    moundOfDirt7, moundOfDirt8, moundOfDirt9, moundOfDirt10, moundOfDirt11, moundOfDirt12, moundOfDirt13, moundOfDirt14, moundOfDirt15,
    moundOfDirt16, moundOfDirt17]);

moundsOfDirt.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(soil);
        layer.bindPopup("<b>Mound of Dirt</b></br><ul><li id=\"sand\">Island Sand</li>" +
        "<li id=\"clay\">Island Clay (Requires Islekeep's Shovel, Rank 5)</li></ul>");
    }
});

var palmTrees = L.layerGroup ([palmTree1, palmTree2, palmTree3, palmTree4, palmTree5, palmTree6,
    palmTree7, palmTree8, palmTree9, palmTree10, palmTree11, palmTree12, palmTree13, palmTree14, palmTree15,
    palmTree16, palmTree17, palmTree18, palmTree19, palmTree20, palmTree21, palmTree22, palmTree23, palmTree24, palmTree25]);

palmTrees.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(tree);
        layer.bindPopup("<b>Palm Tree</b></br><ul><li id=\"leaf\">Island Palm Leaf</li>" +
        "<li id=\"palm\">Island Palm Log (Requires Islekeep's Stone Hatchet)</li>"+
        "<li id=\"coconut\">Island Coconut (Requires Islekeep's Iron Hatchet, Rank 9)</li></ul>");
    }
});

var partiallyConsumedCabbages = L.layerGroup ([partiallyConsumedCabbage1, partiallyConsumedCabbage2, partiallyConsumedCabbage3, 
    partiallyConsumedCabbage4, partiallyConsumedCabbage5, partiallyConsumedCabbage6]);

partiallyConsumedCabbages.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(plant);
        layer.bindPopup("<b>Partially Consumed Cabbage</b></br><ul><li id=\"cabbage\">Island Cabbage Seeds</li></ul>");
    }
});

var quartzFormations = L.layerGroup ([quartzFormation1, quartzFormation2, quartzFormation3, quartzFormation4]);

quartzFormations.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(mineral);
        layer.bindPopup("<b>Quartz Formation</b></br><ul><li id=\"stone\">Island Stone</li>" +
        "<li id=\"quartz\">Island Quartz (Requires Islekeep's Bronze Beakaxe, Rank 8)</li></ul>");
    }
});

var roughBlackRocks = L.layerGroup ([roughBlackRock1, roughBlackRock2, roughBlackRock3, roughBlackRock4, roughBlackRock5, roughBlackRock6,
    roughBlackRock7, roughBlackRock8, roughBlackRock9, roughBlackRock10, roughBlackRock11, roughBlackRock12, roughBlackRock13, roughBlackRock14, roughBlackRock15,
    roughBlackRock16]);

roughBlackRocks.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(mineral);
        layer.bindPopup("<b>Rough Black Rock</b></br><ul><li id=\"stone\">Island Stone</li>" +
        "<li id=\"iron\">Island Iron Ore (Requires Islekeep's Bronze Beakaxe, Rank 8)</li>"+
        "<li id=\"durium\">Island Durium Sand (Requires Islekeep's Mythril Pickaxe, Rank 17)</li></ul>");
    }
});

var seaweedTangles = L.layerGroup ([seaweedTangle1, seaweedTangle2, seaweedTangle3, seaweedTangle4, seaweedTangle5,
    seaweedTangle6, seaweedTangle7, seaweedTangle8, seaweedTangle9, seaweedTangle10, 
    seaweedTangle11, seaweedTangle12, seaweedTangle13, seaweedTangle14, seaweedTangle15]);

seaweedTangles.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(fish);
        layer.bindPopup("<b>Seaweed Tangle</b></br><ul><li id=\"laver\">Island Laver</li>" +
        "<li id=\"squid\">Island Squid (Requires Islekeep's Bronze Gig, Rank 7)</li></ul>");
    }
});

var smoothWhiteRocks = L.layerGroup ([smoothWhiteRock1, smoothWhiteRock2, smoothWhiteRock3, smoothWhiteRock4, smoothWhiteRock5, smoothWhiteRock6,
    smoothWhiteRock7, smoothWhiteRock8, smoothWhiteRock9, smoothWhiteRock10, smoothWhiteRock11, smoothWhiteRock12, smoothWhiteRock13, smoothWhiteRock14, smoothWhiteRock15,
    smoothWhiteRock16, smoothWhiteRock17, smoothWhiteRock18, smoothWhiteRock19, smoothWhiteRock20, smoothWhiteRock21, smoothWhiteRock22, smoothWhiteRock23, smoothWhiteRock24,
    smoothWhiteRock25, smoothWhiteRock26, smoothWhiteRock27, smoothWhiteRock28, smoothWhiteRock29]);

smoothWhiteRocks.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(mineral);
        layer.bindPopup("<b>Smooth White Rocks</b></br><ul><li id=\"stone\">Island Stone</li>" +
        "<li id=\"limestone\">Island Limestone (Requires Islekeep's Stone Hammer, Rank 3)</li>"+
        "<li id=\"marble\">Island Marble (Requires Islekeep's Steel Hammer, Rank 13)</li></ul>");
    }
});

var speckledRocks = L.layerGroup ([speckledRock1, speckledRock2, speckledRock3, speckledRock4, speckledRock5, speckledRock6, speckledRock7, speckledRock8, speckledRock9,
    speckledRock10, speckledRock11, speckledRock12, speckledRock13, speckledRock14, speckledRock15, speckledRock16, speckledRock17]);

speckledRocks.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(mineral);
        layer.bindPopup("<b>Speckled Rock</b></br><ul><li id=\"stone\">Island Stone</li>" +
        "<li id=\"leucogranite\">Island Leucogranite (Requires Islekeep's Bronze Beakaxe, Rank 8)</li></ul>");
    }
});

var submergedSands = L.layerGroup ([submergedSand1, submergedSand2, submergedSand3, submergedSand4, submergedSand5, submergedSand6, submergedSand7, submergedSand8, submergedSand9,
    submergedSand10, submergedSand11, submergedSand12, submergedSand13, submergedSand14, submergedSand15, submergedSand16, submergedSand17]);

submergedSands.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(soil);
        layer.bindPopup("<b>Speckled Rock</b></br><ul><li id=\"sand\">Island Sand</li>" +
        "<li id=\"tinsand\">Island Tinsand (Requires Islekeep's Shovel, Rank 5)</li></ul>");
    }
});
    

var sugarcanes = L.layerGroup ([sugarcane1, sugarcane2, sugarcane3, sugarcane4, sugarcane5, sugarcane6, sugarcane7, sugarcane8, sugarcane9,
    sugarcane10, sugarcane11, sugarcane12, sugarcane13, sugarcane14, sugarcane15, sugarcane16, sugarcane17]);

sugarcanes.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(plant);
        layer.bindPopup("<b>Sugarcane</b></br><ul><li id=\"vine\">Island Vine</li>" +
        "<li id=\"sugarcane\">Island Sugarcane (Requires Islekeep's Copper Scythe, Rank 6)</li></ul>");
    }
});

var tualongTrees = L.layerGroup ([tualongTree1, tualongTree2, tualongTree3, tualongTree4, tualongTree5, tualongTree6,
    tualongTree7, tualongTree8, tualongTree9, tualongTree10, tualongTree11, tualongTree12, tualongTree13, tualongTree14, tualongTree15,
    tualongTree16, tualongTree17, tualongTree18, tualongTree19, tualongTree20, tualongTree21, tualongTree22, tualongTree23, tualongTree24, tualongTree25,
    tualongTree26, tualongTree27, tualongTree28, tualongTree29, tualongTree30, tualongTree31, tualongTree32]);

tualongTrees.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(tree);
        layer.bindPopup("<b>Tualong Tree</b></br><ul><li id=\"branch\">Island Branch</li>" +
        "<li id=\"log\">Island Log (Requires Islekeep's Stone Hatchet)</li>"+
        "<li id=\"resin\">Island Resin (Requires Islekeep's Iron Hatchet, Rank 9)</li></ul>");
    }
});

var wildParsnips = L.layerGroup ([wildParsnip1, wildParsnip2, wildParsnip3, wildParsnip4, wildParsnip5, wildParsnip6,
    wildParsnip7, wildParsnip8, wildParsnip9, wildParsnip10, wildParsnip11, wildParsnip12, wildParsnip13, wildParsnip14, wildParsnip15,
    wildParsnip16, wildParsnip17, wildParsnip18, wildParsnip19, wildParsnip20, wildParsnip21, wildParsnip22, wildParsnip23, wildParsnip24, wildParsnip25]);

wildParsnips.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(plant);
        layer.bindPopup("<b>Wild Parsnip</b></br><ul><li id=\"islewort\">Islewort</li>" +
        "<li id=\"parsnip\">Island Parsnip Seeds (Requires Islekeep's Shovel, Rank 5)</li></ul>");
    }
});

var wildPopotos = L.layerGroup ([wildPopoto1, wildPopoto2, wildPopoto3, wildPopoto4, wildPopoto5, wildPopoto6,
    wildPopoto7, wildPopoto8, wildPopoto9, wildPopoto10, wildPopoto11, wildPopoto12, wildPopoto13, wildPopoto14, wildPopoto15,
    wildPopoto16, wildPopoto17, wildPopoto18, wildPopoto19, wildPopoto20]);

wildPopotos.eachLayer(function(layer) {
    if (layer instanceof L.Marker){
        layer.setIcon(plant);
        layer.bindPopup("<b>Wild Popoto</b></br><ul><li id=\"islewort\">Islewort</li>" +
        "<li id=\"popoto\">Island Popoto Set (Requires Islekeep's Shovel, Rank 5)</li></ul>");
    }
});

//Layer groups for materials obtained from multiple different nodes
var islandLogNodes = L.layerGroup ([tualongTrees, mahoganyTrees]);
var islandSandNodes = L.layerGroup ([moundsOfDirt, submergedSands]);
//TODO: Island Stones needs to add compositeRocks, stalagmites, and yellowishRocks nodes when they're implemented
var islandStoneNodes = L.layerGroup ([bluishRocks, smoothWhiteRocks, roughBlackRocks, speckledRocks, quartzFormations, crystalBandedRocks]);
var islandVineNodes = L.layerGroup ([islandAppleTrees, sugarcanes]);
var islewortNodes = L.layerGroup ([agavePlants, cottonPlants, wildParsnips, wildPopotos]);



//init map
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 4,
    maxZoom: 7,
    attributionControl: false
});

/*The in-game coordinates start at 1,1 as the northwest-most corner, for some reason.
Leaflet uses y,x coordinates starting from the bottom left, so Y coordinates will
need to be flipped and incremented by 1 (e.g., the coordinate for the Coral Sands
pin is x30.0, y24.0, so the Leafleft equivalent is y[42-24+1=19.0], x30.0*/
var bounds = [[1,1], [42,42]];
map.fitBounds(bounds);

//Add basemaps
var surface = L.imageOverlay('images/surface.png', bounds);
var cave = L.imageOverlay('images/cave.png', bounds);
//Use surface map by default
surface.addTo(map);

//Create groups for basemaps and markers
var baseLayers = {
    "Surface Terrain": surface,
    "Cave System": cave
};
var overlayMaps = {
    "Island Apple": islandAppleTrees,
    "Island Beehive Chip": islandAppleTrees,
    "Island Branch": tualongTrees,
    "Island Clam": largeShells,
    "Island Clay": moundsOfDirt,
    "Island Coconut": palmTrees,
    "Island Copper Ore": bluishRocks,
    "Island Coral": coralFormations,
    "Island Cotton Boll": cottonPlants,
    "Island Durium Sand": roughBlackRocks,
    "Island Hemp": agavePlants,
    "Island Iron Ore": roughBlackRocks,
    "Island Jellyfish": coralFormations,
    "Island Laver": seaweedTangles,
    "Island Leucogranite": speckledRocks,
    "Island Logs": islandLogNodes,
    "Island Limestone": smoothWhiteRocks,
    "Island Marble": smoothWhiteRocks,
    "Island Mythril Ore": bluishRocks,
    "Island Palm Leaf": palmTrees,
    "Island Palm Log": palmTrees,
    "Island Parsnip Seeds": wildParsnips,
    "Island Popoto Set": wildPopotos,
    "Island Quartz": quartzFormations,
    "Island Resin": tualongTrees,
    "Island Rock Salt": crystalBandedRocks,
    "Island Sand": islandSandNodes,
    "Island Sap": mahoganyTrees,
    "Island Squid": seaweedTangles,
    "Island Stone": islandStoneNodes,
    "Island Sugarcane": sugarcanes,
    "Island Tinsand": submergedSands,
    "Island Vine": islandVineNodes,
    "Island Wood Opal": mahoganyTrees,
    "Islefish": largeShells,
    "Islewort": islewortNodes
};

//Add controls for selecting basemap and markers to display
var layerControl = L.control.layers(baseLayers, overlayMaps).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
}

var activeOverlays = [];
function onOverlayAdd(e) {
    //console.log ("adding overlay " + e.name);
    activeOverlays.push(e.layer);
}

function onOverlayRemove(e) {
    //console.log ("removing overlay " + e.name);
    const index = activeOverlays.indexOf(e.layer);
    activeOverlays.splice(index, 1);
    map.eachLayer (function (obj) {
        map.removeLayer(obj);
    });
    //console.log(activeOverlays);
    activeOverlays.forEach (function (obj) {
        //if (!map.hasLayer(obj)) {
            map.addLayer(obj);
        //}
    });
}

map.on('click', onMapClick);
map.on('overlayadd', onOverlayAdd);
map.on('overlayremove', onOverlayRemove);