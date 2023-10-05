import { FunctionComponent } from "react"

interface NoResultsProps {}

const NoResults: FunctionComponent<NoResultsProps> = () => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      No Results found.
    </div>
  )
}

export default NoResults
