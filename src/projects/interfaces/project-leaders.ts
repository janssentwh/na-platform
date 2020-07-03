/**
 * Project Leaders are persons in charge of administering the project chats, files, users.
 * Leaders are considered high availability by default.
 * Meaning we expect to see them on a daily basis-
 */
export interface ProjectLeader {

    /** Id of the user designated as project leader. */
    userId: string

    /** Date of contributor taking over this role. */
    dateOfAssignment: string,

    /** Endorsement received by the core team. Max 500. */
    endorsement: string

    /** Current state of the project leader. */
    status: ProjectLeaderStatus,

    /**
     * Leaders can have a status assigned to their profile.
     * Messages of any kinds are allowed.
     * Ranging from inner motivations down to leave of absence notes.
    */
    statusMessage: string;
}

/** Possible States of a project goal */
export enum ProjectLeaderStatus {

    /** Ongoing, Healthy activity. */
    Active,

    /**
     * Proejct leaders might deal with issues in private lifee.
     * A paused status is available to indicate their temporary absence.
     */
    Paused,

    /** Project leader is not responding. Action from the domain leader or core team is required. */
    Absent,

    /** Project leader is no logner available to coordinate activity. */
    Retired,
}