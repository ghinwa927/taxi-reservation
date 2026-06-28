import { Schema, model } from "mongoose";

export interface IBranch {
  name: string;
  address: string;
  phone: string;
}

const BranchSchema = new Schema<IBranch>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IBranch>("Branch", BranchSchema);