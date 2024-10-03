'use client'

export default function SearchForm() {
  return (
    <form>
      <div className="flex flex-col gap-2">
        <label htmlFor="search"> Search</label>
        <input type="text" placeholder="Search" className="py-2 outline-none border-b bg-slate-100" />
      </div>
    </form>
  )
}