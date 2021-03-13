{
    module: {
        rules: [
            {
                test: /\.svg$/,
                include: ['SVG 文件路径'],
                use: [
                    {
                        loader: '@yzfe/svgicon-loader',
                        options: {
                            svgFilePath: ['SVG 文件路径'],
                            svgoConfig: null // Custom svgo configuration
                        }
                    }
                ]
            },
            //  transformAssetUrls
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            transformAssetUrls: {
                                ['标签名']: 'data' // The globally registered tag name, the default is icon
                            }
                        }
                    }
                ]
            }
        ]
    }
}