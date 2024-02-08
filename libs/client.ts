import { MicroCMSQueries, createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN || '',
    apiKey: process.env.MICRO_CMS_API_KEY || '',
});

export const getBlog = async(queries?: MicroCMSQueries) => {
    const Blog = await client.get<Blog>({
        endpoint: 'blog',
        queries,
    });
    return Blog;
}

export const getBlogByCategory = async(
    categoryId: string,
    queries?: MicroCMSQueries
) => {
    const Blog = await client.get<Blog>({
        endpoint: 'blog',
        queries: {
            filters: `category[equals]${categoryId}`,
            ...queries,
        },
    });
    return Blog;
}

export const getDetail = async(
    contentId: string,
) => {
    const detailData = await client.getListDetail({
        endpoint: 'blog',
        contentId,
    });
    return detailData;
}

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