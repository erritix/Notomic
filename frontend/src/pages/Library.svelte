<script lang="ts">
    import { Library } from "@lucide/svelte";
    import { SaveMarkdown, GetMarkdown } from "#wails/markdown/Markdown"
    import Button from "@/components/Button.svelte";
    
    let value = $state<string>("")
    let filename = $state("test")

    $effect(() => {
        GetMarkdown(filename).then(v => value = v).catch(console.error)
    })
    
    function handleSave() {
        SaveMarkdown(filename, value)
    }
    
</script>

<div class="pageContainer">
    <h1>content displayer</h1>
    <textarea class="editorView buttonReset" bind:value></textarea>
    <Button onclick={handleSave} >save</Button>
</div>

<style lang="scss">
    @use "../styles/colors" as *;

    .pageContainer {
        gap: 32px
    }

    .editorView {
        padding: 8px;
        border: 1px solid $secondary800;
        border-radius: 8px;
    }

</style>