<script>
    import { currentChatroom } from "../scripts/currentChatroomStore";
    import { chatrooms } from "../scripts/chatroomsStore";
    import ChatroomTile from "./ChatroomTile.svelte";

    const handleChatChoice = async (e) => {
        const res = await fetch("http://127.0.0.1:8000/api/chatrooms/"+e.detail, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                "Content-type": "application/json",
            },
            mode: "cors",
        });

        const json = await res.json();
        const result = JSON.stringify(json);
        let resultFinal = await JSON.parse(result);

        if (res.ok) {
            console.log(resultFinal);
            $currentChatroom = resultFinal.chatroom;
        }
    };
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
