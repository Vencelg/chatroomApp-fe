<script>
    import { createEventDispatcher } from "svelte/internal";

    export let chatroom;
    const dispatch = createEventDispatcher();

    const showChat = () => {
        dispatch("chatroom-choice", chatroom.id);
    };
</script>

<div class="tile" on:click={showChat}>
    <p>{chatroom.name}</p>
</div>

<style>
    .tile {
        border: 1px solid white;
        color: white;
        transition: 0.2s;
    }

    .tile:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        cursor: pointer;
    }

    .tile p {
        padding: 1rem 0;
        text-align: center;
    }
</style>
