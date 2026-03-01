<script lang="ts">
    import notomicIcon from "@/assets/images/NotomicIcon@0.5.png";
</script>

<div class="sidebarHeader">
    <img
        class="icon"
        src={notomicIcon}
        alt="icon"
    />
    <span class="appnName text-label">Notomic</span>
</div>

<style lang="scss">
    .sidebarHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        padding: 16px 16px;
        background: var(--bg200);
        --wails-draggable: drag;
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
