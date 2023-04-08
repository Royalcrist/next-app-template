const yellow = {
  0: "#000000",
  10: "#332500",
  20: "#664B00",
  30: "#996E00",
  40: "#CC9200",
  50: "#D69E2E",
  60: "#E6CA8D",
  70: "#F2E4BB",
  80: "#F9F2E0",
  90: "#FCF8ED",
  95: "#FEFCF7",
  99: "#FEFEFD",
  100: "#FFFFFF",
};

const red = {
  0: "#000000",
  10: "#330D0D",
  20: "#661A1A",
  30: "#992727",
  40: "#CC3434",
  50: "#E53E3E",
  60: "#EF8787",
  70: "#F8CFCF",
  80: "#FBE5E5",
  90: "#FDF0F0",
  95: "#FEF7F7",
  99: "#FEFDFD",
  100: "#FFFFFF",
};

const blue = {
  0: "#000000",
  10: "#0D1A33",
  20: "#1A3466",
  30: "#27509A",
  40: "#3366CC",
  50: "#3182CE",
  60: "#74A1D7",
  70: "#B7C0E0",
  80: "#DAE5F2",
  90: "#ECF2F9",
  95: "#F3F7FC",
  99: "#FDFEFE",
  100: "#FFFFFF",
};

const green = {
  0: "#000000",
  10: "#0D331A",
  20: "#1A6634",
  30: "#27994E",
  40: "#34CC68",
  50: "#38A169",
  60: "#8DCCA3",
  70: "#CFF0C8",
  80: "#E5FBEA",
  90: "#F0FEF4",
  95: "#F7FEF9",
  99: "#FDFEFD",
  100: "#FFFFFF",
};

const purple = {
  0: "#000000",
  10: "#0d0d33",
  20: "#1a1a66",
  30: "#272799",
  40: "#3434cc",
  50: "#3c4efe",
  60: "#878ee6",
  70: "#cfd5f3",
  80: "#e5eafb",
  90: "#f0f4fd",
  95: "#f7f9fe",
  99: "#fdfefd",
  100: "#FFFFFF",
};

const obsidian = {
  0: "#000000",
  10: "#11090d",
  20: "#221322",
  30: "#332037",
  40: "#442d4c",
  50: "#553a61",
  60: "#664776",
  70: "#77548b",
  80: "#8861a0",
  90: "#997fb6",
  95: "#a9accc",
  99: "#fafafd",
  100: "#FFFFFF",
};

const whiteAlpha = {
  0: "transparent",
  1: "rgba(255, 255, 255, 0.01)",
  5: "rgba(255, 255, 255, 0.05)",
  10: "rgba(255, 255, 255, 0.1)",
  20: "rgba(255, 255, 255, 0.2)",
  30: "rgba(255, 255, 255, 0.3)",
  40: "rgba(255, 255, 255, 0.4)",
  50: "rgba(255, 255, 255, 0.5)",
  60: "rgba(255, 255, 255, 0.6)",
  70: "rgba(255, 255, 255, 0.7)",
  80: "rgba(255, 255, 255, 0.8)",
  90: "rgba(255, 255, 255, 0.9)",
  100: "#FFFFFF",
};

const blackAlpha = {
  0: "transparent",
  1: "rgba(0, 0, 0, 0.01)",
  5: "rgba(0, 0, 0, 0.05)",
  10: "rgba(0, 0, 0, 0.1)",
  20: "rgba(0, 0, 0, 0.2)",
  30: "rgba(0, 0, 0, 0.3)",
  40: "rgba(0, 0, 0, 0.4)",
  50: "rgba(0, 0, 0, 0.5)",
  60: "rgba(0, 0, 0, 0.6)",
  70: "rgba(0, 0, 0, 0.7)",
  80: "rgba(0, 0, 0, 0.8)",
  90: "rgba(0, 0, 0, 0.9)",
  100: "#000000",
};

const primitives: { [key: string]: { [key: string]: string } } = {
  red,
  yellow,
  blue,
  green,
  purple,
  obsidian,
  whiteAlpha,
  blackAlpha,
};

export const getColor = (color: string): string => {
  const [colorName, colorValue] = color.split(".");

  console.log(colorName, colorValue, primitives[colorName][colorValue]);
  return primitives[colorName][colorValue];
};

export default primitives;
