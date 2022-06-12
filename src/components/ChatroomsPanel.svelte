<script>
    import { chatrooms } from "../scripts/chatroomsStore";
    import ChatroomTile from "./ChatroomTile.svelte";

    const handleChatChoice = async () => {
        console.log("bruh");
    }
</script>

{#if $chatrooms}
    <div class="panel">
        {#each $chatrooms as chatroom}
            <ChatroomTile {chatroom} on:chatroom-choice={handleChatChoice} />
        {/each}
    </div>
{/if}

<style>
    div.panel {
        width: 25rem;
    }
</style>