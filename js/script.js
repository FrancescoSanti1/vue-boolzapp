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
            },
            pubblicaNuovoMessaggio: function() {
                // nel caso dei nuovi messaggi ho aggiunto anche i secondi, giusto per vedere una differenza e controllare che tutto funzioni
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
                let nuovaRisposta = {
                    data: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    testo: "ok.",
                    stato: "ricevuto",
                    mostraTendina: false
                };
                this.contatti[this.conversazioneAttiva].messaggi.push(nuovaRisposta);
            },
            stringaDaCercare: function() {
                return this.contattoCercato.toLowerCase();
            },
            valoreTendina: function(indice) {
                if(this.contatti[this.conversazioneAttiva].messaggi[indice].mostraTendina) {
                    this.contatti[this.conversazioneAttiva].messaggi[indice].mostraTendina = false;
                } else {
                    this.contatti[this.conversazioneAttiva].messaggi[indice].mostraTendina = true;
                }
            },
            eliminaMessaggio: function(indice) {
                this.contatti[this.conversazioneAttiva].messaggi.splice(indice, 1);
            }
        }
    }
);
