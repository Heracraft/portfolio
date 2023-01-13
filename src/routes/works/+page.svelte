<script>

  import Card from './Card.svelte';
</script>
<article class="w-full flex flex-col p-5 pb-32 pl-10 bg-opacity-80 dark:bg-opacity-[.95] bg-white rounded dark:bg-zinc-800 my-5 prose-xl lg:prose-2xl">
    <section class=" flex flex-col text-zinc-700 dark:text-slate-50 my-1">
        <h3 class="w-full text-center my-2 uppercase">my works</h3>
        <p class="w-full text-center">Projects i am working or worked on and ones that i have collaborated on</p>
        <div class="flex flex-wrap justify-evenly">
            {#each Array(6) as _}
                <Card cover={"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}></Card>
                
            {/each}
        </div>
    </section>
</article>