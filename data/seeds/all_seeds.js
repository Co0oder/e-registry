const data = require('./mock_data.json');


exports.seed = (knex) => {
  return knex('hospitals').del()
    .then(function () {
      return knex('locations').del()
    })
    .then(function () {
      return knex('doctors').del()
    })
    .then(function () {
      return knex('departments').del()
    })
    .then(function () {
      return knex('staff_members').del()
    })
    .then(function () {
      return knex('patients').del()
    })
    .then(function () {
      return knex('chambers').del()
    })
    .then(function () {
      return knex('in_patients').del()
    })
    .then(function () {
      return knex('offices').del()
    })
    .then(() => {
      return knex('locations').insert(data.locations);
    })
    .then(() => {
      return knex('hospitals').insert(data.hospitals);
    })
    .then(() => {
      return knex('doctors').insert(data.doctors);
    })
    .then(() => {
      return knex('departments').insert(data.departments);
    })
    .then(() => {
      return knex('staff_members').insert(data.staff_members);
    })
    .then(() => {
      return knex('patients').insert(data.patients);
    })
    .then(() => {
      return knex('chambers').insert(data.chambers);
    })
    .then(() => {
      return knex('in_patients').insert(data.in_patients);
    })
    .then(() => {
      //return knex('offices').insert(data.offices);
    });
};
