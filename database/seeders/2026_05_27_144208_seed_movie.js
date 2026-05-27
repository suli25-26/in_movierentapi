import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Movie) {
    await db.Movie.bulkCreate([
      
    ]);
  }else {
    await QueryInterface.bulkInsert('movies', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('movies');
}

export { up, down }
