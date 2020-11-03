export default {
  name: new RegExp('^[a-z-zżźćńółęąś ]{2,20}$', 'i'),
  // eslint-disable-next-line
  email: new RegExp('^([a-zzżźćńółęąś0-9_-]+.)*[a-zzżźćńółęąś0-9_-]+@[a-zzżźćńółęąś0-9_-]+(.[a-zzżźćńółęąś0-9_-]+)*.[a-zzżźćńółęąś]{2,6}$', 'i'),
  title: new RegExp('^.{5,30}$', 'i'),
  message: new RegExp('^.{5,100}$', 'i'),
};
