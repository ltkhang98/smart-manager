"use client";
import React from "react";

import { useModal } from "@/hooks/useModal";
import Button from "../../../../components/ui/button/Button";
import { Modal } from "../../../../components/ui/modal";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Modal_Add_User() {
    const { isOpen, openModal, closeModal } = useModal();
    const handleSave = () => {
        // Handle save logic here
        console.log("Saving changes...");
        closeModal();
    };
    return (
        <div>
            <Button size="sm" onClick={openModal}>
                Thêm mới nhân sự
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                className="max-w-[800px] p-5 lg:p-10"
            >
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-controlled"
                        label="Controlled"
                        value={name}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"
                    />
                </Box>
                <div className="flex items-center justify-end w-full gap-3 mt-8">
                    <Button size="sm" variant="outline" onClick={closeModal}>
                        Close
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                        Save Changes
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
