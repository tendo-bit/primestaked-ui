import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://squid.subsquid.io/prime-eth-squid/graphql',
})

export const graphqlClient =
  <TData, TVariables = unknown>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers'],
  ) =>
  async () => {
    const res = await axiosInstance<{ data: TData }>({
      url: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      data: { query, variables },
    })

    return res.data['data']
  }
