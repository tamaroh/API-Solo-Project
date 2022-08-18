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
    {id: 3, category_id: 1, name: 'HUNTER x HUNTER'},
    {id: 4, category_id: 2, name: 'stray'},
    {id: 5, category_id: 2, name: 'Final Fantasy 8'},
    {id: 6, category_id: 2, name: 'Final Fantasy 10'},
    {id: 7, category_id: 2, name: 'Yumenikki'},
    {id: 8, category_id: 2, name: '20 minutes till dawn'},
  ]);
};
