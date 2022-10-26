<script>
    export let data;
    const datao = JSON.parse(data.gat);
</script>

<h1 class="bg-blue-200">Welcome to SvelteKit</h1>
<p>
    ////////////////////////////////////////////////////////////////// <br /><br
    /><br />
    {datao[0].name}
</p>
