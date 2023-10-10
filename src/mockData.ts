import { ModelsInterface } from "./utils/typeHelper";

export const MODELS: ModelsInterface = {
  ford: {
    Ranger: ["Raptor", "Raptor x", "wildtrak"],
    Falcon: ["XR6", "XR6 Turbo", "XR8"],
    "Falcon Ute": ["XR6", "XR6 Turbo"],
  },
  bmw: {
    "130d": ["xDrive 26d", "xDrive 30d"],
    "240i": ["xDrive 30d", "xDrive 50d"],
    "320e": ["xDrive 75d", "xDrive 80d", "xDrive 85d"],
  },
  tesla: {
    "Model 3": ["Performance", "Long Range", "Dual Motor"],
  },
};
