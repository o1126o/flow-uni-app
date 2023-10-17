import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
	'user',
	() => {
		const token = ref('');
    
    const loyout = () => {
      token.value = ''
    }
    
    return { token, loyout };
	},
	{
		persist: true
	}
);