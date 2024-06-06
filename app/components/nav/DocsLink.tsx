import { ArrowUpRight } from '~/components/Icons'

export const DocsLink = () => {
  return (
    <a
      href="https://docs.primestaked.com"
      target="_blank"
      rel="noreferrer"
      className="btn-secondary px-4 py-1.5 text-sm flex items-center gap-2 font-medium self-stretch text-gray-500"
    >
      Docs
      <ArrowUpRight size={11} />
    </a>
  )
}
