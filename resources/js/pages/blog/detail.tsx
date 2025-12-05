import { ArticleLayout } from '@/components/ArticleLayout';

export default function BlogDetail({ blog }: { blogs: App.Datas.BlogData }) {
    return (
        <ArticleLayout blog={blog}>
            <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </ArticleLayout>
    );
}
