export default defineEventHandler(async (event) => {
  const { q } = getQuery(event);
  const config = useRuntimeConfig();
  try {
    const response = await $fetch(`${config.tvmazeApi.searchShow}?q=${q}`);
    return response;
  } catch (error) {
    return error;
  }
});
