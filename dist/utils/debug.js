import { noop } from './env'

export let log = noop

export let warn = noop

export let error = noop

if ('production' !== 'production') {
  log = console.log
  warn = console.warn
  error = console.error
}
