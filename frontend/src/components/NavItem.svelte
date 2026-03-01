<script lang="ts">
    import { headerText } from "@/store.svelte";
    import type { NavData } from "@/types";
    import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";
    import { Link, navigate } from "svelte5-router";

    interface Props extends HTMLAttributes<HTMLSpanElement> {
        data: NavData;
        isActive?: boolean;
    }

    const { data, isActive = $bindable(false), onclick, ...props }: Props = $props();

    function clickHandler() {
        data.url ? navigate(data.url) : null;
    }
</script>

<a
    class="navItem buttonReset"
    class:active={isActive}
    onclick={(e) => {
        clickHandler();
        onclick?.(e);
    }}
    {...props}
>
    <data.Icon class="icon-big navItemIcon" />
    <span>{data.label}</span>
</a>

<style lang="scss">
    @use "../styles/colors" as *;

    .navItem {
        display: flex;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        color: $text200;
        transition: 150ms;
    }
    .navItem:hover {
        background-color: $secondary900;
    }

    .navItem.active {
        color: $text100;
        background-color: $secondary800;

        & > :global(.navItemIcon) {
            color: $text100;
        }
    }
</style>
