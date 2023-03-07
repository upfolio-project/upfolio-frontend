export const colors = {
    colorDominant: "#FFF",
    colorDominant50: "rgba(255, 255, 255, .5)",

    colorSecondary: "#212121",
    colorSecondary50: "rgba(33, 33, 33, .5)",

    colorAccent: "#BBF077",
    colorAccent50: "rgba(187, 240, 119, .5)",

    colorTransparent: "transparent"
};

type ValueOf<T> = T[keyof T]

export const borders = {
    width2px: (color: ValueOf<typeof colors>) => `2px solid ${color}`,
    width1px: (color: ValueOf<typeof colors>) => `1px solid ${color}`,
    radius10: "10px",
    radius4: "4px"
};

interface FontProps {
    style: "normal" | "italic" | "bold";
}

const defaultFont: FontProps = {
    style: "normal"
};

function getFontStyle({style}: FontProps) {
    switch(style) {
        case undefined:
        case "normal":
            return "normal 400";
        case "italic":
            return "italic 400";
        case "bold":
            return "normal 600";
    }
}

export const fonts = {
    s: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 12px/16px Rubik, sans-serif`,
    m: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 18px/22px Rubik, sans-serif`,
    l: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 24px/28px Rubik, sans-serif`,

    h3: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 32px/38px Rubik, sans-serif`,
    h2: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 48px/56px Rubik, sans-serif`,
    h1: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 64px/76px Rubik, sans-serif`,

    title: () => `normal 900 40px/50px Unbounded, sans-serif`,
    // future
    // subtitle: `normal 900 40px/50px Unbounded, sans-serif`,
};