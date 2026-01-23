import BlogAdminController from '@/actions/App/Http/Controllers/Admin/BlogController';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import AdminBlogForm from '@/pages/admin/blog/blog-form';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
export default function AdminBlogDetailPage({
    blog,
    previewUrl,
}: {
    blog: App.Datas.BlogData;
    previewUrl: string;
}) {
    return (
        <AppLayout>
            <Head title={blog.title} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex w-full items-center justify-between gap-4">
                        <div className="flex">
                            <Link href="/admin/blog">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                            </Link>
                            <h1 className="text-3xl font-bold">Blog Details</h1>
                        </div>
                        <div>
                            <Button asChild>
                                <a href={previewUrl} target="_blank">
                                    View Blog
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <AdminBlogForm
                    blog={blog}
                    action={BlogAdminController.update(blog.id).url}
                    method="PUT"
                />
            </div>
        </AppLayout>
    );
}
