<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        title: string
    } & HTMLAttributes<HTMLDivElement>
    
    const props: Props = $props()
</script>

<div class="shelfDiv">
    <div class="header">
        <span class="text-label">{props.title}</span>
        <div class="dividerBar"></div>
    </div>
    {@render props.children?.()}
</div>

<style lang="scss">
    @use "../styles/colors" as *;
    
    .shelfDiv {
        align-self: stretch;
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
    }

    .header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 8px;

        & .dividerBar {
            flex: 1;
            height: 0px;
            border: 1px solid $secondary800;
            border-radius: 0.5px;
        }
    }

</style>