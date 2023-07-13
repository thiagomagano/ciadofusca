import { writable } from "svelte/store";

export const dataStore = writable({
  data: data,
  filtered: data,
  search: '',
});