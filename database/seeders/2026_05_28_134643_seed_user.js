import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.User) {
    await db.User.bulkCreate([
      { name: 'mari', email: 'mari@valahol.lan', password: '$2a$10$4idmNj4cPzqlrDIUVPgX7uk2vjj.5nV3x8wRGznZXmeQPK1b3zVS6', roleId: 0 }
    ]);
  }else {
    await QueryInterface.bulkInsert('users', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('users');
}

export { up, down }
