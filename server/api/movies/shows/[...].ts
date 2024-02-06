export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const url = event.node.req.url
  if(url) {
    const id = [...url.split('/')].pop()
    return $fetch(`${config.tvmazeApi.shows}/${id}`)
  } else {
    return new Error("Wrong url");
  }
})
