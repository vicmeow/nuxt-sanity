---
sidebarDepth: 4
---

# Usage

How to use the Sanity JavaScript client in Nuxt.js. See the [official documentation](/api) for more information. Sanity uses the GRaph Oriented Query language (GROQ). For an introduction to GROQ, please see the [how to guide](https://www.sanity.io/docs/data-store/how-queries-work). You can also read this [technical reference](https://www.sanity.io/docs/reference/groq) for even more information.

After installing the nuxt-sanity module and [configuring](/#configuration) it in `nuxt.config.js`, the Sanity client will be available globally under `$sanity`. Here is a [cheat sheet](https://www.sanity.io/docs/data-store/query-cheat-sheet) of typical queries put together for you by the Sanity team to get you started.

For a list of all the available methods with the Sanity client, please see the [official documentation](https://www.sanity.io/docs/client-libraries/js-client).

## In `asyncData`

To fetch data in `asyncData`, access the Sanity client with `$sanity` like so:

```js
export default {
  asyncData({ $sanity }) {
    const query = '{ "persons": *[_type == "person"] }'
    return $sanity.fetch(query)
  }
}
```

## In Component Methods 

Access the Sanity client in a component's methods with `this.$sanity`:

```js
export default {
  data() {
    return {
      persons: []
    }
  },
  methods: {
    fetchPersons(query) {
      return this.$sanity.fetch(query)
    }
  },
  async mounted() {
    const query = '*[_type == "person]'
    const persons = await this.fetchPersons(query)
    this.persons = persons
  }
}
```

## In mounted()

Access the Sanity client in mounted() with `this.$sanity`:

```js
export default {
  data() {
    return {
      persons: []
    }
  },
  mounted() {
    const query = '*[_type == "event"]'
    this.$sanity.fetch(query).then(result => {
      this.persons = result
    })
  }
}
```