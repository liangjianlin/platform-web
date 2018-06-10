module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    // 校验 .vue 文件
    extends: 'standard',
    plugins: [
        'html'
    ],
    // 自定义规则
    rules: {},
    globals: {}
}