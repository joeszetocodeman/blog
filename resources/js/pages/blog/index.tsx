export default function BlogIndex({ blogs }) {
    return <div>
        { blogs.map((blog) => (
            <h1>{ blog.title }</h1>
        )}
    </div>
}
