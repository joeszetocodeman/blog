import BlogController from './BlogController'
import Admin from './Admin'
import Settings from './Settings'

const Controllers = {
    BlogController: Object.assign(BlogController, BlogController),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers