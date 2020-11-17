import React,{Fragment} from 'react'

const CVtoShare=()=>{
    return(
        <div className="container-fluid">
            <div className="row py-3 px-0 mx-0 w-100 position-absolute bg-dark" style={{top:"0",left:"0"}}>
                <div className="card-title col-12 text-center text-white ounded px-0">
                    <h1 className="mb-0">Thomas Gil-Escriche</h1>
                    <h1 className="lead">Développeur web Fullstack React et Node</h1>
                </div>
            </div>
            <div className="row mt-4 px-3">
                <div className="col-md-9 col-12">
                    <div className="row px-md-4 mx-auto text-center" style={{marginTop:"150px"}}>
                        
                        <div className="col-12 col-md-6 "><p><i className="fas fa-at"></i> Tgil849@gmail.com</p></div>
                        <div className="col-12 col-md-6"><p><i className="fab fa-github-square"></i> ThomasGil92</p></div>
                        <div className="col-12 col-md-6"><p><i className="fas fa-map-marker-alt"></i> Rueil-Malmaison (92500)</p></div>
                        <div className="col-12 col-md-6"><p>Âge: 29 ans</p></div>
                        <div className="col-12 col-md-6"><p><i className="fas fa-phone-volume"></i> 07.62.50.70.97</p></div>
                        <div className="col-12 col-md-6"><p><i className="fab fa-linkedin"></i> thomas-g-81543b162</p></div>
                    </div>
                    <div className="row text-left mt-5">
                        <div className="col-12 px-0 px-md-2">
                            <h1 className="text-center py-md-4 w-100 bg-dark text-light rounded">Expériences</h1>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Septembre-Octobre 2020 /</h4><h5> Migration et refonte de mon portfolio en ligne</h5>
                                </div>
                                <ul>
                                    <li className="df">Création d'une API GraphQL pour enregistrer mes différents projets</li>
                                    <li className="df">Création d'une interface administrateur pour gérer mes projets</li>
                                    <li className="df">Authentification avec Firebase</li>
                                    <li className="df">Mise en place et utilisation d'un serveur Express.js</li>
                                    <li className="df">Refonte du design</li>
                                    <li className="df">Gestion du state avec Context</li>
                                    <li className="df">Gestion de projet</li>
                                    <li className="df">Déploiement sur Heroku</li>
                                </ul>

                                <p><u>Technologies utilisées</u>: React, Node, Context, Express.Js, MongoDB, GraphQL.</p>
                                {/* <div className="row justify-content-around">
                                    <div className="card col-12 col-md-5">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Lien du site</h5>
                                            <li className="list-group-item border-0 py-2 mt-4"><a href="https://thomas-gil.fr" rel="target_blank">Thomas-gil.fr</a></li>
                                        </div>
                                    </div>
                                    <div className="card col-12 col-md-5">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Lien répertoire github</h5>
                                            <li className="list-group-item border-0 py-2"><a href="https://github.com/ThomasGil92/thomas-gil.herokuapp.com" rel="target_blank">ThomasGil92/thomas-gil.herokuapp.com</a></li>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Juillet-Aout 2020 /</h4><h5> Développement d'une application de gestion de projet</h5>
                                </div>
                                <ul>
                                    <li className="df">Création d'une API Restful pour traiter les données des utilisateurs</li>
                                    <li className="df">Mise en place de l'authentification par Tokens</li>
                                    <li className="df">Cryptage de mot de passe</li>
                                    <li className="df">Mise en place et utilisation d'un serveur Express.js</li>
                                    <li className="df">Création et gestion de la base de donnée MongoDB</li>
                                    <li className="df">Étude de users stories</li>
                                    <li className="df">Gestion de projet</li>
                                    <li className="df">Gestion du State avec Redux</li>
                                    <li className="df">Création du design</li>
                                </ul>
                                <p><u>Technologies utilisées</u>: React, Node, Redux, MongoDB, Bootstrap/React-bootstrap.</p>
                                {/* <div className="row justify-content-around">
                                    <div className="card col-12 col-md-5">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Lien du site</h5>
                                            <li className="list-group-item border-0 py-2"><a href="https://fokjlenot.herokuapp.com" rel="target_blank">Fokjlenot.herokuapp.com</a></li>
                                        </div>
                                    </div>
                                    <div className="card col-12 col-md-5">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Lien répertoire github</h5>
                                            <li className="list-group-item border-0 py-2"><a href="https://github.com/ThomasGil92/Fokjlenot" rel="target_blank">github.com/ThomasGil92/Fokjlenot</a></li>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Juin-Juillet 2020 /</h4><h5> Développement de mon portfolio en ligne</h5>
                                </div>
                                <ul>
                                    <li className="df">Création d'une API Restful pour enregistrer mes différents projets</li>
                                    <li className="df">Création d'une interface administrateur pour gérer mes projets</li>
                                    <li className="df">Mise en place et utilisation d'un serveur Express.js</li>
                                    <li className="df">Création du design</li>
                                    <li className="df">Gestion de projet</li>
                                    <li className="df">Gestion du state avec Redux</li>
                                    <li className="df">Authentification par tokens</li>
                                    <li className="df">Déploiement sur heroku</li>
                                </ul>

                                <p><u>Technologies utilisées</u>: React, Node, Redux, Express.Js, MongoDB.</p>
                                {/* <div className="row justify-content-around">
                                    <div className="card col-12 col-md-5">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Lien du site</h5>
                                            <li className="list-group-item border-0 py-2 mt-4"><a href="https://thomas-gil.fr" rel="target_blank">Thomas-gil.fr</a></li>
                                        </div>
                                    </div>
                                    <div className="card col-12 col-md-5">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Lien répertoire github</h5>
                                            <li className="list-group-item border-0 py-2"><a href="https://github.com/ThomasGil92/thomas-gil.herokuapp.com" rel="target_blank">ThomasGil92/thomas-gil.herokuapp.com</a></li>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-start">
                                    <h4>Avril-Mai 2020 /</h4><h5> Développement d’un site Wordpress pour un cabinet de <br />pédicures-podologues</h5>
                                </div>
                                <ul>
                                    <li className="df">SEO</li>
                                    <li className="df">Gestion de projet</li>
                                    <li className="df">Création du design</li>
                                    <li className="df">Installation du CMS Wordpress</li>
                                    <li className="df">Personnalisation du thème Wordpress</li>
                                    <li className="df">Installation des différentes extensions (YoastSEO, ContactForm, ...)</li>
                                </ul>
                                <p><u>Technologies utilisées</u>: Wordpress, Photoshop, utilisation de "Page Builder", YoastSEO, ...</p>
                                {/* <div className="row justify-content-start">
                                    <div className="card col-12 col-md-5">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Lien du site</h5>
                                            <li className="list-group-item border-0 py-2"><a href="https://podologues-des-bruyeres.fr/" rel="target_blank">Podologues-des-bruyères.fr</a></li>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Janvier-Février 2020 /</h4><h5> Développement de 2 projets web avec le MERN stack</h5>
                                </div>
                                <span>Projets de formation (non publiés)</span>
                                <ul>
                                    <li className="df">Installation et gestion d'une base de donnée</li>
                                    <li className="df">Création du design</li>
                                    <li className="df">Création d'une API Restful pour le traitement des données utilisateurs</li>
                                    <li className="df">Création d'un serveur Express.js</li>
                                    <li className="df">Implementation de l'API Paypal pour le paiement en ligne</li>
                                </ul>
                                <p><u>Technologies utilisées</u>: React, MongoDB, Express.js, Node.</p>

                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Septembre-Octobre 2019 /</h4><h5> Développement d’un blog pour un écrivain</h5>
                                </div>
                                <span>Projet de formation (non publié)</span>
                                <ul>
                                    <li className="df">Installation et gestion d'une base de donnée</li>
                                    <li className="df">Création du design</li>
                                    <li className="df">Implémentation des routes pour la nivagation sur le site</li>
                                </ul>
                                <p><u>Technologies utilisées</u>: PHP, HTML, CSS.</p>
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Mai-Juillet 2019 /</h4><h5> Développement d’une Single Page Application</h5>
                                </div>
                                <span>Projet de formation (non publié)</span>
                                <ul>
                                    <li className="df">Utilisation de l'API JcDeceaux, API de reservation de vélo en ligne</li>
                                    <li className="df">Création du design</li>
                                    <li className="df">Développement en POO</li>
                                    <li className="df">Requêtes AJAX</li>
                                    <li className="df">Utilisation de JQuery</li>
                                </ul>
                                <p><u>Technologies utilisées</u>: Javascript, HTML, CSS.</p>
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Mars-Avril 2019 /</h4><h5> Développement d’un site fictif pour l’office de tourisme de Strasbourg</h5>
                                </div>
                                <span>Projet de formation (non publié)</span>
                                <ul>
                                    <li className="df">SEO</li>
                                    <li className="df">Gestion de projet</li>
                                    <li className="df">Animations en pure CSS</li>
                                    <li className="df">Création du design</li>
                                    <li className="df">Installation du CMS Wordpress</li>
                                    <li className="df">Personnalisation du thème Wordpress</li>
                                    <li className="df">Installation des différentes extensions (YoastSEO, ContactForm, ...)</li>
                                </ul>
                                <p><u>Technologies utilisées</u>: Wordpress, YoastSEO</p>
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <div className="d-flex align-items-end">
                                    <h4>Février 2019 /</h4><h5> Intégration d’une maquette de site internet</h5>
                                </div>
                                <span>Projet de formation (non publié)</span>
                                <ul>
                                    <li className="df">Découpage de maquette graphique avec Photoshop</li>
                                    <li className="df">Intégration en grille avec Bootstrap</li>
                                    <li className="df">Personnalisation du design avec HTML et CSS3</li>
                                </ul>
                                <p><u>Technologies utilisées</u>: HTML, CSS, Bootstrap</p>
                            </div> */}
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <h4>Septembre 2008 - Novembre 2018 /</h4>
                                <p>2008 - 2010 : Cuisinier en alternance au restaurant “La place” à
                                Rueil-Malmaison (Préparation des entrées, plats et desserts, mise en place et entretien de la cuisine)
                                </p>
                                <p>
                                    2010 - 2018 : Barman et chef de rang au restaurant “Lavenue” à
                                    Rueil-Malmaison (Préparation et entretien des salles, gestion des boissons et de la mise en place, etc.).
</p>
                            </div>

                        </div>
                        <div className="col-12">
                            <h1 className="text-center py-md-4 mt-md-3 w-100 bg-dark text-light rounded">Formations</h1>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 mt-md-3 border">
                                <h4>Septembre 2020</h4>
                                <h5>Formation au développement fullstack avec GraphQl sur "Udemy".</h5>
                                <ul className="list-group bg-light">Compétences aquises:
                                     <li className="list-group-item border-0 py-1 bg-light">-Créer un site fullstack React multi-pages avec Node.js, Express.js, MongoDB et GraphQL.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Créer un serveur Apollo.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Enregistrer et authentifier les utilisateurs avec Firebase.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Upload d'images avec Cloudinary.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Gestion du state avec Context.</li>
                                </ul>
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 mt-md-3 border">
                                <h4>Aout 2020 - Septembre 2020</h4>
                                <h5>Formation aux requêtes GraphQL sur "Udemy".</h5>
                                <ul className="list-group bg-light">Compétences aquises:
                <li className="list-group-item border-0 py-1 bg-light">-Créer un site fullstack React multi-pages avec Node.js, Express.js, MongoDB et GraphQL.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Créer un serveur Apollo.</li>
                                </ul>
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 mt-md-3 border">
                                <h4>Aout 2020</h4>
                                <h5>Formation au "Test driven development" sur "Udemy".</h5>
                                <ul className="list-group bg-light">Compétences aquises:
                <li className="list-group-item border-0 py-1 bg-light">-Créer des tests automatiques pour tester les endpoints d'une API avec Jest et Supertest.</li>
                                </ul>
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 mt-md-3 border">
                                <h4>Décembre 2019 - Février 2020</h4>
                                <h5>Formation de dévelopeur web FullStack React.js/Node.js sur "Udemy".</h5>
                                <ul className="list-group bg-light">Compétences aquises:
                <li className="list-group-item border-0 py-1 bg-light">-Créer un site fullstack React multi-pages avec Node.js, Express.js et MongoDB.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Gérer les autorisations pour fournir une page d’administration sécurisée pour les administrateur et une page de profile ou autres pour les clients.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Gérer le state avec les hooks.</li>
                                </ul>
                            </div>
                            <div className="text-justify bg-light rounded py-4 px-4 mb-3 border">
                                <h4>Septembre 2018 - Novembre 2019</h4>
                                <h5>Formation de dévelopeur web au sein de l’organisme de formation "Openclassrooms". </h5>
                                <ul className="list-group bg-light">Compétences aquises:
                <li className="list-group-item border-0 py-1 bg-light">-Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Animer les pages web avec CSS3.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Appliquer les standards du web et les normes en vigueur.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Construire un site web responsive.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Améliorer le référencement naturel en utilisant les balises selon leur sémantique.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Rendre une page dynamique en fonction des actions de l’utilisateur en Javascript.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Se connecter à un service web pour exploiter des données tierces (API).</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Créer, gérer et afficher le contenu d’une base de données.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {window.innerWidth > 960 && (
                    <div className="col-md-3 col-12 h-100">
                        <div className="col-md-9 col-6 mt-2 mt-md-0 mx-auto">
                            <img className="rounded-circle" src="img/photo-thomas-gil.png" width="100%" alt="Thomas Gil" />
                        </div>
                        <div className="text-left comp mt-md-5">
                            <h5>Compétences</h5>
                            <div className="bg-light rounded list-group">
                                <li className="list-group-item bg-light px-3">
                                    <span>Javascript</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>React</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>Node.js</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>API Restful</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>GraphQL</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>TDD</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>Redux</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>Next.js</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>HTML</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>CSS</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>Bootstrap</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>Github</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>MongoDB</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>Wordpress</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}></div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-light px-3">
                                    <span>Photoshop</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="text-left mt-md-5 mt-2 mb-5">
                            <h5>Langues</h5>
                            <ul className="list-group">
                                <li className="list-group-item bg-light">Français: langue maternelle</li>
                                <li className="list-group-item bg-light">Anglais: bon niveau, manque de pratique</li>
                            </ul>
                        </div>
                        <div className="text-left mb-5">
                            <h5>Qualités</h5>
                            <ul className="list-group">
                                <li className="list-group-item bg-light">Soif d'apprendre</li>
                                <li className="list-group-item bg-light">Motivé</li>
                                <li className="list-group-item bg-light">Ponctuel</li>
                                <li className="list-group-item bg-light">Autonome</li>
                            </ul>
                        </div>
                        <div className="text-left mb-5">
                            <h5>Centres d'interêts</h5>
                            <ul className="list-group">
                                <li className="list-group-item bg-light">Voyage</li>
                                <li className="list-group-item bg-light">Cuisine</li>
                                <li className="list-group-item bg-light">Décoration</li>
                                <li className="list-group-item bg-light">Sport</li>
                                <li className="list-group-item bg-light">Informatique</li>
                            </ul>
                        </div>


                    </div>
                )}

            </div>
        </div>
    )
}

export default CVtoShare