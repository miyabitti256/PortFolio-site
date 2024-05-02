import { Blog } from "@/types/client_type";
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