import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { Form } from '@inertiajs/react'
import BlogController from '@/actions/App/Http/Controllers/Admin/BlogController';
import AdminBlogForm from '@/pages/admin/blog/blog-form';
export default function AdminBlogCreatePage({
    blog,
}: {
    blog: App.Datas.BlogData;
}) {
    return (
        <AppLayout>
            <Head title="Blog Create" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/blog">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <h1 className="text-3xl font-bold">Blog Create</h1>
                    </div>

                </div>
                <AdminBlogForm blog={blog} action={ BlogController.store().url } method="POST" />
            </div>
        </AppLayout>
    );
}
