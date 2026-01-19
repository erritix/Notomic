<script lang="ts">
    import notomicIcon from "@/assets/images/NotomicIcon@0.5.png"
</script>

<div class="sidebarHeader">
    <img class="icon" src={notomicIcon} alt="icon">
    <span class="appnName text-label">Notomic</span>
</div>

<style lang="scss">
    @use "../styles/colors" as *;

    .sidebarHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding: 16px 16px;
        background-color: $background200;
    }

    .icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
    }
</style>