<template>
    <div class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
        <div class="bg-white p-6 rounded shadow-lg w-96 bg-lightBackground dark:bg-darkBackground ">
            <h2 class="text-xl font-bold mb-4 text-lightText dark:text-darkText">
                {{ task && task.id ? 'Edit Task' : 'Add New Task' }}
            </h2>
            <form @submit.prevent="save">
                <div class="mb-4">
                    <label for="title" class="block text-sm font-medium text-lightText dark:text-darkText">Title</label>
                    <input id="title" v-model="formData.title" type="text" class="w-full border rounded px-2 py-1"
                        required />
                </div>
                <div class="mb-4">
                    <label for="description" class="block text-sm font-medium text-lightText dark:text-darkText">Description</label>
                    <textarea id="description" v-model="formData.description" class="w-full border rounded px-2 py-1"
                        required></textarea>
                </div>
                <div class="mb-4">
                    <label for="assignee" class="block text-sm font-medium text-lightText dark:text-darkText">Assignee</label>
                    <input id="assignee" v-model="formData.assignee" type="text" class="w-full border rounded px-2 py-1"
                        required />
                </div>
                <div class="mb-4">
                    <label for="performers" class="block text-sm font-medium text-lightText dark:text-darkText">Performers</label>
                    <input id="performers" v-model="formData.performers" type="text"
                        class="w-full border rounded px-2 py-1" placeholder="Separate performers by commas" />
                </div>
                <div class="mb-4">
                    <label for="priority" class="block text-sm font-medium text-lightText dark:text-darkText">Priority</label>
                    <select id="priority" v-model="formData.priority" class="w-full border rounded px-2 py-1">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div class="flex justify-end">
                    <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2" @click="$emit('close')">
                        Cancel
                    </button>
                    <button type="submit" class="bg-customPurple-600 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, watchEffect } from 'vue'

const props = defineProps({
    task: {
        type: Object,
        default: null,
    },
})

const emit = defineEmits(['close', 'save'])

const formData = reactive({
    title: '',
    description: '',
    assignee: '',
    performers: '',
    priority: 'Medium',
})

watchEffect(() => {
    if (props.task) {
        Object.assign(formData, props.task)
    } else {
        Object.assign(formData, {
            title: '',
            description: '',
            assignee: '',
            performers: '',
            priority: 'Medium',
        })
    }
})

const save = () => {
    if (Array.isArray(formData.performers)) {
        formData.performers = formData.performers.join(',');
    }
    const performersArray = formData.performers.split(',').map(p => p.trim())
    emit('save', { ...formData, performers: performersArray, id: props.task?.id || '', status: props.task?.status || 'TODO' })
}
</script>
