import type { IconProps, LucideComponent } from "@lucide/svelte";
import type { Component } from "svelte";

export enum AppTheme {
    Dark,
    Light,
}

export type Pages = "Library" | "Thrash" | string;

export interface NavData {
    label: string | Pages
    Icon: typeof LucideComponent
    url?: string
}

export type TitlebarContentMode = "pagePath"

export type NoteData = {
    id: string
    title: string
    content?: string
    folder?: string
    lastEdited: number
}
