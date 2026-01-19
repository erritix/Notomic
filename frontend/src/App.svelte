<script lang="ts">
    import SidebarHeader from "@/layouts/SidebarHeader.svelte";
    import WindowBar from "./layouts/WindowBar.svelte";
</script>

<main class="app">
    <SidebarHeader />
    <WindowBar />
    <div>3</div>
    <div>4</div>
</main>

<style lang="scss">
    @use "styles/colors" as *;
    .app {
        display: grid;
        grid-template: auto 1fr / 300px 1fr;
        gap: 1px 1px;
        height: 100vh;
        width: 100vw;
        background-color: $secondary800;

        > * {
            background: $background200;
        }
    }
    
</style>
