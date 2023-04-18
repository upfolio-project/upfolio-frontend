interface ProjectModel {
    uuid: string
    authorUsername: string
    authorUuid: string
    created: string
    updated: string
    title: string
    description: string
    tags: string[]
}


export interface GetProjectsRequest {
    userUuid: string
}

export interface GetProjectsSuccessResponse {
    userUuid: string
    projects: ProjectModel[]
}


export interface CreateProjectRequest {
    title: string
    description: string
    tags: string[]
}

export interface CreateProjectSuccessResponse extends ProjectModel {

}


export interface GetProjectRequest {
    uuid: string
}

export interface GetProjectSuccessResponse extends ProjectModel {

}


export interface EditProjectRequest {
    title: string
    description: string
    tags: string[]
}

export interface EditProjectSuccessResponse extends ProjectModel {

}

