import {Router} from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/explore", "/pages/explore.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
