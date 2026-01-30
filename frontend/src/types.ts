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

export { AppTheme };
export type {
    // x
    Pages,
    PageItemData,
    TitlebarContentMode,
};
