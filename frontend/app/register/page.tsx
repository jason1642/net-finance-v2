"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Description, Field, Input, Label } from '@headlessui/react'
import Button from "@/components/button/Button"



interface IFormInput {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    confirm_password: string
}

const formFields: { 
    name: string, 
    id: keyof IFormInput
}[] = [
    {
        name: "First Name",
        id: "first_name",
    },
    {
        name: "Last Name",
        id: "last_name",
    },
    {
        name: "Email",
        id: "email",
    },
    {
        name: "Password",
        id: "password",
    },
    {
        name: "Confirm Password",
        id: "confirm_password",
    }
]

export default function Page() {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <div className="bg-surface flex flex-row min-h-80vh  w-5xl max-w-full mx-auto mt-20 rounded-lg">
            <div className="w-[35%] bg-brand-400">
                {/* Card */}
                <div className="bg-surface opacity-30">
                    Why create an account?
                </div>
            </div>
        <div className="flex flex-col p-8 w-[65%]">
            <h2 className="text-4xl">Create an account</h2>
            <h3 className="mt-2">Register an account and take advantage of powerful investment tools</h3>
              <form className="flex flex-wrap justify-start w-full content-around mt-5" onSubmit={handleSubmit(onSubmit)}>
                
                {formFields.map((field, index) => (
                    <Field key={index} className="flex flex-col border-dark-background border-2 rounded-md w-[45%]">
                      <Label className="text-sm/6 font-medium text-white">{field.name}</Label>
                <Input 
                    className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white
            focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
                 {...register(field.id)} />
                </Field>
                ))}
                
                
              <Button text="Submit"/>
            </form>
        </div>
          
        </div>
    );
}