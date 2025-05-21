# FingertipAllianceFrontEnd

## Project Stack
Vue3 + Vite + TypeScript + ...

## Two Modules:
1. FingertipAllianceFrontEnd: Frontend
2. FingertipAllianceServer: Backend (Node + Express + MySQL, purpose is to provide data)

## Project Setup
- Toolchain: npm create vue@latest
- Install dependencies:
    - axios
    - less less-loader
    - vant


### Vant UI Component Library 
- Install dependencies: `npm i @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D`
- Modify `vite.config.ts`
```
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

## Vue 2 and Vue 3 
Go to: Settings → User Settings → Search vue.json, and add or edit:
```
{
	"vue3": {
		"prefix": "vue3",
		"body": [
			"<template>",
			"  <div class=\"\">",
			"",
			"  </div>",
			"</template>",
			"<script setup lang=\"ts\">",
			"import {ref,reactive} from \"vue\"",
			"",
			"</script>",
			"<style lang=\"less\" scoped>",
			"",
			"</style>",
			""
		],
		"description": "Quickly create a Vue 3 template"
	},
	"vue2": {
		"prefix": "vue2",
		"body": [
			"<template>",
			"  <div class=\"\">",
			"",
			"  </div>",
			"</template>",
			"<script>",
			"",
			"</script>",
			"<style lang=\"less\" scoped>",
			"",
			"</style>",
			""
		],
		"description": "Quickly create a Vue 2 template"
	}
}
```


## Local Storage Persistence
1. Install dependency:npm install --save pinia-plugin-persist
2. Use the plugin accordingly in your store setup

## CORS (Cross-Origin Resource Sharing)
1. Reason for CORS issues:
JavaScript enforces the same-origin policy – different ports, domains, or protocols cause cross-origin issues.
2.Solutions:

Backend: Use cors module

Frontend: Use proxy settings (configured in vite.config.ts)
3. Environment differences:

Backend solutions work in both development and production

Frontend proxy only works during development; production needs other solutions


## About Token (JWT)
Refer to this tutorial:
https://ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html


## Alipay Integration
Everyone needs to install the Alipay Sandbox App on their mobile phone.
