<script lang="ts">
    import NoteCard from "@/components/NoteCard.svelte";
    import ShelfDiv from "@/components/ShelfDiv.svelte";
    import { notes } from "@/store.svelte";
    import { randomItem } from "@/utils/randomItem";

    // const noteData: NoteData[] = Array(8)
    //     .fill({})
    //     .map(() => ({
    //         title: loremIpsum({
    //             sentenceLowerBound: 2,
    //             sentenceUpperBound: 4,
    //         }),
    //         lastEdited: Date.now() - Math.floor(64000 * Math.random()),
    //         id: uuid4(),
    //     }));
    const noteData = $notes;

    const date = new Date();
    const mottos: string[] = ["What on ur mind?", "Writing smth..", "Extracting ideas_"];
    let motto = $state(randomItem(mottos));

    function handleMottoRefresh() {
        motto = randomItem(mottos);
    }
</script>

<div class="pageContainer">
    <div class="pageHeader">
        <div class="timeDate">
            <span class="time">
                {date.getHours().toString().padStart(2, "0")}
                <span class="divider">:</span>
                {date.getMinutes().toString().padStart(2, "0")}
            </span>
            <!-- <span class="date"></span> -->
        </div>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span
            class="mottoMsg"
            onmousedown={handleMottoRefresh}>{motto}</span
        >
    </div>

    <ShelfDiv title="Recents">
        <div class="scrollingContent">
            {#each noteData as note (note.id)}
                <NoteCard data={note} />
            {/each}
        </div>
    </ShelfDiv>

    <!-- <Button onclick={clickHandler}>Click me</Button> -->
</div>

<style lang="scss">
    .pageContainer {
        display: flex;
        gap: 32px;
    }

    .pageHeader {
        display: flex;
        flex-flow: row nowrap;
        // justify-content: center;
        gap: 8px;

        & > .mottoMsg {
            font-size: 32px;
            font-weight: 800;
            font-style: italic;
            color: var(--primary);
            cursor: pointer;
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
                color: var(--text200);
            }
        }
    }

    .scrollingContent {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        gap: 16px;
        width: 100%;
        overflow-x: auto;
    }
</style>
