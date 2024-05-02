export interface Blog {
    contents: [{
        id: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,       
        revisedAt: string,
        title: string,
        body: string,
        thumbnail: Thumbnail | null,
        category: Category,
        ToC: boolean,
    }],
    totalCount: number,
    offset: number,
    limit: number,
}

export interface BlogContents {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,       
    revisedAt: string,
    title: string,
    body: string,
    thumbnail: Thumbnail | null,
    category: Category,
    ToC: boolean,
}

export interface Thumbnail {
    url: string,
    height: number,
    width: number,
}

export interface Category {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    name: string,
}