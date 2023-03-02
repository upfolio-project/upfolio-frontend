export const colors = {
    colorDominant: "#FFF",
    colorDominant50: "rgba(255, 255, 255, .5)",

    colorSecondary: "#212121",
    colorSecondary50: "rgba(33, 33, 33, .5)",

    colorAccent: "#BBF077",
    colorAccent50: "rgba(187, 240, 119, .5)",

};

type ValueOf<T> = T[keyof T]

export const borders = {
    width2px: (color: ValueOf<typeof colors>) => `2px solid ${color}`,
    radius10: "10px"
};

export const fonts = {
    // {small|medium|large|etc...}{normal|italic|bold}
    sn: "normal 400 12px/16px Rubik, sans-serif",
    mn: "normal 400 18px/22px Rubik, sans-serif",
    ln: "normal 400 24px/28px Rubik, sans-serif",

    h3n: "normal 400 32px/38px Rubik, sans-serif",
    h2n: "normal 400 48px/56px Rubik, sans-serif",
    h1n: "normal 400 18px/76px Rubik, sans-serif",

};