var app = new Vue(
    {
        el: "#root",
        data: {
            contatti: [
                {
                    nome: "Michele",
                    imgProfilo: "img/avatar_1.jpg",
                    visibile: true,
                    messaggi: [
                        {
                            data: "15/11/2021 15:01",
                            testo: "Hai portato a spasso il cane?",
                            stato: "inviato"
                        },
                        {
                            data: "15/11/2021 15:01",
                            testo: "Ricordati di dargli da mangiare.",
                            stato: "inviato"
                        },
                        {
                            data: "15/11/2021 17:01",
                            testo: "Tutto fatto.",
                            stato: "ricevuto"
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
                            stato: "inviato"
                        },
                        {
                            data: "15/11/2021 15:01",
                            testo: "Bene, grazie! Stasera ci vediamo?",
                            stato: "ricevuto"
                        },
                        {
                            data: "15/11/2021 15:31",
                            testo: "Mi piacerebbe, ma devo andare a fare la spesa.",
                            stato: "inviato"
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
                            stato: "ricevuto"
                        },
                        {
                            data: "15/11/2021 15:01",
                            testo: "Sicuro di non aver sbagliato chat?",
                            stato: "inviato"
                        },
                        {
                            data: "15/11/2021 15:55",
                            testo: "Ah... scusa!",
                            stato: "ricevuto"
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
                            stato: "inviato"
                        },
                        {
                            data: "15/11/2021 16:01",
                            testo: "Sì, ma preferirei andare al cinema.",
                            stato: "ricevuto"
                        }
                    ]
                }
            ]
        }
    }
);