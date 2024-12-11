<template>
    <div class="relative inline-flex items-center cursor-pointer" @click="toggleTheme">
        <div :class="currentTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'"
            class="w-16 h-8 rounded-full transition-colors duration-300">
            <div :class="currentTheme === 'dark' ? 'translate-x-8' : 'translate-x-0'"
                class="w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTheme = ref('light');  

const toggleTheme = () => {
    const newTheme = currentTheme.value === 'dark' ? 'light' : 'dark';
    currentTheme.value = newTheme;
    if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    }
};

onMounted(() => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            currentTheme.value = savedTheme;
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }
    }
});
</script>