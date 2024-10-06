import mongoose from "mongoose";

const screeningSchema = new mongoose.Schema({
  filmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Film",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  audioOption: {
    type: String,
    required: true,
  },
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
});

const Screening =
  mongoose.models.Screening || mongoose.model("Screening", screeningSchema);

export default Screening;
