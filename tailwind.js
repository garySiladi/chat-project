module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    colors: {
      transparent: "transparent",

      black: "#333333",
      blue: "#00b5e2",
      green: "#00c65e",
      grey: "#999696",
      lilac: "#ebebec",
      maize: "#ffc450",
      darkblue: "#4d5c74",
      purple: "#db3eb1",
      red: "#f93822",
      white: "#ffffff",
      "dark-black": "#1f1f1f",

      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
      }
    },
    spacing: {
      px: "1px",
      "0": "0",
      "4": "4px",
      "8": "8px",
      "12": "12px",
      "16": "16px",
      "20": "20px",
      "24": "24px",
      "28": "28px",
      "32": "32px",
      "36": "36px",
      "40": "40px",
      "48": "48px",
      "50": "50px",
      "54": "54px",
      "64": "64px",
      "80": "80px",
      "86": "86px",
      "96": "96px",
      "128": "128px",
      "160": "160px",
      "166": "166px",
      "168": "168px",
      "192": "192px",
      "224": "224px",
      "238": "238px",
      "256": "256px",
      "408": "408px",
      "730": "730px"
    },
    backgroundColor: theme => theme("colors"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderColor: theme => ({
      ...theme("colors"),
      default: theme("colors.gray.300", "currentColor")
    }),
    borderRadius: {
      "0": "0",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "12": "12px",
      full: "9999px"
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    boxShadow: {
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none"
    },
    container: {},
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed"
    },
    fill: {
      current: "currentColor"
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexGrow: {
      "0": "0",
      default: "1"
    },
    flexShrink: {
      "0": "0",
      default: "1"
    },
    fontFamily: {
      gilbert: ["Gilbert", "serif"],
      "gilbert-color": ["Gilbert Color", "serif"],
      lato: ["Lato", "serif"],
      "lato-black": ["Lato Black", "serif"],
      "lato-italic": ["Lato Italic", "serif"],
      "lato-black-italic": ["Lato Black Italic", "serif"]
    },
    fontSize: {
      "10": "10px",
      "12": "12px",
      "16": "16px",
      "18": "18px",
      "21": "21px",
      "31": "31px",
      "37": "37px",
      "45": "45px",
      "77": "77px"
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    inset: {
      "0": "0",
      auto: "auto"
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      "1": "1px",
      "12": "12px",
      "18": "18px",
      "22": "22px",
      "24": "24px",
      "28": "28px",
      "34": "34px",
      "36": "36px",
      "40": "40px",
      "48": "48px",
      "50": "50px"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing"))
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh"
    },
    maxWidth: {
      "320": "320px",
      "480": "480px",
      "640": "640px",
      "800": "800px",
      "960": "960px",
      "1120": "1120px",
      "1280": "1280px",
      "1440": "1440px",
      "1600": "1600px",
      full: "100%"
    },
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      "0": "0",
      full: "100%"
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "100": "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12"
    },
    padding: theme => theme("spacing"),
    stroke: {
      current: "currentColor"
    },
    textColor: theme => theme("colors"),
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "2/6": "33.33333%",
      "3/6": "50%",
      "4/6": "66.66667%",
      "5/6": "83.33333%",
      "1/12": "8.33333%",
      "2/12": "16.66667%",
      "3/12": "25%",
      "4/12": "33.33333%",
      "5/12": "41.66667%",
      "6/12": "50%",
      "7/12": "58.33333%",
      "8/12": "66.66667%",
      "9/12": "75%",
      "10/12": "83.33333%",
      "11/12": "91.66667%",
      full: "100%",
      screen: "100vw"
    }),
    zIndex: {
      auto: "auto",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50"
    }
  },
  variants: {
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive"],
    display: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "active"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive", "group-hover"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"]
  },
  corePlugins: {},
  plugins: []
};
