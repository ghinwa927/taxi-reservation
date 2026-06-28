import { Request, Response } from "express";
import TaxiCar from "../models/taxiCar.model";

// Create TaxiCar
export const createTaxiCar = async (req: Request, res: Response) => {
  try {
    const taxicar = await TaxiCar.create(req.body);

    res.status(201).json({
      success: true,
      data: taxicar,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Taxi cars
export const getTaxiCars = async (req: Request, res: Response) => {
  try {
    const taxicars = await TaxiCar.find();

    res.status(200).json({
      success: true,
      count: taxicars.length,
      data: taxicars,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Taxi car By ID
export const getTaxiCarById = async (req: Request, res: Response) => {
  try {
    const taxicar = await TaxiCar.findById(req.params.id);

    if (!taxicar) {
      return res.status(404).json({
        success: false,
        message: "TaxiCar not found",
      });
    }

    res.json({
      success: true,
      data: taxicar,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update TaxiCar
export const updateTaxiCar = async (req: Request, res: Response) => {
  try {
    const taxicar = await TaxiCar.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!taxicar) {
      return res.status(404).json({
        success: false,
        message: "TaxiCar not found",
      });
    }

    res.json({
      success: true,
      data: taxicar,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete TaxiCar
export const deleteTaxiCar = async (req: Request, res: Response) => {
  try {
    const taxicar = await TaxiCar.findByIdAndDelete(req.params.id);

    if (!taxicar) {
      return res.status(404).json({
        success: false,
        message: "TaxiCar not found",
      });
    }

    res.json({
      success: true,
      message: "TaxiCar deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};