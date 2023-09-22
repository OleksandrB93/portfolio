"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Must be at least 2 symbol.",
    }),
    lastName: z.string(),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    message: z.string().min(2, {
      message: "Must be at least 2 symbol.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    emailjs
      .send(
        "service_76fq3w7",
        "template_6jo6u26",
        {
          from_name: values.name,
          from_lastName: values.lastName,
          to_name: "Oleksandr",
          from_email: values.email,
          to_email: "barabashsan4ik@gmail.com",
          message: values.message,
        },
        "xi2iKAkwv8UkrsXaB"
      )
      .then(
        () => {
          setLoading(false);
          toast({
            variant: "default",
            title: "Hello, I'm Oleksandr",
            description:
              "Thank you. I will get back to you as soon as possible.",
            className: "w-[400px] absolute top-2 left-8 p-2",
          });

          form.reset({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, zIndex: 30 }}
      className="h-[500px] w-[400px] ml-[430px] rounded-r-md bg-background p-8 pt-6"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-x-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name<span className="text-[#00bfff] font-semibold">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic"
                      placeholder="John"
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.name ? (
                    ""
                  ) : (
                    <FormDescription className="text-xs text-[#00bfff]/70 italic">
                      Please enter your name.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className=" text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic"
                      placeholder="Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email<span className="text-[#00bfff] font-semibold">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className=" text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic"
                    placeholder="john@gmail.com"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.email ? (
                  ""
                ) : (
                  <FormDescription className="text-xs text-[#00bfff]/70 italic">
                    Please enter your email.
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Message<span className="text-[#00bfff] font-semibold">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    className="h-[110px] max-h-[135px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.message ? (
                  ""
                ) : (
                  <FormDescription className="text-xs text-[#00bfff]/70 italic">
                    Please enter your message.
                  </FormDescription>
                )}
                <FormDescription className="text-xs"></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            variant={"submitEmail"}
            type="submit"
            onClick={() => onSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactPage;
