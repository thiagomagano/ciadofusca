<script>
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	export let isOpen;
	export let carro;
</script>

<Modal bind:open={isOpen} size="xs" autoclose={false} class="w-full" outsideclose={true}>
	<form class="flex flex-col space-y-6" method="POST">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white">
			Registre seu interesse no {carro.titulo}
		</h3>
		<p>Para isso, precisamos de algumas informações:</p>
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

		<Button type="submit" class="w-full1 bg-primary-50 hover:bg-primary-300">Registrar</Button>
	</form>
</Modal>
