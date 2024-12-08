const Mock = require('mockjs');
export default [
    {
        url: '/focus/list',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'Hot7',
                        img: 'https://www.hot7zzz.cn/wp-content/uploads/2024/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240908040437-1024x590.jpg'
                    },
                    {
                        id: 2,
                        title: 'Hot7',
                        img: 'https://www.hot7zzz.cn/wp-content/uploads/2024/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240908040437-1024x590.jpg'
                    },
                    {
                        id: 3,
                        title: 'Hot7',
                        img: 'https://www.hot7zzz.cn/wp-content/uploads/2024/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240908040437-1024x590.jpg'
                    }
                ]
            }
        }
    }
]