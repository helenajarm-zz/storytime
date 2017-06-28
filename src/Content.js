import octopus from './pic/octopus.jpg';
import walk from './pic/walk.jpg';
import selfie from './pic/selfie.jpg';

const Content = [
  { id:1,
    title: 'nowhere',
    image1: octopus,
    image2: walk,
    button1: 'blend in with me',
    button2: 'stand out with me',
    image1position: ' col-md-offset-1 col-md-4 top-0',
    image2position: ' col-md-offset-5 col-md-6 top-15',
    button1position: 'col-md-offset-1 col-md-2',
    button2position: 'col-md-offset-4 col-md-2 top-30',
    copyposition: '  col-md-offset-4 col-md-5 top-10',
    copy: 'We stood underneath the Sakura in Tokyo and tried to blend into the pink.',
    copy2: 'We stood in a yellow field in Tokyo. We could never blend into that brightness.'
  },
  { id:2,
    image1: walk,
    image2: selfie,
    title: 'further away',
    button1: 'Hello2',
    button2: 'Goodbye2',
    image1position: ' col-md-offset-0 col-md-4 top-15',
    image2position: ' col-md-offset-6 col-md-4 top-1',
    button1position: 'col-md-offset-1 col-md-2',
    button2position: 'col-md-offset-2 col-md-2',
    copyposition: '  col-md-offset-1 col-md-4',
    copy: ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  { id:3,
    image1: selfie,
    image2: octopus,
    title: 'selfie',
    button1: 'Hello3',
    button2: 'Goodbye3',
    image1position: ' col-md-offset-1 col-md-4 top-15',
    image2position: ' col-md-offset-6 col-md-4 top-1',
    button1position: 'col-md-offset-1 col-md-2',
    button2position: 'col-md-offset-2 col-md-2',
    copyposition: '  col-md-offset-1 col-md-4',
    copy: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  including versions of Lorem Ipsum'
  },
  { id:4,
    image1: selfie,
    image2: octopus,
    title: 'yo',
    button1: 'Hello4',
    button2: 'Goodbye4',
    image1position: ' col-md-offset-8 col-md-4 top-15',
    image2position: ' col-md-offset-6 col-md-4 top-1',
    button1position: 'col-md-offset-1 col-md-2',
    button2position: 'col-md-offset-2 col-md-2',
    copyposition: '  col-md-offset-1 col-md-4',
    copy: 'Lorem Iply dummy text of the printing and typesetting industry.  including versions of Lorem Ipsum'
  }
];

export default Content;
