
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {profile_id: 1, name: 'Ollie', age: '18', profile_img:'profilepic.jpg', song_lyrics: 'jkhgkhbsdf', banner_img: '#', bio:'dfghjkdfghj', city: 'Wellington', relationship: "it's complicated"}
      ]);
    });
};
