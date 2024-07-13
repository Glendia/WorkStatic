export const vite = {

        css: {
          postcss: {
            plugins: [
              require('postcss-preset-env')({
                stage: 3,
                features: {
                  'backdrop-filter': true,
                },
              }),
            ],
          },
        },
}