"use client";

import useModalStore from "@/shared/store/modalStore";
import FlexBox from "../boxes/FlexBox";
import { Typography } from "../typography/Typography";
import { Button } from "../button";

interface MessageDialogProps {
  message?: string;
  onClickConfirmed: (add: boolean) => void;
}

export const MessageDialog = ({
  message,
  onClickConfirmed,
}: MessageDialogProps) => {
  const { closeModal } = useModalStore();

  const handleClickButton = (add: boolean): void => {
    // closeModal();
    onClickConfirmed && onClickConfirmed(add);
  };

  return (
    <FlexBox flexDirection="column" gap={20}>
      <div>
        <Typography>{message}</Typography>
      </div>
      <div>맵 마커 선택</div>
      <FlexBox flexDirection="row" gap={10}>
        <Button variant="gray" onClick={() => handleClickButton(false)}>
          글만 작성할래요
        </Button>
        <Button variant="primary" onClick={() => handleClickButton(true)}>
          지도에 표시할래요
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
