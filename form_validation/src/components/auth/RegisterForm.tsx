"use client"
import CardWrapper from "./cardwrapper"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { RegisterSchema } from "../../../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",

        }

    })
    const onSubmit = () => {
        console.log("Submitted")
    }
    return (
        <CardWrapper

            label="create an account "
            title="Register"
            backbuttonhref="/auth/login"
            backbuttonlabel="Already have an account? Login here."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 ">
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <input {...field} type="email" placeholder="example@gmail.com"/>
                                </FormControl>
                            </FormItem>
                        )}></FormField>

                    </div>
                </form>
            </Form>

        </CardWrapper>)
}

export default RegisterForm 