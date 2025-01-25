export enum Dice {
    D2 = 2,
    D4 = 4,
    D6 = 6,
    D8 = 8,
    D10 = 10,
    D12 = 12,
    D20 = 20,
    D100 = 100,
}

export function inDice(value: number): boolean {
    return Object.values(Dice).includes(value);
}
