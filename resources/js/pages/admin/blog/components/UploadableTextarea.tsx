import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import React, { useState } from 'react';

export default function UploadableTextarea({
    blog,
}: {
    blog: App.Datas.BlogData;
}) {
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const uploadFiles = (files: File[]) => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append(`files[]`, file);
        });

        axios
            .post('/api/upload-endpoint', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log('Files uploaded successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error uploading files:', error);
            });
    };
    const handleDragOver = (e: React.DragEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragEnter = (e: React.DragEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files);
        uploadFiles(files);
    };

    return (
        <Textarea
            onDragLeave={handleDragLeave}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            defaultValue={blog.content}
            name="content"
            className={`min-h-[300px] font-sans ${isDragging ? 'border-dashed border-blue-500 bg-blue-50' : ''}`}
            placeholder="Enter blog content"
        />
    );
}
