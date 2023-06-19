import {commonApi} from "@/shared/api";
import {UploadImageRequest, UploadImageSuccessResponse} from "@/shared/api/entities/profile/profile";


export const Photo = commonApi.injectEndpoints({
    endpoints: build => ({
        uploadPhoto: build.mutation<UploadImageSuccessResponse, UploadImageRequest>({
            query: (body) => ({
                url: "/profile/uploadPhoto",
                params: {cropX: body.cropX, cropY: body.cropY, side: body.side},
                method: 'POST',
                body: body.form,
                prepareHeaders: (headers: Headers) => {
                    headers.set("Content-Type", "multipart/form-data");
                    return headers;
                },
            }),
        })
    }),
    overrideExisting: false
});

export const {useUploadPhotoMutation} = Photo;