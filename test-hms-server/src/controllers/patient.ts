import { Request, Response } from "express";
import Patient from "../models/patient";

const getAll = async (req: Request, res: Response) => {
  const patients = await Patient.find({});
  res.status(200).json(patients);
};

const create = async (req: Request, res: Response) => {
  console.log("Received data:", req.body);

  const { name, age, gender, contact } = req.body.patient;
  const patient = new Patient({ name, age, gender, contact });
  await patient.save();
  res.status(200).json(patient);
};

export { getAll, create };
