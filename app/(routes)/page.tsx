import { FunctionComponent } from "react"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"

interface HomePageProps {}

export const revalidate = 0

const HomePage: FunctionComponent<HomePageProps> = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("6332b829-117f-49c3-962a-cbb526f923f1")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
