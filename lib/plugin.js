import sanityClient from '@sanity/client'

// Config data for Sanity Client
const sanity = sanityClient({
  projectId: <%= JSON.stringify(options.projectId) %>,
  dataset: <%= JSON.stringify(options.dataset) %>,
  token: <%= JSON.stringify(options.token) %>,
  useCdn: <%= options.useCdn %>,
  withCredentials: <%= options.withCredentials %>
})

export default (context, inject) => {
  // Inject sanity client to the instance and context as $sanity
  context.$sanity = sanity
  inject('sanity', sanity)
}