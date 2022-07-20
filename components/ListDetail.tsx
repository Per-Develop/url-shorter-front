import * as React from 'react'

import { Url } from '../interfaces'

type ListDetailProps = {
  item: Url
}

const ListDetail = ({ item: url }: ListDetailProps) => (
  <div>
    <h1>Detail for {url.title}</h1>
    <p>ID: {url.id}</p>
  </div>
)

export default ListDetail
