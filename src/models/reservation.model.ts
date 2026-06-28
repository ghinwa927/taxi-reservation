import { Schema, model, Types } from "mongoose";

export interface IReservation {
  client: Types.ObjectId;
  driver: Types.ObjectId;
  taxiCar: Types.ObjectId;
  pickAddress: string;
  dropAddress: string;
  reservationDate: Date;
  pickTime: string;
  dropTime: string;
  status: string;
  fees: number;
}

const ReservationSchema = new Schema<IReservation>(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },
    taxiCar: {
      type: Schema.Types.ObjectId,
      ref: "TaxiCar",
      required: true,
    },
    pickAddress: {
      type: String,
      required: true,
    },
    dropAddress: {
      type: String,
      required: true,
    },
    reservationDate: {
      type: Date,
      default: Date.now,
    },
    pickTime: {
      type: String,
      required: true,
    },
    dropTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending",
    },
    fees: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IReservation>("Reservation", ReservationSchema);