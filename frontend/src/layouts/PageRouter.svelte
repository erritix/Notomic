<script lang="ts">
    import Library from "@/pages/Library.svelte";
    import Thrash from "@/pages/Thrash.svelte";
    import {currentPage} from "@/store.svelte"
    
    // let {
    //     current = 'library'
    // } = $props()

</script>

{#if $currentPage === "Library"}
    <Library />
{:else if $currentPage === "Thrash"}
    <Thrash />
{/if}