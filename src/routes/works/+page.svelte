<script>

  import Card from './Card.svelte';
</script>
<article class="w-full flex flex-col p-5 pb-32 pl-10 bg-opacity-80 dark:bg-opacity-[.95] bg-white rounded dark:bg-zinc-800 my-5 prose lg:prose-xl max-w-none">
    <section class=" flex flex-col text-zinc-700 dark:text-slate-50 my-1">
        <h3 class="w-full text-center my-2 uppercase text-zinc-700 dark:text-slate-50">my works</h3>
        <p class="w-full text-center">Projects i am working or worked on and ones that i have collaborated on</p>
        <div class="flex flex-wrap justify-evenly">
            {#each Array(6) as _}
                <Card cover={"/place.jpg"}></Card>
                
            {/each}
        </div>
    </section>
</article>