import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@inertiajs/react';
import { kebabCase } from 'lodash-es';
import { useRef, useState } from 'react';

export default function AdminBlogForm({
    blog,
    action,
    method,
}: {
    blog: App.Datas.BlogData;
    action: string;
    method: 'PUT' | 'POST';
}) {
    const slugEl = useRef<HTMLInputElement>(null);
    const contentEl = useRef<HTMLInputElement>(null);
    const [jsonContent, setJsonContent] = useState();
    return (
        <Form
            action={action}
            method={method}
            transform={(data) => {
                console.log(data);
                return {
                    ...data,
                    json_content: jsonContent,
                };
            }}
        >
            {({ getData, errors }) => {
                return (
                    <div>
                        <div className="space-y-6 rounded-lg border p-6">
                            <div>
                                <h2 className="mb-2 text-sm font-medium text-muted-foreground">
                                    Title
                                </h2>
                                <Input
                                    defaultValue={blog.title}
                                    name="title"
                                    onChange={() => {
                                        slugEl.current!.value = kebabCase(
                                            getData()['title'],
                                        );
                                    }}
                                    className="text-2xl font-semibold"
                                    placeholder="Enter blog title"
                                />
                            </div>

                            <div>
                                <h2 className="mb-2 text-sm font-medium text-muted-foreground">
                                    Slug
                                </h2>
                                <Input
                                    ref={slugEl}
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
                                {/*<UploadableTextarea blog={blog} />*/}

                                <SimpleEditor
                                    content={blog.json_content}
                                    onUpdate={({ editor }) => {
                                        setJsonContent(editor.getJSON());
                                    }}
                                />
                                {errors.json_content && (
                                    <div> {errors.json_content} </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4">
                            <Button>submit</Button>
                        </div>
                    </div>
                );
            }}
        </Form>
    );
}
