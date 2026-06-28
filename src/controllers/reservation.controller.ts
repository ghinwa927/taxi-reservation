import { Request, Response } from "express";
import Reservation from "../models/reservation.model";

// Create Reservation
export const createReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await Reservation.create(req.body);

    res.status(201).json({
      success: true,
      data: reservation,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Reservations
export const getReservations = async (req: Request, res: Response) => {
  try {
    const reservations = await Reservation.find();

    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Reservation By ID
export const getReservationById = async (req: Request, res: Response) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    res.json({
      success: true,
      data: reservation,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Reservation
export const updateReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    res.json({
      success: true,
      data: reservation,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Reservation
export const deleteReservation = async (req: Request, res: Response) => {
  try {
    const reservation= await Reservation.findByIdAndDelete(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    res.json({
      success: true,
      message: "Reservation deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};