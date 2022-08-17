/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {id: 1, name: 'book'},
    {id: 2, name: 'game'},
    {id: 3, name: 'hobby'}
  ]);
};
