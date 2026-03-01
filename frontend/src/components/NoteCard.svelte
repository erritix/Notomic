<script lang="ts">
    import { type NoteData } from "@/types";
    import { formatTimeAgo } from "@/utils/dateFormat";
    import { EllipsisVertical, File, FileText, Folder, StickyNote } from "@lucide/svelte";
    import { link, navigate } from "svelte5-router";

    const { data = $bindable(), ...props }: { data: NoteData } = $props();
</script>

<a
    class="noteCard resetStyle"
    href={"/edit/" + data.id}
    use:link
>
    <div class="header">
        <File class="noteIcon icon-big" />
        <EllipsisVertical />
    </div>
    <div class="body">
        <span class="text-title">{data.title}</span>
        <!-- <p class="content text-desc">{data.content}</p> -->
    </div>
    <div class="metadata">
        <div class="folder">
            <Folder class="folderIcon" />
            <span>{data.folder ?? "Draft"}</span>
        </div>
        <div class="lastEdited">{formatTimeAgo(data.lastEdited)}</div>
    </div>
</a>

<style lang="scss">
    @use "../styles/colors" as *;

    .noteCard {
        appearance: none;
        flex: 0 0 auto;
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
        height: 200px;
        width: 224px;
        padding: 16px 12px;
        border: 1px solid transparent;
        border-radius: 12px;
        background-color: $secondary900;
        color: $text200;
        overflow: visible;

        :global(.noteIcon) {
            --size: 20px;
            color: $text300;
            fill: $text300;
        }

        &:hover {
            color: $text100;
            border: 1px solid $secondary800;

            & :global(.noteIcon) {
                color: $text200;
                fill: $text200;
            }
        }

        &:active {
            opacity: 90%;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .body {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        gap: 8px;
        min-height: 0;
    }

    .metadata {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        color: $text300;
        & * {
            font-size: 14px;
        }

        & > div {
            display: flex;
            flex-flow: row nowrap;
            gap: 4px;
        }

        & :global(.folderIcon) {
            color: $text300;
            fill: $text300;
        }
    }
</style>
