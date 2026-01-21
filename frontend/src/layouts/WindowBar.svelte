<script lang="ts">
    import * as lu from "@lucide/svelte"
    import * as rt from "#rt"
    import WindowOption from "@/components/windowOption.svelte";

    // let {
    //     folder = "Folder"
    // } = $props()
    
</script>   

<div class="titlebar">
    <div class="content">
        <div class="title">
            <span class="title-secondary">Folder</span>
            <span class="title-secondary">/</span>
            <span class="text200">Note</span>
        </div>
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
    }
    
    .content {
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .title {
        display: flex;
        gap: 4px;
        font-size: 14px;
    }
    .title-secondary {
        color: $text300
    }

    .windowOptions {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0 32px;
    }
</style>