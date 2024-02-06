export default defineEventHandler(async (event) => {
  const { q } = getQuery(event)
  const config = useRuntimeConfig()
  return $fetch(`${config.tvmazeApi.searchShow}?q=${q}`)
})
