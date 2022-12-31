<script>
    import {onMount} from "svelte"
    import Navbar from "$lib/navbar.svelte";
    import TilesGrid from "$lib/tilesGrid.svelte";

    import "../css/tailwind.css"
    import "../css/global.css"

</script>

<TilesGrid/>
<div class="md:mx-16 lg:mx-24 sm:mx-5 z-20 relative">
    <Navbar/>
    <main class="">
        <slot/>
    </main>
</div>
