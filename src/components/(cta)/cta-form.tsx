'use client';

import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function CtaForm() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">Your name</Label>
          <Input id="name" placeholder="Max" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">What would you like to talk about?</Label>
        <Textarea id="message" name="message" className="h-24"/>
      </div>
      <Button variant={"fill"} fill={"light"} outline={"dark"} type="submit" className="w-full">
        Submit
      </Button>
    </div>
  )
}
