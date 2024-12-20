const Mock = require('mockjs');
export default [
    {
        url: '/category',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'Javascripts',
                        href: '/category/java'
                    },
                    {
                        id: 2,
                        title: 'React',
                        href: '/category/SpringBoot',
                    },
                    {
                        id: 3,
                        title: 'Electron',
                        href: '/category/MySql'
                    },
                    {
                        id: 4,
                        title: '随笔',
                        href: '/category/live'
                    }
                ]
            }
        }
    }
]