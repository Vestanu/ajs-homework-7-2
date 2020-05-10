
import {
  // eslint-disable-next-line no-unused-vars
  Character, Zombie, Undead,
} from '../src/character';

test('Метод levelUp работает при здоровье больше 0', () => {
  const newPlayer = new Zombie('Dragon');
  newPlayer.levelUp();
  expect(newPlayer).toEqual({
    attack: 48, defence: NaN, defense: 10, health: 100, level: 2, name: 'Dragon',
  });
});


test('Метод levelUp не работает при здоровье меньше 0', () => {
  const newPlayer = new Undead('Dragon');

  expect(() => {
    newPlayer.levelUp();
  }).toThrow();
});
