import React, { useEffect, useState } from 'react'
import Footer from './Home/Footer'
import PublicNav from '../components/publicUser/PublicNav'

const Legal = () => {

    const [language, setLanguage] = useState("fr")
    useEffect(() => {
        if (!sessionStorage.getItem('language')) {
            sessionStorage.setItem('language', language)
        }
        if (sessionStorage.getItem('language')) {
            setLanguage(sessionStorage.getItem('language'))
        }

    }, [language])

    return (
        <div className="container-fluid p-0 justify-content-center">

            <div className="pt-5 pb-0 pb-md-3 ">
                <PublicNav
                    language={language}
                    setLanguage={setLanguage}
                />
                {/* Mentions Légales */}
                <div className="container-fluid">
                    <h1 className="display-3 mt-5 col-md-12 text-center">Mentions légales</h1>
                    <div className="col-md-8 mx-auto text-justify">
                        <p>Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités. Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet <a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a> sont :</p>
                        <ul className="list-group"><h4>Editeur du site:</h4>
                            <li className="list-item">Thomas Gil</li>
                            <li className="list-item">Numéro de SIRET :  53176003100025</li>
                            <li className="list-item">Responsable editorial : Le propriétaire du site</li>
                            <li className="list-item">22 allée de la pagerie</li>
                            <li className="list-item">Téléphone :0762507097 - Fax : 0762507097</li>
                            <li className="list-item">Email : tgil849@gmail.com</li>
                            <li className="list-item">Site Web : <a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a></li>
                        </ul>
                        <ul className="list-group mt-4"><h4>Hébergement :</h4>
                            <li className="list-item">Hébergeur : planetHoster</li>
                            <li className="list-item">21 Rue de Marignan, 75008 Paris</li>
                            <li className="list-item">Site Web :  <a href="http://https://www.planethoster.com/fr/">https://www.planethoster.com/fr/</a>
                            </li>
                        </ul>
                        <ul className="list-group mt-4"><h4>Développement:</h4>
                            <li className="list-item">Thomas Gil</li>
                            <li className="list-item">Adresse : 22 allée de la pagerie</li>
                            <li className="list-item">Site Web : <a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a>
                            </li>
                        </ul>
                        <br />
                        <h2>Conditions d’utilisation</h2>
                        <p>
                            Ce site (<a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a>) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d'utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…
                        </p>
                        <p>
                            Les mentions légales ont été générées sur le site <a title="générateur de mentions légales pour site internet gratuit" href="http://www.generateur-de-mentions-legales.com">Générateur de mentions légales</a>, offert par <a title="imprimerie paris, imprimeur paris" href="http://welye.com">Welye</a>.
</p>
                        <p>
                            Le propriétaire du site met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès de , et signaler toutes modifications du site qu'il jugerait utile. n'est en aucun cas responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
    </p>
                        <h2>Cookies</h2>
                        <p>
                            Le site <a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a> peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookies est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
    </p>
                        <h2>Liens hypertextes</h2>
                        <p>
                            Ce site internet peut offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. Le propriétaire du site ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet. ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation.
    </p>
                        <p>
                            Les utilisateurs, les abonnés et les visiteurs des sites internet de ne peuvent mettre en place un hyperlien en direction de ce site sans l'autorisation expresse et préalable de Le propriétaire du site.
    </p>
                        <p>
                            Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet de Le propriétaire du site, il lui appartiendra d'adresser un email accessible sur le site afin de formuler sa demande de mise en place d'un hyperlien. Le propriétaire du site se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.
        </p>
                        <h2>Limitation contractuelles sur les données</h2>
                        <p>
                            Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse tgil849@gmail.com, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).
</p>
                        <p>
                            Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour
                    </p>
                        <p>
                            Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Le propriétaire du site.
                    </p>
                        <h2>Propriété intellectuelle</h2>
                        <p>
                            Tout le contenu du présent sur le site <a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a>, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
</p>
                        <p>
                            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit du propriétaire du site. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.
                    </p>
                        <h2>Litiges</h2>
                        <p>
                            Les présentes conditions du site <a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a> sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
                    </p>
                        <h2>Données personnelles</h2>
                        <p>
                            De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet <a href="http://thomas-g.herokuapp.com/">thomas-g.herokuapp.com/</a>.
</p>
                        <p>
                            Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre fonction, le nom de votre société, votre adresse électronique, et votre numéro de téléphone. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact ». Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur notre société, ou de recevoir les lettres d’information.
</p>
                        <p>
                            Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d’une simple navigation sur notre site Internet, notamment : des informations concernant l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos temps d'accès. De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
                    </p>
                        <p>Vous pouvez demander à tous moments, comme le prévoit la loi, de demander au propriétaire du site de supprimer toutes les infos personelles vous concernant, et ce par mail. Les dispositions nécéssaires seront mises en place au plus vite.</p>
                    </div>
                </div>
            </div>
            <Footer language={language} />
        </div>
    )
}

export default Legal