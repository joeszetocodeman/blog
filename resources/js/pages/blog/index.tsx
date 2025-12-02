export default function BlogIndex({ blogs }: { blogs: App.Datas.BlogData[] }) {
    return (
        <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                        I am codeman
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
                        here is somewhere to waste you time reading my blog...
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20">
                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="relative isolate flex flex-col gap-8 lg:flex-row"
                            >
                                {blog.imageUrl && (
                                    <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                                        <img
                                            alt=""
                                            src={blog.imageUrl}
                                            className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover dark:bg-gray-800"
                                        />
                                        <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time
                                            dateTime={blog.datetime}
                                            className="text-gray-500 dark:text-gray-400"
                                        >
                                            {blog.created_at}
                                        </time>
                                        {/*<a*/}
                                        {/*    href={blog.category.href}*/}
                                        {/*    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"*/}
                                        {/*>*/}
                                        {/*    {blog.category.title}*/}
                                        {/*</a>*/}
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                                            <a href={blog.href}>
                                                <span className="absolute inset-0" />
                                                {blog.title}
                                            </a>
                                        </h2>
                                        <p className="mt-5 text-sm/6 text-gray-600 dark:text-gray-400">
                                            {blog.content}
                                        </p>
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
