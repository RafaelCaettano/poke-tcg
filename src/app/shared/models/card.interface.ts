import { Rarity } from './../enums/rarity.enum';
import { Resistance } from './resistence.interface';
import { Attack } from './attack.interface';
import { Images } from './images.interface';

export interface Card {
    id: string;
    name: string;
    hp: string;
    types: string[];
    evolvesFrom?: string;
    attacks: Attack[];
    weaknesses?: Resistance[];
    resistances?: Resistance[];
    number: string;
    rarity: Rarity;
    nationalPokedexNumbers: number[];
    images: Images;
    evolvesTo?: string[];
    flavorText?: string;
}
