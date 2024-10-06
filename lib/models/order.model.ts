import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  screeningId: { type: mongoose.SchemaTypes.ObjectId, ref: "Screening" },
  seats: [
    {
      row: {
        type: Number,
        required: true,
      },
      seat: {
        type: Number,
        required: true,
      },
      isBooked: {
        type: Boolean,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
