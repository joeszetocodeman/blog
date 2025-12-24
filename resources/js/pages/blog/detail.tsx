import { ArticleLayout } from '@/components/ArticleLayout';

export default function BlogDetail({ blog }: { blog: App.Datas.BlogData }) {
    return (
        <ArticleLayout blog={blog}>
            <div className="pb-48">
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
        </ArticleLayout>
    );
}
