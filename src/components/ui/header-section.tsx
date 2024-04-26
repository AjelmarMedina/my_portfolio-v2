/**
 * @param header
 * @param paragraph
 * @returns A full-width header section
 */

export function Header(
  { header, children }: Readonly<{ header: string; children: React.ReactNode; }>
) {
  return (
    <div
      className="flex flex-row items-center justify-center min-w-full px-4 py-14 h-fit text-neutral-black md:px-28 md:py-24"
    >
      <div className="max-w-[672px] space-y-8">
        <h1 className="font-bold text-center prose-display-lg md:prose-display-xl">
          {header}
        </h1>
        <p className="text-center prose-text-md md:prose-text-xl">
          {children}
        </p>
      </div>
    </div>
  );
}
