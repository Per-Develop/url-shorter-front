import { handleMethods } from "./handleMethods";
// import { Url } from '../../../interfaces'

type Url = {
  url: string | undefined,
}

export default handleMethods()
  .get<Array<Url>>(async (req, res) => {
    try {
      const result = await getAllUrls();
      return res.json({ result: true, data: result })
    } catch (e) {
      return res.status(400).json({ result: false, data: e })
    }
  })
  .post<Url>(async (req, res) => {
    try {
      const result = await createUrl()
      return res.json({ result: true, data: result })
    } catch (e) {
      return res.status(400).json({ result: false, data: e })
    }
  })
  .prepare()

function getAllUrls() {
  const urls = fetch('http://localhost:3000/api/value')
  return urls
}
function createUrl() {
  const url = fetch('http://localhost:3000/api/', {
    method: 'POST',
    body: JSON.stringify({ longaddr: 'https://www.google.com' }),
  })
  return url
}