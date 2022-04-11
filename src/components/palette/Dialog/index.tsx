import {
  ButtonAction,
  ButtonActionContainer,
  Modal,
  ModalContent,
  ModalTitle,
} from "./DialogCss";

export type DialogProps = {
  isOpen: boolean;
  title: string | JSX.Element;
  message: string | JSX.Element;
  withCancel?: boolean;
  buttonActionTitle: string;
  buttonCancelTitle: string;
  onButtonClick: (isSubmit: boolean) => void;
};
const Dialog = ({
  isOpen,
  title,
  message,
  withCancel = false,
  buttonActionTitle,
  buttonCancelTitle = "Batal",
  onButtonClick,
}: DialogProps) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        {message}
        <ButtonActionContainer>
          {withCancel && (
            <ButtonAction
              onClick={() => onButtonClick(false)}
              className="secondary"
            >
              {buttonCancelTitle}
            </ButtonAction>
          )}
          <ButtonAction
            onClick={() => onButtonClick(withCancel ? true : false)}
          >
            {buttonActionTitle}
          </ButtonAction>
        </ButtonActionContainer>
      </ModalContent>
    </Modal>
  );
};

export default Dialog;
