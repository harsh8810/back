const mongoose = require('mongoose');
const DB = "mongodb+srv://harsh:harsh321@cluster0.npb7heu.mongodb.net/merndata?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);



mongoose
  .connect(DB, {
    useNewUrlparser: true,
    
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log(`connected database`);
  })
  .catch((e) => {
    console.log(e);
  });
