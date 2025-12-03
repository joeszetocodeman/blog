import BlogController from '@/actions/App/Http/Controllers/Admin/BlogController';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@inertiajs/react';

export default function AdminBlogForm({ blog, action, method }: { blog: App.Datas.BlogData, action: string, method: 'PUT'|'POST' }) {
    return (
        <Form action={action} method={method}>
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
    );
}
