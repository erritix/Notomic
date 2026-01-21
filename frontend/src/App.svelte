<script lang="ts">
    import SidebarHeader from "@/layouts/SidebarHeader.svelte";
    import WindowBar from "./layouts/WindowBar.svelte";
    import * as lu from "@lucide/svelte"
    import * as trans from "svelte/transition";

    let x = $state(213918923)
    
</script>

<main class="app">
    <SidebarHeader />
    <WindowBar />
    <div>3</div>
    <div>
        <button onclick={() => x += 1}>click</button>
        {x.toLocaleString("de-de")}
    </div>
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
