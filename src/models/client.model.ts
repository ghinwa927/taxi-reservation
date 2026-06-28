import { Schema, model } from "mongoose";

export interface IClient {
  name: string;
  phone: string;
  address: string;
}

const ClientSchema = new Schema<IClient>(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IClient>("Client", ClientSchema);