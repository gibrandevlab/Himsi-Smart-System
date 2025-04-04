import React, { useState, useEffect, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
    Modifier,
    EditorState,
    SelectionState,
    ContentState,
    convertFromHTML,
    DefaultDraftBlockRenderMap 
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Map } from "immutable";

const TextEditorBlog = ({ value, onChange, onImagesChange }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [selectedImage, setSelectedImage] = useState(null);
    const editorRef = useRef(null);
    const isFirstLoad = useRef(true); 

    useEffect(() => {
        if (value && value.trim() !== "" && isFirstLoad.current) {
            const blocksFromHTML = convertFromHTML(value);
            let contentState = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            );
    
            const parser = new DOMParser();
            const doc = parser.parseFromString(value, "text/html");
    
            contentState = contentState.set("blockMap", contentState.getBlockMap().map((block) => {
                const blockText = block.getText().trim();
                let alignment = "left"; // Default
    
                if (blockText) {
                    const matchingElement = Array.from(doc.body.children).find((el) =>
                        el.textContent.trim() === blockText
                    );
    
                    if (matchingElement) {
                        const style = matchingElement.getAttribute("style") || "";
                        if (style.includes("text-align: center")) {
                            alignment = "center";
                        } else if (style.includes("text-align: right")) {
                            alignment = "right";
                        }
                    }
                }
    
                return block.merge({ data: block.getData().set("text-align", alignment) });
            }));
    
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(EditorState.moveSelectionToEnd(newEditorState));
            isFirstLoad.current = false;
        }
    }, [value]);

    const handleEditorChange = (state) => {
        setEditorState(state);
        const contentState = state.getCurrentContent();
    
        const htmlContent = stateToHTML(contentState, {
            blockStyleFn: (block) => {
                const alignment = block.getData().get("text-align"); 
                if (alignment) {
                    return { attributes: { style: `text-align: ${alignment};` } };
                }
            },
            blockRenderers: {
                atomic: (block) => {
                    const entity = contentState.getEntity(block.getEntityAt(0));
                    if (entity.getType() === "IMAGE") {
                        const { src, alt, height, width, alignment } = entity.getData();
    
                        return `<figure style="text-align: ${alignment || "center"};">
                            <img src="${src}" alt="${alt}" height="${height}" width="${width}" 
                                style="display: block; margin: auto;" />
                        </figure>`;
                    }
                },
            },
        });
    
        // console.log(htmlContent); 
        onChange(htmlContent);
    };
    
    

    const blockRenderMap = DefaultDraftBlockRenderMap.merge(
        Map({
            "center": {
                element: "p",
                wrapper: <div style={{ textAlign: "center" }} />,
            },
            "right": {
                element: "p",
                wrapper: <div style={{ textAlign: "right" }} />,
            },
            "left": {
                element: "p",
                wrapper: <div style={{ textAlign: "left" }} />,
            },
            "atomic": {
                element: "figure",
                wrapper: <div style={{ textAlign: "center" }} />, 
            },
        })
    );
    
    const blockRendererFn = (block) => {
        if (block.getType() === "atomic") {
            return {
                component: ({ block, contentState }) => {
                    const entity = contentState.getEntity(block.getEntityAt(0));
                    const { src, alt, height, width } = entity.getData();
    
                    return (
                        <div style={{ textAlign: "center", width: "100%" }}>
                            <img
                                src={src}
                                alt={alt}
                                height={height || "auto"} 
                                width={width || "auto"}  
                                style={{
                                    display: "block",
                                    margin: "auto",
                                    cursor: "default",
                                    border: "none",
                                }}
                            />
                        </div>
                    );
                },
                editable: false,
            };
        }
    
        return null;
    };
    
    useEffect(() => {
        const editorContent = document.querySelector(".rdw-editor-main");

        const handleMouseEnter = (event) => {
            if (event.target.tagName === "IMG" && editorContent?.contains(event.target)) {
                event.target.style.cursor = "pointer"; // 🔥 Kursor berubah saat hover
            }
        };

        const handleMouseLeave = (event) => {
            if (event.target.tagName === "IMG" && editorContent?.contains(event.target)) {
                event.target.style.cursor = "default"; // 🔥 Kembali ke normal saat tidak di-hover
            }
        };

        const handleClick = (event) => {
            if (event.target.tagName === "IMG" && editorContent?.contains(event.target)) {
                // Reset semua gambar terlebih dahulu
                document.querySelectorAll(".rdw-editor-main img").forEach((img) => {
                    img.style.border = "none";
                    img.style.cursor = "pointer"; // 🔥 Kembali ke hover normal
                });

                // Pilih gambar yang diklik
                if (event.target.src !== selectedImage) {
                    setSelectedImage(event.target.src);
                    event.target.style.border = "2px solid red";
                    event.target.style.cursor = "grab"; // 🔥 Kursor berubah saat dipilih
                } else {
                    // Jika gambar yang sama diklik lagi, hapus seleksi
                    setSelectedImage(null);
                    event.target.style.border = "none";
                }
            } else {
                setSelectedImage(null);
                // Reset border semua gambar jika klik di luar gambar
                document.querySelectorAll(".rdw-editor-main img").forEach((img) => {
                    img.style.border = "none";
                    img.style.cursor = "pointer"; // 🔥 Kembali ke hover normal
                });
            }
        };

        document.addEventListener("mouseenter", handleMouseEnter, true);
        document.addEventListener("mouseleave", handleMouseLeave, true);
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("mouseenter", handleMouseEnter, true);
            document.removeEventListener("mouseleave", handleMouseLeave, true);
            document.removeEventListener("click", handleClick);
        };
    }, [selectedImage]); 

    // ✅ Upload gambar
    const uploadImageCallback = async (file) => {
        const timestamp = Date.now();
        const extension = file.name.split('.').pop();
        const customFileName = `blog-${timestamp}.${extension}`;
        const newFile = new File([file], customFileName, {
          type: file.type,
          lastModified: file.lastModified,
        });
      
        const formData = new FormData();
        formData.append("image", newFile);
      
        onImagesChange(newFile.name);
      
        try {
          const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
          const response = await fetch("/upload-image-content-blog", {
            method: "POST",
            body: formData,
            headers: { "X-CSRF-TOKEN": csrfToken },
          });
      
          const data = await response.json();
          if (data.image_url) {
            const sessionImages =
              JSON.parse(sessionStorage.getItem("sessionUploadedImages")) || [];
            sessionImages.push(data.image_url);
            sessionStorage.setItem(
              "sessionUploadedImages",
              JSON.stringify(sessionImages)
            );
      
            return { data: { link: data.image_url, fileName: data.file_name } };
          }
        } catch (error) {
          console.error("Upload failed:", error);
        }
        return { data: { link: "", fileName: "" } };
      };   

    // ✅ Hapus gambar terpilih
    const handleRemoveImage = async () => {
        if (!selectedImage) return;
    
        let contentState = editorState.getCurrentContent();
        let blockMap = contentState.getBlockMap();
        let blockKeyToDelete = null;
    
        blockMap.forEach((block, key) => {
            if (block.getType() === "atomic") {
                block.findEntityRanges(
                    (char) => {
                        const entityKey = char.getEntity();
                        if (entityKey !== null) {
                            const entity = contentState.getEntity(entityKey);
                            if (entity.getType() === "IMAGE" && entity.getData().src === selectedImage) {
                                blockKeyToDelete = key;
                                return true;
                            }
                        }
                        return false;
                    },
                    () => {}
                );
            }
        });
    
        if (blockKeyToDelete) {
            const selectionState = SelectionState.createEmpty(blockKeyToDelete).merge({
                anchorOffset: 0,
                focusOffset: 1,
            });
    
            let newContentState = Modifier.removeRange(contentState, selectionState, "forward");
            newContentState = Modifier.setBlockType(newContentState, selectionState, "unstyled");
    
            let newEditorState = EditorState.push(editorState, newContentState, "remove-range");
            newEditorState = EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter());
    
            setEditorState(newEditorState);
    
            try {
                const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                const response = await fetch(`/delete-image-content-blog`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                    body: JSON.stringify({
                        imageUrl: selectedImage.replace(`${window.location.origin}/storage/`, ""),
                    }),
                });
    
                const result = await response.json();
    
                if (result.success) {
                    if (result.hasImage) {
                        //alert("Gambar berhasil dihapus!");
                        window.location.reload(); 
                    }
                }

            } catch (error) {
                alert("Terjadi kesalahan saat menghapus gambar: " + error.message);
            }
    
            setSelectedImage(null);
        }
    };

    return (
        <div>
            <div ref={editorRef} className="editor-wrapper">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    blockRenderMap={blockRenderMap} 
                    blockRendererFn ={blockRendererFn } 
                    toolbar={{
                        options: ["inline", "blockType", "list", "link", "image", "textAlign"],
                        inline: {
                            options: ["bold", "italic", "underline", "strikethrough", "monospace"],
                        },
                        blockType: {
                            inDropdown: true,
                            options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6", "Blockquote", "Code"],
                        },
                        textAlign: {
                            options: ["left", "center", "right", "justify"],
                        },
                        image: {
                            uploadCallback: uploadImageCallback,
                            previewImage: true,
                            alt: { present: true, mandatory: false },
                            alignmentEnabled: false, 
                        },
                    }}
                    
                    wrapperClassName="font-inter-regular bg-gray-50 md:border-gray-400 border p-2 rounded-md shadow-sm"
                    editorClassName="min-h-[400px] p-2"
                    toolbarClassName="border-b border-gray-400"
                />
            </div>

            {selectedImage && (
                <button
                    onClick={handleRemoveImage}
                    className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
                >
                    Hapus Gambar Terpilih
                </button>
            )}
        </div>
    );
};

export default TextEditorBlog;
