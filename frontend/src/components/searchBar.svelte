<script lang="ts">
    import { Search } from "@lucide/svelte";
</script>

<div class="searchBar">
    <span class="label">Search...</span>
    <Search />
</div>

<style lang="scss">
    @use "../styles/colors" as *;

    .searchBar {
        display: flex;
        justify-content: space-between;
        padding: 8px 12px;
        margin-bottom: 4px;
        background-color: $secondary900;
        border-radius: 8px;
    }

    .label {
        color: $text300;
    }

</style>