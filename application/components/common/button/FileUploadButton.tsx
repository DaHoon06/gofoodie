'use client';

import { ChangeEvent, ReactElement, useMemo, useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";
import * as styles from "./FileUploadButton.css";
import { Typography } from "../typography";

interface FileUploadProps {
  onFileChange: (urls: string[], fileList: File[]) => void;
}

const maxSize = 5 * 1024 * 1024; // 5MB

export const FileUploadButton = (props: FileUploadProps): ReactElement => {
  const { onFileChange } = props;
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleClickUploadButton = () => {
    fileInput.current?.click();
  };

  const handleChangeFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.persist();

    const fileList = Array.from(e.target.files || []).slice(0, 9);

    if (!fileList) return;

    const oversizedFiles = fileList.filter((file) => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      //todo 용량 초과 알람 주기
      return;
    }

    setFiles(fileList);

    const urls = fileList.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
    onFileChange(urls, fileList);
  };

  return (
    <>
      <button
        className={styles.FileUploadButtonLayout}
        type={"button"}
        onClick={handleClickUploadButton}
      >
        <FiCamera color={"#FF7101"} />
        <Typography color="primary" as="span" fontSize={14}>
          사진
        </Typography>
      </button>
      <input
        type={"file"}
        onChange={handleChangeFileUpload}
        style={{ display: "none" }}
        multiple={true}
        ref={fileInput}
        name="images"
        accept=".jpg, .jpeg, .png"
      />
    </>
  );
};