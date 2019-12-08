// https://qiita.com/potato4d/items/5e267b828cfaba2ac960
export type EnvironmentVariables = {
  NODE_ENV: string
  browser: boolean
  client: boolean
  mode: 'spa' | 'universal'
  modern: boolean
  server: boolean
  static: boolean
  // your project keys
  SAMPLE_KEY: string
}

export const environments: EnvironmentVariables = {
  NODE_ENV: process.env.NODE_ENV!,
  browser: process.browser!,
  client: process.client!,
  mode: process.mode!,
  modern: process.modern!,
  server: process.server!,
  static: process.static!,
  // your project keys
  SAMPLE_KEY: process.env.SAMPLE_KEY!
}

export const validate = () => {
  if (!process.env.CI) {
    Object.entries(environments).forEach(([key, value]) => {
      if (['browser', 'client', 'mode', 'modern', 'server', 'static'].includes(key)) {
        return
      }
      // @ts-ignore
      if (environments[key] === undefined || environments[key] === null) {
        console.error(`Missing environment variable: '${key}'`)
        process.exit(1)
      }
    })
  }
}

// @ts-ignore
export default (context, inject: (name: string, v: any) => any) => {
  inject('environments', environments)
}
