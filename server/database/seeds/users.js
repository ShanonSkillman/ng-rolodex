exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                { username: 'bassnectar', name: 'Lorin Ashton', email: 'thenectar@gmail.com', address: '123 Colorado Rd.' },
                { username: 'DIPLO', name: 'THomas Pentz', email: 'twerkboss@gmail.com', address: '456 Minnesota St.' },
                { username: 'Yonce', name: 'Beyone Knowles', email: 'thenectar@gmail.com', address: '789 Houston Ave.' }
            ]);
        })

        .then(function () {
            return knex('contacts').del()
                .then(function () {
                    return knex('contacts').insert([
                        { id: 1, name: 'Shan', address: 'Hawaii', mobile: '808-464-9904', email: 'shan@gmail.com', instagram: 'shanskillskies', github: 'shanonskillman', linkedin: 'Shanon Skillman', spiritAnimal: 'vulture' },
                        { id: 2, name: 'Bea', address: 'New York', mobile: '8085784490', email: 'bea@gmail.com', instagram: 'beaaffect', github: 'bearodin', linkedin: 'Heather Chapple', spiritAnimal: 'cat' },
                        { id: 3, name: 'Heather', address: 'Hawaii', mobile: '8085748909', email: 'heather@gmail.com', instagram: 'hiheatherfeather', github: 'heatherchapple', linkedin: 'Heather Chapple', spiritAnimal: 'butterfly' }
                    ]);
                });
        });
};