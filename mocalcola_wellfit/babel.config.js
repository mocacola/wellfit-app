module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '~': './src',
                    '@store': './src/store',
                    '@hoc': './src/hoc',
                    '@screen': './src/screen',
                    '@lib': './src/lib',
                    '@atom': './src/atom',
                    '@molecule': './src/molecule',
                    '@organism': './src/organism',
                },
            },
        ],
    ],
};
