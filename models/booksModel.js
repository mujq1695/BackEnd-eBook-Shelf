const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
//   image_src: {
//     type: String,
//     required: [true, "Please enter image URL"],
//   },

  title: {
    type: String,
    required: [true, "Please enter the book title"],
  },

  aurthor: {
    type: String,
    required: [true, "Please enter the Aurthor Name"],
  },

  category: {
    type: String,
    required: [true, "Please enter the book category"],
  },
  access: {
    type: String,
    required: [true, "Please enter the access type"],
  },

  description: {
    type: String,
    required: [true, "Please enter the book description"],
  },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Book",bookSchema)
