import template from '../../templates/layer-foreground.html'
import styles from './computed-styles'
export default {
    name: "layer-foreground",
    template,
    props: [],
    data() {
        return {}
    },
    computed: {
        ...styles
    }
}
