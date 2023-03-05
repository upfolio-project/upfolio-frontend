import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {Header, Text} from "@/shared/ui/text";

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

                {/* Headers */}
                <Box
                    display="grid"
                    gap={2}
                    gridTemplateRows="2fr 2fr 1fr"
                    alignItems="end"
                >
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Header size="l">Text</Header>
                        <Header size="l" type="defaultLight">Text</Header>
                        <Header size="l" type="success">Text</Header>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Header size="m">Text</Header>
                        <Header size="m" type="defaultLight">Text</Header>
                        <Header size="m" type="success">Text</Header>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Header size="s">Text</Header>
                        <Header size="s" type="defaultLight">Text</Header>
                        <Header size="s" type="success">Text</Header>
                    </Box>
                </Box>

                {/* Text */}
                <Box
                    display="grid"
                    gap={2}
                    gridTemplateRows="2fr 2fr 1fr"
                    alignItems="end"
                >
                    <Box display="flex" gridTemplateColumns="1fr 1fr 1fr" gap={1}>

                        <Text size="l">Text</Text>
                        <Text size="l" type="defaultLight">Text</Text>
                        <Text size="l" type="success">Text</Text>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Text size="m">Text</Text>
                        <Text size="m" type="defaultLight">Text</Text>
                        <Text size="m" type="success">Text</Text>
                    </Box>
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
                        <Text size="s">Text</Text>
                        <Text size="s" type="defaultLight">Text</Text>
                        <Text size="s" type="success">Text</Text>
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
                    <Checkbox size="l"/>
                    <Checkbox/>
                    <Checkbox size="s" type="defaultLight"/>
                </Box>
            </Box>
        </Box>
    );
};

