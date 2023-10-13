import {  mysqlTable, bigint, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';

export const countries = mysqlTable('countries', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    name: varchar('name', { length: 256 }),
  }, (countries) => ({
    nameIndex: uniqueIndex('name_idx').on(countries.name),
  }));

  export const states = mysqlTable('states', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    name: varchar('name', { length: 256 }),
  }, (states) => ({
    nameIndex: uniqueIndex('name_idx').on(states.name),
  }));