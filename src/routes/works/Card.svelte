<script>
    import anime from "../../js/anime.es"

    import {onMount} from "svelte"

    export let cover
    let accordition,resize
    let collapsed=true

    onMount(()=>{
        resize=()=>{
            anime({
                targets:accordition,
                height:collapsed? 0:100,
                easing:'linear',
                duration:250
            })
            collapsed=!collapsed

        }
        resize()
    })
</script>
<div class=" max-w-xs aspect-square rounded-xl mx-2 my-5 flex flex-col dark:bg-zinc-900 shadow-lg outline outline-1 dark:outline-none">
                <div style={`background-image: url(${cover});`} class=" w-full min-h-max flex-[3] rounded-t-xl bg-cover">
                    
                </div>
                <div class="p-3 flex-[2]">
                    <div class="text-xl">Project title</div>
                    <div class="text-onsurface dark:text-white my-2">
                        <div class="textClip" on:click={()=>{
                            resize()
                        }}>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus velit officia, tempore nam placeat quidem praesentium illo voluptas neque excepturi fuga obcaecati numquam odio molestiae aperiam commodi quisquam tenetur.</small>
                        </div>
                        <div bind:this={accordition} class="overflow-hidden">
                            <small >Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</small>
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-auto py-2 fill-onsurface dark:fill-white">
                            <button on:click={()=>{
                                resize()
                            }} class="text-xs text-primary rounded uppercase font-bold bg-primary bg-opacity-20 p-2 hover:bg-opacity-100 hover:text-white">Learn More</button>
                            <span class="flex justify-around">
                                <span class="p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5q0-1.875-1.312-3.188Q13.875 7 12 7q-1.875 0-3.188 1.312Q7.5 9.625 7.5 11.5q0 1.875 1.312 3.188Q10.125 16 12 16Zm0-1.8q-1.125 0-1.912-.788Q9.3 12.625 9.3 11.5t.788-1.913Q10.875 8.8 12 8.8t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0 4.8q-3.65 0-6.65-2.038-3-2.037-4.35-5.462 1.35-3.425 4.35-5.463Q8.35 4 12 4q3.65 0 6.65 2.037 3 2.038 4.35 5.463-1.35 3.425-4.35 5.462Q15.65 19 12 19Zm0-7.5Zm0 5.5q2.825 0 5.188-1.488Q19.55 14.025 20.8 11.5q-1.25-2.525-3.612-4.013Q14.825 6 12 6 9.175 6 6.812 7.487 4.45 8.975 3.2 11.5q1.25 2.525 3.612 4.012Q9.175 17 12 17Z"/></svg>
                                </span>
                                <span class="p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-xl">
                                    <svg class="" on:click={()=>{
                                        window.open("/about",'_blank')
                                    }} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg>
                                </span>
    
                            </span>
                    </div>
                </div>
            </div>

