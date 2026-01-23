import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BlogController::index
* @see app/Http/Controllers/Admin/BlogController.php:13
* @route '/admin/blog'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::index
* @see app/Http/Controllers/Admin/BlogController.php:13
* @route '/admin/blog'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::index
* @see app/Http/Controllers/Admin/BlogController.php:13
* @route '/admin/blog'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::index
* @see app/Http/Controllers/Admin/BlogController.php:13
* @route '/admin/blog'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::index
* @see app/Http/Controllers/Admin/BlogController.php:13
* @route '/admin/blog'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::index
* @see app/Http/Controllers/Admin/BlogController.php:13
* @route '/admin/blog'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::index
* @see app/Http/Controllers/Admin/BlogController.php:13
* @route '/admin/blog'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Admin\BlogController::create
* @see app/Http/Controllers/Admin/BlogController.php:42
* @route '/admin/blog/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/blog/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::create
* @see app/Http/Controllers/Admin/BlogController.php:42
* @route '/admin/blog/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::create
* @see app/Http/Controllers/Admin/BlogController.php:42
* @route '/admin/blog/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::create
* @see app/Http/Controllers/Admin/BlogController.php:42
* @route '/admin/blog/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::create
* @see app/Http/Controllers/Admin/BlogController.php:42
* @route '/admin/blog/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::create
* @see app/Http/Controllers/Admin/BlogController.php:42
* @route '/admin/blog/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::create
* @see app/Http/Controllers/Admin/BlogController.php:42
* @route '/admin/blog/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Admin\BlogController::store
* @see app/Http/Controllers/Admin/BlogController.php:49
* @route '/admin/blog'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/blog',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::store
* @see app/Http/Controllers/Admin/BlogController.php:49
* @route '/admin/blog'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::store
* @see app/Http/Controllers/Admin/BlogController.php:49
* @route '/admin/blog'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::store
* @see app/Http/Controllers/Admin/BlogController.php:49
* @route '/admin/blog'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::store
* @see app/Http/Controllers/Admin/BlogController.php:49
* @route '/admin/blog'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\BlogController::show
* @see app/Http/Controllers/Admin/BlogController.php:20
* @route '/admin/blog/{blog}'
*/
export const show = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/blog/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::show
* @see app/Http/Controllers/Admin/BlogController.php:20
* @route '/admin/blog/{blog}'
*/
show.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::show
* @see app/Http/Controllers/Admin/BlogController.php:20
* @route '/admin/blog/{blog}'
*/
show.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::show
* @see app/Http/Controllers/Admin/BlogController.php:20
* @route '/admin/blog/{blog}'
*/
show.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::show
* @see app/Http/Controllers/Admin/BlogController.php:20
* @route '/admin/blog/{blog}'
*/
const showForm = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::show
* @see app/Http/Controllers/Admin/BlogController.php:20
* @route '/admin/blog/{blog}'
*/
showForm.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::show
* @see app/Http/Controllers/Admin/BlogController.php:20
* @route '/admin/blog/{blog}'
*/
showForm.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Admin\BlogController::edit
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}/edit'
*/
export const edit = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/blog/{blog}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::edit
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}/edit'
*/
edit.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    if (Array.isArray(args)) {
        args = {
            blog: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blog: args.blog,
    }

    return edit.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::edit
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}/edit'
*/
edit.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::edit
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}/edit'
*/
edit.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::edit
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}/edit'
*/
const editForm = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::edit
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}/edit'
*/
editForm.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::edit
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}/edit'
*/
editForm.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\BlogController::update
* @see app/Http/Controllers/Admin/BlogController.php:29
* @route '/admin/blog/{blog}'
*/
export const update = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/blog/{blog}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::update
* @see app/Http/Controllers/Admin/BlogController.php:29
* @route '/admin/blog/{blog}'
*/
update.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::update
* @see app/Http/Controllers/Admin/BlogController.php:29
* @route '/admin/blog/{blog}'
*/
update.put = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::update
* @see app/Http/Controllers/Admin/BlogController.php:29
* @route '/admin/blog/{blog}'
*/
update.patch = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::update
* @see app/Http/Controllers/Admin/BlogController.php:29
* @route '/admin/blog/{blog}'
*/
const updateForm = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::update
* @see app/Http/Controllers/Admin/BlogController.php:29
* @route '/admin/blog/{blog}'
*/
updateForm.put = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::update
* @see app/Http/Controllers/Admin/BlogController.php:29
* @route '/admin/blog/{blog}'
*/
updateForm.patch = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\BlogController::destroy
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}'
*/
export const destroy = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/blog/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::destroy
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}'
*/
destroy.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    if (Array.isArray(args)) {
        args = {
            blog: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blog: args.blog,
    }

    return destroy.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::destroy
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}'
*/
destroy.delete = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::destroy
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}'
*/
const destroyForm = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogController::destroy
* @see app/Http/Controllers/Admin/BlogController.php:0
* @route '/admin/blog/{blog}'
*/
destroyForm.delete = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const BlogController = { index, create, store, show, edit, update, destroy }

export default BlogController