import orderByProps from '../basic';

test('normal sort', () => {
  const result = [
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const test = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['level', 'name']);

  expect(test).toEqual(result);
});

test('no normal sort / without an array to sort', () => {
  const result = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const test = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, []);

  expect(test).toEqual(result);
});

test('no normal sort / with a missing key', () => {
  const result = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const test = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['wow']);

  expect(test).toEqual(result);
});
