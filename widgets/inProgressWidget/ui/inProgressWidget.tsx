import {Box} from "@mui/material";

import {Header, Text, LinkButton, sizes} from "@upfolio-project/upfolio-ui";


export const InProgressWidget = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={sizes.s}
            alignItems="center"
        >
            <Header style="bold" size="s">
                В разработке
            </Header>
            <Text size="m" align="center">
                Упс... Страница, которую вы запрашиваете, находится в разработке.<br/>
                Мы готовим обновление. Попробуйте зайти позже.
            </Text>
            <LinkButton href="/" type="accent">Вернуться на главную</LinkButton>
        </Box>
    );
};