import axiosInstance from "@/config/axiosInstant"

const getNews = async () => {
    const news = await axiosInstance.get('/news')
    return news.data[0]
}
const getLeaders = async () => {
                                                                const leadership = await axiosInstance.get('/leaders')














    console.log(leadership.data[0])
    return leadership.data[0]
}
export const newsApi = { getNews, getLeaders }
