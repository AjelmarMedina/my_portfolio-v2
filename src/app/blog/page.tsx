import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// TODO: Dynamic BlogItem content
// TODO: DB project blog url
// TODO BlogItem Button + Link as Child

export default function Page() {
  return (
    <section className="flex flex-col overflow-x-clip items-center justify-between w-full pt-16">
      <article className="flex flex-col items-center justify-between h-full w-full space-y-14 px-4 py-14 md:px-28 md:py-12">
        <div
          className="flex flex-row items-center justify-center min-w-full h-fit text-neutral-black "
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
        <div className="w-full min-h-screen flex flex-col lg:grid grid-cols-2 gap-6">
          <BlogItem />
          <BlogItem title={"Test Title"} tags={["Welcome", "to", "my", "Blog!"]}>
            Elit amet adipisicing consectetur consequat tempor cupidatat et commodo.
          </BlogItem>
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </article>
    </section>
  )
}

function BlogItem({ title = "Lorem Ipsum", tags = ["Lorem", "ipsum", "dolor", "sit", "amet"], children }:
  {
    title?: string | null;
    tags?: string[] | null;
    children?: React.ReactNode;
  }
) {
  return (
    <Button variant={"ghost"} className="flex flex-col justify-between items-start font-normal text-left text-wrap w-full h-64 border-2 border-neutral-mid rounded-xl p-6">
      <div className="space-y-4 w-full">
        <h1 className="prose-display-sm">
          {title}
        </h1>
        <p>
          {children ?? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eos modi optio deserunt eius cumque eum id quis velit. Placeat numquam sit repellendus esse voluptate veniam culpa autem id incidunt."}
        </p>
      </div>
      <div className="flex flex-row space-x-2 justify-start">
        {tags?.map((tag, index) => (
          <Badge key={index}>
            {tag}
          </Badge>
        ))}
      </div>
    </Button>
  )
}