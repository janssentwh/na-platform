import { ProjectGoal } from "./project-goals";
import { ProjectLeader } from "./project-leaders";
import { ProjectMilestone } from "./project-milestone";

/**
 * Projects are kickstarted by the volunters of Nexus Aurora.
 * Project are long lasting and can have multiple subprojects such as:
 *     - Writing Documentations
 *     - PR campaigns
 *     - Rendering Graphics
 *     - Organising meeting and events
 *     - Building hardware
 *     - Logisitics
 *     - etc
 *
 * Example:
 * We started a project for Launch Pad under the Transport Domain.
 * The topic is to design facilities to handle up to 1000 Starships per launch window.
 * Everything ranging from where the startships are handled down to the design of the bots moving trays in the offloading bays has to be considered.
 */
export interface Project {

    /** Max 100 Chars (similar to Youtube Titles) */
    name: string,

    /** Custom url used for the web browser. */
    urlSlug: string,

    /** Summarises the purpose of the project. Max 260 Chars. */
    shortDescription: string,

    /** Summarises the purpose of the project. Max 5000 Chars. */
    description: string,

    /** Preview picture used to demo the project */
    thumbnailUrl: string,

    /** Project gaals attributed to this particular project. Max 10 goals. */
    goals: ProjectGoal[],

    /** Additional pictures can be rendered in a tootlip on demand */
    albumUrl: string,

    /** Teaser video used to persuade volunteers to join the project */
    summaryVideoUrl: string,

    /** We are storing an entire document  */
    summaryDocumentUrl: string,

    /** Indicates the current state of a project. Whether it is active, deprecated or other states. */
    status: ProjectStatus,

    /** Type of the project: arts, engineering, programming */
    type: ProjectType,

    /** Projects belong to domains */
    // domain: ProjectDomain,

    /**
     * A project can have multiple leaders. All of them have equal rights to take major decissions in a project.
     * Their role is to safeguard the development of the project. To help contributors easily achieve their goals, to set agenda.
     * Project leaders by default will have access to all tooling: Roadmaps, FIle Storage, Discord Channel Admin.
     *
     * <!> First entry in this array is considered main leader.
     * As a main leader you have veto powers over all other project leaders (some sort of a proejct CEO).
     */
    projectLeaders: ProjectLeader[],

    /**
     * A timeline of all the major events that shaped the state of the current project.
     * They can be events from within or outside of Nexus Aurora.
     * Anything major that can change the direction of a project needs to be documented here.
     * This section serves multiple purposes
     *     - PR with outside world
     *     - Quick onboarding for new users
     *     - A chronic for the history books
     */
    milestones: ProjectMilestone[],

    /**
     * Discord channel associated with the existing proejct.
     * This is where all the live chats related to this project are carried.
     */
    discordChannelId: string,

    /**
     * Google Drive folder associated with the existing project.
     * This is where all the documents related to this project are stored.
     * TODO: Research whether we store an ID or an URL.
     */
    googleDriveFolderId: string,

    /** The roadmap associated with this project in Jira */
    jiraProjectId: string,

}

/** Possible States of a project in Nexus Aurora */
export enum ProjectStatus {

    /** Ongoing, Healthy activity. */
    Active,

    /**
     * Proposed project for immediate use due to new necesities.
     * The engineering team can request new projects.
     * Before hte projects are kickstarted they need to be approved by the Core Team.
     * The goal is to prevent starting of projects that will get abandoned by eager users.
     */
    Proposal,

    /**
     * Some projects get neglected due to not having enough supporters.
     * These projects get removed from the main active area.
     */
    Deprecated,
}

/** Possible Types of a project in Nexus Aurora */
export enum ProjectType {
    Arts,
    Engineering,
    Programming,
}