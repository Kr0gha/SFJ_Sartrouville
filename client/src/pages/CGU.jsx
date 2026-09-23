// Style

import '../styles/CGU.css'

import NavBar from "../components/NavBar";
import Footer from "../components/Footer"

// Page
 function CGU() {
    return(
        <>
        <NavBar/>
        <div className='CGU-section'>
            <h1>MENTIONS LÉGALES </h1>
            <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site sartrouvillefigurinesetjeux l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
            <h2>Edition du site 
            </h2>
            <p>Le présent site, accessible à l’URL www.sartrouvillefigurinesetjeux.fr (le « Site »), est édité par :
            </p>
            <p>L’association Sartrouville Figurines et Jeux, enregistrée auprès de la préfecture/sous-préfecture de 78 - Préfecture Versailles sous le numéro W783001143, ayant son siège situé à 22 Quai de Seine, 78500 Sartrouville, représentée par Alexandre FOIN dûment habilité(e)
            </p>
            <h2>Hébergement
            </h2>
            <p>Le Site est hébergé par la société Autre, situé rue paul emile victor 95520 OSNY, (contact téléphonique ou email : +33659371085).
            </p>
            <h2>Directeur de publication 
            </h2>
            <p>Le Directeur de la publication du Site est   .</p>
            <h2>Nous contacter</h2>
            <ul>
            <li>Par téléphone : +33659371085</li>
            <li>Par email : afoin.test.dev@gmail.com</li>
            <li>Par courrier : 22 Quai de Seine, 78500 Sartrouville</li>
            </ul>
            <h2>Données personnelles</h2>
            <p>Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
            </p>
        </div>
        <Footer/>
       </> 
    )
 }

 export default CGU;