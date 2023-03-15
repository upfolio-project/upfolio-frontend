import {Box} from "@mui/material";
import {Text, Title} from "@/shared/ui/text";
import {LinkButton} from "@/shared/ui/button";

export const InProgressWidget = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            gap="20px"
            alignItems="center"
            width="530px"
        >
            <Title>
                В разработке
            </Title>
            <Text size="l" align="center">
                Упс... Страница, которую вы запрашиваете, находится в разработке. Мы готовим обновление. Попробуйте зайти позже.
            </Text>
            <LinkButton href="/" type="success">Вернуться на главную</LinkButton>
        </Box>
    );
};