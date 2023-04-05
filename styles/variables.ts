const [dominantR, dominantG, dominantB] = [255, 255, 255];
const [secondaryR, secondaryG, secondaryB] = [33, 33, 33];
const [accentR, accentG, accentB] = [96, 2, 238];

export const colors = {
    colorDominant: `rgba(${dominantR}, ${dominantG}, ${dominantB}, 1)`,
    colorDominant50: `rgba(${dominantR}, ${dominantG}, ${dominantB}, .5)`,

    colorSecondary: `rgba(${secondaryR}, ${secondaryG}, ${secondaryB}, 1)`,
    colorSecondary50: `rgba(${secondaryR}, ${secondaryG}, ${secondaryB}, .5)`,
    colorSecondary05: `rgba(${secondaryR}, ${secondaryG}, ${secondaryB}, .05)`,

    colorSecondary20: `rgba(${secondaryR}, ${secondaryG}, ${secondaryB}, .2)`,

    colorAccent: `rgba(${accentR}, ${accentG}, ${accentB}, 1)`,
    colorAccent50: `rgba(${accentR}, ${accentG}, ${accentB}, .5)`,
    colorAccent20: `rgba(${accentR}, ${accentG}, ${accentB}, .2)`,

    colorTransparent: "transparent"
};

type ValueOf<T> = T[keyof T]

export const shadows = {
    defaultShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)",
};

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
    switch (style) {
        case undefined:
        case "normal":
            return "normal 400";
        case "italic":
            return "italic 400";
        case "bold":
            return "normal 700";
    }
}

export const fonts = {
    s: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 12px/16px Rubik, sans-serif`,
    m: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 16px/18px Rubik, sans-serif`,
    l: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 24px/28px Rubik, sans-serif`,

    h3: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 24px/28px Rubik, sans-serif`,
    h2: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 48px/56px Rubik, sans-serif`,
    h1: ({style}: FontProps = defaultFont) => `${getFontStyle({style})} 64px/76px Rubik, sans-serif`,

    title: () => `normal 900 24px/30px Unbounded, sans-serif`,
    // future
    // subtitle: `normal 900 40px/50px Unbounded, sans-serif`,
};

export const sizes = {
    xxs: "5px",
    xs: "10px",
    s: "20px",
    m: "40px",
    l: "80px",
    xl: "200px"
};