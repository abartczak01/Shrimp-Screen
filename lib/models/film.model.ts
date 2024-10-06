import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  trailerUrl: {
    type: String,
    required: false,
  },
  MPARating: {
    // Motion Picture Association rating - age category
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: false,
  },
  backdrop: {
    type: String,
    required: false,
  },
  isShowing: {
    type: Boolean,
    required: true,
  },
});

const Film = mongoose.models.Film || mongoose.model("Film", filmSchema);

export default Film;
