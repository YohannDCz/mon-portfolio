// import { useState, useEffect } from "react";

export function SplitScreen({title, description, image, link}) {
    return (
    <div className="box">
      <div className="wrapper images-box">
        <img src={image} className="screenshots" />
        <img className="qrcode" src="/icons/QRcodes/qrcode1.png" alt="" />
      </div>
      <div className="wrapper text-box">
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
    )
  }

export function SplitScreens() {
  
  const description = [
    {
      "title" : "PROJET VENTURA",
      "description": "C’est un des premiers projet dans lequel je me suis investit. Et c’est pour cela qu’il est resté écrit en pure HTML5, CSS3 et ES6. Mes principales préoccupation on été la magnification du Dock et l’agrandissement et la manipulation des fenêtres. Il n’est pas fini.",
      "image": "/screenshots/thumbnail_ventura.png",
      "link": "https://yohanndcz.github.io/Projet_VENTURA/"
    },
    {
      "title": "PROJET KANBAN",
      "description": "C’est un deuxième gros projet. Ce projet compte un management de tâche et dispose d’une allure élégante. Mes principales préoccupation on été de pourvoir retracer la tâche sélectionnée dans le contexte du JSON donné et de remplir les informations analogues à la tâche en conséquence. La partie en Redux arrive pour prendre la place des manipulation avec le localstorage.",
      "image": "/screenshots/thumbnail_kanban.png",
      "link": "kanban-woad.vercel.app/"
    },
    {
      "title": "PROJET DECIMAL",
      "description": "C’est mon premier projet design. J’ai pu apprendre au travers de ce projet la manipulation de Adobe XD. J’ai designé une application complète de A à Z por le moile et le desktop notamment.",
      "image": "/screenshots/thumbnail_decimal.png",
      "link": "https://xd.adobe.com/view/898ecf43-a066-48de-af2c-8c2a27df0bc7-dcdd/"
    },
    {
      "title": "PROJET MYTEAM",
      "description": "C’est mon deuxième projet écrit en Flutter. Je l’ai développé en 2 jour + 1 nuit et je l’ai publié sur le Google Play Store. À l’heure qu’il est Google est en train de l’analyser pour publication. Cette app, statique, mobile et sans state management a été facile à implémenter. Je commence toujours comme ça, exception faite pour React, ou j’ai directement commencé par le Kanban. Sachez donc que les  nouveau langage et framework ne me font pas peur !",
      "image": "/screenshots/thumbnail_myteam.png",
      "link": ""
    },
    {
      "title": "PROJET DESIGNO",
      "description": "J’ai construit ce multipage website en 3 jour responsive compris. Je l’ai écrit en HTML5, CSS3 et Javascript 2015+. J’y aie pris pas mal de plaisir mais la réutilisation des composants au travers des différentes page et la notion de routing avait un besoin qui se faisait ressentir, besoin que j’ai pu comblé en passant à React.",
      "image": "/screenshots/thumbnail_designo.png",
      "link": "https://yohanndcz.github.io/designo-multiplepage-website/"
    },
    {
      "title": "PROJET SKILLED",
      "description": "C’est ma première landing page écrit en langage web ! Codé en un jour responsive compris, j’ai pu me faire la main en première impression sur les langages web",
      "image": "/screenshots/thumbnail_skilled.png",
      "link": "https://yohanndcz.github.io/Skilled-LandingPage/"
    },
    {
      "title": "PROJET POPULY",
      "description": "Ce concept de site internet est une présentation des différent services fournit par une entreprise lambda que l’ai designé moi même et l’ai codée en une après-midi. Ça m’a permit de progresser dans mes skills design et voir le design d’une app d’un oeil nouveau, hors des sentier battus de Decimal, mon autre application sociale.",
      "image": "/screenshots/thumbnail_populy.png",
      "link": "https://yohanndcz.github.io/Populy-LandingPage/"
    },
    {
      "title": "YOUTUBE CLONE",
      "description": "Mon tout premier projet ! À travers une vidéo YouTube de 6:00 de long formant sur les différentes skills et techniques de HTML et CSS. J’ai pu y découvrir les flexboxes et les grids mais également tous les composants de base pour mener à bien la construction d’une webpage.",
      "image": "/screenshots/thumbnail_youtube.png",
      "link": "https://yohanndcz.github.io/YouTube-Mirror/"
    },
    {
      "title": "TWITTER CLONE",
      "description": "Mon deuxième projet, cette fois sans support et tout à fait en roue libre. Le projet est une webpage statique et ne contient aucun management de state.",
      "image": "/screenshots/thumbnail_twitter.png",
      "link": "https://yohanndcz.github.io/Twitter-Mirror/"
    },
    {
      "title": "GOOGLE CLONE",
      "description": "Mon troisième projet. Il s’agit de la front page du site web le plus populaire: Google. La mise en page nécessitait pas mal de div et j’ai fait ce projet dans le but de compléter mon panel de site clone, jusqu’à ce que je migre vers des projets totalement différents et plus riche en technologie.",
      "image": "/screenshots/thumbnail_google.png",
      "link": "https://yohanndcz.github.io/Google-Mirror/"
    }
  ]

  // const [data, setData] = useState({});

  // const getData = () =>  {
  //   fetch('/data.json')
  //   .then((response) => response.json())
  //   .then((data1) => {
  //     setData(data1)
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching JSON:', error);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // })
 
  return (
    <section id="splitscreen">
      {description.slice(0, 3).map(({title, description, image, link}) => (
        <SplitScreen key={title} title={title} description={description} image={image} link={link} />
      ))}
    </section>
  )
}