import { MessageSendAction, ModalOpenSetAction } from "./actions";

export enum ActionType {
  MESSAGE_SEND,
  MODAL_OPEN_SET,
}

export type Action = MessageSendAction | ModalOpenSetAction;
