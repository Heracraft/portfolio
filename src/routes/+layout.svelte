<script>
    import {onMount} from "svelte"
    import {page} from "$app/stores"
    import {currentPage} from "../js/store"

    import Navbar from "$lib/navbar.svelte";
    import Footer from "$lib/footer.svelte";
    import TilesGrid from "$lib/tilesGrid.svelte";
    import Banner from "$lib/banner.svelte";

    import "../css/tailwind.css"
    import "../css/global.css"

    $:{
        $currentPage=$page.route.id
    }
</script>

<TilesGrid/>
<div class="m-0 lg:mx-24 sm:mx-5 z-20 relative h-full">
    <!-- <Banner/> -->
    <Navbar/>
    <main >
        <slot/>
    </main>
</div>
<Footer />
