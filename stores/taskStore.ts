import { defineStore } from 'pinia'

export interface Task {
    id: string
    title: string
    description: string
    assignee: string
    performers: string[]
    status: 'TODO' | 'In progress' | 'Done'
    priority: 'Low' | 'Medium' | 'High'
}

interface TaskStoreState {
    tasks: Task[]  
    modalVisible: boolean  
    currentTask: Task | null  
}

export const useTaskStore = defineStore('taskStore', {
    state: (): TaskStoreState => ({
        tasks: [
            {
                id: '1',
                title: 'Task 1',
                description: 'Description 1',
                assignee: 'John',
                performers: ['Anna', 'John'],
                priority: 'High',
                status: 'TODO'
            },
            {
                id: '2',
                title: 'Task 2',
                description: 'Description 2',
                assignee: 'Jane',
                performers: ['Jane', 'Lukas', 'John'],
                priority: 'Medium',
                status: 'In progress'
            },
            {
                id: '3',
                title: 'Task 3',
                description: 'Description 3',
                assignee: 'Jane',
                performers: ['Anna'],
                priority: 'Medium',
                status: 'In progress'
            },
            {
                id: '4',
                title: 'Task 4',
                description: 'Description 4',
                assignee: 'Jane',
                performers: ['Jane'],
                priority: 'Low',
                status: 'TODO'
            },
            {
                id: '5',
                title: 'Task 5',
                description: 'Description 5',
                assignee: 'Jane',
                performers: ['John'],
                priority: 'Low',
                status: 'Done'
            },
        ],
        modalVisible: false,
        currentTask: null,
    }),
    actions: {
        updateTaskStatus(id: string, newStatus: Task['status']) {
            const task = this.tasks.find((task) => task.id === id)
            if (task) {
                task.status = newStatus
            }
        },

        addTask(task: Task) {
            this.tasks.push({
                ...task,
                id: Date.now().toString(), 
            })
        },

        updateTask(updatedTask: Task) {
            const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
            if (index !== -1) {
                this.tasks[index] = updatedTask
            }
        },

        openModal(task: Task | null) {
            this.currentTask = task
            this.modalVisible = true
        },

        closeModal() {
            this.modalVisible = false
            this.currentTask = null
        },
    },
    getters: {
        tasksByStatus: (state) => (status: Task['status']) => {
            return state.tasks.filter((task) => task.status === status)
        },
    },
})
