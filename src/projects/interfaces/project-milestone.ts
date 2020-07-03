/**
 * Major milestone have the ability to change the fate of a project.
 * We want to document such major achivements for traceability of legacy decissions.
 */
export interface ProjectMilestone {

    /** Ongoing, Healthy activity. */
    impact: ProjectMilestoneImpact,

    /** Max 100 Chars (similar to Youtube Titles) */
    name: string

    /** Summarises the the milestone. Max 5000 Chars. */
    description: string,

    /** Preview picture used to showcase the project milestone */
    thumbnailUrl: string,

    /** UTC timestamp of when the milestone happened */
    date: string,

    /** ids of the contributors that helped to achieve this goal */
    contributorsIds: string[],
}

/** How important is the milestone */
export enum ProjectMilestoneImpact {

    /** Affects everything in Nexus Aurora. */
    Global,

    /** Affects everything in an entire or several domains. */
    Domain,

    /** Affects everything in an entire or several projects. */
    Project,
}