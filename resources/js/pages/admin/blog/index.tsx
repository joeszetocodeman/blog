import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function AdminBlogIndexPage({ blogs }: {
    blogs: App.Datas.BlogData[];
}) {
    return (
        <AppLayout>
            <Head title="Blog" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                { blogs.map((blog) => {
                    return <a>
                        { blog.title }
                    </a>
                }) }
            </div>
        </AppLayout>
    );
}
