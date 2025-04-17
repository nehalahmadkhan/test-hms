import mongoose, { Schema, Document } from "mongoose";

interface IPatient extends Document {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  contact: string;
}

const PatientSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  contact: { type: String, required: true },
});

const Patient = mongoose.model<IPatient>("Patient", PatientSchema);

export default Patient;
