import { writable } from "svelte/store";
import { AppTheme } from "./types";
import type { Pages, TitlebarContentMode } from "./types";

// const theme = writable<AppTheme>(AppTheme.Dark);
const currentPage = writable<Pages>("Library");
const titlebarContentMode = writable<TitlebarContentMode>('pagePath')

export {
    // theme,
    currentPage,
    titlebarContentMode
};
