const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, " Please enter product name"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, " Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, " Please enter product price"],
    maxLength: [8, "cannot be greater than 8 characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  Stock: {
    type: Number,
    maxLength: [4, "cannot be greater than 4 characters"],
    default: 1,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: [true, " Please enter product catgory"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

exports.Product = mongoose.model("Product", productSchema);
