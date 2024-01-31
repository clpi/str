<script lang="ts">
  import { setContext } from 'svelte'
  import "../app.css"
  import 'carbon-components-svelte/css/white.css'
  setContext("1", "2")

</script>
<slot/>
<div class="pb-40">

</div>
