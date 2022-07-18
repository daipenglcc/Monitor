import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

const app = createApp(App)

Sentry.init({
	app,
	dsn: 'https://daf508a612a448edbf1688904c0f5d4d@o1323194.ingest.sentry.io/6580710',
	integrations: [
		new BrowserTracing({
			// routingInstrumentation: Sentry.vueRouterInstrumentation(router),
			tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
		})
	],
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0
})

app.mount('#app')
