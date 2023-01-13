<script>
    export let cover
</script>
<div class=" w-56 md:w-1/4 h-96 rounded-xl mx-2 my-5 flex flex-col dark:bg-zinc-900 shadow-lg outline outline-1 dark:outline-none">
                <div style={`background-image: url(${cover});`} class=" w-full min-h-max flex-[3] rounded-t-xl bg-cover">
                    
                </div>
                <div class="p-3 flex-[2]">
                    <div class="text-xl">Project title</div>
                    <div class="text-onsurface dark:text-white textClip" on:click={function(){
                        this.classList.toggle("textClip")                        
                    }}>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</small>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="flex-[4]">
                            <button class="text-xs text-primary rounded uppercase font-bold bg-primary bg-opacity-20 p-2 hover:bg-opacity-100 hover:text-white">Learn More</button>
                        </span>
                        <span class="flex fill-onsurface dark:fill-white justify-evenly flex-[2]">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3Zm0-6.825Z"/></svg> -->
                            <svg on:click={()=>{
                                window.open("/about",'_blank')
                            }} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg>
                        </span>
                    </div>
                </div>
            </div>

