const NavItemStore = {
    data: true,
    toggleNavItem() {
        this.data=!this.data
        document.body.classList.toggle('topbar_open')
    }
}

const NavItemPlugin = {
    install(Vue, options) {
        let app = new Vue({
            data: {
                navItemStore: NavItemStore
            }
        })
        Vue.prototype.$navitem = app.navItemStore
    }
}
export default NavItemPlugin