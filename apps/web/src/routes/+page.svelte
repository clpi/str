<script lang="ts">
	import { MyCounterButton } from '@repo/ui';
	import { Button, truncate, breakpoints } from "carbon-components-svelte"
	import { Airplane } from "carbon-pictograms-svelte"
	import Modal from "../lib/components/Modal.svelte";
	let showModal: boolean = false
	// import { useMachine } from "@xstate/svelte"
	// import { createMachine } from "xstate"
	//
	// const toggleMachine = createMachine({
	// 	id: 'toggle',
	// 	initial: 'inactive',
	// 	states: {
	// 		inactive: {
	// 			on: { TOGGLE: 'active' }
	// 		},
	// 		active: {
	// 			on: { TOGGLE: 'inactive' }
	// 		}
	// 	}
	// });
	// const { send, snapshot } = useMachine(toggleMachine);
</script>

<Button on:click={() => (showModal = true)}> show modal </Button>

<Airplane/>
<div use:truncate>TEKDSJFLSFJDJFLSDFJSKFJLFJKSDLF</div>
{JSON.stringify(breakpoints)}

<h1>Web</h1>
<h2>srvc</h2>
<MyCounterButton />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Modal bind:showModal>
	<h2 slot="header">
		modal
		<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
	</h2>

	<ol class="definition-list">
		<li>of or relating to modality in logic</li>
		<li>
			containing provisions as to the mode of procedure or the manner of taking effect —used of a
			contract or legacy
		</li>
		<li>of or relating to a musical mode</li>
		<li>of or relating to structure as opposed to substance</li>
		<li>
			of, relating to, or constituting a grammatical form or category characteristically indicating
			predication
		</li>
		<li>of or relating to a statistical mode</li>
	</ol>

	<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
</Modal>
