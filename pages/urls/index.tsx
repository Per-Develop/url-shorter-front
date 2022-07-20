import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Url } from '../../interfaces'
import { sampleUrlData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Url[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Urls List | Url Shorter WebApp">
    <h1>Url List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /urls</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  
  const items: Url[] = sampleUrlData
  return { props: { items } }
}

export default WithStaticProps
