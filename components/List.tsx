import * as React from 'react'
import ListItem from './ListItem'
import { Url } from '../interfaces'
import { handleMethods } from '../pages/api/urls/handleMethods'


handleMethods()
  .get<Array<Url>>(async (req, res) => {
    try {
      // you can access query.id type safely.
      const url = "http://localhost:8000/api/value"
      const result = await fetch(url)
      console.log("result", result)
      return res.json({ result: true, data: result })
    } catch (e) {
      return res.status(400).json({ result: false, data: e })
    }
  })
  .prepare()


type Props = {
  items: Url[]
}

const List = ({ items }: Props) => {
  const urls = handleMethods
  return (
    < ul >
      {
        items.map((item) => (
          <li key={item.id}>
            <ListItem data={item} />
          </li>
        ))
      }
    </ul >
  )
}

export default List
