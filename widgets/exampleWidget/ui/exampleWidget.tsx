import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {Header, Text} from "@/shared/ui/text";

import {Box} from "@mui/material";

interface ExampleWidgetProps {
    className?: string;
}

export const ExampleWidget = ({className}: ExampleWidgetProps) => {
    return (
        <Box display="grid" gridTemplateColumns="2fr 2fr" gap={2} className={className}>
            <Box display="flex" flexDirection="column" gap={2}>
                <Box display="flex" gap={2} flexWrap="wrap">
                    <Button type="default">Кнопка</Button>
                    <Button type="success">Кнопка</Button>
                    <Button type="default" fill={false}>Кнопка</Button>
                    <Button type="success" fill={false}>Кнопка</Button>
                </Box>
                <Box display="flex" gap={2} justifyContent="space-between" flexDirection="column">
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
                <Box display="flex" gap={2} justifyContent="space-between" flexDirection="column">
                    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
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
                        <Text size="s" type="success">Text</Text>                    </Box>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
                <Input
                    label="Поле ввода телефона"
                    hint="Телефон должен содержать 11 цифр"
                    type="phone"
                    placeholder="999-111-11-11"/>
                <Input label="Обычное поле ввода" hint="Имя, например" placeholder="Иван"/>
                <Input label="Поле ввода пароля" hint="Придумайте сложный пароль" type="password"
                       placeholder="Пароль"/>
            </Box>

        </Box>
    )
        ;
};

