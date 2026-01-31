<script lang="ts">
    import type { IconProps } from "@lucide/svelte";
    import type { Component } from "svelte"
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        Icon?: Component<IconProps>
        type?: "default" | "secondary"
        isDisabled?: boolean
    } & HTMLAttributes<HTMLButtonElement>
    
    const {Icon, type, children, isDisabled = $bindable(false), ...props}: Props = $props()    
</script>

<button class="button" class:buttonSecondary={type === "secondary"} {...props}>
    {#if Icon} 
        <Icon class="buttonIcon"/>
    {/if}
    {@render children?.()}
</button>

<style lang="scss">
    @use "../styles/colors" as *;
    
    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        background-color: $accent;
        color: $text100;
        transition: 150ms;
        cursor: pointer;
        
        &:hover {
            opacity: 90%;
        }
        
        &:active {
            transform: scale(0.96);
        }

        &Secondary {
            background-color: $secondary800;
        }
    }

    :global(.buttonIcon) {
        color: $text100
    }
</style>