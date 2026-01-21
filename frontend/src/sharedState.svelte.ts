import { writable } from "svelte/store";
import { AppTheme } from "./types";

const Theme = writable<AppTheme>(AppTheme.Dark);

export { Theme };
