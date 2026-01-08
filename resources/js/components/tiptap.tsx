// src/Tiptap.tsx
import { EditorContent, useEditor } from '@tiptap/react';
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit], // define your extension array
        content: '<p>Hello World!</p>', // initial content
    });

    return (
        <>
            <EditorContent editor={editor} />
            <FloatingMenu editor={editor}>
                This is the floating menu
            </FloatingMenu>
            <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </>
    );
};

export default Tiptap;
