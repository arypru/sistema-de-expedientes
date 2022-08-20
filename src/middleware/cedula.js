export default function guest({ next, store }) {
    if (!(store.getters.get_nro === 13 || store.getters.get_nro === 6)) {
        return next({
            name: 'Home'
        })
    } else {
        next();
    }
}