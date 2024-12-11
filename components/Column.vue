<template>
    <div class="column flex-1 bg-gray-100-transparent p-4 rounded ">
        <div class="flex justify-between items-center mb-4 relative">
            <h2 class="text-lg font-bold max-w-[70%]">{{ title }}</h2>
            <button @click="openCreateModal" class="bg-customPurple-900 text-white px-2 py-1 rounded absolute top-0 right-0">
                +
            </button>
        </div>
        <p v-if="!tasks.length" class="text-gray-500">No tasks available</p>
        <draggable :list="tasks" item-key="id"   @change="onDrop" class="h-full flex flex-row sm:flex-col gap-1 overflow-auto"
            :group="{ name: 'tasks', pull: 'clone', put: true }">
            <template #item="{ element }">
                <TaskCard :task="element" />
            </template>
        </draggable>
    </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import TaskCard from './TaskCard.vue'
import { useTaskStore } from '~/stores/taskStore'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    tasks: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
})

const taskStore = useTaskStore()

const openCreateModal = () => {
    taskStore.openModal({
        id: null,
        title: '',
        description: '',
        assignee: '',
        performers: [],
        priority: 'Medium',
        status: props.status,
    })
}


const onDrop = (event) => {
    const added = event.added
    if (added) {
        taskStore.updateTaskStatus(added.element.id, props.status)
    }
}
</script>
