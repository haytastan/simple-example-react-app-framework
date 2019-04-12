export default {
  type: '_div',
  props: {
    style: {
      width: '100%',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  children: [
    {
      type: 'usr.components.TitlePanel',
      instance: 'titlePanel',
    },
    {
      type: 'usr.components.Form',
      instance: 'form',
    }
  ]
};
