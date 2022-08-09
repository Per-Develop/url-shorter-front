import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'


type ApiResponse<Data = {}, Error = { message: string }> =
  | { result: true; data: any }
  | { result: false; data: Error }

export const handleMethods = <Q extends Record<string, string> = {}>() => {
  const handlers: { [key: string]: NextApiHandler | undefined } = {}
  const methodHandler = {
    get: <T, E = string>(
      handler: (
        req: NextApiRequest & { query: Q },
        res: NextApiResponse<ApiResponse<T, E>>,
      ) => void | Promise<void>,
    ) => {
      handlers['GET'] = handler
      return methodHandler
    },
    post: <T, E = string>(
      handler: (
        req: NextApiRequest & { query: Q },
        res: NextApiResponse<ApiResponse<T, E>>,
      ) => void | Promise<void>,
    ) => {
      handlers['POST'] = handler
      return methodHandler
    },
    put: <T, E = string>(
      handler: (
        req: NextApiRequest & { query: Q },
        res: NextApiResponse<ApiResponse<T, E>>,
      ) => void | Promise<void>,
    ) => {
      handlers['PUT'] = handler
      return methodHandler
    },
    delete: <T, E = string>(
      handler: (
        req: NextApiRequest & { query: Q },
        res: NextApiResponse<ApiResponse<T, E>>,
      ) => void | Promise<void>,
    ) => {
      handlers['DELETE'] = handler
      return methodHandler
    },
    prepare: (): NextApiHandler<ApiResponse> => (req, res) => {
      if (handlers[req.method]) {
        return handlers[req.method](req, res)
      } else {
        return res.status(404).json({ result: false, data: { message: 'not found' } })
      }
    },
  }
  return methodHandler
}
