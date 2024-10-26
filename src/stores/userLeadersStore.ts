import type { ChairPerson, ViceChairpersons } from '@/types/leadersTypes'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { newsApi } from '@/services/newsApi'

export const useLeadersStore = defineStore('leaders', () => {
    const chairperson = ref<ChairPerson>({
        name: '',
        title: '',
        image: '',
        description: ''
    })
    const viceChairpersons = ref<ViceChairpersons[]>([])
    const error = ref<string>('')
    const fetchLeaders = async () => {
        try {
            const leaders = await newsApi.getLeaders()
            chairperson.value = leaders.chairperson
            viceChairpersons.value = leaders.viceChairpersons

        } catch (error: any) {
            error.value = 'Có lỗi xảy ra, vui lòng thử lại sau!'
            return { success: false, message: error.value }
        }
    }
    return { chairperson, viceChairpersons, fetchLeaders, error }
})

