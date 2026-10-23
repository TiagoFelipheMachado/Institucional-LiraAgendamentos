import * as migration_20261023_031432_initial from './20261023_031432_initial';

export const migrations = [
  {
    up: migration_20261023_031432_initial.up,
    down: migration_20261023_031432_initial.down,
    name: '20261023_031432_initial'
  },
];
