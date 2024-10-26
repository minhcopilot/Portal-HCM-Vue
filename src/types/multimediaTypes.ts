interface MultimediaContent {
    id: string;
    title: string;
    mainContent: {
        image: string;
        title: string;
        hasPlayButton: boolean;
    };
    subContent: {
        image: string;
        title: string;
    }[];
}
interface MultimediaItem {
    id: string;
    title: string;
}
export type { MultimediaContent, MultimediaItem };
