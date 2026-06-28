import { Schema, model, Types } from "mongoose";

export interface ITaxiCar {
  plateNb: string;
  carModel: string;
  nbOfSeats: number;
  year: number;
  color: string;
  branch: Types.ObjectId;
}

const TaxiCarSchema = new Schema<ITaxiCar>(
  {
    plateNb: {
      type: String,
      required: true,
      unique: true,
    },
    carModel: {
      type: String,
      required: true,
    },
    nbOfSeats: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
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

export default model<ITaxiCar>("TaxiCar", TaxiCarSchema);