<script lang="ts">
    import {type NoteData} from "@/types"
    import { Folder } from "@lucide/svelte";
    
    const props: NoteData = $props()
</script>

<div class="noteCard">
    <div class="body">
        <span class="text-title">{props.title}</span>
        <p class="content text-desc">{props.content}</p>
    </div>
    <div class="metadata">
        <div class="folder">
            <Folder class="folderIcon"/>
            <span class="text-sec">{props.folder ?? 'Draft'}</span>
        </div>
        <div class="lastmTs">
            Few hours ago
        </div>
    </div>
</div>

<style lang="scss">
    @use "../styles/colors" as *;

    .noteCard {
        flex: 0 0 auto;
        display: flex;
        flex-flow: column nowrap;
        gap: 24px;
        height: 280px;
        width: 224px;
        padding: 12px;
        border: 1px solid transparent;
        border-radius: 12px;
        background-color: $secondary900;
        color: $text200;
        transition: 150ms;
        overflow: hidden;

        &:hover {
            color: $text100;
            border: 1px solid $secondary800;
        }
        &:hover .content {
            color: $text200
        }

        &:active {
            opacity: 90%;
        }
    }

    .body {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        min-height: 0;
        
        & > .content {
            flex: 1;
            margin: 0;
            color: $text300;
            transition: 150ms;
            overflow: hidden;
            mask-image: linear-gradient(to bottom, black 80%, transparent);
        }
    }

    .metadata {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        color: $text300;

        > * {
            font-size: 12px;
            display: flex;
            flex-flow: row nowrap;
            gap: 4px
        }
        
        & :global(.folderIcon) {
            color: $text300;
            fill: $text300;
        }
    }
    
</style>