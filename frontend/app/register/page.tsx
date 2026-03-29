"use client"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    confirm_password: string
}

export default function Page() {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <div className="bg-dark-background">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register("first_name")} />
            </form>
        </div>
    );
}