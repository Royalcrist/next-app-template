const roles = {
  background: {
    _dark: "obsidian.10",
    default: "whiteAlpha.100",
  },
  onBackground: {
    _dark: "whiteAlpha.80",
    default: "obsidian.10",
  },
  surface: {
    _dark: "obsidian.20",
    default: "obsidian.95",
  },
  onSurface: "onBackground",
  primary: {
    _dark: "purple.40",
    default: "purple.50",
  },
  onPrimary: "whiteAlpha.100",
  primaryHover: {
    _dark: "purple.50",
    default: "purple.60",
  },
  onPrimaryHover: {
    _dark: "whiteAlpha.100",
    default: "whiteAlpha.100",
  },
  secondary: "transparent",
  onSecondary: "onBackground",
  secondaryHover: {
    _dark: "obsidian.20",
    default: "obsidian.95",
  },
  onSecondaryHover: "onSecondary",
  tertiary: "transparent",
  onTertiary: "onBackground",
  tertiaryHover: "secondaryHover",
  onTertiaryHover: "onSecondaryHover",
  success: {
    _dark: "green.40",
    default: "green.50",
  },
  onSuccess: "whiteAlpha.100",
  successHover: {
    _dark: "green.50",
    default: "green.60",
  },
  onSuccessHover: "onSuccess",
  warning: {
    _dark: "yellow.40",
    default: "yellow.50",
  },
  onWarning: "onSuccess",
  error: {
    _dark: "red.40",
    default: "red.50",
  },
  onError: "onSuccess",
  errorHover: {
    _dark: "red.50",
    default: "red.60",
  },
  onErrorHover: "onError",
  info: {
    _dark: "blue.40",
    default: "blue.50",
  },
  onInfo: "onSuccess",
  infoHover: {
    _dark: "blue.50",
    default: "blue.60",
  },
  onInfoHover: "onInfo",
  discovery: {
    _dark: "purple.40",
    default: "purple.50",
  },
  onDiscovery: "onSuccess",
  discoveryHover: {
    _dark: "purple.50",
    default: "purple.60",
  },
  onDiscoveryHover: "onDiscovery",
  fields: {
    _dark: "obsidian.20",
    default: "obsidian.95",
  },
  onFields: "onBackground",
  overlay: "blackAlpha.20",
  outline: "onBackground",
  shadow: {
    _dark: "whiteAlpha.5",
    default: "blackAlpha.5",
  },
};

export default roles;
