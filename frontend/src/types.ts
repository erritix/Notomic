import type { IconProps, LucideComponent } from "@lucide/svelte";
import type { Component } from "svelte";

enum AppTheme {
    Dark,
    Light,
}

type Pages = "Library" | "Thrash";
type PageItemData = {
    value: string;
    Icon: typeof LucideComponent;
    page?: Pages;
};

type TitlebarContentMode = "pagePath"

type NoteData = {
    id: string
    title: string
    content: string
    folder?: string
    // Last Modified timestamp
    lastModTs: number
}

export { AppTheme };
export type {
    // x
    Pages,
    PageItemData,
    TitlebarContentMode,
    NoteData
};
