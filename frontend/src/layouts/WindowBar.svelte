<script lang="ts">
    import * as lu from "@lucide/svelte"
    let {
        folder = "Folder"
    } = $props()
</script>   

<div class="titlebar">
    <div class="contents">
        <div class="title">
            <span class="title-secondary">{folder}</span>
            <span class="title-secondary">/</span>
            <span>Note Title</span>
        </div>
    </div>
    <div class="windowOptions">
        <lu.Icon/>
    </div>
</div>

<style lang="scss">
    @use "./../styles/colors" as *;
    
    .titlebar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: $background200;
    }
    
    .contents {
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
        padding: 8px 32px;
    }
</style>