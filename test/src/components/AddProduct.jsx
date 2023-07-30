// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

// const AddProduct = () => {

//     const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "Other" });

//     const router = useNavigate();

//     const handleChange = (event) => {
//         setProductData({ ...productData, [event.target.name]: event.target.value })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (productData.name && productData.price && productData.image && productData.category) {
//             const productsArray = JSON.parse(localStorage.getItem("Products")) || [];

//             const randomId = uuidv4();
//             productData["id"] = randomId;
//             productsArray.push(productData);
//             localStorage.setItem("Products", JSON.stringify(productsArray))
//             setProductData({ name: "", price: "", image: "", category: "Other" })
//             router('/all-products');
//             toast.success("Product added Successfully.")
//         } else {
//             toast.error("Please fill the all fields.")
//         }
//     }

//     function selectRole(event) {
//         // console.log(event.target.value, "- role")
//         setProductData({ ...productData, ["category"]: event.target.value })
//     }

//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem("Currrent-user"))
//         if (user) {
//             if (user?.role == "Buyer") {
//                 toast.error("You are not a Seller.")
//                 router('/')
//             }
//         } else {
//             toast.error("You are not a Logged user.")
//             router('/login')
//         }
//     }, [])

//     return (
//         <div>
//             <h1>Add Product</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Product Name :</label><br />
//                 <input value={productData.name} type='text' onChange={handleChange} name="name" /><br />
//                 <label>Product Price :</label><br />
//                 <input value={productData.price} type='number' onChange={handleChange} name='price' /><br />
//                 <label>Product Category :</label><br />
//                 <select onChange={selectRole} >
//                     <option value="Other">Other</option>
//                     <option value="Mens">Mens</option>
//                     <option value="Womens">Womens</option>
//                     <option value="Chidrens">Chidrens</option>
//                     <option value="Electronics">Electronics</option>
//                 </select><br />
//                 <label>Product Image :</label><br />
//                 <input value={productData.image} type='text' onChange={handleChange} name='image' /><br />
//                 <input type='submit' value='Add Product' /><br />
//             </form>
//         </div>
//     )
// }

// export default AddProduct




// Single product  - You'll get id from params, compare it
//                 with LS products, and find out the single
//                      product data
// cart - take single product data and take userId FROM CONTEXT
//         find out the exact user from Users list from ls and
//         inside cart add the current product.
// Update profile
// Update product -   
