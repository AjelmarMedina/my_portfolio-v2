/**
 * @param header
 * @param paragraph
 * @returns A full-width header section
 */

export function Header(
  { header, paragraph }: { header: string; paragraph: string; }
) {
  return (
    <div
      className="flex flex-row items-center justify-center min-w-full px-4 h-fit py-14 bg-neutral-white text-neutral-black md:px-28 md:py-24"
    >
      <div className="space-y-8">
        <h1 className="bold prose-display-lg md:prose-display-xl">
          {header}
        </h1>
        <p className="prose-text-md md:prose-text-xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
