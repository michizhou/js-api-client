export default http => ({
  list: args => getResponses(http, args)
})

const getResponses = (
  http,
  {
    uid,
    pageSize,
    since,
    until,
    after,
    before,
    completed,
    sort,
    query,
    fields
  } = {}
) => {
  return http.request({
    method: 'get',
    url: `/forms/${uid}/responses`,
    params: {
      page_size: pageSize,
      since,
      until,
      after,
      before,
      completed,
      sort,
      query,
      fields
    }
  })
}
