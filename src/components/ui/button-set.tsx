import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

/**
 * A simple button set with a accent primary and a dark secondary with default text
 */
export function ButtonSet() {
  <div className="flex flex-row px-0 space-x-4 w-min px-4sm:">
    <Button fill={"accent"} size={"lg"} asChild>
      <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
        Get in touch! <ArrowRight className="ml-2" />
      </Link>
    </Button>
    <Button variant={"outline"} outline={"dark"} size={"lg"} asChild>
      <Link href={"https://github.com/AjelmarMedina"} target="_blank">
        About me...
      </Link>
    </Button>
  </div>;
}
