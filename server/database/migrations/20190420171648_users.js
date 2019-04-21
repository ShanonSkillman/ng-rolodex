exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.string('name')
        table.string('email')
        table.string('address')
    })
        .createTable('contacts', table => {
            table.increments('id')
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
            table.string('address');
            table.string('mobile');
            table.string('email');
            table.string('instagram');
            table.string('github');
            table.string('linkedin');
            table.string('spiritAnimal');
            table.integer('created_by').references('users.id')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('contacts')
        .dropTable('users');
};