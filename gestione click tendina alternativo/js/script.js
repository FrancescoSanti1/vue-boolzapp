var app = new Vue(
    {
        el: "#root",
        data: {
            contattoCercato: "",
            nuovoMessaggio: "",
            conversazioneAttiva: 0,
            contatti: [
                {
                    nome: "Michele",
                    imgProfilo: "img/avatar_1.jpg",
                    visibile: true,
                    messaggi: [
                        {
                            data: "15/11/2021 15:01",
                            testo: "Hai portato a spasso il cane?",
                            stato: "inviato",
                            mostraTendina: false
                        },
                        {
                            data: "15/11/2021 15:01",
                            testo: "Ricordati di dargli da mangiare.",
                            stato: "inviato",
                            mostraTendina: false
                        },
                        {
                            data: dayjs().format('DD/MM/YYYY HH:mm'),
                            testo: "Tutto fatto.",
                            stato: "ricevuto",
                            mostraTendina: false
                        }
                    ]
                },
                {
                    nome: "Fabio",
                    imgProfilo: "img/avatar_2.jpg",
                    visibile: true,
                    messaggi: [
                        {
                            data: "15/11/2021 15:01",
                            testo: "Ciao, come stai?",
                            stato: "inviato",
                            mostraTendina: false
                        },
                        {
                            data: "15/11/2021 15:01",
                            testo: "Bene, grazie! Stasera ci vediamo?",
                            stato: "ricevuto",
                            mostraTendina: false
                        },
                        {
                            data: dayjs().format('DD/MM/YYYY HH:mm'),
                            testo: "Mi piacerebbe, ma devo andare a fare la spesa.",
                            stato: "inviato",
                            mostraTendina: false
                        }
                    ]
                },
                {
                    nome: "Samuele",
                    imgProfilo: "img/avatar_3.jpg",
                    visibile: true,
                    messaggi: [
                        {
                            data: "15/11/2021 15:01",
                            testo: "La Marianna va in campagna.",
                            stato: "ricevuto",
                            mostraTendina: false
                        },
                        {
                            data: "15/11/2021 15:01",
                            testo: "Sicuro di non aver sbagliato chat?",
                            stato: "inviato",
                            mostraTendina: false
                        },
                        {
                            data: dayjs().format('DD/MM/YYYY HH:mm'),
                            testo: "Ah... scusa!",
                            stato: "ricevuto",
                            mostraTendina: false
                        }
                    ]
                },
                {
                    nome: "Simone",
                    imgProfilo: "img/avatar_4.jpg",
                    visibile: true,
                    messaggi: [
                        {
                            data: "15/11/2021 15:01",
                            testo: "Lo sai che ha aperto una nuova pizzeria?",
                            stato: "inviato",
                            mostraTendina: false
                        },
                        {
                            data: dayjs().format('DD/MM/YYYY HH:mm'),
                            testo: "Sì, ma preferirei andare al cinema.",
                            stato: "ricevuto",
                            mostraTendina: false
                        }
                    ]
                }
            ]
        },
        methods: {
            cambiaConversazioneAttiva: function(indice) {
                this.conversazioneAttiva = indice;
                nascondiTendine();
                gestioneTendina();
            },
            pubblicaNuovoMessaggio: function() {
                // nel caso dei nuovi messaggi ho aggiunto anche i secondi, giusto per vedere una differenza e controllare che tutto funzioni
                // creo un nuovo messaggio e lo aggiungo all'array dei messaggi all'interno della conversazione attiva
                // poi invoco la funzione che genera la risposta, con almeno un secondo di ritardo
                let nuovoOggetto = {
                    data: dayjs().format('DD/MM/YYYY HH:mm:ss'), 
                    testo: this.nuovoMessaggio,
                    stato: "inviato",
                    mostraTendina: false
                };
                this.contatti[this.conversazioneAttiva].messaggi.push(nuovoOggetto);
                this.nuovoMessaggio = "";
                setTimeout(this.generaRisposta, 1000);
            },
            generaRisposta: function() {
                // come sopra, ho aggiunto anche i secondi
                // creo un nuovo messaggio e lo aggiunto all'array dei messaggi all'interno della conversazione attiva
                let nuovaRisposta = {
                    data: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    testo: "ok.",
                    stato: "ricevuto",
                    mostraTendina: false
                };
                this.contatti[this.conversazioneAttiva].messaggi.push(nuovaRisposta);
            },
            stringaDaCercare: function() {
                // mi serve per poter aggirare la case-sensitivity del metodo startsWith()
                // così confronto due stringhe entrambe con tutte minuscole
                return this.contattoCercato.toLowerCase();
            },
            // valoreTendina: function(indice) {
            //     // questa soluzione non mi convince granché perché ho dovuto creare una nuova proprietà all'interno dei messaggi per poter controllare la classe "mostra" su ogni tendina
            //     if(this.contatti[this.conversazioneAttiva].messaggi[indice].mostraTendina) {
            //         this.contatti[this.conversazioneAttiva].messaggi[indice].mostraTendina = false;
            //     } else {
            //         this.contatti[this.conversazioneAttiva].messaggi[indice].mostraTendina = true;
            //     }
            // },
            eliminaMessaggio: function(indice) {
                this.contatti[this.conversazioneAttiva].messaggi.splice(indice, 1);
                nascondiTendine();
            }
        }
    }
);


function gestioneTendina() {

    let elencoFreccie = document.getElementsByClassName("freccia-menu");
    console.log(elencoFreccie);

    for (let i = 0; i < elencoFreccie.length; i++) {

        elencoFreccie[i].addEventListener("click", function() {
    
            console.log(document.getElementsByClassName("menu-tendina"));
            document.getElementsByClassName("menu-tendina")[i].classList.toggle("mostra");
        });
    }
}

gestioneTendina();

function nascondiTendine() {

    let elencoFreccie = document.getElementsByClassName("freccia-menu");

    for (let i = 0; i < elencoFreccie.length; i++) {
        document.getElementsByClassName("menu-tendina")[i].classList.remove("mostra");
    };
}   

// elencoFreccie.forEach((freccia, indice) => {
//     freccia.addEventListener("click", function() {
//         console.log(document.getElementsByClassName("menu-tendina"));
//         document.getElementsByClassName("menu-tendina")[indice].classList.add("mostra");
//     });
// });
