interface Category {
    id: string
    name: string
    contentId: string
}

interface NewsItem {
    image: string
    title: string
}

interface NewsContent {
    [categoryId: string]: {
        main: NewsItem
        secondary: NewsItem[]
    }
}

export type {
    Category,
    NewsItem,
    NewsContent
} 
