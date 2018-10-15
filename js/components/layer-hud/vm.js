import template from '../../templates/layer-hud.html'
import styles from './computed-styles'
export default {
    name: "layer-hud",
    template,
    props: [],
    data() {
        return {}
    },
    computed: {
        ...styles
    }
}
