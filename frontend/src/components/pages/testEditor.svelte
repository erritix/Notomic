<script lang="ts">
    import { tick } from "svelte";

    let editor: HTMLDivElement;

    function decorate(text: string) {
        return text
            .replace(/\*\*(.*?)\*\*/g, `<span class="syntax">**</span><strong>$1</strong><span class="syntax">**</span>`)
            .replace(/\n/g, "<br>");
    }

    function getCaretOffset(el: HTMLElement) {
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return 0;

        const range = sel.getRangeAt(0);
        const pre = range.cloneRange();
        pre.selectNodeContents(el);
        pre.setEnd(range.endContainer, range.endOffset);

        return pre.toString().length;
    }

    function setCaretOffset(el: HTMLElement, offset: number) {
        const sel = window.getSelection();
        if (!sel) return;

        const range = document.createRange();
        let count = 0;

        function walk(node: Node): boolean {
            if (node.nodeType === Node.TEXT_NODE) {
                const len = node.textContent?.length ?? 0;

                if (count + len >= offset) {
                    range.setStart(node, offset - count);
                    range.collapse(true);
                    return true;
                }

                count += len;
            } else {
                for (const child of node.childNodes) {
                    if (walk(child)) return true;
                }
            }
            return false;
        }

        walk(el);

        sel.removeAllRanges();
        sel.addRange(range);
    }

    async function handleInput() {
        const caret = getCaretOffset(editor);
        const raw = editor.innerText;

        editor.innerHTML = decorate(raw);
        await tick();
        setCaretOffset(editor, caret);
    }
</script>

<div
    bind:this={editor}
    contenteditable="true"
    on:input={handleInput}
    class="editor"
></div>

<style>
    .editor {
        border: 1px solid #ccc;
        padding: 1rem;
    }

    strong {
        font-weight: bold;
    }

    .syntax {
        opacity: 0.4;
    }
</style>
