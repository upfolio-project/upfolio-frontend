import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {Text} from "@/shared/ui/text";

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
                <Box display="flex" gap={2}>
                    <div>
                        <Text size="l">Text</Text>
                        <Text size="m">Text</Text>
                        <Text size="s">Text</Text>
                    </div>
                    <div>
                        <Text size="l" type="defaultLight">Text</Text>
                        <Text size="m" type="defaultLight">Text</Text>
                        <Text size="s" type="defaultLight">Text</Text>
                    </div>
                    <div>
                        <Text size="l" type="success">Text</Text>
                        <Text size="m" type="success">Text</Text>
                        <Text size="s" type="success">Text</Text>
                    </div>

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

