import uploadController from './uploadController'
import BlogController from './BlogController'
import Admin from './Admin'
import Settings from './Settings'

const Controllers = {
    uploadController: Object.assign(uploadController, uploadController),
    BlogController: Object.assign(BlogController, BlogController),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers