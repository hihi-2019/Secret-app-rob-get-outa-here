
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recent_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('recent_images').insert([
        {img_id: 1, img_filename: 'image1.jpeg', profile_id: 1},
        {img_id: 2, img_filename: 'image2.jpeg', profile_id: 1},
        {img_id: 3, img_filename: 'image3.jpeg', profile_id: 2},
        {img_id: 4, img_filename: 'image4.jpeg', profile_id: 2},
        {img_id: 5, img_filename: 'image5.jpeg', profile_id: 4},
        {img_id: 6, img_filename: 'image6.jpeg', profile_id: 6},
        {img_id: 7, img_filename: 'image7.jpeg', profile_id: 4},
        {img_id: 8, img_filename: 'image8.jpeg', profile_id: 3},
        {img_id: 9, img_filename: 'image9.jpeg', profile_id: 2},


      ]);
    });
};
