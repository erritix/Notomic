<script lang="ts">
    import * as lu from "@lucide/svelte"
    import * as rt from "#rt"
    import WindowOption from "@/components/windowOption.svelte";
    import { currentPage, titlebarContentMode } from "@/store.svelte";

    // let {
    //     folder = "Folder"
    // } = $props()
    
</script>   

<div class="titlebar">
    <div class="content">
        {#if $titlebarContentMode === 'pagePath'}
            <span class="text-secondary">{$currentPage}</span>
        {:else}
            <spa>Invalid</spa>
        {/if}
    </div>
    <div class="windowOptions">
        <WindowOption Icon={lu.Minus} onclick={rt.WindowMinimise}/>
        <WindowOption Icon={lu.Square} onclick={rt.WindowToggleMaximise} />
        <WindowOption Icon={lu.X} withWarn />
    </div>
</div>

<style lang="scss">
    @use "../styles/colors" as *;

    
    .titlebar {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        background-color: $background200;
        --wails-draggable: drag;
    }
    
    .content {
        display: flex;
        align-items: center;
        padding: 0 15px;
        --wails-draggable: no-drag;
    }

    .windowOptions {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0 16px;
        --wails-draggable: no-drag;
    }
</style>