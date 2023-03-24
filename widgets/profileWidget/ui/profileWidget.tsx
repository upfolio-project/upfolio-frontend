import {Avatar, Box, Container, FormControl, InputLabel, MenuItem, Select, Skeleton, Stack} from "@mui/material";
import {useGetMeQuery, useGetProfileQuery} from "@/shared/api/profile/profile";
import styled from "styled-components";
import {borders, shadows} from "@/styles/variables";
import {Header} from "@/shared/ui/text";
import {Button} from "@/shared/ui/button";
import {Input} from "@/shared/ui/input";
import {useEffect, useState} from "react";

const ContainerStyled = styled(Container)`
  display: grid;
  grid-gap: 40px;
  max-width: 80vw;
  max-height: 80vh;
  box-sizing: content-box;
  grid-template-areas: "A B B"
                        "C C C";
  padding: 40px;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  border-radius: ${borders.radius10};
  box-shadow: ${shadows.defaultShadow};
`;
const Security = styled(Wrapper)`
  grid-area: B;
`;

const Settings = styled(Wrapper)`
  grid-area: A;
`;

const PersonalData = styled(Wrapper)`
  grid-area: C;
`;

const Skeletons = () => {
    return (
        <>
            <Box gridArea='A'>
                <Stack spacing={1}>
                    <Skeleton variant="text" sx={{fontSize: '38px'}}/>
                    <Skeleton variant="rounded" height={100}/>
                </Stack>
            </Box>
            <Box gridArea='B'>
                <Stack spacing={1}>
                    <Skeleton variant="text" sx={{fontSize: '38px'}}/>
                    <Skeleton variant="rounded" height={100}/>
                </Stack>
            </Box>
            <Box gridArea='C'>
                <Stack spacing={1}>
                    <Skeleton variant="text" sx={{fontSize: '38px'}}/>
                    <Skeleton variant="rounded" height={400}/>
                </Stack>
            </Box>
        </>
    );
};

export const ProfileWidget = () => {
    const {data: getMe, isLoading: getMeLoading} = useGetMeQuery({});
    const {
        data: getProfile,
        isLoading: getProfileLoading
    } = useGetProfileQuery({username: getMe?.username as string}, {skip: getMeLoading});
    return (
        <ContainerStyled>
            {getProfileLoading ? <Skeletons/> :
                <>
                    <Settings>
                        <Header size='s'>Настройки</Header>
                        <Avatar src={getProfile?.profile?.profilePhotoUrl as string}
                                sx={{width: 'auto', height: '100px', aspectRatio: '1/1'}}/>
                        <Button type='success'>Сменить фото</Button>
                    </Settings>
                    <Security>
                        <Header size='s'>Настройки</Header>
                        <Box display='flex' flexDirection='column' gap='20px' width='60%'>
                            <Input label='Введите старый пароль' placeholder='******'/>
                            <Input label='Введите новый пароль' placeholder='******'/>
                        </Box>
                        <Button>Сохранить пароль</Button>
                    </Security>
                    <PersonalData>
                        <Header size='s'>Личные Данные</Header>
                        <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap='20px'>
                            <Input label='Имя' defaultValue={getProfile?.profile?.realName?.firstName as string}/>
                            <Input label='Фамилия' defaultValue={getProfile?.profile?.realName?.lastName as string}/>
                            <Input label='Username' defaultValue={getProfile?.profile?.username}/>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={getProfile?.profile.status ? 10 : 20}//in future this will change
                                    label="Статус"
                                >
                                    <MenuItem value={10}>Ищу</MenuItem>
                                    <MenuItem value={20}>Не ищу</MenuItem>
                                    <MenuItem value={30}>Не знаю</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </PersonalData></>
            }

        </ContainerStyled>
    );
};
