import React from 'react'
import Link from 'next/link'

import { Url } from '../interfaces'

type Props = {
  data: Url
}

const ListItem = ({ data }: Props) => (
  <Link href="/urls/[id]" as={`/urls/${data.id}`}>
    <a>
      {data.id}: {data.title}
    </a>
  </Link>
)

export default ListItem
