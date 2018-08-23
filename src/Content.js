import building from './pic/building.jpg';
import octopus from './pic/octopus.jpg';
import heads from './pic/heads.jpg';
import walk from './pic/walk.jpg';
import selfie from './pic/selfie.jpg';
import sf1 from './pic/sf1.jpg';
import sf2 from './pic/sf2.jpg';
import stockholm1 from './pic/stockholm1.jpg';
import stockholm2 from './pic/stockholm2.jpg';
import berlin1 from './pic/berlin1.jpg';
import berlin2 from './pic/berlin2.jpg';
import rome1 from './pic/rome1.jpg';
import rome2 from './pic/rome2.jpg';
import sicily1 from './pic/sicily1.jpg';
import sicily2 from './pic/sicily2.jpg';
import london1 from './pic-collage/01-woman.jpg';
import london2 from './pic/london2.jpg';
import milan2 from './pic/milan2.JPG';
import map from './pic-collage/map2.jpg';
import margarita from './pic-collage/margarita.jpg';
import volcano from './pic-collage/volcano.jpg';
import llama from './pic-collage/llama.jpeg';


const Content = [
  { id:1,
    image1: volcano,
    image2: london1,
    title: 'Bienvenida, you arrived.',
    image1position: ' col-md-offset-1 col-md-3',
    image2position: ' col-md-offset-0 col-md-6 top-5',
    copyposition: '  col-md-offset-2 col-md-4 top-10',
    button1copy:"Find help!",
    button2copy:"Begin running!",
    copy: 'Thousands of years back in time to find a jewel that will save your family.',
    copy2:'You land on an active volcano and remember you have one day to get this done.',
    date: 'June 2016',
    choice1:1,
    choice2:2,
  },
  { id:2,
    image1: map,
    image2: llama,
    title: 'You run.',
    image1position: ' col-md-offset-1 col-md-6 top-5',
    image2position: ' col-md-offset-0 col-md-2 top-1',
    copyposition: '  col-md-offset-6 col-md-4 top-20',
    copy: 'You move faster than usual. Past llamas and hills till you reach a shore. A small but sturdy figure appears.',
    button1copy:"Meet them!",
    button2copy:"Hide!",
  },
  { id:3,
    title: 'You meet them',
    image1: map,
    image2: margarita,
    image1position: ' col-md-offset-1 col-md-3 top-20',
    image2position: ' col-md-6 top-5',
    copyposition: '  col-md-offset-2 col-md-4 top-10',
    copy: '"Amiga", they spoke. "Your abuelito told me where the jewel is at - but are you brave enough to come with me?"',
    button1copy:"Trust them!",
    button2copy:"Run away!",
  },
  { id:4,
    title: 'Sicily',
    image1: sicily1,
    image2: sicily2,
    boxShadow1: '12px 12px 0px #c4755f',
    boxShadow2: '12px 12px 0px #d5c3b8',
    image1position: ' col-md-offset-0 col-md-6 top-15',
    image2position: ' col-md-4 top-5',
    copyposition: '  col-md-offset-1 col-md-4',
    copy: 'A huge kaisei meal where you told me the story of your best friends loss.',
    copy2: 'We mever karaoked.',
    date: 'may 2016'
  },
  { id:5,
    image1: sf1,
    image2: sf2,
    title: 'San Francisco',
    boxShadow1: '12px 12px 0px #9f6c6a',
    boxShadow2: '12px 12px 0px rgb(69, 82, 79)',
    image1position: ' col-md-offset-1 col-md-7 top-5',
    image2position: ' col-md-offset-0 col-md-3 top-1',
    copyposition: '  col-md-offset-6 col-md-4 top-20',
    copy: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  including versions of Lorem Ipsum',
    date: 'may 2016'
  },
  { id:6,
    image1: stockholm1,
    image2: stockholm2,
    title: 'Stockholm',
    boxShadow1: '12px 12px 0px #9f6c6a',
    boxShadow2: '12px 12px 0px rgb(69, 82, 79)',
    image1position: ' col-md-offset-1 col-md-4 top-5',
    image2position: ' col-md-offset-1 col-md-4 top-5',
    copyposition: '  col-md-offset-4 col-md-3 top-10',
    copy: 'Lorem Iply dummy text of the printing and typesetting industry.  including versions of Lorem Ipsum',
    date: 'may 2016'
  },
  { id:7,
    image1: berlin2,
    image2: berlin1,
    title: 'Berlin',
    boxShadow1: '12px 12px 0px #9f6c6a',
    boxShadow2: '12px 12px 0px rgb(69, 82, 79)',
    image1position: ' col-md-offset-3 col-md-4 top-5',
    image2position: ' col-md-offset-0 col-md-4 top-5',
    copyposition: '  col-md-offset-0 col-md-4 top-15',
    copy: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  including versions of Lorem Ipsum',
    date: 'may 2016'
  },
  { id:8,
    title: 'Kyoto',
    image1: walk,
    image2: heads,
    boxShadow1: '12px 12px 0px #9f6c6a',
    boxShadow2: '12px 12px 0px rgb(69, 82, 79)',
    image1position: ' col-md-offset-0 col-md-6 top-15',
    image2position: ' col-md-4 top-5',
    copyposition: '  col-md-offset-1 col-md-4',
    copy: 'A huge kaisei meal where you told me the story of your best friends loss.',
    copy2: 'We never karaoked.',
    date: 'may 2016'
  },
];

export default Content;
