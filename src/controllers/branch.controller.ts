import { Request, Response } from "express";
import Branch from "../models/branch.model";

export const createBranch = async (req: Request, res: Response) => {
    console.log("Body:", req.body);

    try {
        const branch = await Branch.create(req.body);

        res.status(201).json({
            success: true,
            data: branch
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Branches
export const getBranches = async (req: Request, res: Response) => {
  try {
    const branches = await Branch.find();

    res.status(200).json({
      success: true,
      count: branches.length,
      data: branches,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Branch By ID
export const getBranchById = async (req: Request, res: Response) => {
  try {
    const branch = await Branch.findById(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    res.json({
      success: true,
      data: branch,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Branch
export const updateBranch = async (req: Request, res: Response) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    res.json({
      success: true,
      data: branch,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Branch
export const deleteBranch = async (req: Request, res: Response) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    res.json({
      success: true,
      message: "Branch deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};