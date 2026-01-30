<script lang="ts">
    import { currentPage } from "@/store.svelte";
    import type { PageItemData } from "@/types";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = PageItemData & HTMLAttributes<HTMLDivElement>

    const props: Props = $props()

    function onclick() {
        currentPage.set(props.page ?? "Library")
    }
    
</script>

<button class="pageItem buttonReset" class:active={props.page === $currentPage} {onclick}>
    <props.Icon class="icon-big pageItemIcon"/>
    <span>{props.value}</span>
</button>

<style lang="scss">
    @use "../styles/colors" as *;
    
    .pageItem {
        display: flex;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        color: $text200;
        transition: 150ms;
    }
    .pageItem:hover {
        background-color: $secondary900;
    }

    .pageItem.active {
        color: $text100;
        background-color: $secondary800;
        
        & > :global(.pageItemIcon) {
            color: $text100;
        }
    }
</style>