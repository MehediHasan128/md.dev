import { IProject } from "./project.interface";

const addProjectDataIntoDB = async (payload: IProject) => {
    console.log(payload);
};


export const ProjectServices = {
  addProjectDataIntoDB,
};