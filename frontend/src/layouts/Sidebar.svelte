<script lang="ts">
    import PageItem from "@/components/PageItem.svelte";
    import SearchBar from "@/components/searchBar.svelte";
    import type { PageItemData } from "@/types";
    import { Library, Trash } from "@lucide/svelte";

    const pageItems: PageItemData[] = [
        {
            value: "Library",
            Icon: Library,
            page: "Library"
        }, {
            value: "Thrash",
            Icon: Trash,
            page: "Thrash"
        }
    ]
    
</script>

<div class="sidebar">
    <div class="menuSection">
        <SearchBar />
        {#each pageItems as data (data.value)}
            <PageItem {...data} />
        {/each}
    </div>
</div>

<style lang="scss">
    @use "../styles/colors" as *;
    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px 0;
        background: $background200 !important;
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