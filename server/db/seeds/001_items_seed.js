/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("items").insert([
    {
      id: 1,
      name: "Shabu Shabu Beef",
      amount: 250,
      purchace_date: "2022-05-09 09:00:00",
      method: "freezer",
    },
    {
      id: 2,
      name: "Shirataki",
      amount: 1,
      purchace_date: "2022-05-04 12:00:00",
      method: "fridge",
    },
    {
      id: 3,
      name: "Onion",
      amount: 2,
      purchace_date: "2022-04-29 10:00:00",
      method: "shelf",
    },
  ]);
};
