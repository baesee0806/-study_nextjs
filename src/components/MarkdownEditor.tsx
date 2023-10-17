"use client";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { useRef } from "react";
interface MarkdownEditorProps {
  setValue: (value: string) => void;
}
export default function MarkdownEditor({ setValue }: MarkdownEditorProps) {
  const editorRef = useRef<any>(null);

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    setValue(data);
  };

  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];
  return (
    <div style={{ marginTop: "30px" }}>
      <Editor
        ref={editorRef}
        initialValue={"글을 작성해주세요"}
        initialEditType="markdown"
        previewStyle="tab"
        height="700px"
        theme={"dark"}
        toolbarItems={toolbarItems}
        onChange={onChange}
      />
    </div>
  );
}
