import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {Header, Text, Title} from "@/shared/ui/text";

import {Box, Grid} from "@mui/material";
import {Link} from "@/shared/ui/link";
import {Checkbox} from "@/shared/ui/checkbox";

interface ExampleWidgetProps {
    className?: string;
}

export const ExampleWidget = ({className}: ExampleWidgetProps) => {
    return (
        <Box className={className}>
            <Box
                display="inline-block"
            >
                {/* buttons */}
                <Box display="flex" gap={2} flexWrap="wrap">
                    <Grid item xs>
                        <Button type="default">Кнопка</Button>
                    </Grid>
                    <Grid item xs>
                        <Button type="success">Кнопка</Button>
                    </Grid>
                    <Grid item xs>
                        <Button type="default" fill={false}>Кнопка</Button>
                    </Grid>
                    <Grid item xs>
                        <Button type="success" fill={false}>Кнопка</Button>
                    </Grid>
                </Box>

                {/* Titles */}
                <Box
                    display="grid"
                    gap={2}
                    gridTemplateRows="2fr 2fr 1fr"
                    alignItems="end"
                >
                    <Box display="grid" gridTemplateColumns="1fr" gap={1}>
                        <Title>Акцентный</Title>
                        <Title type="defaultLight">Акцентный</Title>
                        <Title type="success">Акцентный</Title>
                    </Box>
                </Box>

                {/* Headers */}
                <Box
                    display="grid"
                    gap={2}
                    gridTemplateRows="2fr 2fr 1fr"
                    alignItems="end"
                >
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Header size="l">Текст</Header>
                        <Header size="l" type="defaultLight">Текст</Header>
                        <Header size="l" type="success">Текст</Header>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Header size="m">Текст</Header>
                        <Header size="m" type="defaultLight">Текст</Header>
                        <Header size="m" type="success">Текст</Header>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Header size="s">Текст</Header>
                        <Header size="s" type="defaultLight">Текст</Header>
                        <Header size="s" type="success">Текст</Header>
                    </Box>
                </Box>

                {/* Texts */}
                <Box
                    display="grid"
                    gap={2}
                    gridTemplateRows="2fr 2fr 1fr"
                    alignItems="end"
                >
                    <Box display="flex" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Text size="l">Текст</Text>
                        <Text size="l" type="defaultLight">Текст</Text>
                        <Text size="l" type="success">Текст</Text>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Text size="m">Текст</Text>
                        <Text size="m" type="defaultLight">Текст</Text>
                        <Text size="m" type="success">Текст</Text>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Text size="s">Текст</Text>
                        <Text size="s" type="defaultLight">Текст</Text>
                        <Text size="s" type="success">Текст</Text>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column" gap={2} width="350px">
                    <form>
                        <Input
                            label="Поле ввода телефона"
                            hint="Телефон должен содержать 11 цифр"
                            type="phone"
                            placeholder="999-111-11-11"/>
                    </form>
                    <form>
                        <Input label="Обычное поле ввода" hint="Имя, например" placeholder="Иван"/>
                        <Input label="Поле ввода пароля" hint="Придумайте сложный пароль" type="password"
                               placeholder="Пароль"/>
                    </form>
                </Box>
                <Box display="flex" flexDirection="column" gap={2} width="350px">

                    <Box display="flex" gap={1} alignItems="baseline">
                        <Link href="#" size="l">Ссылка</Link>
                        <Link href="#">Ссылка</Link>
                        <Link href="#" size="s">Ссылка</Link>
                    </Box>
                    <Box display="flex" gap={1} alignItems="baseline">
                        <Link href="#" size="l" type="defaultLight">Ссылка</Link>
                        <Link href="#" type="defaultLight">Ссылка</Link>
                        <Link href="#" size="s" type="defaultLight">Ссылка</Link>
                    </Box>
                </Box>
                <Box display="flex" gap={2}>
                    <Checkbox size="l">Чекбокс</Checkbox>
                    <Checkbox>Чекбокс</Checkbox>
                    <Checkbox size="s" type="defaultLight">Чекбокс</Checkbox>
                </Box>
            </Box>
        </Box>
    );
};

