<script lang="ts">
    import PageItem from "@/components/NavItem.svelte";
    import SearchBar from "@/components/SearchBar.svelte";
    import { headerText } from "@/store.svelte";
    import type { NavData } from "@/types";
    import { Library, TestTube, Trash } from "@lucide/svelte";
    import { listen } from "svelte5-router";

    const navItems: NavData[] = [
        {
            label: "Library",
            Icon: Library,
            url: "/",
        },
        {
            label: "Trash",
            Icon: Trash,
            url: "/trash",
        },
        {
            label: "t",
            Icon: TestTube,
            url: "/test",
        },
    ];

    listen(({ location }) => {
        const item = navItems.find((d) => d.url == location.pathname);

        headerText.set(item?.label || "404");
    });
</script>

<div class="sidebar">
    <div class="menuSection">
        <SearchBar />
        {#each navItems as data (data.label)}
            <PageItem
                {data}
                isActive={data.label == $headerText}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px 0;
        background: var(--bg200);
    }

    @mixin section {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 0px 8px;
    }

    .menuSection {
        @include section;
    }
</style>
