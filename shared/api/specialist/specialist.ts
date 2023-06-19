import {commonApi} from "@/shared/api";
import type {
    EditProfileRequest,
    EditProfileSuccessResponse,
} from "@/shared/api/entities";
import {userSlice} from "@/shared/store/userSlice/user";


export const Specialist = commonApi.injectEndpoints({
    endpoints: build => ({
        editSpecialist: build.mutation<EditProfileSuccessResponse, EditProfileRequest>({
            query: (body) => ({
                url: '/specialist/edit',
                method: 'POST',
                body: body
            }),
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setUser} = userSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data) dispatch(setUser({
                        userState: "login",
                        me: {
                            timestamp: result.data.timestamp,
                            username: result.data.profile.username,
                            url: `https://upfolio.ru/${result.data.profile.username}`
                        }
                    }));
                    else dispatch(setUser({userState: "notLogin"}));
                } catch (e: any) {
                    dispatch(setUser({userState: "notFetch"}));
                }
            }
        })
    }),
    overrideExisting: false
});

export const {useEditSpecialistMutation} = Specialist;