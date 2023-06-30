<script>
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';

	import { enhance } from '$app/forms';
	export let isOpen;
	export let carro;

	export let form;
</script>

<Modal bind:open={isOpen} size="xs" autoclose={false} class="w-full" outsideclose={true}>
	{#if !form?.success}
		<form class="flex flex-col space-y-6" method="POST" use:enhance>
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">
				Registre seu interesse no {carro.titulo}
			</h3>
			<p>Para isso, precisamos de algumas informações:</p>
			<Label class="space-y-2">
				<span>Seu Nome *</span>
				<Input type="text" name="nome" placeholder="Fulano da silva" />
				{#if form?.missingName}
					<p class="text-red-500">{form?.msg}</p>
				{/if}
			</Label>
			<Label class="space-y-2">
				<span>Seu Whatsapp *</span>
				<Input type="text" name="whatsapp" placeholder="5199999999" />
				{#if form?.missingWpp}
					<p class="text-red-500">{form?.msg}</p>
				{/if}
				{#if form?.incorrect}
					<p class="text-red-500">{form?.msg}</p>
				{/if}
			</Label>
			<Label class="space-y-2">
				<span>Seu Email</span>
				<Input type="email" name="email" placeholder="fulano@gmail.com" />
			</Label>

			<Button type="submit" class="w-full1 bg-primary-50 hover:bg-primary-300">Registrar</Button>
		</form>
	{:else}
		<h3>Formulário enviado com sucesso!</h3>
		<p>Em breve entraremos em contato com você.</p>
	{/if}
</Modal>
