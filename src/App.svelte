<script>
  // @ts-nocheck
  import { onMount } from "svelte";
import ChatroomBox from "./components/ChatroomBox.svelte";
import ChatroomsPanel from "./components/ChatroomsPanel.svelte";

  //const helloChannel = window.Echo.channel("channel-hello");
  onMount(() => {
    /* helloChannel.subscribed(() => {
      console.log("subbed");
    });

    helloChannel.listen(".hello", (e) => {
      console.log(e);
    }); */
  });
</script>

<main>
  <div class="container">
    <ChatroomsPanel />
    <ChatroomBox />
  </div>
</main>
