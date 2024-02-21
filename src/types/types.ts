export interface IFormCard {
  id: string;
  name: string;
  surname: string;
  birth: string;
  country: string;
  photo: FileList | null | string;
  agree: boolean;
}

export type IFormData = Omit<IFormCard, 'id'>;

export interface IAddCardData {
  addCardData: (data: IFormCard) => void;
}
