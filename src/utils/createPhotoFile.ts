export const createPhotoFile = (photo: FileList | null) => {
  const url = photo ? URL.createObjectURL(new Blob([photo[0]])) : '';

  return url;
};
