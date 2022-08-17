/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {id: 1, category_id: 1, name: '三体'},
    {id: 2, category_id: 1, name: 'エンジニアリング組織論への招待'},
    {id: 3, category_id: 2, name: 'stray'}
  ]);
};
