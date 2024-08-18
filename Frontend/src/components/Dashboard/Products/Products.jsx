import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../../redux/functions/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [thumbnail, setthumbnail] = useState(null);
  const dispatch = useDispatch();
  const { products: allproducts } = useSelector((state) => state.product);
  const { product } = useSelector((state) => state.productDetails);
  const [imageInputKey, setImageInputKey] = useState(Date.now());

  useEffect(() => {
    if (!allproducts) {
      getProduct(dispatch);
    } else {
      setProducts(allproducts);
    }
  }, [allproducts, dispatch, product]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    numOfReviews: 0,
    rating: 0,
    Stock: 1,
    thumbnail: "./product.png",
    category: "",
    images: [{ public_id: "dummy", url: "dummy" }],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // function handleSignupChange(e) {
  //   if (e.target.name === "avatar") {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setavatarPreview(reader.result);
  //         setavatar(reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //   } else {
  //     setuser({ ...user, [e.target.name]: e.target.value });
  //   }
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.name === "thumbnail") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFormData((prev) => ({ ...prev, thumbnail: reader.result }));
          setthumbnail(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateProduct(dispatch, formData);

      setIsEditing(false);
      setEditId(null);
    } else {
      createProduct(dispatch, formData);
    }
    setFormData({
      title: "",
      description: "",
      price: "",
      numOfReviews: 0,
      rating: 0,
      Stock: 1,
      thumbnail: null,
      images: [{ public_id: "", url: "" }],
      category: "",
    });

    setImageInputKey(Date.now());
  };

  const handleEditProduct = (product) => {
    setFormData({
      _id: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      numOfReviews: product.numOfReviews,
      rating: product.rating,
      Stock: product.Stock,
      thumbnail,
      images: product.images,
      category: product.category,
    });
    setIsEditing(true);
    setEditId(product._id);
  };

  const handleDeleteProduct = (id) => {
    const confirmation = confirm(
      "Are you sure you want to delete this product"
    );
    if (confirmation) {
      deleteProduct(dispatch, id);
    }
  };

  const filteredProducts =
    products &&
    products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );

  return (
    <div className="bg-white p-10 rounded-lg px-40 tracking-tighter text-left">
      <div className="top border-b flex gap-10 pb-10">
        <div className="box flex gap-5 bg-blue-950 w-fit p-10 text-3xl text-white rounded-lg">
          <span>Total Products :</span>
          <span className="font-extrabold">{products.length}</span>
        </div>
        <div className="Searchandfilter flex-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-sky-100 flex justify-between p-3 h-fit w-full"
          >
            <input
              type="text"
              className="bg-transparent outline-none border-none w-full"
              placeholder="Search Products by name or category...."
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            />
            <button>
              <BiSearch />
            </button>
          </form>
        </div>
      </div>

      <form
        onSubmit={handleAddProduct}
        className="bg-sky-100 p-5 rounded-lg mt-10"
      >
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Product Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Product Title"
            className="p-2 m-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="p-2 m-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Number of Reviews:
          </label>
          <input
            type="number"
            name="numOfReviews"
            value={formData.numOfReviews}
            onChange={handleInputChange}
            placeholder="Number of Reviews"
            className="p-2 m-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Rating:
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            placeholder="Rating"
            className="p-2 m-2 border border-gray-300 rounded w-full"
          />
        </div> */}
        <div className="flex justify-between gap-2">
          <div className="form-group flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Stock:
            </label>
            <input
              type="number"
              name="Stock"
              value={formData.Stock}
              onChange={handleInputChange}
              placeholder="Stock"
              className="p-2 m-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="form-group flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="p-2 m-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="form-group flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="p-2 m-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="thumnail">Thumnail</label>
          <input
            key={imageInputKey}
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={(e) => handleImageChange(e)}
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="bottom mt-10">
        <table className="w-full h-auto border p-5">
          <thead>
            <tr className="border-b-2 p-5 text-xl font-semibold">
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="w-full h-auto">
            {filteredProducts.map((product) => (
              <tr key={product._id} className="h-20 border-b">
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.Stock}</td>
                <td>{product.category}</td>
                <td>
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img.url}
                      alt={product.title}
                      className="w-16 h-16 object-cover"
                    />
                  ))}
                </td>
                <td className="space-x-10">
                  <button onClick={() => handleEditProduct(product)}>
                    <TbEdit
                      size={20}
                      className="text-yellow-600 hover:scale-[1.5] transition-all duration-300"
                    />
                  </button>
                  <button onClick={() => handleDeleteProduct(product._id)}>
                    <TbTrash
                      size={20}
                      className="text-red-600 hover:scale-[1.5] transition-all duration-300"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
