exports.up = function(knex) {
  return knex.schema.createTable("recent_images", table => {
    table.increments("img_id");
    table.string('img_filename');
    table.integer('profile_id')
 
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("recent_images");
};
