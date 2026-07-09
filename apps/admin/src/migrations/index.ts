import * as migration_20260708_214415_init from './20260708_214415_init';
import * as migration_20260709_000000_rich_language_guides from './20260709_000000_rich_language_guides';

export const migrations = [
  {
    up: migration_20260708_214415_init.up,
    down: migration_20260708_214415_init.down,
    name: '20260708_214415_init'
  },
  {
    up: migration_20260709_000000_rich_language_guides.up,
    down: migration_20260709_000000_rich_language_guides.down,
    name: '20260709_000000_rich_language_guides'
  },
];
