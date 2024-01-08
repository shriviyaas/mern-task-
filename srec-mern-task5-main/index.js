const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/srec-crud")
  .then(() => console.log("Database Connected sucessfully"))
  .catch((err) => console.log(err));

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Name is mandatory"] },
  age: { type: Number, required: [true, "Age is mandatory"] },
  role: { type: String, required: [true, "Role is madatory"] },
  strikeRate: { type: Number, required: [true, "Strike rate is madatory"] }
},{timestamps: true});

const userModel = mongoose.model("users", userSchema);

let userData = [
    {
        name: "KL Rahul",
        age: 32,
        role: "Opener",
        strikeRate: 215.7
    },
    {
        name: "Rohit Sharma",
        age: 45,
        role: "Opener",
        strikeRate: 175.2
    }
]

userModel.create(userData)
.then((data) => console.log("Data inserted successfully"))
.catch((err) => console.log(err))

userModel.find()
.then((data) => console.log(data))
.catch((err) => console.log(err))

userModel.find({ role: "Opener" })
.then((data) => console.log(data))
.catch((err) => console.log(err))

userModel.updateOne({ age:  20}, { age: 42 })
.then(() => console.log("Data updated"))
.catch((err) => console.log(err))

userModel.deleteOne({ role: "Opener" })
.then(() => console.log("Data Deleted"))
.catch((err) => console.log(err))