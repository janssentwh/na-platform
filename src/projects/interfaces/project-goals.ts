/**
 * A project goal represents a major objective that a project wants to fullfill.
 * Ex: Launchpad project:
 *     - Mars Launch complex Design
 *     - Mars Launch complex Earth
 *     - Safety protocals
 *     - Logistics of laading and offloading
 *     - Human Rating Criteria
 *
 * Do not get confused, goals are greater entities than releases, sprints, epics, stories, tasks.
 * Proejct goals can last for years (Ex: Land a man on the moon).
 *
 * Only project leaders and project
 */
export interface ProjectGoal {

    /** Max 100 Chars (similar to Youtube Titles) */
    name: string,

    /** Description used to summarise the purpose of the project. Max 500 Chars. */
    description: string,

    /** Preview picture used to describe the project goal */
    thumbnailUrl: string,

    /** Status of the current goal */
    status: ProjectGoalStatus,

    /** When the goal start and when it ends. */
    startDate: string,
    dueDate: string,
}

/** Possible States of a project goal */
export enum ProjectGoalStatus {

    /** Ongoing, Healthy activity. */
    Active,

    /**
     * Proposed project goal for immediate use due to new necesities.
     * The engineering team can request new project gols.
     * Before the projects are kickstarted they need to be approved by the Core Team.
     */
    Proposal,

    /** It means the goal was succesfully completed. */
    Completed,

    /**
     * Some projects get neglected due to not having enough supporters.
     * These projects get removed from the main active area.
     */
    Deprecated,
}