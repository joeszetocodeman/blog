import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import BlogController from '@/actions/App/Http/Controllers/Admin/BlogController';

export default function AdminBlogIndexPage({ blogs }: {
    blogs: App.Datas.BlogData[];
}) {
    return (
        <AppLayout>
            <Head title="Blog" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div>
                    <Button asChild>
                        <Link href={BlogController.create().url}>
                            New blog
                        </Link>
                    </Button>
                </div>
                { blogs.map((blog) => {
                    return (
                        <Link
                            key={blog.id}
                            href={`/admin/blog/${blog.id}`}
                            className="block rounded-lg border p-4 hover:bg-accent transition-colors"
                        >
                            <h3 className="text-lg font-semibold">{ blog.title }</h3>
                            <p className="text-sm text-muted-foreground mt-1">{ blog.slug }</p>
                        </Link>
                    )
                }) }
            </div>
        </AppLayout>
    );
}
