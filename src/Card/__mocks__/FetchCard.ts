import {ICard} from '../ICard'

const cardFixture: ICard = {
    "name": "Emerald Dragonfly",
    "manaCost": "{1}{G}",
    "cmc": 2.0,
    "colors": [
        "Green"
    ],
    "colorIdentity": [
        "G"
    ],
    "type": "Creature — Insect",
    "types": [
        "Creature"
    ],
    "subtypes": [
        "Insect"
    ],
    "rarity": "Common",
    "set": "CHR",
    "setName": "Chronicles",
    "text": "Flying\n{G}{G}: Emerald Dragonfly gains first strike until end of turn.",
    "flavor": "\"Flittering, wheeling, / darting in to strike, and then / gone just as you blink.\" —\"Dragonfly Haiku,\" poet unknown",
    "artist": "Quinton Hoover",
    "number": "63",
    "power": "1",
    "toughness": "1",
    "layout": "normal",
    "multiverseid": "2830",
    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=2830&type=card",
    "foreignNames": [],
    "printings": [
        "CHR",
        "LEG"
    ],
    "originalText": "Flying\noGooG First strike until end of turn",
    "originalType": "Summon - Dragonfly",
    "legalities": [
        {
            "format": "Commander",
            "legality": "Legal"
        },
        {
            "format": "Duel",
            "legality": "Legal"
        },
        {
            "format": "Legacy",
            "legality": "Legal"
        },
        {
            "format": "Oldschool",
            "legality": "Legal"
        },
        {
            "format": "Pauper",
            "legality": "Legal"
        },
        {
            "format": "Paupercommander",
            "legality": "Legal"
        },
        {
            "format": "Premodern",
            "legality": "Legal"
        },
        {
            "format": "Vintage",
            "legality": "Legal"
        }
    ],
    "id": "91af2443-1c94-5986-a612-c14236b9689a"
}

export const FetchCard = async (): Promise<ICard> => {
    return Promise.resolve(cardFixture)
}
