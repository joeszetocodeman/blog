import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\BlogController::detail
* @see app/Http/Controllers/BlogController.php:18
* @route '/blog/{blog}'
*/
export const detail = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/blog/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::detail
* @see app/Http/Controllers/BlogController.php:18
* @route '/blog/{blog}'
*/
detail.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return detail.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::detail
* @see app/Http/Controllers/BlogController.php:18
* @route '/blog/{blog}'
*/
detail.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::detail
* @see app/Http/Controllers/BlogController.php:18
* @route '/blog/{blog}'
*/
detail.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::detail
* @see app/Http/Controllers/BlogController.php:18
* @route '/blog/{blog}'
*/
const detailForm = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::detail
* @see app/Http/Controllers/BlogController.php:18
* @route '/blog/{blog}'
*/
detailForm.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::detail
* @see app/Http/Controllers/BlogController.php:18
* @route '/blog/{blog}'
*/
detailForm.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detail.form = detailForm

const blog = {
    detail: Object.assign(detail, detail),
}

export default blog