import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { Form } from '@inertiajs/react'
import BlogController from '@/actions/App/Http/Controllers/Admin/BlogController';
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
                    <div className="flex items-center gap-4">
                        <Link href="/admin/blog">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <h1 className="text-3xl font-bold">Blog Details</h1>
                    </div>

                </div>

                <Form action={ BlogController.update(blog.id) } method="post">
                    <div className="space-y-6 rounded-lg border p-6">
                        <div>
                            <h2 className="mb-2 text-sm font-medium text-muted-foreground">
                                Title
                            </h2>
                            <Input
                                defaultValue={blog.title}
                                name="title"
                                className="text-2xl font-semibold"
                                placeholder="Enter blog title"
                            />
                        </div>

                        <div>
                            <h2 className="mb-2 text-sm font-medium text-muted-foreground">
                                Slug
                            </h2>
                            <Input
                                defaultValue={blog.slug}
                                name="slug"
                                className="font-mono text-sm"
                                placeholder="enter-blog-slug"
                            />
                        </div>

                        <div>
                            <h2 className="mb-2 text-sm font-medium text-muted-foreground">
                                Content
                            </h2>
                            <Textarea
                                defaultValue={blog.content}
                                name="content"
                                className="min-h-[300px] font-sans"
                                placeholder="Enter blog content"
                            />
                        </div>
                    </div>
                    <button>submit</button>
                </Form>
            </div>
        </AppLayout>
    );
}
