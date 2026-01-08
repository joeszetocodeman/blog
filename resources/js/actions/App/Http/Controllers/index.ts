import BlogController from './BlogController'
import Admin from './Admin'
import uploadController from './uploadController'
import Settings from './Settings'

const Controllers = {
    BlogController: Object.assign(BlogController, BlogController),
    Admin: Object.assign(Admin, Admin),
    uploadController: Object.assign(uploadController, uploadController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers