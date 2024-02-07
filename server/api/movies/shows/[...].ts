export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const url = event.node.req.url
  if (url) {
    const id = [...url.split('/')].pop()
    try {
      const response = $fetch(`${config.tvmazeApi.shows}/${id}`)
      return response;
    } catch (error) {
      return error; 
    }
  } else {
    return new Error("Wrong url");
  }
})
