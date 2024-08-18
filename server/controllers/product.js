const modal = require("../Models/product");
const ErrorHandler = require("../utils/errorhandler");
const Product = modal.Product;
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const apiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");
const { compare } = require("bcryptjs");

exports.create = catchAsyncErrors(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
    folder: "EcommerceNastp/ProductPictures",
    width: 350,
    crop: "scale",
  });
  req.body.images[0] = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
  console.log(req.body.thumbnail);
  req.body.user = req.user._id;
  const product = await new Product(req.body);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  await product.save();

  res.status(200).json({
    sucess: true,
    product,
  });
});

exports.getAll = catchAsyncErrors(async (req, res, next) => {
  // let resultperpage = 8;
  let productCount = await Product.countDocuments();
  const apifeatures = new apiFeatures(Product.find(), req.query)
    .search()
    .filter();
  // .pagination(resultperpage);
  const products = await apifeatures.query;

  if (!products) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({
    products,
    productCount,
  });
});

exports.get = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json(product);
});

exports.update = catchAsyncErrors(async (req, res, next) => {
  if (req.body.thumbnail) {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
      folder: "EcommerceNastp/ProductPictures",
      width: 350,
      crop: "scale",
    });
    req.body.images[0] = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  
  const id = req.params.id;

  const product = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json(product);
});

exports.delete = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const product = await Product.findOneAndDelete({ _id: id });
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json(product);
});

/// REVIEW API's

// CReate Review

exports.createReview = catchAsyncErrors(async (req, res, next) => {
  const { Comment, rating, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    Comment,
  };
  console.log(review);

  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  console.log("product found");

  const isReviewed = product.reviews.find(
    (rev) => req.user._id.toString() === rev.user.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        rev.Comment = Comment;
        rev.rating = rating;
      }
    });

    console.log("review alredy found");
  } else {
    product.reviews.push(review);
    product.numOfReviews += 1;

    console.log("new review added");
  }

  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  const avgRating = avg / product.reviews.length;

  product.rating = avgRating;

  product.save();

  res.status(200).json({
    sucess: true,
    message: `Review Subited of prductID : ${productId}`,
  });
});

exports.getAllReviews = catchAsyncErrors(async (req, res, next) => {
  const productID = req.params.id;

  const product = await Product.findById(productID);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  const reviews = product.reviews;

  res.json({
    sucess: true,
    reviews,
  });
});

exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  console.log("runiining");
  const productId = req.query.productId;
  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // Filter out the review based on ID
  const id = req.query.id; // Assuming 'reviewId' is the parameter for the review to delete
  product.reviews = product.reviews.filter((rev) => rev._id.toString() !== id);

  // Calculate new average rating and number of reviews
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  const rating = avg / product.reviews.length;
  const numOfReviews = product.reviews.length;

  // Update the product with the new review list, rating, and number of reviews
  await Product.findByIdAndUpdate(
    productId,
    { reviews: product.reviews, rating, numOfReviews },
    { new: true }
  );

  res.json({
    success: true,
    product,
  });
});
