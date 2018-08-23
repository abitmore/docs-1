module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: "GXChain Docs",
            description: "The Technical Docs of GXChain"
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'GXChain文档',
            description: 'GXChain技术文档'
        }
    },
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#21a4e7'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#21a4e7'}]
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'gxchain/docs',
        sidebarDepth:5,
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    {
                        text: 'Guide',
                        link: '/guide/',
                    },
                    {
                        text: 'FAQs',
                        link: '/faq/',
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                    }
                ],
                sidebar: {
                    '/guide/': genSidebarConfig ('Guide')
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    {
                        text: '指南',
                        link: '/zh/guide/',
                    },
                    {
                        text: '常见问题',
                        link: '/zh/faq/',
                    },
                    {
                        text: '更新日志',
                        link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                    }
                ],
                sidebar: {
                    '/zh/guide/': genSidebarConfig ('指南')
                }
            }
        }
    }
};

function genSidebarConfig (title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'clients',
                'apis'
            ]
        }
    ];
}