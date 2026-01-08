import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UploadController::__invoke
* @see app/Http/Controllers/UploadController.php:11
* @route '/upload-endpoint'
*/
const UploadController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadController.url(options),
    method: 'post',
})

UploadController.definition = {
    methods: ["post"],
    url: '/upload-endpoint',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UploadController::__invoke
* @see app/Http/Controllers/UploadController.php:11
* @route '/upload-endpoint'
*/
UploadController.url = (options?: RouteQueryOptions) => {
    return UploadController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UploadController::__invoke
* @see app/Http/Controllers/UploadController.php:11
* @route '/upload-endpoint'
*/
UploadController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UploadController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UploadController::__invoke
* @see app/Http/Controllers/UploadController.php:11
* @route '/upload-endpoint'
*/
const UploadControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UploadController::__invoke
* @see app/Http/Controllers/UploadController.php:11
* @route '/upload-endpoint'
*/
UploadControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UploadController.url(options),
    method: 'post',
})

UploadController.form = UploadControllerForm

export default UploadController