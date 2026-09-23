import NavBar from "../components/NavBar";
import Footer from "../components/Footer"

import '../styles/HomePage.css'


function HomePage(){
    return(
        <>
            <NavBar/>
            {/* Titre Camouflé */}


            <div className="hp-banner">
                            <h1>Acceuil</h1>
                <div className="hp-section-banner">
                    <h3>M.J.C Maison des Jeunes et de la Culture <br /> 22 Quai de Seine, 78500 Sartrouville</h3>
                </div>

                <div className="hp-section-calendar">
                    <h2>Calendrier d’ouverture du Club</h2>
                    {/* Calendrier Google */}
                    <iframe src="https://calendar.google.com/calendar/embed?height=250&wkst=1&ctz=Europe%2FParis&showPrint=0&showTitle=0&showNav=0&showTabs=0&showCalendars=0&showTz=0&src=YWZvaW4udGVzdC5kZXZAZ21haWwuY29t&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043"  frameBorder="0"></iframe>
                    <p>Horaires : 20h30 á 01h00</p>
                </div>
            </div>

            {/* Section Chiffre  */}
            {/* Dynamiser l'apparation des chiffres en fonction de l'année */}

            <div className="hp-number">
                <div><p><span>50+</span> <br /> Membres Actifs </p></div>
                <div><p><span>20</span> <br />Saisons </p></div>
                <div><p><span>19</span> <br />Événements </p></div>
            </div>

            {/* Section Activité */}

            <div className="hp-section-activity">
                <div className="card-activity" id="card-activity-wargame">
                {/* IMG est un background */}
                <div className="card-activity-shape">
                <h3 className="card-activity-title">Wargame</h3>
                {/* * TODO: fonction JS pour limiter le nombre de caractere a 200 - 3 et ajouter ... a la fin  */}
                <p className="card-activity-paragraph">Plonge dans des combats épiques, de l'échelle d'armée aux petites escouades. de nombreux ennemis à vaincre et de lieux à découvrir </p>
                </div>
                {/* link vers une nouvelle pages prochainement */}
                </div>

                <div className="card-activity" id="card-activity-boardgame">
                {/* IMG est un background */}
                <div className="card-activity-shape">
                <h3 className="card-activity-title">BoardGame</h3>
                <p className="card-activity-paragraph">Viens vivre mille histoires : réhabilite une planète, trahis tes ami.es pour régner, ou unis-toi à eux pour vaincre un grand ennemi.</p>
                </div>
                {/* link vers une nouvelle pages prochainement */}
                </div>

                <div className="card-activity" id="tcg-boardgame">
                {/* IMG est un background */}
                <div className="card-activity-shape">
                <h3 className="card-activity-title">TCG</h3>
                <p className="card-activity-paragraph">Affronte d'autres joueurs en duel stratégique, construis ton deck et deviens une légende du jeu de cartes</p>
                </div>
                    {/* link vers une nouvelle pages prochainement */}
                </div>

                <div className="card-activity" id="paint-boardgame">
                {/* IMG est un background */}
                <div className="card-activity-shape">
                <h3 className="card-activity-title">Peinture</h3>
                <p className="card-activity-paragraph">Apprends à peindre tes miniatures, partage tes techniques et révèle l'artiste qui sommeille en toi !</p>
                </div>
                    {/* link vers une nouvelle pages prochainement */}
                </div>
            </div>

            {/* Section Rejoindre le club */}

            <div className="hp-section-join">
                <div>
                <h3 className="hp-section-join-title">Rejoindre le club</h3>
                    <div>
                        <p className="hp-section-join-button">Rejoindre notre communauté via <button className="main-button" onClick={() => window.open("https://discord.gg/pjPhZ9Aahry","_blank")}>DISCORD</button></p>
                        <p>Venir un Vendredi au Club en tant que joueur ou visiteurs</p>
                        <p>Remplir le formulaire et payer son année</p>
                    </div>
                </div>
            </div>

            {/* Event JFJ */}

            <div className="hp-section-event">
                <img className="hp-section-event-img" src="/img/JFJ_img.jpg" alt="Photo de Groupe JFJ 2026"/>
                <div className="hp-section-event-text">
                    <h3><span>Journées Figurines & Jeux</span> <br /> notre événements annuel</h3>
                    <p className="hp-section-event-subtext">Les Journées Figurines & Jeux (JFJ) sont le rendez-vous des passionnés de figurines et de jeux de société. Au programme : tournois animés, Open de peinture, rencontres avec des créateurs et ateliers créatifs (speed painting, slow painting, kitbashing). Que vous soyez peintre, joueur ou simple curieux, venez partager un moment convivial, riche en découvertes et en émotions !</p>
                    {/* Redirection vers le site JFJ dans un nouvel onglet*/}
                    <button className="main-button" onClick={() => window.open("https://journeesfigurinesjeux.com/", "_blank")}><p>Site Web Officiel</p></button>
                </div>
            </div>

            {/* Map et Lieux */}

            <div className="hp-section-map">
                <div>
                    <h3>Le lieux</h3>
                    <p><span>En Voiture</span><br />Parking disponible</p>
                    <p><span>En Transport</span><br />Gare proche : Gare Sartrouville</p>
                    <img src="/img/RERA.svg" alt="Logo representant la ligne du RER A" />
                    <p><span>RER A</span> <br />Gare de Sartrouville</p>
                    <img src="/img/LIGNEL.svg" alt="Logo representant la ligne L" />
                    <p><span>Ligne L</span> <br />Gare de Sartrouville</p>
                </div>
                {/* Google Maps */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.381308211726!2d2.1576037767599208!3d48.94477259462321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6617cb20ee8c7%3A0x8f2b2d03ac963605!2sM.J.C%20Maison%20des%20Jeunes%20et%20de%20la%20Culture!5e1!3m2!1sfr!2sfr!4v1790001719809!5m2!1sfr!2sfr" frameBorder="0"  loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>

            <Footer/>
        </>
    );
}

export default HomePage;