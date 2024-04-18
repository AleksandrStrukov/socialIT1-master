export type state = {
  posts: posts[];
  newPost: string;
  dialogs: dialogs[];
  messages: message[];
};

export type dialogs = {
  name: string;
  id: string;
  image: string;
};

export type posts = {
  message: string;
  image: string;
  id: string;
};

export type message = {
  message: string;
  image: string;
  id: string;
};

export let state: state = {
  posts: [
    {
      message: 'I am fine!',
      image: 'https://www.freepnglogos.com/uploads/minions-png/minions-png-shy-minion-transparent-png-stickpng-31.png',
      id: '1',
    },
    {
      message: 'I am Web developer!',
      image: 'https://www.freepnglogos.com/uploads/minions-png/dancing-minions-transparent-png-stickpng-18.png',
      id: '2',
    },
    {
      message: ' I am in USA!',
      image:
        'https://www.freepnglogos.com/uploads/minions-png/minions-png-minion-concerned-transparent-png-stickpng-24.png',
      id: '3',
    },
  ],
  newPost: 'Itititi',
  dialogs: [
    {
      name: 'Stepan',
      id: '1',
      image:
        'https://www.freepnglogos.com/uploads/minions-png/minions-png-file-partier-minion-trans-png-images-pngio-20.png',
    },
    {
      name: 'Sasha',
      id: '2',
      image: 'https://www.freepnglogos.com/uploads/minions-png/minions-png-images-heroes-minions-transparent-21.png',
    },
    {
      name: 'Petr',
      id: '3',
      image: 'https://www.freepnglogos.com/uploads/minions-png/minions-png-images-heroes-minions-transparent-22.png',
    },
    {
      name: 'Vosol',
      id: '4',
      image:
        'https://www.freepnglogos.com/uploads/minions-png/minions-png-minion-concerned-transparent-png-stickpng-24.png',
    },
  ],
  messages: [
    {
      message: 'Hey how are you?',
      image: 'https://www.clipartmax.com/png/small/93-935110_minion-43-minions-png.png',
      id: '1',
    },
    {
      message: 'I am on holiday!',
      image:
        'https://e7.pngegg.com/pngimages/254/719/png-clipart-minions-kevin-hawaiian-minions-hula-computer-icons-minion-heroes-despicable-me-thumbnail.png',
      id: '2',
    },
    {
      message: 'What is the weather today?',
      image:
        'https://e7.pngegg.com/pngimages/328/553/png-clipart-three-minions-character-in-denim-jumpers-desktop-1080p-high-definition-video-minions-heroes-film-thumbnail.png',
      id: '3',
    },
    {
      message: 'Hey!Where are you?',
      image:
        'https://e7.pngegg.com/pngimages/847/351/png-clipart-stuart-the-minion-bob-the-minion-kevin-the-minion-minions-minion-stuart-cartoon-desktop-wallpaper-thumbnail.png',
      id: '4',
    },
  ],
};

export const addPost = (postMessage: string) => {
  let newPost: posts = {
    id: '4',
    message: postMessage,
    image: 'https://www.freepnglogos.com/uploads/minions-png/minions-shoeps-19.png',
  };
  state.posts.push(newPost);
};
