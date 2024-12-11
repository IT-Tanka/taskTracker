<template>
    <div class="board-bg bg-ground bg-cover bg-center" >
        <div class="board flex p-4 flex-col sm:flex-row gap-4 max-w-[1440px] mx-auto min-h-full">
            <Column v-for="status in statuses" :key="status.value" :title="status.label" :status="status.value"
                :tasks="filteredTasks(status.value)" />
        </div>
        <TaskModal v-if="taskStore.modalVisible" :task="taskStore.currentTask" @close="closeModal" @save="saveTask" />
    </div>
</template>

<script setup>
import { useTaskStore } from '~/stores/taskStore'
import Column from './Column.vue'
import TaskModal from './TaskModal.vue'

const taskStore = useTaskStore()

const statuses = [
    { label: 'TODO', value: 'TODO' },
    { label: 'In Progress', value: 'In progress' },
    { label: 'Done', value: 'Done' },
]

const filteredTasks = (status) => {

    return taskStore.tasks.filter(task => task.status === status)
}


const closeModal = () => {
    taskStore.closeModal()
}

const saveTask = (taskData) => {
    if (taskData.id) {
        taskStore.updateTask(taskData)
    } else {
        taskStore.addTask({
            ...taskData,
            id: Date.now().toString(),
        })
    }
    closeModal()
}
</script>
<style scoped>
.board-bg {
    height: calc(100VH - 104px);
    overflow-y:auto ;
}
</style>