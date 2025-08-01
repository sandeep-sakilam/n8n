import { defineConfig } from 'eslint/config';
import { baseConfig } from '@n8n/eslint-config/base';

export default defineConfig(baseConfig, {
	rules: {
		'unicorn/filename-case': ['error', { case: 'kebabCase' }],
	},
});
