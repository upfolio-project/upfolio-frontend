import {commonApi} from "@/shared/api";
import type {
    GetProjectsRequest,
    GetProjectsSuccessResponse,
    CreateProjectRequest,
    CreateProjectSuccessResponse,
    GetProjectRequest,
    GetProjectSuccessResponse, EditProjectRequest, EditProjectSuccessResponse,
} from "@/shared/api/entities";

export const Projects = commonApi.injectEndpoints({
    endpoints: build => ({
        getProjects: build.query<GetProjectsSuccessResponse, GetProjectsRequest>({
            query: (arg) => ({
                url: `/projects/specialist/${arg.userUuid}`,
                method: 'GET'
            }),
        }),

        getProject: build.query<GetProjectSuccessResponse, GetProjectRequest>({
            query: (arg) => ({
                url: `/projects/project/${arg.uuid}`,
                method: 'GET'
            }),
        }),
        createProject: build.mutation<CreateProjectSuccessResponse, CreateProjectRequest>({
            query: (body) => ({
                url: '/projects/create',
                method: 'POST',
                body: body
            })
        }),
        editProject: build.mutation<EditProjectSuccessResponse, { uuid: string, body: EditProjectRequest }>({
            query: (body) => ({
                url: `/projects/editProject/${body.uuid}`,
                method: 'POST',
                body: body.body
            })
        })
    }),
    overrideExisting: false
});

export const {useGetProjectsQuery, useGetProjectQuery, useCreateProjectMutation, useEditProjectMutation} = Projects;