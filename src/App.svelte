<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import ChatroomBox from "./components/ChatroomBox.svelte";
  import ChatroomsPanel from "./components/ChatroomsPanel.svelte";
import { chatrooms } from "./scripts/chatroomsStore";

  //const helloChannel = window.Echo.channel("channel-hello");
  onMount(() => {
    /* helloChannel.subscribed(() => {
      console.log("subbed");
    });

    helloChannel.listen(".hello", (e) => {
      console.log(e);
    }); */

    getRooms();
  });

  const getRooms = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/chatrooms", {
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

    if(res.ok) {
      console.log(resultFinal);
      $chatrooms = resultFinal.chatrooms;
    }
  };
</script>

<main>
  <div class="container">
    <ChatroomsPanel />
    <ChatroomBox />
  </div>
</main>

<style>
  main {
    background-color: #332e48;
  }

  main div.container {
    height: 100vh;
    display: flex;

  }
</style>
