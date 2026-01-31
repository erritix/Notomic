<script lang="ts">
    import NoteCard from "@/components/NoteCard.svelte";
    import type { NoteData } from "@/types";
    import { loremIpsum } from "lorem-ipsum";
    import { v4 as uuid4 } from "uuid"


    const noteData: NoteData[] = Array(8).fill({}).map((_, i) => ({
        title: `Lorem ipsum ${i+1}`,
        content: loremIpsum({
            sentenceLowerBound: 4,
            sentenceUpperBound: 48
        }),
        lastModTs: Date.now() - Math.floor(64000 * Math.random()),
        id: uuid4()
    }))

    const date = new Date()

</script>

<div class="pageContainer">
    <div class="pageHeader">
        <div class="timeDate">
            <span class="time">
                {date.getHours()}
                <spn class="divider">:</spn>
                {date.getMinutes().toString().padStart(2, '0')}</span>
            <!-- <span class="date"></span> -->
        </div>
        <span class="welcomeMsg">Whats on u mind?</span>
    </div>
    <div class="noteShelf">
        {#each noteData as note (note.id)}
            <NoteCard {...note} />
        {/each}
    </div>

    <!-- <Button onclick={clickHandler}>Click me</Button> -->
</div>

<style lang="scss">
    @use "../styles/colors" as *;

    .pageContainer {
        display: flex;
        gap: 16px;
    }

    .pageHeader {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        gap: 24px;
        
        & > .welcomeMsg {
            font-size: 32px;
            font-weight: 800;
            font-style: italic;
            color: $primary;
        }
    }
    
    .timeDate {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 16px;

        & > .time {
            font-size: 32px;    
            font-weight: 600;
            word-spacing: -0.2em;

            & > .divider {
                font-size: 24px;
                color: $text200;
            }
        }
    }

    .noteShelf {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        gap: 16px;
        width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
    }

</style>