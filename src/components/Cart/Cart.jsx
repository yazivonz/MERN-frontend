import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai"; // Icons for quantity control and delete

const Cart = () => {
    // Sample items in the cart
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Espresso", price: 120, quantity: 1, imageUrl: "https://via.placeholder.com/100" },
        { id: 2, name: "Cappuccino", price: 150, quantity: 2, imageUrl: "https://via.placeholder.com/100" },
        { id: 3, name: "Latte", price: 180, quantity: 1, imageUrl: "https://via.placeholder.com/100" },
    ]);

    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        address: "123 Coffee St, Brewtown, CA 12345",
    });

    // Calculate the total price of items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Calculate the total number of items in the cart
    const calculateTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Handle quantity change
    const updateQuantity = (id, change) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
            )
        );
    };

    // Handle removing an item from the cart
    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Handle changing user address
    const handleAddressChange = (e) => {
        setUserInfo({ ...userInfo, address: e.target.value });
    };

    // Handle checkout action
    const handleCheckout = () => {
        alert("Proceeding to checkout...");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#fffdf9] to-[#134278]"> {/* Centering the content vertically */}
            <div className="flex flex-col lg:flex-row justify-center gap-5"> {/* Align cart and receipt in a row with gap */}
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
                    <h1 className="text-2xl font-bold mb-5 text-center">Your Cart</h1>
                    {cartItems.length === 0 ? (
                        <p className="text-center">Your cart is empty.</p>
                    ) : (
                        <table className="w-full table-fixed">
                            <thead>
                                <tr>
                                    <th className="w-1/2 text-left py-2">Item</th>
                                    <th className="w-1/6 text-left py-2">Price</th>
                                    <th className="w-1/6 text-left py-2">Subtotal</th>
                                    <th className="w-1/12 text-left py-2">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-b border-gray-300">
                                        <td className="py-3 flex items-center">
                                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 mr-4" />
                                            <div>
                                                <span>{item.name}</span>
                                                <div className="flex items-center mt-1">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1">
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1">
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3">₱{item.price}</td>
                                        <td className="py-3">₱{(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="py-3 text-red-500 cursor-pointer" onClick={() => removeItem(item.id)}>
                                            <AiOutlineDelete />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
                    <h2 className="text-xl font-bold mb-4 text-center">Total Receipt</h2>
                    <div className="mb-2">
                        <strong>Name:</strong> {userInfo.name}
                    </div>
                    <div className="mb-4">
                        <strong>Shipping Address:</strong>
                        <input
                            type="text"
                            value={userInfo.address}
                            onChange={handleAddressChange}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
                        <span>Total Items:</span>
                        <span>{calculateTotalItems()}</span>
                    </div>
                    <div className="flex justify-between mb-4 border-b border-gray-300 pb-2">
                        <span>Total Price:</span>
                        <span>₱{calculateTotal()}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="w-full  border-2 border-white bg-[#0c3a6d] text-white hover:text-[#8b98a7] transition duration-400"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
