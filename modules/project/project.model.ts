import { model, Schema } from "mongoose";
import { IProject, ITechStack } from "./project.interface";

const techStackScema = new Schema<ITechStack>({
  frontend: {
    type: [String],
    required: true,
  },
  backend: {
    type: [String],
    required: true,
  },
  database: {
    type: [String],
    required: true,
  },
  authentication: {
    type: [String],
    required: false,
  },
  payments: {
    type: [String],
    required: false,
  },
});

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  techStack: techStackScema,
  projectThumbnail: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  clientRepo: {
    type: String,
    required: true,
  },
  serverRepo: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: String,
    default: false,
  },
});


export const Project = model<IProject>('Project', projectSchema);
