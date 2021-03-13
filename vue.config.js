const svgFilePath = 'svg file path （absolute path)'

{
    chainWebpack(config) {
        config.module
            .rule('vue-svgicon')
            .include.add(svgFilePath)
            .end()
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/svgicon-loader')
            .options({
                svgFilePath
            })

        config.module.rule('svg').exclude.add(svgFilePath).end()

        // Recommended configuration transformAssetUrls
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap((opt) => {
                opt.transformAssetUrls = opt.transformAssetUrls || {}
                opt.transformAssetUrls['icon'] = ['data']
                return opt
            })

        // Recommended configuration alias
        config.resolve.alias.set('@icon', svgFilePath)
    }
}