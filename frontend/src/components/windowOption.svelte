<script lang="ts">
    import type { Component } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import {type IconProps} from "@lucide/svelte"
    
    type Props = {
        Icon: Component<IconProps>
        withWarn?: boolean
    } & HTMLAttributes<HTMLDivElement>
    
    const {
        Icon,
        withWarn = false, 
        ...rest
    }: Props = $props()

</script>
    
<div class="windowOption" class:withWarn={withWarn} {...rest}>
    <Icon class="icon-small windowOptionIcon" />
</div>

<style lang="scss">
    @use "../styles/colors" as *;

    .windowOption {
        display: flex;
        width: auto;
        padding: 12px;
        transition: all 150ms ease-in-out;
        // border-radius: 8px;
    }
    
    .windowOption:hover {
        background-color: $secondary900;
    }
    .withWarn:hover {
        background-color: $redWarn;
    }

    .windowOption:hover :global(.windowOptionIcon) {
        color: $text100;
        transition: all 150ms ease-in-out;
    }
</style>