exports.up = function(knex) {
  return knex.schema.createTable("profiles", table => {
    table.increments("profile_id");
    table.string("name");
    table.integer("age");
    table.string("profile_img");
    table.string("favourite_quote");
    table.string("banner_img");
    table.text("bio");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("users");
};
