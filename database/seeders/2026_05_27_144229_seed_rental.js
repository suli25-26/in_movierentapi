import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Rental) {
    await db.Rental.bulkCreate([
      
    ]);
  }else {
    await QueryInterface.bulkInsert('rentals', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('rentals');
}

export { up, down }
