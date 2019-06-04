jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('../example/nuxt.config')
config.dev = false

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

describe('basic', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  // Test sanity config
  const sanity = config.sanity

  test('sanity config is an object', () => {
    expect(typeof sanity).toBe('object')
  })
  // Test required config options
  test('required sanity config options exist', () => {
    expect(sanity).toHaveProperty('projectId')
    expect(sanity).toHaveProperty('dataset')
  })

  test('required config options, project ID and dataset, are strings', () => {
    expect(typeof sanity.projectId).toBe('string')
    expect(typeof sanity.dataset).toBe('string')
  })
})
