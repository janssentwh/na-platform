import { Project } from "../interfaces/projects";

export interface ProjectsState {

    /** List of all projects displayed on screen. */
    projects: Project[];
    projectsAreLoading: boolean;
    projectsError: string;

    /** Project currently displayed on screen. */
    project: Project[];
    projectIsLoading: boolean;
    projectError: string;

    /** <!> Admin does not share state store with the public app */
    admin: {

        /** List of all projects displayed on screen. */
        projects: Project[];
        projectsAreLoading: boolean;
        projectsError: string;

        /** Project currently displayed on screen. */
        project: Project[];
        projectIsLoading: boolean;
        projectError: string;
    }

}