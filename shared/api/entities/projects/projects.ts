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

}

export interface GetProjectSuccessResponse extends ProjectModel {

}