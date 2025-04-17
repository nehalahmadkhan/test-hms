import express from "express";
import dbConnect from "./config/db";
import patientRouter from "./routes/patient";
import cors from "cors";

const PORT = process.env.PORT || 5000;
// Configure CORS to allow requests from http://localhost:5173
const corsOptions = {
  origin: "http://localhost:5173",
};

dbConnect(); // Connect to MongoDB
const app = express();

// Middleware
app.use(cors(corsOptions)); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic route
app.use("/api/patients", patientRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
