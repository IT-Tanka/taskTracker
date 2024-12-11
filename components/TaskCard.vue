<template>
    <div class="task-card cursor-grab active:cursor-grabbing  p-4 bg-white rounded shadow mb-8 sm:mb-2 relative max-w-[360px] w-full bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText ">
        <div class="absolute top-2 right-2 flex space-x-2">
            <button @click="openEditModal">
                ✏️
            </button>
            <button @click="deleteTask">
                🗑️
            </button>
        </div>
        <div :class="['w-3 h-3 rounded-full', priorityClass]" class="absolute top-1 left-1"></div>
        <h3 class="font-bold text-lg mt-4 max-w-[340px] w-full overflow-x-auto">{{ task.title }}</h3>
        <p class="text-grey text-sm max-w-[340px] w-full overflow-x-auto">{{ task.description }}</p>
        <p class="text-sm mt-2 max-w-[340px] w-full overflow-x-auto">
            <strong>Assignee:</strong> {{ task.assignee }}
        </p>
        <p class="text-sm mt-2 max-w-[340px] w-full overflow-x-auto">
            <strong>Performers:</strong> {{ task.performers.join(', ') }}
        </p>
    </div>
</template>

<script setup>
import { useTaskStore } from '~/stores/taskStore'

const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
})

const taskStore = useTaskStore()

const priorityClass = computed(() => {
    switch (props.task.priority) {
        case 'High':
            return 'bg-red-500'
        case 'Medium':
            return 'bg-yellow-500'
        case 'Low':
            return 'bg-green-500'
        default:
            return ''
    }
})

const openEditModal = () => {
    taskStore.openModal(props.task)
}

const deleteTask = () => {
    taskStore.tasks = taskStore.tasks.filter(t => t.id !== props.task.id)
}
</script>
