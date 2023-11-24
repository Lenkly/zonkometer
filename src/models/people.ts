import mongoose from "mongoose";

export interface People extends mongoose.Document {
  name: string;
  count: number;
}

const PeopleSchema = new mongoose.Schema<People>({
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
  },
});

export default mongoose.models.People ||
  mongoose.model<People>("People", PeopleSchema);
