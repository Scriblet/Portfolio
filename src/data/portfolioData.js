import appCompass from '../img/mockDrop_Apple_AppCompass.jpg';
import siteMeme from '../img/mockDrop_MacBookPro_SiteMeme.jpg';
import appSloop from '../img/mockDrop_iPhone6_AppSloop.jpg';
import siteMyCertify from '../img/mockDrop_MacBookPro_SiteMyCertify.jpg';
import starWarsMockup from '../img/mockupStarwars.jpg';

const portfolioData = [
  {
    id: 0,
    img: appCompass,
    href: 'https://xd.adobe.com/view/0fc5c877-163f-4980-98e7-99050fc7ecb2-5a96/',
    alt: 'Imagem de pessoa utilizando o app Compass',
    title: 'Design - App Compass',
    text:
      'O APP Compass trabalha com leitura em uma prática que tenha significado para a vida do estudante.',
  },
  {
    id: 1,
    img: appSloop,
    href: 'https://xd.adobe.com/view/77891c00-067c-46c5-6bb1-d4d7853c3b12-01b8/?hints=off',
    alt: 'Imagem de pessoa utilizando o app Sloop',
    title: 'Design - App Sloop',
    text:
      'Plataforma para acessibilizar produtos de entidades fechadas de previdência complementar para o público em geral.',
  },
  {
    id: 2,
    img: siteMyCertify,
    href: 'https://xd.adobe.com/view/b35eafca-48f3-41a4-7760-1bc84f4e9671-c56f/',
    alt: 'Imagem de computador em mesa de madeira com a aplicação My Certify em tela',
    title: 'Design - Web My Certify',
    text:
      'Plataforma de emissão de Certificados para eventos utilizando Blockchain como tecnologia',
  },
  {
    id: 3,
    img: siteMeme,
    href: 'https://github.com/Scriblet/project-meme-generator.git',
    alt: 'Imagem de computador em mesa de madeira com a aplicação Meme Generator em tela',
    title: 'Site - Meme Generator',
    text:
      'Projeto para o curso de desenv. de Software da Trybe, onde neste site é possível criar Memes com as imagens que bem quiser!',
  },
  {
    id: 4,
    img: starWarsMockup,
    href: 'https://scriblet.github.io/StarWars-Datable-Hooks/',
    alt: 'Imagem de computador em mesa com a imagem do Darth Vader em tela',
    title: 'Site - Star Wars Datable Hooks',
    text:
      'Projeto para o curso de desenv. de Software da Trybe, onde neste site é possível filtrar a lista de planetas do universo Star Wars usando Context API e Hooks para controlar',
  },
];

export default portfolioData;
