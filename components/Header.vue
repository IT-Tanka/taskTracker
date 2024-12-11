<template>
    <header class="bg-customPurple-600 text-white py-4 px-8">
        <div class="max-w-[1440px] mx-auto flex justify-between">
            <h1 class="text-2xl font-bold">taskTracker</h1>
            <ThemeToggle />
        </div>
    </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>