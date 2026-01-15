import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@babel/runtime/helpers/builtin/interopRequireDefault": "@babel/runtime/helpers/interopRequireDefault",
      "@babel/runtime/helpers/builtin/extends": "@babel/runtime/helpers/extends",
      "@babel/runtime/helpers/builtin/objectWithoutProperties": "@babel/runtime/helpers/objectWithoutProperties",
      "@babel/runtime/helpers/builtin/classCallCheck": "@babel/runtime/helpers/classCallCheck",
      "@babel/runtime/helpers/builtin/createClass": "@babel/runtime/helpers/createClass",
      "@babel/runtime/helpers/builtin/possibleConstructorReturn": "@babel/runtime/helpers/possibleConstructorReturn",
      "@babel/runtime/helpers/builtin/inherits": "@babel/runtime/helpers/inherits",
      "@babel/runtime/helpers/builtin/defineProperty": "@babel/runtime/helpers/defineProperty",
      "@babel/runtime/helpers/builtin/assertThisInitialized": "@babel/runtime/helpers/assertThisInitialized",
      "@babel/runtime/helpers/builtin/typeof": "@babel/runtime/helpers/typeof",
      "@babel/runtime/helpers/builtin/getPrototypeOf": "@babel/runtime/helpers/getPrototypeOf",
      "@babel/runtime/helpers/builtin/slicedToArray": "@babel/runtime/helpers/slicedToArray",
      "@babel/runtime/helpers/builtin/toConsumableArray": "@babel/runtime/helpers/toConsumableArray",
    }
  }
})