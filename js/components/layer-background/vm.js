import template from '../../templates/layer-background.html'
import styles from './computed-styles'
export default {
    name: "layer-background",
    template,
    props: [],
    data() {
        return {}
    },
    computed: {
        ...styles
    }
}
