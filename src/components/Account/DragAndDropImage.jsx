import React from "react";
import { useTranslation } from "react-i18next";
import Dropzone from 'react-dropzone-uploader'
import { Image, Button } from "react-bootstrap";

export default ({
    handleChangeStatus,
    maxFiles = 1,
    accept,
    onSubmit,
    Preview
}) => {
    const { t } = useTranslation();
    const uploadImage = (<div className="upload-files my-3">
        <Image src="../images/upload.svg" className="dropbox-upload"/>
        <span className="dropbox-text">{t("Drag & Drap your file here")}</span>
        <span className="dropbox-text">{t("or")}</span>
        <Button
            className="d-flex flex-row justify-content-center px-4 py-2 my-2 dropbox-button"
            onClick={(e) => {
                e.preventDefault()
                document?.getElementsByClassName("dzu-input")[0] && document?.getElementsByClassName("dzu-input")[0]?.click()
            }}
        >
            {t("Browse file")}
        </Button>
    </div>)

    return (
            <Dropzone
                multiple={true}
                inputContent={uploadImage}
                accept={accept}
                maxFiles={maxFiles}
                onChangeStatus={handleChangeStatus}
                canRemove={true}
                PreviewComponent={Preview}
                inputWithFilesContent={uploadImage}
            />
    );
};