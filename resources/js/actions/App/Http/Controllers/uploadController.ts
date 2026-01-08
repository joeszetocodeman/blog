import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\uploadController::__invoke
* @see app/Http/Controllers/uploadController.php:11
* @route '/upload-endpoint'
*/
const uploadController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadController.url(options),
    method: 'post',
})

uploadController.definition = {
    methods: ["post"],
    url: '/upload-endpoint',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\uploadController::__invoke
* @see app/Http/Controllers/uploadController.php:11
* @route '/upload-endpoint'
*/
uploadController.url = (options?: RouteQueryOptions) => {
    return uploadController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\uploadController::__invoke
* @see app/Http/Controllers/uploadController.php:11
* @route '/upload-endpoint'
*/
uploadController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\uploadController::__invoke
* @see app/Http/Controllers/uploadController.php:11
* @route '/upload-endpoint'
*/
const uploadControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\uploadController::__invoke
* @see app/Http/Controllers/uploadController.php:11
* @route '/upload-endpoint'
*/
uploadControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadController.url(options),
    method: 'post',
})

uploadController.form = uploadControllerForm

export default uploadController