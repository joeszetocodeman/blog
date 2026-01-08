import BlogController from './BlogController'
import Admin from './Admin'
import UploadController from './UploadController'
import Settings from './Settings'

const Controllers = {
    BlogController: Object.assign(BlogController, BlogController),
    Admin: Object.assign(Admin, Admin),
    UploadController: Object.assign(UploadController, UploadController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers