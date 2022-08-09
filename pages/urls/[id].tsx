import { GetStaticProps, GetStaticPaths } from 'next'

import { Url } from '../../interfaces'
import { sampleUrlData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { handleMethods } from '../api/urls/handleMethods'

handleMethods()
  .get<Array<Url>>(async (req, res) => {
    try {
      // you can access query.id type safely.
      const result = await getAllUrls()
      console.log("result", result)
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

type Props = {
  item?: Url
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {

  if (errors) {
    return (
      <Layout title="Error | Url Shorter WebApp">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${item ? item.title : 'Url Detail'
        } | Url Shorter WebApp`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUrlData.map((url) => ({
    params: { id: url.id.toString() },
  }))


  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = sampleUrlData.find((data) => data.id === Number(id))

    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}