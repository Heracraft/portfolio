<script>
    import { onMount } from "svelte";
    import {colorTheme,tilesDimension} from "../js/store"

    import anime from "../js/anime.es"

    let width,height
    let tilesCount=0
    let rowCount=0
    let columnCount=0
    let tilesContainer
    let clickedTile=false

    onMount(()=>{
        height=document.body.clientHeight
        width=document.body.clientWidth
    })
    $:{
        if(width && height){
            rowCount=Math.floor(height/50)
            columnCount=Math.floor(width/50)
            tilesCount=(rowCount*columnCount)
            tilesContainer.style.setProperty("--rows",rowCount)
            tilesContainer.style.setProperty("--columns",columnCount)
            $tilesDimension.columnCount=columnCount
            $tilesDimension.rowCount=rowCount
        }

    }
</script>
<svelte:window on:resize={()=>{
    console.log("resuxe");
    
    height=document.body.clientHeight
    width=document.body.clientWidth
}}/>
<div class={`tiles w-full h-full p-0 m-0 fixed grid z-10 
            right-0 left-0 bottom-0 overflow-hidden`} bind:this={tilesContainer}>
    {#each Array(tilesCount) as _ , indexs}
        <div class="tile" on:click={()=>{
            console.log({columnCount,rowCount,index:indexs,clickedTile});
            
            anime({
                targets:".tile",
                opacity:clickedTile ? 1:0,
                delay:anime.stagger(50,{grid:[columnCount,rowCount],from:indexs})
            })
            if($colorTheme=="dark"){
                document.body.classList.replace("dark","light")
                $colorTheme="light"
            }
            else{
                document.body.classList.replace("light","dark")
                $colorTheme="dark"
            }
            clickedTile=!clickedTile
            
            
        }} on:keydown={()=>{}}></div>
    {/each}
</div>
<style>
    .tiles{
        --rows:0;
        --columns:0;
        grid-template-columns: repeat(var(--columns),1fr);
        grid-template-rows: repeat(var(--rows),1fr);
        /* background:linear-gradient(to right, hsl(123deg 64% 68%), #7EE8FA, #FFCFDF,hsl(123deg 64% 68%)); */
        /* background:linear-gradient(to right, #059669, rgb(56 189 248 ),#7ee8f7,rgb(5 150 105)); */
        background:linear-gradient(to right, #059669, #7EE8FA, #FFCFDF,#059669);
        animation: background-pan 10s linear infinite;
        background-size: 200%;
    }
   .tile{
    position: relative;
   }
   .tile::before{
    content: "";
    inset: .5px;
    position: absolute;
    
    @apply bg-zinc-900;
   }
   @keyframes background-pan{
    from {
        background-position: 0% center;
    }
    to{
        background-position: -200% center;
    }
} 
</style>