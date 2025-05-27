import User from "../models/User.js";

// // Update User CartData : /api/cart/update

// export const updateCart = async (req, res) => {
//   try {
//     const { userId, cartItems } = req.body;
//     await User.findByIdAndUpdate(userId, { cartItems });
//     res.json({ success: true, message: "Cart Updated" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

export const updateCart = async (req, res) => {
  try {
    const userId = req.user?.id; // ✅ Get user from authenticated session/JWT
    const { cartItems } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log("Cart update error:", error.message);
    res.json({ success: false, message: error.message });
  }
};
