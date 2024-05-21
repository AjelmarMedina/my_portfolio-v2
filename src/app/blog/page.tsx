
export default function Page() {
  return (
    <section className="flex flex-col overflow-x-clip items-center justify-between h-full w-full pt-16">
      <div
        className="flex flex-row items-center justify-center min-w-full px-4 py-14 h-fit text-neutral-black md:px-28 md:py-12"
      >
        <div className="w-full space-y-8">
          <h1 className="font-bold text-left prose-display-lg md:prose-display-xl">
            Blog
          </h1>
          <p className="text-left prose-text-md md:prose-text-xl">
            A collection of Ajelmar Medina&apos;s blogs.
          </p>
          <hr className="text-neutral-light" />
        </div>
      </div>
    </section>
  )
}
