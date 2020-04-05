const seeder = require("mongoose-seed");
// const mongoose = require("mongoose");
const Example = "models/Example.js";
require("dotenv/config");

seeder.connect(process.env.DB_CONNECTION, 
  { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
  console.log("db connect");
  seeder.loadModels([Example]);
  seeder.clearModels(["Example"], () => {
    seeder.populateModels(data, (err, done) => {
      if (done) {
        console.log("seed done", done);
      }
      if (err) {
        console.log("seed threw error", err);
      }
    });
    seeder.disconnect();
  });
});

const data = [
    {
        'model': 'Example',
        'documents': [
        ]
    }
];

// const data = [
//   {
//     model: "Example",
//     documents: [
//       {
//         response: "response",
//         error: "error"
//       }
//     ]
//   }
// ];
