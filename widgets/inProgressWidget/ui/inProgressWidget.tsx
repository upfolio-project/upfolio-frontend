import {Box} from "@mui/material";
import {Header, Text} from "@/shared/ui/text";
import {LinkButton} from "@/shared/ui/button";
import {sizes} from "@/styles/variables";

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
            <LinkButton href="/" type="success">Вернуться на главную</LinkButton>
        </Box>
    );
};