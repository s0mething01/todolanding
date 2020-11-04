export default {
  name: new RegExp('^[a-z-zżźćńółęąś ]{3,20}$', 'i'),
  // eslint-disable-next-line
  email: new RegExp('^([a-zzżźćńółęąś0-9_-]+.)*[a-zzżźćńółęąś0-9_-]+@[a-zzżźćńółęąś0-9_-]+(.[a-zzżźćńółęąś0-9_-]+)*.[a-zzżźćńółęąś]{2,6}$', 'i'),
  title: new RegExp('^.{8,30}$', 'i'),
  message: new RegExp('^.{15,200}$', 'i'),
};
