const character = {
    race: ['Human', 'Elf', 'Dwarf', 'Halfling', 'Half-Elf', 'Half-Orc', 'Gnome', 'Tiefling', 'Dragonborn'],
    class: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rouge', 'Sorcerer', 'Warlock', 'Wizard'],
    action: ['Melee Attack', 'Ranged Attack', 'Grapple', 'Dash', 'Disengage', 'Uses an item', 'rest', 'seek a quest']
};

const sentence = (characterRace, characterClass, characterAction) => {
    return `The ${characterRace} ${characterClass} decides to ${characterAction}!`;
}

const getRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

let raceSelection = character.race[getRandomNumber(character.race.length)];
let classSelection = character.class[getRandomNumber(character.class.length)];
let actionSelection = character.action[getRandomNumber(character.action.length)];

console.log(sentence(raceSelection, classSelection, actionSelection));