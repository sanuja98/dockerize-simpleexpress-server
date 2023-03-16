import * as mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,

})

const UserModel = mongoose.model("user", schema)

export {UserModel};

// module.exports = mongoose.model("usersLib" , schema)

// export default schema