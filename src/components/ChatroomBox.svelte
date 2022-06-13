<script>
    import { currentChatroom } from "../scripts/currentChatroomStore";
    import Message from "./Message.svelte";
</script>

<div class="container">
    {#if $currentChatroom}
        {#each $currentChatroom.messages as message}
            <Message {message} />
            {:else}
                <h1>No messages</h1>
        {/each}
    {:else}
        <h1>No chat selected</h1>
    {/if}
</div>

<style>
    div.container {
        background-color: #22213a;
        width: 100%;
    }
</style>
