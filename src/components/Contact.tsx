"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Digite um email válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Esta funcionalidade está em desenvolvimento, por favor aguarde!',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="px-[60px] py-10">
      <div className="flex flex-col mb-10">
        <h1 className="text-4xl lg:text-5xl font-semibold self-center">
          Contato
        </h1>
        <p className="font-semibold self-center mt-5">
          _____________________________
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl text-base font-semibold">
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome"
                        {...field}
                        className="rounded-lg bg-gray-background"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl text-base font-semibold">
                      E-mail
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email@email.com"
                        {...field}
                        className="rounded-lg bg-gray-background"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="lg:text-xl text-base font-semibold">
                    Sua mensagem
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite sua mensagem aqui"
                      className="h-[132px] resize-none rounded-lg bg-gray-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full lg:w-[200px] bg-button-primary hover:bg-button-hover text-white font-bold text-xl py-3 px-[60px]"
            >
              Enviar
            </Button>
          </div>
        </form>
      </Form>

      <div className="h-px bg-gray-700 my-10" />

      <footer className="mt-10">
        <div className="flex flex-row items-center justify-center gap-8">
          <a href="https://github.com/Barba2k2/" target="_blank">
            <Image
              src="/logos/github.svg"
              alt="GitHub"
              width={30}
              height={30}
            />
          </a>
          <a href="https://wa.me/5519993171564" target="_blank">
            <Image
              src="/icons/whatsapp.svg"
              alt="GitHub"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.linkedin.com/in/lorenzo-dz/" target="_blank">
            <Image
              src="/icons/linkedin.svg"
              alt="GitHub"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.instagram.com/barbaa.png/" target="_blank">
            <Image
              src="/icons/instagram.svg"
              alt="GitHub"
              width={30}
              height={30}
            />
          </a>
        </div>

        <p className="text-sm text-gray-400 text-center mt-10">
          © {new Date().getFullYear()} Barba Tech. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
