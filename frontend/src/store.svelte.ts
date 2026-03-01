import { writable } from "svelte/store";
import type { NoteData, TitlebarContentMode } from "./types";
import { fakeNotes } from "./fakedata/note";

// const theme = writable<AppTheme>(AppTheme.Dark);
export const headerText = writable<string>("Library");
export const titlebarContentMode = writable<TitlebarContentMode>('pagePath')
export const notes = writable<NoteData[]>(fakeNotes)