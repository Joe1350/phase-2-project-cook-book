import React, { useEffect } from "react";

function useDocumentTitle(title, recipie) {
    useEffect(() => {
        document.title = title
    }, [title, recipie])
}

export default useDocumentTitle;
