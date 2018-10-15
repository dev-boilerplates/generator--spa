const Foo = { template: '<div>foo</div>' }

export default [
    {
        path: '/',
        name: 'root',
        components: {
            default: Foo
        },
        children: [
            // {
            //     path: 'start',
            //     name: 'start',
            //     component: Start
            // },
            // {
            //     path: 'zone/:zone',
            //     name: 'zone',
            //     component: Zone
            // }
        ]
    }
]
