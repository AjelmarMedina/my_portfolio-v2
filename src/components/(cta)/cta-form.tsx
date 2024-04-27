'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";


const formSchema = z.object({
  name: z.string()
    .min(1, { message: "Enter your name, please." })
    .max(256),
  email: z.string()
    .max(320)
    .regex(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm, { message: "Enter a valid Email Address Please..." }),
  message: z.string()
    .max(1024),
})

export function CtaForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = JSON.stringify(values);
    fetch("/contact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      const result = response.json();
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4 max-w-full w-full h-fit">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <Input placeholder="Max" maxLength={256} {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="m@example.com"
                      maxLength={320}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="message"
            render={({field}) => (
              <FormItem>
                <FormLabel>What would you like to talk about?</FormLabel>
                <FormControl>
                  <Textarea className="h-24" placeholder="I was wondering if..." maxLength={1024} {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant={"fill"} fill={"light"} outline={"dark"} type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}
