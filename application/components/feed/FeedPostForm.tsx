"use client";

import { queryClient } from "@/shared/libs";
import useFeedStore from "@/shared/store/feedStore";
import useModalStore, { ModalType } from "@/shared/store/modalStore";
import { FeedPostBody } from "@/typings/feed";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import * as styles from "./FeedPostForm.css";
import { FlexBox } from "../common/boxes";
import { Avatar } from "../common/avatar";
import { Textarea } from "../common/textarea";
import { Typography } from "../common/typography";
import { IoTrashOutline } from "react-icons/io5";
import { Button, FileUploadButton } from "../common/button";
import { FiMapPin } from "react-icons/fi";
import { ModalHandler } from "../common/modal/ModalHandler";
import { MessageDialog } from "../common/dialog";
import Image from "next/image";
import { ShopLocation } from "./ShopLocation";

const user = {
  nickname: "",
  description: "",
  _id: "",
  creatorId: "",
  created_at: new Date(),
  updated_at: new Date(),
  type: "",
  profileImage: "",
  files: [],
  username: "",
};

export const FeedPostForm = () => {
  const [postForm, setPostForm] = useState<FeedPostBody>({
    content: "",
    item: {
      title: "",
      category: "",
      address: {
        name: "",
        sigungu: "",
        sido: "",
        x: "",
        y: "",
      },
      mapRegister: false,
    },
    files: [],
  });
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);
  const { setIsOpen, setModalType, type } = useModalStore();
  const { item, setFeedItem } = useFeedStore();
  const router = useRouter();

  useEffect(() => {
    setPostForm({
      ...postForm,
      item,
    });
  }, [item]);

  const handleSubmitFeedPost: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();

      const body: FeedPostBody = {
        ...postForm,
      };
      // const { data } = await feedSubmitApi(body);
      // if (data.result) {
      //   if (postForm.files.length > 0) {
      //     const { _id } = data.data;
      //     await fileUpload(_id);
      //   }

      //   //todo 쿼리 초기화 후 마이 피드로 이동
      //   await queryClient.invalidateQueries({
      //     queryKey: "feedClear",
      //   });
      //   router.push("/");
      //   onClickRemoveLocation();
      // }
    } catch (e) {
      console.log(e);
      alert("에러가 발생");
      router.push("/");
      onClickRemoveLocation();
    }
  };

  const onChangeTextarea = (content: string): void => {
    setPostForm({
      ...postForm,
      content,
    });
  };

  const onChangeFileList = (previewUrls: string[], fileList: File[]): void => {
    setPreviewUrl(previewUrls);

    setPostForm({
      ...postForm,
      files: fileList,
    });
  };

  const onClickModalIsOpen = () => {
    setModalType(ModalType.REGISTER_SHOP);
    setIsOpen(true);
    onClickRemoveLocation();
  };

  const onClickConfirmed = (add: boolean) => {
    setPostForm({
      ...postForm,
      item: {
        ...item,
        mapRegister: add,
      },
    });
    setIsOpen(false);
  };

  const onClickRemoveLocation = () => {
    setFeedItem({
      title: "",
      category: "",
      address: {
        name: "",
        sigungu: "",
        sido: "",
        x: "",
        y: "",
      },
      mapRegister: false,
    });
  };

  const fileUpload = async (postId: string) => {
    const { files } = postForm;
    const formData = new FormData();

    files.forEach((file: File) => {
      formData.append(`files`, file);
    });

    try {
      // await postImageUploadApi(postId, formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form
        className={styles.feedPostFormLayout}
        onSubmit={handleSubmitFeedPost}
      >
        <div className={styles.postLayout}>
          <FlexBox
            className={styles.postBodyContainer}
            flexDirection="row"
            alignItems="flex-center"
            justifyContent="flex-start"
          >
            <div className={styles.avatarWrapper}>
              <Avatar alt={user.nickname} src={user.profileImage} />
            </div>
            <Textarea
              placeholder={"여러분의 이야기를 들려주세요."}
              onChangeTextarea={onChangeTextarea}
            />
          </FlexBox>
          {postForm.item.title.length > 0 && (
            <div className={styles.locationItemContainer}>
              <div className={styles.locationItemBox}>
                <FlexBox
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                  flexDirection="column"
                >
                  <Typography fontSize={14} fontWeight={500}>
                    {postForm.item.title}
                  </Typography>
                  <FlexBox
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                    gap={10}
                  >
                    <Typography
                      color={"gray400"}
                      fontSize={14}
                      fontWeight={300}
                    >
                      {postForm.item.category}
                    </Typography>
                    <Typography
                      color={"gray400"}
                      fontSize={14}
                      fontWeight={300}
                    >
                      {postForm.item.address.sido} /{" "}
                      {postForm.item.address.sigungu}
                    </Typography>
                    <Typography
                      color={"gray400"}
                      fontSize={14}
                      fontWeight={300}
                    >
                      {postForm.item.address.name}
                    </Typography>
                  </FlexBox>
                </FlexBox>
                <Button
                  className={styles.removeLocationButton}
                  variant={"icon"}
                  onClick={onClickRemoveLocation}
                >
                  <IoTrashOutline size={24} color={"#d3d3d3"} />
                </Button>
              </div>
            </div>
          )}
        </div>
        <div>
          <FlexBox
            flexDirection="row"
            justifyContent="space-between"
            className={styles.postOptionContainer}
          >
            <FileUploadButton
              onFileChange={(previewUrls: string[], fileList: File[]) =>
                onChangeFileList(previewUrls, fileList)
              }
            />
            <button type={"button"} onClick={onClickModalIsOpen}>
              <FlexBox flexDirection="row" justifyContent="flex-end" gap={4}>
                <FiMapPin color={"#FF7101"} />
                <Typography color="primary" as="span" fontSize={14}>
                  장소
                </Typography>
              </FlexBox>
            </button>
          </FlexBox>
          <div className={styles.imagesContainer}>
            {previewUrl.map((url, index) => (
              <Image
                width={40}
                height={40}
                key={index}
                src={url}
                alt={`Preview ${index}`}
                className={styles.images}
              />
            ))}
          </div>
        </div>
      </form>

      {type === ModalType.REGISTER_SHOP && (
        <ModalHandler modalType={ModalType.REGISTER_SHOP}>
          <ShopLocation />
        </ModalHandler>
      )}

      {type === ModalType.REGISTER_MAP && (
        <ModalHandler modalType={ModalType.REGISTER_MAP}>
          <MessageDialog
            message="오늘의 기록을 내 지도에 표시해보세요!"
            onClickConfirmed={onClickConfirmed}
          />
        </ModalHandler>
      )}
    </>
  );
};
