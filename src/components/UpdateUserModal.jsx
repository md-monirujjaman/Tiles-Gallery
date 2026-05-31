"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";

export function UpdateUserModal() {

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        // console.log({image,name})

        await authClient.updateUser({
            name,
            image
        })
    }
    return (
        <Modal>
            <Button variant="secondary" className="bg-[#f2edfa] text-[#5a00ff] hover:bg-[#5a00ff] hover:text-white"><FaEdit />Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaEdit />
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="text">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter your image url" />
                                    </TextField>

                                    <Modal.Footer className="mt-2">
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit" className="bg-[#5a00ff]">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}