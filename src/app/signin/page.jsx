"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";

export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: '/',
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        if (data) {
            toast.success("SignIn Successful");
        }

        console.log({ data, error })
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <Card className="mx-auto w-full sm:w-96 md:w-125 py-8 sm:py-10 mt-10 sm:mt-15 px-4">
            <h1 className="text-center text-2xl font-bold">Sign In</h1>

            <Form className="flex w-full max-w-md mx-auto flex-col gap-4" onSubmit={onSubmit}>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" className="w-full"/>
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" className="w-full"/>
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex flex-col sm:flex-row gap-2">
                    <Button type="submit" className="bg-[#5a00ff] w-full">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary" className="w-full">
                        Reset
                    </Button>
                </div>

                <div className="flex items-center gap-2 my-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <Button className="w-full" variant="tertiary" onClick={handleGoogleSignIn}>
                    <Icon icon="devicon:google" />
                    Sign in with Google
                </Button>

                <p className="text-center pt-3">
                    Don’t have an account?{' '}
                    <Link href="/signup" className="font-bold text-[#5a00ff]">
                        Register
                    </Link>
                </p>
            </Form>
        </Card>
    );
}