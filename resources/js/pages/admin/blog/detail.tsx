import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { Form } from '@inertiajs/react'
import AdminBlogForm from '@/pages/admin/blog/blog-form';
import BlogController from '@/actions/App/Http/Controllers/BlogController';
import BlogAdminController from '@/actions/App/Http/Controllers/Admin/BlogController';
export default function AdminBlogDetailPage({
    blog,
}: {
    blog: App.Datas.BlogData;
}) {
    return (
        <AppLayout>
            <Head title={blog.title} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 justify-between w-full">
                        <div className='flex'>
                            <Link href="/admin/blog">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                            </Link>
                            <h1 className="text-3xl font-bold">Blog Details</h1>
                        </div>
                        <div>
                            <Button asChild>
                                <a href={BlogController.detail( blog.id ).url} target='_blank'>
                                    View Blog
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>

                <AdminBlogForm blog={blog} action={BlogAdminController.update(blog.id).url} method="PUT" />
            </div>
        </AppLayout>
    );
}
