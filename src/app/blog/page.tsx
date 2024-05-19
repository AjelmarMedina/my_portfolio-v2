
export default function Page() {
  return (
    <section className="flex flex-col overflow-x-clip items-center justify-between h-full w-full">
      <article className="w-full h-screen flex flex-col items-center justify-center pt-16">
        <h1 className="prose-display-2xl text-center">
          Welcome to the Blog Page!
        </h1>
      </article>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-primary-100">
        <h1 className="prose-display-2xl text-center">
          Welcome to the Blog Page!
        </h1>
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-primary-200">
        <h1 className="prose-display-2xl text-center">
          Welcome to the Blog Page!
        </h1>
      </div>
    </section>
  )
}
