import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import React, { useRef, useState } from 'react';
export default function UploadableTextarea({
    blog,
}: {
    blog: App.Datas.BlogData;
}) {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [previews, setPreviews] = useState<string[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const uploadFiles = async (files: File[]) => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append(`files[]`, file);
        });
        axios
            .post('/upload-endpoint', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setPreviews(response.data.data);
                const urls = response.data.data;
                insertUrlsAtCursor(urls);
            })
            .catch((error) => {
                console.error('Error uploading files:', error);
            });
    };
    const insertUrlsAtCursor = (urls: string[]) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const currentValue = textarea.value;

        const urlsText = urls.map((url) => `![](${url})`).join('\n');
        const newValue =
            currentValue.slice(0, start) + urlsText + currentValue.slice(end);

        textarea.value = newValue;

        // Set cursor position after inserted text
        const newCursorPosition = start + urlsText.length;
        textarea.setSelectionRange(newCursorPosition, newCursorPosition);
        textarea.focus();
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
        <div>
            <Textarea
                ref={textareaRef}
                onDragLeave={handleDragLeave}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                defaultValue={blog.content}
                name="content"
                className={`min-h-[300px] font-sans ${isDragging ? 'border-dashed border-blue-500 bg-blue-50' : ''}`}
                placeholder="Enter blog content"
            />
        </div>
    );
}
