import {Input} from "@/shared/ui/input";

interface ExampleWidgetProps {
    className?: string;
}

export const ExampleWidget = ({className}: ExampleWidgetProps) => {
    return (
        <div className={className}>
            <Input
                label="Поле ввода телефона"
                hint="Телефон должен содержать 11 цифр"
                type="phone"
                placeholder="999-111-11-11"/>
            <Input label="Обычное поле ввода" hint="Имя, например" placeholder="Иван"/>
            <Input label="Поле ввода пароля" hint="Придумайте сложный пароль" type="password" placeholder="Пароль"/>
        </div>
    );
};

