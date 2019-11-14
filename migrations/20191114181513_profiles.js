exports.up = function(knex) {
  return knex.schema.createTable("profiles", table => {
    table.increments("profile_id");
    table.string("name");
    table.integer("age");
    table.string("profile_img");
    table.text("song_lyrics");
    table.string("banner_img");
    table.text("bio");
    table.string('city');
    table.string('relationship')

  });
};

exports.down = function(knex) {
  knex.schema.dropTable("profiles");
};
