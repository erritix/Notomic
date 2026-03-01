<script lang="ts">
    import { fakeNotes } from "@/fakedata/note";
    import { EllipsisVertical } from "@lucide/svelte";

    interface Props {
        id?: string;
    }

    // const { id }: Props = $props();
    let data = $state(fakeNotes[0]);
    let value = $state("hello world<br><h1>hello world</h1>");

    if (!data) {
        throw Error(`Invalid note ID! The note data might be already deleted or corupt in some way.`);
    }
</script>

<div class="pageContainer">
    <div class="header">
        <span>{data?.title}</span>
        <div class="noteOptions">
            <EllipsisVertical />
        </div>
    </div>
    <div class="editorField">
        <div class="editor-wrapper">
            <pre class="highlight"></pre>
            <textarea
                class="input"
                bind:value={data.content}
            ></textarea>
        </div>
        <div
            class="e"
            contenteditable="true"
            bind:innerHTML={value}
        >
            <h1>Hello World</h1>
            <p>hello <i>shi</i></p>
        </div>
    </div>
</div>

<style lang="scss">
    .pageContainer {
        padding: 0;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        height: 48px;
        border-bottom: 1px solid var(--sec800);
        color: var(--text200);

        & > .noteOptions {
            display: flex;
            gap: 16px;
        }
    }

    .editorField {
        padding: 16px;
    }

    .editor-wrapper {
        position: relative;
        height: 256px;
        margin: 32px;
    }

    textarea,
    pre {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        outline: none;
        border: none;
        font: 16px sans-serif;
        white-space: pre-wrap;
    }

    textarea {
        background: transparent;
        color: transparent;
        caret-color: var(--text100);
    }

    pre {
        pointer-events: none;
    }
</style>
