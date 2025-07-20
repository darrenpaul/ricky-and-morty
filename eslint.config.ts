// export default typescriptEslint.config(
//   { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
//   {
//     extends: [
//       eslint.configs.recommended,
//       ...typescriptEslint.configs.recommended,
//       ...eslintPluginVue.configs['flat/recommended'],
//     ],
//     files: ['**/*.{ts,vue}'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       globals: globals.browser,
//       parserOptions: {
//         parser: typescriptEslint.parser,
//       },
//     },
//     rules: {
//       // your rules
//     },
//   },
//   eslintConfigPrettier,
// )
import antfu from '@antfu/eslint-config'

// import { globalIgnores } from 'eslint/config'
// import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import pluginVue from 'eslint-plugin-vue'
// import pluginVitest from '@vitest/eslint-plugin'
// import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// // To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// // import { configureVueProject } from '@vue/eslint-config-typescript'
// // configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// // More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// export default defineConfigWithVueTs(
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//   },

//   globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

//   pluginVue.configs['flat/strongly-recommended'],
//   // vueTsConfigs.recommended,

//   {
//     ...pluginVitest.configs.recommended,
//     files: ['src/**/__tests__/*'],
//     rules: {},
//   },
//   skipFormatting,
// )
// import eslint from '@eslint/js'
// import eslintConfigPrettier from 'eslint-config-prettier'
// import eslintPluginVue from 'eslint-plugin-vue'
// import globals from 'globals'
// import typescriptEslint from 'typescript-eslint'

// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

export default antfu()
