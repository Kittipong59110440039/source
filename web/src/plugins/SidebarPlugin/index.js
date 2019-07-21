const SidebarStore = {
    data: true,
    toggleSidebar() {
        this.data=!this.data
        document.body.classList.toggle('sidebar-mini')
    }
}

const SidebarPlugin = {
    install(Vue, options) {
        let app = new Vue({
            data: {
                sidebarStore: SidebarStore
            }
        })
        Vue.prototype.$sidebar = app.sidebarStore
    }
}
export default SidebarPlugin