export const ActiveLinks = {

    data(){
        return {
            activeLinkClass: 'is-active',
        }
    },
    computed: {
        currentPage () {
            return this.$route.path
        }
    }
}