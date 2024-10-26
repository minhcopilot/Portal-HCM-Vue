import { newsApi } from '@/services/newsApi'
import type { Category, NewsContent } from '@/types/newsTypes'
import type { MultimediaContent } from '@/types/multimediaTypes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNewsStore = defineStore('news', () => {
    const categories = ref<Category[]>([])
    const newsContent = ref<NewsContent>({})
    const error = ref<string | null>(null)

    const fetchNews = async () => {
        try {
            const news = await newsApi.getNews()
            categories.value = news.categories
            newsContent.value = news.newsContent
            error.value = null
            return { success: true }
        } catch (error: any) {
            error.value = 'Có lỗi xảy ra, vui lòng thử lại sau!'
            return { success: false, message: error.value }
        }
    }
    return { categories, newsContent, fetchNews, error }
})

export const useMultimediaStore = defineStore('multimedia', () => {
    const multimediaContent = ref<MultimediaContent[]>([])
    const error = ref<string | null>(null)
    const fetchMultimedia = async () => {
        try {
            const multimedia = await newsApi.getNews()
            multimediaContent.value = multimedia.multimediaData
            error.value = null
            return { success: true }
        } catch (error: any) {
            error.value = 'Có lỗi xảy ra, vui lòng thử lại sau!'
            return { success: false, message: error.value }
        }
    }
    return { multimediaContent, fetchMultimedia, error }
})

