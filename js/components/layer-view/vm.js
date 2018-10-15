import template from '../../templates/layer-view.html'
import styles from './computed-styles'
export default {
    name: "layer-view",
    template,
    props: [],
    data() {
        return {}
    },
    computed: {
        ...styles
    }
}
