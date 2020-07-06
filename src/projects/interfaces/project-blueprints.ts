import { ProjectGoal } from "./project-goals";
import { ProjectStatus, ProjectType } from "./projects";
import { ProjectMilestone } from "./project-milestone";

/**
 * In a projects lifespan multiple blueprints will be created
 * Each one of these blueprints can end up requiring months or years of work.
 * Therefore a project blueprint is almost like having a sub-project in a project.
 *
 * Example:
 * Architecture (Domain) / Permanent Buildings (Project) / 570Hab (Blueprint)
 *
 * <!> You might notice that Projects and Blueprints have almost identical interfaces.
 * Don't get confused and assume that they are the same.
 */
export interface ProjectBlueprint {

    /** Max 100 Chars (similar to Youtube Titles) */
    name: string,

    /** Custom url used for the web browser. */
    urlSlug: string,

    /** Summarises the purpose of the blueprint. Max 260 Chars. */
    shortDescription: string,

    /** Summarises the purpose of the blueprint. Max 5000 Chars. */
    description: string,

    /** Preview picture used to demo the blueprint */
    thumbnailUrl: string,

    /** Project gaals attributed to this particular blueprint. Max 10 goals. */
    goals: ProjectGoal[],

    /** Additional pictures can be rendered in a tootlip on demand */
    albumUrl: string,

    /** Teaser video used to persuade volunteers to join the blueprint effort */
    summaryVideoUrl: string,

    /** We are storing an entire document about the blueprint */
    summaryDocumentUrl: string,

    /** Indicates the current state of a blueprint. Whether it is active, deprecated or other states. */
    status: ProjectStatus,

    /** Type of the blueprint: arts, engineering, programming */
    type: ProjectType,

    /**
     * A blueprint can have multiple authors */
    projectAuthorsIds: string[],

    /**
     * A timeline of all the major events that shaped the state of the current blueprint.
     * They can be events from within or outside of Nexus Aurora.
     * Anything major that can change the direction of a blueprint needs to be documented here.
     * This section serves multiple purposes
     *     - PR with outside world
     *     - Quick onboarding for new users
     *     - A chronic for the history books
     */
    milestones: ProjectMilestone[],

    /**
     * Google Drive folder associated with the existing project.
     * This is where all the documents related to this project are stored.
     * TODO: Research whether we store an ID or an URL.
     */
    googleDriveFolderId: string,

}