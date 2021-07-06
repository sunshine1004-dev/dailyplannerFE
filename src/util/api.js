export function get(query, variables = {}) {
  const token = localStorage.getItem("token");
  const body = { query, variables };
  return fetch(process.env.REACT_APP_API_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      authorization: token ? `Bearer ${token}` : null,
    },
    body: JSON.stringify(body),
  }).then(async (response) => {
    const { data } = await response.json();
    if (response.ok) {
      return data;
    } else {
      // handle the graphql errors
      const error = {
        message: data?.errors?.map((e) => e.message).join("\n"),
      };
      return Promise.reject(error);
    }
  });
}
