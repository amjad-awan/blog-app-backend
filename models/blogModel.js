import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    blogername: {
      type: String,
      require: true,
    },

    blogerid: {
      type: String,
      require: true,
    },

    likes: {
      type: Array,
    },
    comment: [
      {
        text: String,
        blogername: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
    description: {
      type: String,
      require: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("blog", blogSchema);
