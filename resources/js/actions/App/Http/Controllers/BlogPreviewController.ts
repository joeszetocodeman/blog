import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BlogPreviewController::__invoke
* @see app/Http/Controllers/BlogPreviewController.php:11
* @route '/blog/{blog}/preview'
*/
const BlogPreviewController = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlogPreviewController.url(args, options),
    method: 'get',
})

BlogPreviewController.definition = {
    methods: ["get","head"],
    url: '/blog/{blog}/preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPreviewController::__invoke
* @see app/Http/Controllers/BlogPreviewController.php:11
* @route '/blog/{blog}/preview'
*/
BlogPreviewController.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { blog: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            blog: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blog: typeof args.blog === 'object'
        ? args.blog.id
        : args.blog,
    }

    return BlogPreviewController.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPreviewController::__invoke
* @see app/Http/Controllers/BlogPreviewController.php:11
* @route '/blog/{blog}/preview'
*/
BlogPreviewController.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlogPreviewController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPreviewController::__invoke
* @see app/Http/Controllers/BlogPreviewController.php:11
* @route '/blog/{blog}/preview'
*/
BlogPreviewController.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BlogPreviewController.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPreviewController::__invoke
* @see app/Http/Controllers/BlogPreviewController.php:11
* @route '/blog/{blog}/preview'
*/
const BlogPreviewControllerForm = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlogPreviewController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPreviewController::__invoke
* @see app/Http/Controllers/BlogPreviewController.php:11
* @route '/blog/{blog}/preview'
*/
BlogPreviewControllerForm.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlogPreviewController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPreviewController::__invoke
* @see app/Http/Controllers/BlogPreviewController.php:11
* @route '/blog/{blog}/preview'
*/
BlogPreviewControllerForm.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlogPreviewController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BlogPreviewController.form = BlogPreviewControllerForm

export default BlogPreviewController