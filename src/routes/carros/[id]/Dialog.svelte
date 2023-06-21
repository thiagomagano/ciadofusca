<script>
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	export let isOpen;
	export let carro;
</script>

<!-- <Button on:click={() => (isOpen = true)}>Form modal</Button> -->

<Modal bind:open={isOpen} size="xs" autoclose={false} class="w-full" outsideclose={true}>
	<form class="flex flex-col space-y-6" action="?/register" method="POST">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
			Registre seu interesse no {carro.titulo}
		</h3>
		<Label class="space-y-2">
			<span>Seu Nome *</span>
			<Input type="text" name="nome" placeholder="Fulano da silva" required />
		</Label>
		<Label class="space-y-2">
			<span>Seu Whatsapp *</span>
			<Input type="text" name="whatsapp" placeholder="5199999999" required />
		</Label>
		<Label class="space-y-2">
			<span>Seu Email</span>
			<Input type="email" name="email" placeholder="fulano@gmail.com" />
		</Label>

		<Button formaction="?/register" type="submit" class="w-full1">Registrar</Button>
	</form>
</Modal>
