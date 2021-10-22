export interface ICard {
    name: string
    manaCost: string
    cmc: number
    colors: string[]
    colorIdentity: string[]
    type: string
    types: string[]
    subtypes: string[]
    rarity: string
    set: string
    setName: string
    text: string
    flavor: string
    artist: string
    number: string
    power: string
    toughness: string
    layout: string
    multiverseid: string
    imageUrl: string
    foreignNames: {
        name: string
        text: string
        type: string
        flavor: string
        imageUrl: string
        language: string
        multiverseid: number
    }[]
    printings: string[]
    originalText: string
    originalType: string
    legalities: {
        format: string
        legality: string
    }[]
    id: string
}
