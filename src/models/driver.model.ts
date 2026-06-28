import { Schema, model, Types } from "mongoose";

export interface IDriver {
  name: string;
  birthdate: Date;
  phone: string;
  salary: number;
  branch: Types.ObjectId;
}

const DriverSchema = new Schema<IDriver>(
  {
    name: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
    },
    branch: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IDriver>("Driver", DriverSchema);