!(function(){
    "use strict";
var db = {}

db.init = function (){

    //for version 2
    function genre(level){
        this.level = level;
    }


db.words = 

[{
        "pl": "numer kierunkowy",
        "en": "code",
        "gr": "κωδικός",
        "es": "código",
        "fr": "code",
        "it": "codice",
        "de": "der Code"
    },
    {
        "pl": "telekonferencja",
        "en": "conference call",
        "gr": "κλήση συνδιάσκεψης",
        "es": "conferencia",
        "fr": "conférence téléphonique",
        "it": "teleconferenza",
        "de": "das Konferenzgespräch"
    },
    {
        "pl": "połączenie",
        "en": "connection",
        "gr": "σύνδεση",
        "es": "conexión",
        "fr": "connection",
        "it": "connessione",
        "de": "die Verbindung"
    },
    {
        "pl": "poczta głosowa",
        "en": "voice mail",
        "gr": "φωνοκιβώτιο",
        "es": "correo de voz",
        "fr": "messagerie vocale",
        "it": "segreteria telefonica",
        "de": "die Sprachnachricht"
    },
    {
        "pl": "biuro",
        "en": "office",
        "gr": "γραφείο",
        "es": "oficina",
        "fr": "bureau",
        "it": "ufficio",
        "de": "das Büro"
    },
    {
        "pl": "korupcja",
        "en": "corruption",
        "gr": "διαφθορά",
        "es": "corrupción",
        "fr": "corruption",
        "it": "corruzione",
        "de": "die Korruption"
    },
    {
        "pl": "faktura",
        "en": "invoice",
        "gr": "τιμολόγιο",
        "es": "factura",
        "fr": "facture",
        "it": "fattura",
        "de": "die Rechnung"
    },
    {
        "pl": "podatek",
        "en": "tax",
        "gr": "φόρος",
        "es": "impuesto",
        "fr": "taxe",
        "it": "tassa",
        "de": "die Steuer"
    },
    {
        "pl": "firma",
        "en": "company",
        "gr": "εταιρεία",
        "es": "empresa",
        "fr": "entreprise",
        "it": "impresa",
        "de": "die Firma"
    },
    {
        "pl": "pracownik",
        "en": "employee",
        "gr": "υπάλληλος",
        "es": "empleado",
        "fr": "employé",
        "it": "impiegato",
        "de": "der Angestellter"
    },
    {
        "pl": "handel",
        "en": "trade",
        "gr": "εμπόριο",
        "es": "comercio",
        "fr": "commerce",
        "it": "scambio",
        "de": "der Handel"
    },
    {
        "pl": "klient",
        "en": "customer",
        "gr": "πελάτης",
        "es": "cliente",
        "fr": "client",
        "it": "cliente",
        "de": "der Kunde"
    },
    {
        "pl": "zakup",
        "en": "purchase",
        "gr": "αγορά",
        "es": "compra",
        "fr": "achat",
        "it": "acquisto",
        "de": "der Einkauf"
    },
    {
        "pl": "prowizja",
        "en": "commission",
        "gr": "επιτροπή",
        "es": "comisión",
        "fr": "commission",
        "it": "commissione",
        "de": "die Provision"
    },
    {
        "pl": "dyrektor",
        "en": "director",
        "gr": "διευθυντής",
        "es": "director",
        "fr": "directeur",
        "it": "direttore",
        "de": "der Regisseur"
    },
    {
        "pl": "oferta",
        "en": "offer",
        "gr": "πρόταση συμφωνίας",
        "es": "oferta",
        "fr": "offre",
        "it": "offerta",
        "de": "das Angebot"
    },
    {
        "pl": "wynagrodzenie",
        "en": "salary",
        "gr": "μισθός",
        "es": "salario",
        "fr": "salaire",
        "it": "salario",
        "de": "das Gehalt"
    },
    {
        "pl": "cel",
        "en": "goal",
        "gr": "στόχος",
        "es": "meta",
        "fr": "but",
        "it": "obiettivo",
        "de": "das Ziel"
    },
    {
        "pl": "wzrost",
        "en": "increase",
        "gr": "αύξηση",
        "es": "aumento",
        "fr": "augmentation",
        "it": "aumento",
        "de": "der Anstieg"
    },
    {
        "pl": "ryzyko",
        "en": "risk",
        "gr": "ρίσκο",
        "es": "riesgo",
        "fr": "risque",
        "it": "rischio",
        "de": "das Risiko"
    },
    {
        "pl": "podpis",
        "en": "signature",
        "gr": "υπογραφή",
        "es": "firma",
        "fr": "signature",
        "it": "firma",
        "de": "die Unterschrift"
    },
    {
        "pl": "koszty",
        "en": "costs",
        "gr": "κόστος",
        "es": "costos",
        "fr": "frais",
        "it": "costi",
        "de": "die Kosten"
    },
    {
        "pl": "cena",
        "en": "price",
        "gr": "τιμή",
        "es": "precio",
        "fr": "prix",
        "it": "prezzo",
        "de": "der Preis"
    },
    {
        "pl": "sukces",
        "en": "success",
        "gr": "επιτυχία",
        "es": "éxito",
        "fr": "succès",
        "it": "successo",
        "de": "der Erfolg"
    },
    {
        "pl": "wsparcie",
        "en": "support",
        "gr": "υποστήριξη",
        "es": "apoyo",
        "fr": "soutien",
        "it": "supporto",
        "de": "die Unterstützung"
    },
    {
        "pl": "strata",
        "en": "loss",
        "gr": "απώλεια",
        "es": "pérdida",
        "fr": "perte",
        "it": "perdita",
        "de": "der Verlust"
    },
    {
        "pl": "marka",
        "en": "brand",
        "gr": "μάρκα",
        "es": "marca",
        "fr": "marque",
        "it": "marchio",
        "de": "die Marke"
    },
    {
        "pl": "harmonogram",
        "en": "schedule",
        "gr": "πρόγραμμα",
        "es": "horario",
        "fr": "horaire",
        "it": "programma",
        "de": "der Zeitplan"
    },
    {
        "pl": "doradztwo finansowe",
        "en": "financial advising",
        "gr": "χρηματοοικονομικές συμβουλές",
        "es": "asesoramiento financiero",
        "fr": "conseil financier",
        "it": "consulenza finanziaria",
        "de": "die Finanzberatung"
    },
    {
        "pl": "premiera",
        "en": "launch",
        "gr": "πρεμιέρα",
        "es": "lanzamiento",
        "fr": "lancement",
        "it": "lancio",
        "de": "die Einführung"
    },
    {
        "pl": "konto",
        "en": "account",
        "gr": "λογαριασμός",
        "es": "cuenta",
        "fr": "compte",
        "it": "conto",
        "de": "das Konto"
    },
    {
        "pl": "nabywca",
        "en": "buyer",
        "gr": "αγοραστής",
        "es": "comprador",
        "fr": "acheteur",
        "it": "acquirente",
        "de": "der Käufer"
    },
    {
        "pl": "katalog",
        "en": "catalogue",
        "gr": "κατάλογος",
        "es": "catálogo",
        "fr": "catalogue",
        "it": "catalogo",
        "de": "der Katalog"
    },
    {
        "pl": "certyfikat",
        "en": "certificate",
        "gr": "πιστοποιητικό",
        "es": "certificado",
        "fr": "certificat",
        "it": "certificate",
        "de": "das Zertifikat"
    },
    {
        "pl": "konkurent",
        "en": "competitor",
        "gr": "ανταγωνιστής",
        "es": "competidor",
        "fr": "concurrent",
        "it": "concorrenza",
        "de": "der Konkurent"
    },
    {
        "pl": "kooperacja",
        "en": "co-operation",
        "gr": "συνεργασία",
        "es": "co-operación",
        "fr": "coopération",
        "it": "collaborazione",
        "de": "die Zusammenarbeit"
    },
    {
        "pl": "handel",
        "en": "commerce",
        "gr": "εμπόριο",
        "es": "comercio",
        "fr": "commerce",
        "it": "commercio",
        "de": "der Handel"
    },
    {
        "pl": "konferencja",
        "en": "conference",
        "gr": "διάσκεψη",
        "es": "conferencia",
        "fr": "conférence",
        "it": "conferenza",
        "de": "die Konferenz"
    },
    {
        "pl": "kontrakt",
        "en": "contract",
        "gr": "contract",
        "es": "contracto",
        "fr": "contrat",
        "it": "contratto",
        "de": "der Vertrag"
    },
    {
        "pl": "ekonomiczny",
        "en": "economical",
        "gr": "οικονομικός",
        "es": "económico",
        "fr": "économique",
        "it": "economico",
        "de": "wirtschaftlich"
    },
    {
        "pl": "wymiana",
        "en": "exchange",
        "gr": "συνάλλαγμα",
        "es": "intercambio",
        "fr": "échange",
        "it": "scambio",
        "de": "der Austausch"
    },
    {
        "pl": "wspaniałe",
        "en": "gorgeous",
        "gr": "υπέροχο",
        "es": "maravilloso",
        "fr": "merveilleux",
        "it": "favoloso",
        "de": "wunderschön"
    },
    {
        "pl": "głośny",
        "en": "noisy",
        "gr": "θορυβώδης",
        "es": "ruidoso",
        "fr": "bruyant",
        "it": "rumoroso",
        "de": "laut"
    },
    {
        "pl": "wprowadzać",
        "en": "introduce",
        "gr": "παρουσιάζω",
        "es": "introducir",
        "fr": "introduire",
        "it": "introduce",
        "de": "einleiten"
    },
    {
        "pl": "obskurny",
        "en": "sordid",
        "gr": "ρυπαρός",
        "es": "sórdido",
        "fr": "sordide",
        "it": "squallido",
        "de": "schäbig"
    },
    {
        "pl": "jadalnia",
        "en": "lunchroom",
        "gr": "εστιατόριο ελαφρών φαγητών",
        "es": "comedor",
        "fr": "salle à manger",
        "it": "mensa",
        "de": "die Kantine"
    },
    {
        "pl": "fiolet",
        "en": "purple",
        "gr": "μωβ",
        "es": "púrpura",
        "fr": "violet",
        "it": "viola",
        "de": "violett"
    },
    {
        "pl": "jaskinia",
        "en": "cave",
        "gr": "σπηλιά",
        "es": "cueva",
        "fr": "grotte",
        "it": "caverna",
        "de": "die Höhle"
    },
    {
        "pl": "ciasne",
        "en": "tight",
        "gr": "σφιχτός",
        "es": "apretado",
        "fr": "serré",
        "it": "stretto",
        "de": "eng"
    },
    {
        "pl": "sługa",
        "en": "servant",
        "gr": "υπηρέτης",
        "es": "sirviente",
        "fr": "serviteur",
        "it": "servo",
        "de": "der Diener"
    },
    {
        "pl": "waga",
        "en": "weight",
        "gr": "βάρος",
        "es": "peso",
        "fr": "poids",
        "it": "peso",
        "de": "das Gewicht"
    },
    {
        "pl": "północ",
        "en": "north",
        "gr": "βόρειος",
        "es": "norte",
        "fr": "nord",
        "it": "nord",
        "de": "der Norden"
    },
    {
        "pl": "oswajać",
        "en": "tame",
        "gr": "εξημερώνω",
        "es": "domesticar",
        "fr": "apprivoiser",
        "it": "addomesticato",
        "de": "zahm"
    },
    {
        "pl": "zazdrosny",
        "en": "jealous",
        "gr": "ζηλιάρης",
        "es": "celoso",
        "fr": "jaloux",
        "it": "geloso",
        "de": "eifersüchtig"
    },
    {
        "pl": "odkrycie",
        "en": "discovery",
        "gr": "ανακάλυψη",
        "es": "descubrimiento",
        "fr": "découverte",
        "it": "scoperta",
        "de": "die Entdeckung"
    },
    {
        "pl": "garnitur",
        "en": "suit",
        "gr": "κοστούμι",
        "es": "traje",
        "fr": "costume",
        "it": "abito",
        "de": "der Anzug"
    },
    {
        "pl": "pompować",
        "en": "pump",
        "gr": "αντλία",
        "es": "surtidor",
        "fr": "pompe",
        "it": "pompa",
        "de": "die Pumpe"
    },
    {
        "pl": "zaczepny",
        "en": "truculent",
        "gr": "θηριώδης",
        "es": "agresivo",
        "fr": "agressif",
        "it": "battagliero",
        "de": "totzig"
    },
    {
        "pl": "wspominający",
        "en": "reminiscent",
        "gr": "αναπολών",
        "es": "recuerda",
        "fr": "évocateur",
        "it": "rievocativo",
        "de": "errinernend"
    },
    {
        "pl": "słony",
        "en": "salty",
        "gr": "αλμυρό",
        "es": "salgado",
        "fr": "salé",
        "it": "salato",
        "de": "salzig"
    },
    {
        "pl": "czujny",
        "en": "alert",
        "gr": "συναγερμός",
        "es": "alerta",
        "fr": "alerte",
        "it": "allerta",
        "de": "wachsam"
    },
    {
        "pl": "graniczny",
        "en": "boundary",
        "gr": "όριο",
        "es": "límite",
        "fr": "limite",
        "it": "limite",
        "de": "die Abgrenzung"
    },
    {
        "pl": "temperamnet",
        "en": "temper",
        "gr": "ιδιοσυγκρασία",
        "es": "genio",
        "fr": "huneur",
        "it": "temperamento",
        "de": "das Temperament"
    },
    {
        "pl": "ochrypły",
        "en": "husky",
        "gr": "βραχνός",
        "es": "ronco",
        "fr": "rauque",
        "it": "rauco",
        "de": "rauchig"
    },
    {
        "pl": "imię",
        "en": "name",
        "gr": "όνομα",
        "es": "nombre",
        "fr": "nom",
        "it": "nome",
        "de": "die Name"
    },
    {
        "pl": "ospały",
        "en": "languid",
        "gr": "νωθρός",
        "es": "lánguido",
        "fr": "léthargique",
        "it": "languido",
        "de": "träge"
    },
    {
        "pl": "uwaga, notatka",
        "en": "note",
        "gr": "σημείωση",
        "es": "nota",
        "fr": "note",
        "it": "nota",
        "de": "die Notiz"
    },
    {
        "pl": "wykształcony, hodowanych",
        "en": "cultured",
        "gr": "καλλιεργημένος",
        "es": "culto",
        "fr": "cultivé",
        "it": "colto",
        "de": "gebildet"
    },
    {
        "pl": "uchwycenie",
        "en": "grip",
        "gr": "πιάσιμο",
        "es": "apretón",
        "fr": "prise",
        "it": "presa",
        "de": "der Griff"
    },
    {
        "pl": "cichy",
        "en": "silent",
        "gr": "σιωπηλό",
        "es": "silencioso",
        "fr": "silencieux",
        "it": "silenzioso",
        "de": "still"
    },
    {
        "pl": "powtarzać",
        "en": "repeat",
        "gr": "επανάληψη",
        "es": "repetición",
        "fr": "répétition",
        "it": "ripetere",
        "de": "wiederholen"
    },
    {
        "pl": "wykryć",
        "en": "detect",
        "gr": "ανίχνευση",
        "es": "detectar",
        "fr": "détecter",
        "it": "rilevare",
        "de": "aufspüren"
    },
    {
        "pl": "ekspansja",
        "en": "expansion",
        "gr": "επέκταση",
        "es": "expansión",
        "fr": "expansion",
        "it": "espansione",
        "de": "die Erweiterung"
    },
    {
        "pl": "brzydki",
        "en": "ugly",
        "gr": "άσχημος",
        "es": "feo",
        "fr": "laid",
        "it": "orribile",
        "de": "hässlich"
    },
    {
        "pl": "wyspa",
        "en": "island",
        "gr": "νησί",
        "es": "isla",
        "fr": "île",
        "it": "isola",
        "de": "die Insel"
    },
    {
        "pl": "dziwaczny",
        "en": "bizarre",
        "gr": "παράξενο",
        "es": "extraño",
        "fr": "bizarre",
        "it": "bizzarro",
        "de": "seltsam"
    },
    {
        "pl": "przyjemny",
        "en": "pleasant",
        "gr": "ευχάριστο",
        "es": "agradable",
        "fr": "agréable",
        "it": "piacevole",
        "de": "freundlich"
    },
    {
        "pl": "sztuczka",
        "en": "trick",
        "gr": "τέχνασμα",
        "es": "truco",
        "fr": "astuce",
        "it": "trucco",
        "de": "der Trick"
    },
    {
        "pl": "zapach",
        "en": "smell",
        "gr": "μυρωδιά",
        "es": "olor",
        "fr": "odeur",
        "it": "odore",
        "de": "die Geruch"
    },
    {
        "pl": "uzdrowić",
        "en": "heal",
        "gr": "επούλωση",
        "es": "sanar",
        "fr": "soigner",
        "it": "collaborazione",
        "de": "heilen"
    },
    {
        "pl": "siniak",
        "en": "bruise",
        "gr": "μώλωπας",
        "es": "contusión",
        "fr": "contusion",
        "it": "ematoma",
        "de": "der Bluterguss"
    },
    {
        "pl": "dostawa",
        "en": "supply",
        "gr": "προμήθεια",
        "es": "suministro",
        "fr": "approvisionnement",
        "it": "scorta",
        "de": "die Lieferung"
    },
    {
        "pl": "brakujace",
        "en": "lacking",
        "gr": "ελλιπής ",
        "es": "carente",
        "fr": "déficient",
        "it": "carente",
        "de": "fehlend"
    },
    {
        "pl": "grzmot",
        "en": "thunder",
        "gr": "βροντή",
        "es": "trueno",
        "fr": "tonnerre",
        "it": "tuono",
        "de": "der Donner"
    },
    {
        "pl": "strój",
        "en": "apparel",
        "gr": "ενδύματα",
        "es": "vestido",
        "fr": "vêtement",
        "it": "abbigliamento",
        "de": "die Kleidung"
    },
    {
        "pl": "jowialny",
        "en": "debonair",
        "gr": "ευγενής",
        "es": "elegante",
        "fr": "élégant",
        "it": "disinvolto",
        "de": "charmant"
    },
    {
        "pl": "niezdrowy",
        "en": "unhealthy",
        "gr": "ανθυγιεινό",
        "es": "insalubre",
        "fr": "maladif",
        "it": "malsano",
        "de": "ungesund"
    },
    {
        "pl": "ponury",
        "en": "dreary",
        "gr": "θλιβερό",
        "es": "triste",
        "fr": "triste",
        "it": "tetro",
        "de": "trostlos"
    },
    {
        "pl": "deska",
        "en": "board",
        "gr": "χαρτόνι",
        "es": "tablero",
        "fr": "tableau",
        "it": "tavola",
        "de": "der Rat"
    },
    {
        "pl": "ubawinie",
        "en": "amusement",
        "gr": "διασκέδαση",
        "es": "diversión",
        "fr": "amusement",
        "it": "divertimento",
        "de": "die Unterhaltung"
    },
    {
        "pl": "ciekawski",
        "en": "inquisitive",
        "gr": "περίεργος",
        "es": "inquisitivo",
        "fr": "curieux",
        "it": "inquisitorio",
        "de": "neurgierig"
    },
    {
        "pl": "polityczny",
        "en": "political",
        "gr": "πολιτικό",
        "es": "político",
        "fr": "politique",
        "it": "politico",
        "de": "politisch"
    },
    {
        "pl": "soczystty",
        "en": "juicy",
        "gr": "χυμώδης",
        "es": "jugoso",
        "fr": "juteux",
        "it": "succoso",
        "de": "saftig"
    },
    {
        "pl": "wzruszać ramionami",
        "en": "shrug",
        "gr": "ύψωση των ώμων",
        "es": "bolero",
        "fr": "boléro",
        "it": "coprispalle",
        "de": "zucken"
    },
    {
        "pl": "próba",
        "en": "attempt",
        "gr": "απόπειρα",
        "es": "intento",
        "fr": "tentative",
        "it": "tentativo",
        "de": "der Versuch"
    },
    {
        "pl": "pójść na emeryturę",
        "en": "retire",
        "gr": "σύνταξη",
        "es": "retirarse",
        "fr": "prendre sa retraite",
        "it": "andare in pensione",
        "de": "ausscheiden"
    },
    {
        "pl": "ambitny",
        "en": "ambitious",
        "gr": "φιλόδοξος",
        "es": "ambicioso",
        "fr": "ambitieux",
        "it": "ambizioso",
        "de": "ehrgeizigg"
    },
    {
        "pl": "kolczasty",
        "en": "spiky",
        "gr": "αιχμηρό",
        "es": "puntiagudo",
        "fr": "en épis",
        "it": "scontroso",
        "de": "stachelig"
    },
    {
        "pl": "zwierzę domowe",
        "en": "pet",
        "gr": "κατοικίδιο ζώο",
        "es": "mascota",
        "fr": "animal de compagnie",
        "it": "animale domestico",
        "de": "das Haustier"
    },
    {
        "pl": "krok, schodek",
        "en": "step",
        "gr": "βήμα",
        "es": "paso",
        "fr": "pas",
        "it": "passo",
        "de": "der Schritt"
    },
    {
        "pl": "mały",
        "en": "small",
        "gr": "μικρό",
        "es": "pequeño",
        "fr": "petit",
        "it": "piccolo",
        "de": "klein"
    },
    {
        "pl": "brzęczenie",
        "en": "buzz",
        "gr": "τρίξιμο ",
        "es": "zumbido",
        "fr": "bourdonnement",
        "it": "ronzio",
        "de": "die Aufregung"
    },
    {
        "pl": "normalny",
        "en": "normal",
        "gr": "κανονικό",
        "es": "normal",
        "fr": "normal",
        "it": "normale",
        "de": "normal"
    },
    {
        "pl": "zabawiać",
        "en": "amuse",
        "gr": "διασκεδάζω",
        "es": "divertir",
        "fr": "se divertir",
        "it": "intrattenere",
        "de": "amüsieren"
    },
    {
        "pl": "roślina",
        "en": "plant",
        "gr": "φυτό",
        "es": "planta",
        "fr": "plante",
        "it": "pianta",
        "de": "die Pflanze"
    },
    {
        "pl": "bezcelowy",
        "en": "pointless",
        "gr": "δεν έχει νόημα",
        "es": "inútil",
        "fr": "inutil",
        "it": "senza scopo",
        "de": "sinnlos"
    },
    {
        "pl": "szept",
        "en": "whisper",
        "gr": "ψίθυρος",
        "es": "susurro",
        "fr": "murmure",
        "it": "sussurro",
        "de": "flüstern"
    },
    {
        "pl": "cieniutki",
        "en": "tenuous",
        "gr": " κομψός",
        "es": "tenue",
        "fr": "ténu",
        "it": "tenue",
        "de": "dürftig"
    },
    {
        "pl": "szorować",
        "en": "scrub",
        "gr": "ακύρωση",
        "es": "fregar",
        "fr": "astiquer",
        "it": "strofinare",
        "de": "scheuern"
    },
    {
        "pl": "zniesmaczony, oburzony",
        "en": "disgusted",
        "gr": "αηδιάζων",
        "es": "disgustado",
        "fr": "dégoûter",
        "it": "disgustato",
        "de": "angeekelt"
    },
    {
        "pl": "sprośny",
        "en": "lewd",
        "gr": "έκφυλος",
        "es": "lascivo",
        "fr": "lascif",
        "it": "lascivo",
        "de": "anzüglich"
    },
    {
        "pl": "pogmatwany",
        "en": "jumbled",
        "gr": "μπερδεμένες",
        "es": "embarullado",
        "fr": "désordonné",
        "it": "mescolato",
        "de": "ungeordnet"
    },
    {
        "pl": "nędzny",
        "en": "ratty",
        "gr": "τσαντισμένος",
        "es": "andrajoso",
        "fr": "miteux",
        "it": "fatiscente",
        "de": "schäbig"
    },
    {
        "pl": "niebo",
        "en": "sky",
        "gr": "ουρανός",
        "es": "cielo",
        "fr": "ciel",
        "it": "cielo",
        "de": "der Himmel"
    },
    {
        "pl": "wojowniczy",
        "en": "combative",
        "gr": "μαχητικός",
        "es": "combativo",
        "fr": "combattif",
        "it": "combattivo",
        "de": "aggressiv"
    },
    {
        "pl": "dziura",
        "en": "hole",
        "gr": "τρύπα",
        "es": "agujero",
        "fr": "trou",
        "it": "buco",
        "de": "das Loch"
    },
    {
        "pl": "taniec",
        "en": "dance",
        "gr": "χορός",
        "es": "danza",
        "fr": "dance",
        "it": "danza",
        "de": "der Tanz"
    },
    {
        "pl": "gorący",
        "en": "hot",
        "gr": "καυτό",
        "es": "caliente",
        "fr": "chaud",
        "it": "caldo",
        "de": "heiß"
    },
    {
        "pl": "opłakiwać",
        "en": "mourn",
        "gr": "θρηνώ",
        "es": "llorar",
        "fr": "pleurer",
        "it": "compiangere",
        "de": "trauern"
    },
    {
        "pl": "brama",
        "en": "gate",
        "gr": "πύλη",
        "es": "puerta",
        "fr": "porte",
        "it": "cancello",
        "de": "das Tor"
    },
    {
        "pl": "zatrudniać",
        "en": "employ",
        "gr": "προσλαμβάνω",
        "es": "emplear",
        "fr": "employer",
        "it": "impiegare",
        "de": "die Beschäftigung"
    },
    {
        "pl": "tchórzliwy",
        "en": "cowardly",
        "gr": "ανανδρία ",
        "es": "cobarde",
        "fr": "lâche",
        "it": "codardo",
        "de": "in feiger Weise"
    },
    {
        "pl": "guzkowaty",
        "en": "lumpy",
        "gr": "άμορφο",
        "es": "grumoso",
        "fr": "grumeux",
        "it": "grumoso",
        "de": "klumpig"
    },
    {
        "pl": "sygnał",
        "en": "signal",
        "gr": "σήμα",
        "es": "señal",
        "fr": "signal",
        "it": "segnale",
        "de": "das Signal"
    },
    {
        "pl": "szczery",
        "en": "sincere",
        "gr": "ειλικρινής",
        "es": "sincero",
        "fr": "sincère",
        "it": "sincero",
        "de": "aufrichtig"
    },
    {
        "pl": "potulny",
        "en": "meek",
        "gr": "ήμερος",
        "es": "manso",
        "fr": "docile",
        "it": "mite",
        "de": "demütig"
    },
    {
        "pl": "płaczliwy",
        "en": "tearful",
        "gr": "δακρυσμένος",
        "es": "lloroso",
        "fr": "éploré",
        "it": "in lacrime",
        "de": "weinerlich"
    },
    {
        "pl": "sól",
        "en": "salt",
        "gr": "αλάτι",
        "es": "sal",
        "fr": "sel",
        "it": "sale",
        "de": "das Salz"
    },
    {
        "pl": "unikatowy",
        "en": "unique",
        "gr": "μοναδικό",
        "es": "único",
        "fr": "unique",
        "it": "unico",
        "de": "einzigartig"
    },
    {
        "pl": "lato",
        "en": "summer",
        "gr": "καλοκαίρι",
        "es": "verano",
        "fr": "été",
        "it": "estate",
        "de": "der Sommer"
    },
    {
        "pl": "bezgłośny",
        "en": "noiseless",
        "gr": "αθόρυβος",
        "es": "silencioso",
        "fr": "silencieux",
        "it": "silenzioso",
        "de": "lautlos"
    },
    {
        "pl": "popołudnie",
        "en": "afternoon",
        "gr": "απόγευμα",
        "es": "tarde",
        "fr": "après-midi",
        "it": "pomeriggio",
        "de": "der Nachmittag"
    },
    {
        "pl": "zjednoczyć",
        "en": "unite",
        "gr": "ενώνουν",
        "es": "unir",
        "fr": "unir",
        "it": "unire",
        "de": "vereinigen"
    },
    {
        "pl": "moc",
        "en": "power",
        "gr": "ισχύς",
        "es": "poder",
        "fr": "pouvoir",
        "it": "potenza",
        "de": "die Macht"
    },
    {
        "pl": "uchwyt",
        "en": "handle",
        "gr": "λαβή",
        "es": "manejar",
        "fr": "manipuler",
        "it": "gestire",
        "de": "erledigen"
    },
    {
        "pl": "regularny",
        "en": "regular",
        "gr": "τακτικός",
        "es": "regular",
        "fr": "régulier",
        "it": "regolare",
        "de": "regelmäßig"
    },
    {
        "pl": "okrutny",
        "en": "cruel",
        "gr": "σκληρός",
        "es": "cruel",
        "fr": "cruel",
        "it": "crudele",
        "de": "grausam"
    },
    {
        "pl": "kuchenka",
        "en": "stove",
        "gr": "στόφα",
        "es": "estufa",
        "fr": "four",
        "it": "fornello",
        "de": "der Ofen"
    },
    {
        "pl": "samochód",
        "en": "car",
        "gr": "αυτοκίνητο",
        "es": "coche",
        "fr": "voiture",
        "it": "automobile",
        "de": "das Auto"
    },
    {
        "pl": "kłamliwy",
        "en": "lying",
        "gr": "ψεύδη",
        "es": "acostado",
        "fr": "allongé",
        "it": "mentendo",
        "de": "lügend"
    },
    {
        "pl": "długoterminowy",
        "en": "long-term",
        "gr": "μακροπρόθεσμα",
        "es": "a largo plazo",
        "fr": "à long terme",
        "it": "a lungo termine",
        "de": "langfristig"
    },
    {
        "pl": "niegrzeczny",
        "en": "naughty",
        "gr": "άτακτος",
        "es": "travieso",
        "fr": "vilain",
        "it": "dispettoso",
        "de": "unartig"
    },
    {
        "pl": "szok",
        "en": "shock",
        "gr": "σοκ",
        "es": "choque",
        "fr": "choc",
        "it": "shock",
        "de": "der Schock"
    },
    {
        "pl": "żeński",
        "en": "female",
        "gr": "θηλυκός",
        "es": "mujer",
        "fr": "femme",
        "it": "femminile",
        "de": "weiblich"
    },
    {
        "pl": "chłopiec",
        "en": "boy",
        "gr": "αγόρι",
        "es": "niño",
        "fr": "garçon",
        "it": "ragazzo",
        "de": "der Jung"
    },
    {
        "pl": "produkować",
        "en": "produce",
        "gr": "παραγωγή ",
        "es": "producir",
        "fr": "produire",
        "it": "produrre",
        "de": "herstellen"
    },
    {
        "pl": "palce u stóp",
        "en": "toes",
        "gr": "δάχτυλα των ποδιών",
        "es": "dedos de los pies",
        "fr": "orteils",
        "it": "dita dei piedi",
        "de": "die Zehen"
    },
    {
        "pl": "nieść",
        "en": "carry",
        "gr": "μεταφορά",
        "es": "llevar",
        "fr": "porter",
        "it": "portare",
        "de": "tragen"
    },
    {
        "pl": "zasmarkany",
        "en": "snotty",
        "gr": "μυξιάρης",
        "es": "mocoso",
        "fr": "morveux",
        "it": "moccioso",
        "de": "rotzig"
    },
    {
        "pl": "spokojny",
        "en": "tranquil",
        "gr": "γαλήνιος",
        "es": "tranquilo",
        "fr": "tranquille",
        "it": "tranquil",
        "de": "ruhig"
    },
    {
        "pl": "urojony",
        "en": "imaginary",
        "gr": "φανταστικό",
        "es": "imaginario",
        "fr": "imaginaire",
        "it": "immaginario",
        "de": "imaginär"
    },
    {
        "pl": "niewyraźny",
        "en": "fuzzy",
        "gr": "ασαφής",
        "es": "borroso",
        "fr": "crépus",
        "it": "peloso",
        "de": "verschwommen"
    },
    {
        "pl": "aktualny, prąd",
        "en": "current",
        "gr": "τωρινός",
        "es": "corriente",
        "fr": "courant",
        "it": "corrente",
        "de": "aktuell"
    },
    {
        "pl": "jak na przykład",
        "en": "such as",
        "gr": "όπως",
        "es": "como",
        "fr": "comme",
        "it": "come",
        "de": "wie zum Beispiel"
    },
    {
        "pl": "podobnie",
        "en": "alike",
        "gr": "ομοίως",
        "es": "igual",
        "fr": "similaire",
        "it": "simile",
        "de": "ähnlich"
    },
    {
        "pl": "wlec",
        "en": "drag",
        "gr": "σέρνω",
        "es": "arrastrar",
        "fr": "traîner",
        "it": "trascinare",
        "de": "schleppen"
    },
    {
        "pl": "historyczny",
        "en": "historical",
        "gr": "ιστορικό",
        "es": "histórico",
        "fr": "historique",
        "it": "storico",
        "de": "historisch"
    },
    {
        "pl": "robak",
        "en": "worm",
        "gr": "σκουλήκι",
        "es": "gusano",
        "fr": "ver",
        "it": "verme",
        "de": "der Wurm"
    },
    {
        "pl": "śmiechu warte",
        "en": "laughable",
        "gr": "γελοίο",
        "es": "cómico",
        "fr": "comique",
        "it": "ridicolo",
        "de": "lächerlich"
    },
    {
        "pl": "kształt",
        "en": "shape",
        "gr": "σχήμα",
        "es": "forma",
        "fr": "forme",
        "it": "forma",
        "de": "die Form"
    },
    {
        "pl": "sznur",
        "en": "string",
        "gr": "χορδή",
        "es": "cuerda",
        "fr": "corde",
        "it": "filo",
        "de": "die Schnur"
    },
    {
        "pl": "sklep",
        "en": "store",
        "gr": "κατάστημα",
        "es": "tienda",
        "fr": "boutique",
        "it": "negozio",
        "de": "der Laden"
    },
    {
        "pl": "koteczek",
        "en": "kitty",
        "gr": "γατούλα",
        "es": "gatito",
        "fr": "châton",
        "it": "gattino",
        "de": "das Kätzchen"
    },
    {
        "pl": "dzicz, pustkowie",
        "en": "wilderness",
        "gr": "ερημιά",
        "es": "naturaleza",
        "fr": "nature",
        "it": "landa selvaggia",
        "de": "die Wildnis"
    },
    {
        "pl": "dokładny",
        "en": "accurate",
        "gr": "ακριβής",
        "es": "exacto",
        "fr": "exact",
        "it": "accurato",
        "de": "genau"
    },
    {
        "pl": "drogi",
        "en": "expensive",
        "gr": "ακριβό",
        "es": "caro",
        "fr": "cher",
        "it": "costoso",
        "de": "teuer"
    },
    {
        "pl": "litery, listy",
        "en": "letters",
        "gr": "γράμματα",
        "es": "letras",
        "fr": "lettres",
        "it": "lettere",
        "de": "die Buschstaben"
    },
    {
        "pl": "obecny",
        "en": "present",
        "gr": "παρόν",
        "es": "presente",
        "fr": "cadeau",
        "it": "regalo",
        "de": "die Gegenwart"
    },
    {
        "pl": "elektryczny",
        "en": "electric",
        "gr": "ηλεκτρικό",
        "es": "eléctrico",
        "fr": "électrique",
        "it": "elettrico",
        "de": "elektrisch"
    },
    {
        "pl": "dostępny",
        "en": "available",
        "gr": "διαθέσιμος",
        "es": "disponible",
        "fr": "disponible",
        "it": "disponibile",
        "de": "verfügbar"
    },
    {
        "pl": "łyżka",
        "en": "spoon",
        "gr": "κουτάλι",
        "es": "cuchara",
        "fr": "cuiller",
        "it": "cucchiaio",
        "de": "der Löffel"
    },
    {
        "pl": "wahający się",
        "en": "hesitant",
        "gr": "διστακτικός",
        "es": "vacilante",
        "fr": "hésitant",
        "it": "esitante",
        "de": "zögerlich"
    },
    {
        "pl": "zapis",
        "en": "record",
        "gr": "ρεκόρ",
        "es": "registro",
        "fr": "registre",
        "it": "registro",
        "de": "der Rekord"
    },
    {
        "pl": "trzy",
        "en": "three",
        "gr": "τρία",
        "es": "tres",
        "fr": "trois",
        "it": "tre",
        "de": "drei"
    },
    {
        "pl": "następstwa",
        "en": "aftermath",
        "gr": "επακόλουθο",
        "es": "secuelas",
        "fr": "séquelle",
        "it": "indomani",
        "de": "die Nachwirkung"
    },
    {
        "pl": "zapalony",
        "en": "keen",
        "gr": "έντονος",
        "es": "aplicado",
        "fr": "assidu",
        "it": "tendente",
        "de": "begeistert"
    },
    {
        "pl": "powierzchowny",
        "en": "superficial",
        "gr": "επιφανειακό",
        "es": "superficial",
        "fr": "superficiel",
        "it": "superficiale",
        "de": "oberflächlich"
    },
    {
        "pl": "żylasty",
        "en": "wiry",
        "gr": "νευρώδης",
        "es": "nervudo",
        "fr": "nerveux",
        "it": "atletico",
        "de": "drahtig"
    },
    {
        "pl": "zgięty",
        "en": "bent",
        "gr": "κλίση",
        "es": "torcido",
        "fr": "courbé",
        "it": "piegato",
        "de": "gebeugt"
    },
    {
        "pl": "najszybszy",
        "en": "the quickest",
        "gr": "ο γρηγορότερος",
        "es": "más rápido",
        "fr": "plus rapide",
        "it": "il più rapido",
        "de": "der schnellste"
    },
    {
        "pl": "nieistotny",
        "en": "picayune",
        "gr": "μικρή αξία",
        "es": "insignificante",
        "fr": "insignifiant",
        "it": "insignificante",
        "de": "gering"
    },
    {
        "pl": "wygląd",
        "en": "look",
        "gr": "ματιά",
        "es": "mirar",
        "fr": "regarder",
        "it": "guardare",
        "de": "das Aussehen"
    },
    {
        "pl": "spleśniały",
        "en": "moldy",
        "gr": "μουχλιασμένο",
        "es": "mohoso",
        "fr": "moisi",
        "it": "ammuffito",
        "de": "schimmelig"
    },
    {
        "pl": "przepełniony",
        "en": "overflow",
        "gr": "υπερχείλιση",
        "es": "desbordamiento",
        "fr": "débordement",
        "it": "inondazione",
        "de": "die überschwemmung"
    },
    {
        "pl": "instynktowny",
        "en": "instinctive",
        "gr": "ενστικτώδης",
        "es": "instintivo",
        "fr": "instinctif",
        "it": "istintivo",
        "de": "instinktiv"
    },
    {
        "pl": "krzepki",
        "en": "burly",
        "gr": "εύσωμος",
        "es": "fuerte",
        "fr": "barraqué",
        "it": "massiccio",
        "de": "korpulent"
    },
    {
        "pl": "zabiegany",
        "en": "bustling",
        "gr": "πολυσύχναστο",
        "es": "bullicioso",
        "fr": "animé",
        "it": "movimentato",
        "de": "geschäftig"
    },
    {
        "pl": "impuls",
        "en": "impulse",
        "gr": "ώθηση",
        "es": "impulso",
        "fr": "impulsion",
        "it": "impulso",
        "de": "der Antrieb"
    },
    {
        "pl": "dziewięć",
        "en": "nine",
        "gr": "εννέα",
        "es": "nueve",
        "fr": "neuf",
        "it": "nove",
        "de": "neun"
    },
    {
        "pl": "uprzykrzony",
        "en": "tiresome",
        "gr": "κουραστικός",
        "es": "fatigante",
        "fr": "fatiguant",
        "it": "fastidioso",
        "de": "ermüdend"
    },
    {
        "pl": "makabryczny",
        "en": "macabre",
        "gr": "μακάβριος",
        "es": "macabro",
        "fr": "macabre",
        "it": "macabro",
        "de": "makaber"
    },
    {
        "pl": "abstrakcyjny",
        "en": "abstracted",
        "gr": "αφηρημένος",
        "es": "abstraído",
        "fr": "abstrait",
        "it": "astratto",
        "de": "abstrahiert"
    },
    {
        "pl": "słuchać",
        "en": "listen",
        "gr": "ακούω",
        "es": "escuchar",
        "fr": "écouter",
        "it": "ascoltare",
        "de": "zuhören"
    },
    {
        "pl": "obietnica",
        "en": "promise",
        "gr": "υπόσχεση",
        "es": "promesa",
        "fr": "promesse",
        "it": "promettere",
        "de": "die Versprechung"
    },
    {
        "pl": "kraj",
        "en": "country",
        "gr": "χώρα",
        "es": "país",
        "fr": "pays",
        "it": "paese",
        "de": "das Land"
    },
    {
        "pl": "wydanie, uwolnienie",
        "en": "release",
        "gr": "ελευθέρωση",
        "es": "liberación",
        "fr": "libération",
        "it": "rilasciare",
        "de": "die Freigabe"
    },
    {
        "pl": "kaczki",
        "en": "ducks",
        "gr": "πάπιες",
        "es": "patos",
        "fr": "canards",
        "it": "duck",
        "de": "die Enten"
    },
    {
        "pl": "żaba",
        "en": "frog",
        "gr": "βάτραχος",
        "es": "rana",
        "fr": "grenouille",
        "it": "rana",
        "de": "der Frosch"
    },
    {
        "pl": "zasada",
        "en": "rule",
        "gr": "κανόνας",
        "es": "regla",
        "fr": "règle",
        "it": "regola",
        "de": "die Regel"
    },
    {
        "pl": "dżinsy",
        "en": "jeans",
        "gr": "τζην",
        "es": "jeans",
        "fr": "jeans",
        "it": "jeans",
        "de": "die Jeans"
    },
    {
        "pl": "solidny",
        "en": "solid",
        "gr": "συμπαγής",
        "es": "sólido",
        "fr": "solide",
        "it": "solido",
        "de": "fest"
    },
    {
        "pl": "zysk",
        "en": "profit",
        "gr": "κέρδος",
        "es": "lucro",
        "fr": "profit",
        "it": "profitto",
        "de": "der Gewinn"
    },
    {
        "pl": "powiesić",
        "en": "hang",
        "gr": "κρέμασμα",
        "es": "colgar",
        "fr": "pendre",
        "it": "appendere",
        "de": "hängen"
    },
    {
        "pl": "mięsień",
        "en": "muscle",
        "gr": "μυς",
        "es": "músculo",
        "fr": "muscle",
        "it": "muscolo",
        "de": "der Muskel"
    },
    {
        "pl": "kierunek",
        "en": "direction",
        "gr": "κατεύθυνση",
        "es": "dirección",
        "fr": "direction",
        "it": "direzione",
        "de": "die Richtung"
    },
    {
        "pl": "pościg",
        "en": "chase",
        "gr": "κυνηγητό",
        "es": "persecución",
        "fr": "poursuite",
        "it": "rincorrere",
        "de": "die Jagd"
    },
    {
        "pl": "zlew",
        "en": "sink",
        "gr": "νεροχύτης",
        "es": "fregadero",
        "fr": "évier",
        "it": "affondare",
        "de": "senken"
    },
    {
        "pl": "kość",
        "en": "bone",
        "gr": "οστό",
        "es": "hueso",
        "fr": "os",
        "it": "osso",
        "de": "der Knochen"
    },
    {
        "pl": "zaaranżować",
        "en": "arrange",
        "gr": "διευθετώ",
        "es": "arreglar",
        "fr": "régler",
        "it": "organizzare",
        "de": "vereinbaren"
    },
    {
        "pl": "śledzić",
        "en": "follow",
        "gr": "ακολουθώ",
        "es": "seguir",
        "fr": "suivre",
        "it": "seguire",
        "de": "folgen"
    },
    {
        "pl": "urodziny",
        "en": "birthday",
        "gr": "γενέθλια",
        "es": "cumpleaños",
        "fr": "anniversaire",
        "it": "compleanno",
        "de": "der Geburtstag"
    },
    {
        "pl": "apatyczny",
        "en": "apathetic",
        "gr": "απαθής",
        "es": "apático",
        "fr": "apathique",
        "it": "apatico",
        "de": "teilnahmlos"
    },
    {
        "pl": "niebezpieczny",
        "en": "dangerous",
        "gr": "επικίνδυνος",
        "es": "peligroso",
        "fr": "dangereux",
        "it": "pericoloso",
        "de": "gefährlich"
    },
    {
        "pl": "winogrono",
        "en": "grape",
        "gr": "σταφύλι",
        "es": "uva",
        "fr": "raisin",
        "it": "uva",
        "de": "die Traube"
    },
    {
        "pl": "pociąg",
        "en": "train",
        "gr": "τρένο",
        "es": "tren",
        "fr": "train",
        "it": "treno",
        "de": "der Zug"
    },
    {
        "pl": "rozjaśnić",
        "en": "lighten",
        "gr": "ελάφρυνση ",
        "es": "iluminar",
        "fr": "illuminer",
        "it": "alleggerire",
        "de": "erhellen"
    },
    {
        "pl": "pończocha",
        "en": "stocking",
        "gr": "καλσόν",
        "es": "media",
        "fr": "bas",
        "it": "calza",
        "de": "der Strumpf"
    },
    {
        "pl": "owoc",
        "en": "fruit",
        "gr": "φρούτο",
        "es": "fruta",
        "fr": "fruit",
        "it": "frutta",
        "de": "das Obst"
    },
    {
        "pl": "granica",
        "en": "border",
        "gr": "σύνορο",
        "es": "frontera",
        "fr": "frontière",
        "it": "confine",
        "de": "die Grenze"
    },
    {
        "pl": "kąpiel",
        "en": "bath",
        "gr": "λουτρό",
        "es": "baño",
        "fr": "bain",
        "it": "bagno",
        "de": "das Bad"
    },
    {
        "pl": "dystrybucja",
        "en": "distribution",
        "gr": "διανομή",
        "es": "distribución",
        "fr": "distribution",
        "it": "distribuzione",
        "de": "die Verteilung"
    },
    {
        "pl": "kiczowaty",
        "en": "trashy",
        "gr": "άχρηστος",
        "es": "basura",
        "fr": "affligeant",
        "it": "scadente",
        "de": "kitschig"
    },
    {
        "pl": "być posłusznym",
        "en": "obey",
        "gr": "υπακούω",
        "es": "obedecer",
        "fr": "obéir",
        "it": "obbedire",
        "de": "gehorchen"
    },
    {
        "pl": "telefon",
        "en": "phone",
        "gr": "τηλέφωνο",
        "es": "teléfono",
        "fr": "téléphone",
        "it": "telefono",
        "de": "anrufen"
    },
    {
        "pl": "plecy",
        "en": "back",
        "gr": "πίσω",
        "es": "espalda",
        "fr": "dos",
        "it": "schiena",
        "de": "der Rücken"
    },
    {
        "pl": "ćwiczenie",
        "en": "exercise",
        "gr": "άσκηση",
        "es": "ejercicio",
        "fr": "exercice",
        "it": "esercizio",
        "de": "die Übung"
    },
    {
        "pl": "dźgać",
        "en": "poke",
        "gr": "άγγιγμα",
        "es": "hincar",
        "fr": "piquer",
        "it": "picchiettare con le dita",
        "de": "der Stoß"
    },
    {
        "pl": "paka",
        "en": "crate",
        "gr": "σακαράκα",
        "es": "caja",
        "fr": "caisse",
        "it": "cassa",
        "de": "die Kiste"
    },
    {
        "pl": "zajmujący",
        "en": "entertaining",
        "gr": "διασκεδαστικό",
        "es": "entretenido",
        "fr": "amusant",
        "it": "divertente",
        "de": "unterhaltsam"
    },
    {
        "pl": "przyciągać czyjąś uwagę",
        "en": "attract",
        "gr": "προσέλκυση",
        "es": "atraer",
        "fr": "attirer",
        "it": "attrarre",
        "de": "anziehen"
    },
    {
        "pl": "wędrujący",
        "en": "wandering",
        "gr": "περιπλάνηση",
        "es": "errante",
        "fr": "errant",
        "it": "errante",
        "de": "wandernd"
    },
    {
        "pl": "nieznany",
        "en": "unknown",
        "gr": "άγνωστο",
        "es": "desconocido",
        "fr": "inconnu",
        "it": "sconosciuto",
        "de": "unbekannt"
    },
    {
        "pl": "opalenizna",
        "en": "tan",
        "gr": "μαύρισμα",
        "es": "bronceado",
        "fr": "bronzé",
        "it": "abbronzatura",
        "de": "die Bräune"
    },
    {
        "pl": "szykowne",
        "en": "ritzy",
        "gr": "σικ",
        "es": "lujoso",
        "fr": "luxueux",
        "it": "elegante",
        "de": "nobel"
    },
    {
        "pl": "interesować",
        "en": "interest",
        "gr": "interest ",
        "es": "interés",
        "fr": "intérêt",
        "it": "interesse",
        "de": "das Interesse"
    },
    {
        "pl": "pamięć",
        "en": "memory",
        "gr": "μνήμη",
        "es": "memoria",
        "fr": "mémoire",
        "it": "memoria",
        "de": "das Gedächtnis"
    },
    {
        "pl": "dramatyczny",
        "en": "dramatic",
        "gr": "δραματικό",
        "es": "dramático",
        "fr": "dramatique",
        "it": "drammatico",
        "de": "dramatisch"
    },
    {
        "pl": "mieszać",
        "en": "mix",
        "gr": "μείγμα",
        "es": "mezclar",
        "fr": "mélanger",
        "it": "mescolare",
        "de": "die Mischung"
    },
    {
        "pl": "kurtyna, zasłona",
        "en": "curtain",
        "gr": "κουρτίνα",
        "es": "cortina",
        "fr": "rideau",
        "it": "tenda",
        "de": "der Vorhang"
    },
    {
        "pl": "kulfoniasty",
        "en": "hulking",
        "gr": "ογκώδης",
        "es": "pesado",
        "fr": "lourd",
        "it": "mastodontico",
        "de": "schwerfällig"
    },
    {
        "pl": "delikatny",
        "en": "delicate",
        "gr": "λεπτό",
        "es": "delicado",
        "fr": "délicat",
        "it": "delicato",
        "de": "zart"
    },
    {
        "pl": "z szeroko otwartymi oczami",
        "en": "wide-eyed",
        "gr": "ανοικτομάτης",
        "es": "con ojos grandes",
        "fr": "aux grands yeux",
        "it": "con gli occhi spalancati",
        "de": "staunend"
    },
    {
        "pl": "część",
        "en": "part",
        "gr": "τμήμα",
        "es": "parte",
        "fr": "part",
        "it": "parte",
        "de": "der Teil"
    },
    {
        "pl": "wolno",
        "en": "slow",
        "gr": "αργό",
        "es": "lento",
        "fr": "lent",
        "it": "lento",
        "de": "langsam"
    },
    {
        "pl": "opowiadając",
        "en": "telling",
        "gr": "λέγοντάς",
        "es": "diciendo",
        "fr": "disant",
        "it": "rivelatore",
        "de": "aufschlussreich"
    },
    {
        "pl": "język",
        "en": "tongue",
        "gr": "γλώσσα",
        "es": "lengua",
        "fr": "langue",
        "it": "lingua",
        "de": "die Zunge"
    },
    {
        "pl": "bogosławić",
        "en": "bless",
        "gr": "ευλογώ",
        "es": "bendecir",
        "fr": "bénir",
        "it": "benedire",
        "de": "segnen"
    },
    {
        "pl": "ponętny",
        "en": "alluring",
        "gr": "δελεαστικός",
        "es": "seductor",
        "fr": "séducteur",
        "it": "allettante",
        "de": "verlockend"
    },
    {
        "pl": "znalezione",
        "en": "found",
        "gr": "βρέθηκαν",
        "es": "encontrado",
        "fr": "trouvé",
        "it": "trovato",
        "de": "gründen"
    },
    {
        "pl": "przycisk",
        "en": "button",
        "gr": "κουμπί",
        "es": "botón",
        "fr": "bouton",
        "it": "bottone",
        "de": "der Knopf"
    },
    {
        "pl": "przypominać",
        "en": "remind",
        "gr": "υπενθυμίζω",
        "es": "recordar",
        "fr": "se rappeler",
        "it": "ricordare",
        "de": "ermahnen"
    },
    {
        "pl": "mgiełka",
        "en": "mist",
        "gr": "ομίχλη",
        "es": "niebla",
        "fr": "brume",
        "it": "nebbia",
        "de": "der Nebel"
    },
    {
        "pl": "dokuczać",
        "en": "tease",
        "gr": "πειράζω",
        "es": "embromar",
        "fr": "allumer",
        "it": "deridere",
        "de": "der Scherzbold"
    },
    {
        "pl": "pełzający",
        "en": "creepy",
        "gr": "ανατριχιαστικό",
        "es": "escalofriante",
        "fr": "effrayant",
        "it": "inquietante",
        "de": "gruselig"
    },
    {
        "pl": "nie przystoi, niewlaściwy",
        "en": "unbecoming",
        "gr": "ακατάλληλος",
        "es": "impropio",
        "fr": "inapproprié",
        "it": "inadatto",
        "de": "ungebührlich"
    },
    {
        "pl": "alarm",
        "en": "alarm",
        "gr": "συναγερμός",
        "es": "alarma",
        "fr": "alarme",
        "it": "allarme",
        "de": "der Wecker"
    },
    {
        "pl": "gęsi",
        "en": "geese",
        "gr": "χήνες",
        "es": "gansos",
        "fr": "oies",
        "it": "oche",
        "de": "die Gänse"
    },
    {
        "pl": "cichy",
        "en": "silent",
        "gr": "σιωπηλό",
        "es": "silencioso",
        "fr": "silencieux",
        "it": "silenzioso",
        "de": "still"
    },
    {
        "pl": "zawierać",
        "en": "contain",
        "gr": "περιέχουν",
        "es": "contener",
        "fr": "contenir",
        "it": "contenere",
        "de": "beinhalten"
    },
    {
        "pl": "podrażniać",
        "en": "irritate",
        "gr": "ερεθίζω",
        "es": "irritar",
        "fr": "irriter",
        "it": "irritare",
        "de": "ärgern"
    },
    {
        "pl": "ogromny",
        "en": "huge",
        "gr": "τεράστιο",
        "es": "enorme",
        "fr": "énorme",
        "it": "enorme",
        "de": "riesig"
    },
    {
        "pl": "paniczny",
        "en": "panicky",
        "gr": "πανικόβλητος",
        "es": "lleno de pánico",
        "fr": "paniqué",
        "it": "terrorizzato",
        "de": "überängstlich"
    },
    {
        "pl": "odpoczynek, reszta",
        "en": "rest",
        "gr": "υπόλοιπο",
        "es": "resto",
        "fr": "reste",
        "it": "riposare",
        "de": "der Rest"
    },
    {
        "pl": "towarzysz, kolega",
        "en": "mate",
        "gr": "σύντροφος",
        "es": "compañero",
        "fr": "copain",
        "it": "amico",
        "de": "der Kumpel"
    },
    {
        "pl": "magia",
        "en": "magic",
        "gr": "μαγεία",
        "es": "magia",
        "fr": "magie",
        "it": "magico",
        "de": "die Magie"
    },
    {
        "pl": "udekorowć",
        "en": "decorate",
        "gr": "διακοσμώ",
        "es": "decorar",
        "fr": "décorer",
        "it": "decorare",
        "de": "schmüken"
    },
    {
        "pl": "sześć",
        "en": "six",
        "gr": "έξι",
        "es": "seis",
        "fr": "six",
        "it": "sei",
        "de": "sechs"
    },
    {
        "pl": "piosenka",
        "en": "song",
        "gr": "τραγούδι",
        "es": "canción",
        "fr": "chanson",
        "it": "canzone",
        "de": "das Lied"
    },
    {
        "pl": "buczenie",
        "en": "hum",
        "gr": "βουητό",
        "es": "zumbido",
        "fr": "bourdonnement",
        "it": "canticchiare",
        "de": "summen"
    },
    {
        "pl": "zrelaksować się",
        "en": "relax",
        "gr": "χαλαρώστε",
        "es": "relajarse",
        "fr": "se détendre",
        "it": "rilassarsi",
        "de": "ausruhen"
    },
    {
        "pl": "śpiewać",
        "en": "sign",
        "gr": "πινακίδα",
        "es": "signo",
        "fr": "signe",
        "it": "segno",
        "de": "das Zeichen"
    },
    {
        "pl": "nudny",
        "en": "drab",
        "gr": "ανιαρός",
        "es": "monótono",
        "fr": "morne",
        "it": "scialbo",
        "de": "grau"
    },
    {
        "pl": "bielizna",
        "en": "underwear",
        "gr": "εσώρουχα",
        "es": "ropa interior",
        "fr": "sous-vêtement",
        "it": "biancheria intima",
        "de": "die Unterkleidung"
    },
    {
        "pl": "miniaturowy",
        "en": "miniature",
        "gr": "μινιατούρα",
        "es": "miniatura",
        "fr": "miniature",
        "it": "miniatura",
        "de": "die Miniatur"
    },
    {
        "pl": "przyczyna",
        "en": "cause",
        "gr": "αιτία",
        "es": "causa",
        "fr": "cause",
        "it": "causa",
        "de": "die Ursache"
    },
    {
        "pl": "korzystny",
        "en": "beneficial",
        "gr": "οφέλη",
        "es": "beneficioso",
        "fr": "bénéfique",
        "it": "favorevole",
        "de": "vorteilhaft"
    },
    {
        "pl": "język",
        "en": "language",
        "gr": "γλώσσα",
        "es": "idioma",
        "fr": "langue",
        "it": "lingua",
        "de": "die Sprache"
    },
    {
        "pl": "przerażający",
        "en": "terrific",
        "gr": "καταπληκτικό",
        "es": "estupendo",
        "fr": "formidable",
        "it": "magnifico",
        "de": "toll"
    },
    {
        "pl": "szkodliwe",
        "en": "damaging",
        "gr": "επιβλαβής",
        "es": "perjudicial",
        "fr": "préjudiciable",
        "it": "dannoso",
        "de": "schädlich"
    },
    {
        "pl": "siedzenie",
        "en": "seat",
        "gr": "θέση",
        "es": "asiento",
        "fr": "siège",
        "it": "sedile",
        "de": "der Sitz"
    },
    {
        "pl": "skąpy",
        "en": "parsimonious",
        "gr": "τσιγκούνης",
        "es": "parsimonioso",
        "fr": "parcimonieux",
        "it": "parsimonioso",
        "de": "sparsam"
    },
    {
        "pl": "dziwaczny",
        "en": "quirky",
        "gr": "ιδιότροπος",
        "es": "peculiar",
        "fr": "excentrique",
        "it": "particolare",
        "de": "skurril"
    },
    {
        "pl": "czarno-biały",
        "en": "black-and-white",
        "gr": "Ασπρόμαυρο",
        "es": "blanco y negro",
        "fr": "noir et blanc",
        "it": "in bianco e nero",
        "de": "schwarz und weiß"
    },
    {
        "pl": "tęsknić",
        "en": "miss",
        "gr": "κυρία",
        "es": "señorita",
        "fr": "mademoiselle",
        "it": "mancare",
        "de": "vermissen"
    },
    {
        "pl": "stopiony",
        "en": "melted",
        "gr": "λειωμένο",
        "es": "derretido",
        "fr": "fondu",
        "it": "sciolto",
        "de": "geschmolzen"
    },
    {
        "pl": "najwyższy",
        "en": "supreme",
        "gr": "υπέρτατος",
        "es": "supremo",
        "fr": "suprême",
        "it": "supremo",
        "de": "höchst"
    },
    {
        "pl": "ewentualny",
        "en": "thinkable",
        "gr": "νοητός",
        "es": "pensable",
        "fr": "pensable",
        "it": "pensabile",
        "de": "denkbar"
    },
    {
        "pl": "uroczy",
        "en": "cute",
        "gr": "συμπαθητικό ",
        "es": "precioso",
        "fr": "mignon",
        "it": "carino",
        "de": "süß"
    },
    {
        "pl": "poślubić",
        "en": "marry",
        "gr": "πανδρεύομαι",
        "es": "casarse",
        "fr": "se marier",
        "it": "sposare",
        "de": "heiraten"
    },
    {
        "pl": "młot, młotek",
        "en": "hammer",
        "gr": "σφυρί",
        "es": "martillo",
        "fr": "marteau",
        "it": "martello",
        "de": "der Hammer"
    },
    {
        "pl": "premia",
        "en": "premium",
        "gr": "υπέρ το άρτιον",
        "es": "prima",
        "fr": "prémium",
        "it": "extra",
        "de": "erstklassig"
    },
    {
        "pl": "późniejszy, kolejny",
        "en": "subsequent",
        "gr": "μετέπειτα",
        "es": "posterior",
        "fr": "ultérieur",
        "it": "successivo",
        "de": "nachfolgend"
    },
    {
        "pl": "szalik",
        "en": "scarf",
        "gr": "κασκόλ",
        "es": "bufanda",
        "fr": "écharpe",
        "it": "sciarpa",
        "de": "der Schal"
    },
    {
        "pl": "twarz",
        "en": "face",
        "gr": "πρόσωπο",
        "es": "cara",
        "fr": "visage",
        "it": "faccia",
        "de": "das Gesicht"
    },
    {
        "pl": "uprzejmy",
        "en": "kind",
        "gr": "είδος",
        "es": "amable",
        "fr": "aimable",
        "it": "gentile",
        "de": "nett"
    },
    {
        "pl": "tęsknota",
        "en": "longing",
        "gr": "λαχτάρα",
        "es": "anhelante",
        "fr": "languissant",
        "it": "bramoso",
        "de": "sehnsüchtig"
    },
    {
        "pl": "zerknięcie, pisk myszy",
        "en": "peep",
        "gr": "τιτίβισμα",
        "es": "vistazo",
        "fr": "coup d'œil",
        "it": "pigolio",
        "de": "linsen"
    },
    {
        "pl": "obiad",
        "en": "launch",
        "gr": "εκτόξευση",
        "es": "lanzamiento",
        "fr": "lancement",
        "it": "lancio",
        "de": "die Einführung"
    },
    {
        "pl": "inteligentny",
        "en": "intelligent",
        "gr": "έξυπνος",
        "es": "inteligente",
        "fr": "intelligent",
        "it": "intelligente",
        "de": "intelligent"
    },
    {
        "pl": "wąż gumowy",
        "en": "hose",
        "gr": "μάνικα",
        "es": "manguera",
        "fr": "tuyau",
        "it": "canna",
        "de": "der Schlauch"
    },
    {
        "pl": "wspaniały",
        "en": "wonderful",
        "gr": "θαυμάσιος",
        "es": "maravilloso",
        "fr": "merveilleux",
        "it": "meraviglioso",
        "de": "wunderbar"
    },
    {
        "pl": "owad",
        "en": "insect",
        "gr": "έντομο",
        "es": "insecto",
        "fr": "insecte",
        "it": "insetto",
        "de": "das Insekt"
    },
    {
        "pl": "aromatyczny",
        "en": "aromatic",
        "gr": "αρωματικό",
        "es": "aromático",
        "fr": "aromatique",
        "it": "aromatico",
        "de": "aromatisch"
    },
    {
        "pl": "szczyt",
        "en": "top",
        "gr": "κορυφαίο",
        "es": "superior",
        "fr": "supérieur",
        "it": "cima",
        "de": "die Spitze"
    },
    {
        "pl": "skandaliczny",
        "en": "scandalous",
        "gr": "σκανδαλώδης",
        "es": "escandaloso",
        "fr": "scandaleux",
        "it": "scandaloso",
        "de": "skandalös"
    },
    {
        "pl": "prowizoryczny",
        "en": "makeshift",
        "gr": "πρόχειρο",
        "es": "improvisado",
        "fr": "improvisé",
        "it": "improvvisato",
        "de": "provisorisch"
    },
    {
        "pl": "węzłowaty",
        "en": "knotty",
        "gr": "οζώδης",
        "es": "nudoso",
        "fr": "noueux",
        "it": "nodoso",
        "de": "knotig"
    },
    {
        "pl": "nękać",
        "en": "harass",
        "gr": "παρενοχλούν",
        "es": "hostigar",
        "fr": "harceler",
        "it": "molestare",
        "de": "belästigen"
    },
    {
        "pl": "odmawiać",
        "en": "refuse",
        "gr": "αρνούμαι",
        "es": "rechazar",
        "fr": "décliner",
        "it": "rifiutare",
        "de": "ablehnen"
    },
    {
        "pl": "gadatliwy",
        "en": "garrulous",
        "gr": "φλύαρος",
        "es": "gárrulo",
        "fr": "volubile",
        "it": "loquace",
        "de": "geschwätzig"
    },
    {
        "pl": "pracowity",
        "en": "painstaking",
        "gr": "επιμελής",
        "es": "meticuloso",
        "fr": "méticuleux",
        "it": "coscienzioso",
        "de": "mühevoll"
    },
    {
        "pl": "oklaskiwać",
        "en": "applaud",
        "gr": "χειροκροτώ",
        "es": "aplaudir",
        "fr": "applaudir",
        "it": "applaudire",
        "de": "loben"
    },
    {
        "pl": "dzicz, pustkowie",
        "en": "wilderness",
        "gr": "ερημιά",
        "es": "jungla",
        "fr": "jungle",
        "it": "landa selvaggia",
        "de": "die Wildnis"
    },
    {
        "pl": "histeryczny",
        "en": "hysterical",
        "gr": "υστερικό",
        "es": "histérico",
        "fr": "hystérique",
        "it": "isterico",
        "de": "hysterisch"
    },
    {
        "pl": "handel",
        "en": "trade",
        "gr": "εμπόριο",
        "es": "comercio",
        "fr": "commerce",
        "it": "scambio",
        "de": "der Handel"
    },
    {
        "pl": "cień",
        "en": "shade",
        "gr": "σκιά",
        "es": "sombra",
        "fr": "ombre",
        "it": "sfumatura",
        "de": "der Schatten"
    },
    {
        "pl": "łagodny",
        "en": "gentle",
        "gr": "απαλό",
        "es": "suave",
        "fr": "doux",
        "it": "gentile",
        "de": "zart"
    },
    {
        "pl": "potężny",
        "en": "powerful",
        "gr": "ισχυρό",
        "es": "potente",
        "fr": "puissant",
        "it": "potente",
        "de": "mächtig"
    },
    {
        "pl": "kręcone",
        "en": "curly",
        "gr": "κατσαρό",
        "es": "rizado",
        "fr": "bouclé",
        "it": "riccio",
        "de": "lockig"
    },
    {
        "pl": "unosić",
        "en": "hover",
        "gr": "φτερουγίζω",
        "es": "cernerse",
        "fr": "planer",
        "it": "volteggiare",
        "de": "schweben"
    },
    {
        "pl": "fantazyjny, polubić",
        "en": "fancy",
        "gr": "σκέφτομαι να ",
        "es": "sofisticado",
        "fr": "fantaisie",
        "it": "decorato",
        "de": "raffiniert"
    },
    {
        "pl": "płomień",
        "en": "flame",
        "gr": "φλόγα",
        "es": "llama",
        "fr": "flamme",
        "it": "fiamma",
        "de": "die Flamme"
    },
    {
        "pl": "zero",
        "en": "null",
        "gr": "άκυρο",
        "es": "nulo",
        "fr": "nul",
        "it": "annullato",
        "de": "null"
    },
    {
        "pl": "hałaśliwy",
        "en": "rambunctious",
        "gr": "θορυβώδης",
        "es": "revoltoso",
        "fr": "turbulent",
        "it": "turbolento",
        "de": "ungestüm"
    },
    {
        "pl": "bolesny",
        "en": "painful",
        "gr": "επώδυνο",
        "es": "doloroso",
        "fr": "douloureux",
        "it": "doloroso",
        "de": "schmerzhaft"
    },
    {
        "pl": "dziesięć",
        "en": "ten",
        "gr": "δέκα",
        "es": "diez",
        "fr": "dix",
        "it": "dieci",
        "de": "zehn"
    },
    {
        "pl": "zbędne",
        "en": "dispensable",
        "gr": "περιττό",
        "es": "prescindible",
        "fr": "superflu",
        "it": "superfluo",
        "de": "überflüssig"
    },
    {
        "pl": "bejsbol",
        "en": "baseball",
        "gr": "μπέιζμπολ",
        "es": "béisbol",
        "fr": "baseball",
        "it": "baseball",
        "de": "der Baseball"
    },
    {
        "pl": "góra",
        "en": "mountain",
        "gr": "βουνό",
        "es": "montaña",
        "fr": "montagne",
        "it": "montagna",
        "de": "der Berg"
    },
    {
        "pl": "straszny",
        "en": "scary",
        "gr": "τρομακτικό",
        "es": "siniestro",
        "fr": "sinistre",
        "it": "spaventoso",
        "de": "erschreckend"
    },
    {
        "pl": "mięta",
        "en": "mint",
        "gr": "μέντα",
        "es": "menta",
        "fr": "menthe",
        "it": "menta",
        "de": "die Minze"
    },
    {
        "pl": "torba",
        "en": "bag",
        "gr": "τσάντα",
        "es": "bolsa",
        "fr": "sac",
        "it": "borsa",
        "de": "die Tasche"
    },
    {
        "pl": "nakrzyczeć, skarcić",
        "en": "scold",
        "gr": "μαλώνω",
        "es": "regañar",
        "fr": "gronder",
        "it": "rimproverare",
        "de": "ausschimpfen"
    },
    {
        "pl": "burzliwy",
        "en": "stormy",
        "gr": "θυελλώδης",
        "es": "tempestuoso",
        "fr": "orageux",
        "it": "tempestoso",
        "de": "stürmisch"
    },
    {
        "pl": "proza",
        "en": "prose",
        "gr": "πεζογραφία",
        "es": "prosa",
        "fr": "prose",
        "it": "prosa",
        "de": "prosaisch"
    },
    {
        "pl": "nauczanie",
        "en": "teaching",
        "gr": "διδασκαλία",
        "es": "enseñanza",
        "fr": "enseignement",
        "it": "insegnando",
        "de": "die Lehre"
    },
    {
        "pl": "otyły",
        "en": "obese",
        "gr": "παχύσαρκος",
        "es": "obeso",
        "fr": "obèse",
        "it": "obeso",
        "de": "fettleibig"
    },
    {
        "pl": "oferta",
        "en": "offer",
        "gr": "προσφορά",
        "es": "oferta",
        "fr": "offre",
        "it": "offrire",
        "de": "das Angebot"
    },
    {
        "pl": "podatek",
        "en": "tax",
        "gr": "φόρος",
        "es": "impuesto",
        "fr": "impôt",
        "it": "tassa",
        "de": "die Steuer"
    },
    {
        "pl": "ciemny",
        "en": "dark",
        "gr": "σκοτάδι",
        "es": "oscuro",
        "fr": "obscur",
        "it": "buio",
        "de": "die Dunkelheit"
    },
    {
        "pl": "wycieczka podróż",
        "en": "trip",
        "gr": "ταξίδι",
        "es": "viaje",
        "fr": "voyage",
        "it": "viaggio",
        "de": "die Reise"
    },
    {
        "pl": "gratis",
        "en": "gratis",
        "gr": "δωρεάν",
        "es": "gratis",
        "fr": "gratis",
        "it": "gratuito",
        "de": "frei"
    },
    {
        "pl": "film",
        "en": "film",
        "gr": "ταινία",
        "es": "película",
        "fr": "film",
        "it": "film",
        "de": "der Film"
    },
    {
        "pl": "noga",
        "en": "leg",
        "gr": "πόδι",
        "es": "pierna",
        "fr": "jambe",
        "it": "gamba",
        "de": "das Bein"
    },
    {
        "pl": "pocałunek",
        "en": "kiss",
        "gr": "φιλί",
        "es": "beso",
        "fr": "baiser",
        "it": "bacio",
        "de": "der Kuss"
    },
    {
        "pl": "piasek",
        "en": "sand",
        "gr": "άμμος",
        "es": "arena",
        "fr": "sable",
        "it": "sabbia",
        "de": "der Sand"
    },
    {
        "pl": "nieperfekciny / niedokładny",
        "en": "imperfect",
        "gr": "ατελής",
        "es": "imperfecto",
        "fr": "imparfait",
        "it": "imperfetto",
        "de": "mangelhaft"
    },
    {
        "pl": "szok",
        "en": "shock",
        "gr": "σοκ",
        "es": "choque",
        "fr": "choc",
        "it": "shock",
        "de": "der Schock"
    },
    {
        "pl": "sprawiedliwy",
        "en": "righteous",
        "gr": "ενάρετος",
        "es": "justo",
        "fr": "droit",
        "it": "virtuoso",
        "de": "gerecht"
    },
    {
        "pl": "przegrany",
        "en": "loser",
        "gr": "ηττημένος",
        "es": "perdedor",
        "fr": "perdant",
        "it": "perdente",
        "de": "der Verlierer"
    },
    {
        "pl": "ciepły",
        "en": "warm",
        "gr": "ζεστό",
        "es": "caliente",
        "fr": "chaud",
        "it": "tiepido",
        "de": "warm"
    },
    {
        "pl": "zmysł, poczucie",
        "en": "sense",
        "gr": "αίσθηση",
        "es": "sentido",
        "fr": "sens",
        "it": "senso",
        "de": "der Sinn"
    },
    {
        "pl": "sędzia",
        "en": "judge",
        "gr": "δικαστής",
        "es": "juez",
        "fr": "juge",
        "it": "giudicare",
        "de": "der Richter"
    },
    {
        "pl": "skrobać",
        "en": "scrape",
        "gr": "ξύνω",
        "es": "raspar",
        "fr": "gratter",
        "it": "graffio",
        "de": "der Kratzer"
    },
    {
        "pl": "przyjacielski",
        "en": "friendly",
        "gr": "φιλικό",
        "es": "amistoso",
        "fr": "amical",
        "it": "amichevole",
        "de": "freundlich"
    },
    {
        "pl": "daleko",
        "en": "far",
        "gr": "μακριά",
        "es": "lejos",
        "fr": "loin",
        "it": "lontano",
        "de": "weit"
    },
    {
        "pl": "diabelski",
        "en": "devilish",
        "gr": "διαβολικό",
        "es": "diabólico",
        "fr": "diabolique",
        "it": "diabolico",
        "de": "teuflisch"
    },
    {
        "pl": "przystępny",
        "en": "accessible",
        "gr": "προσιτός",
        "es": "accesible",
        "fr": "accessible",
        "it": "accessibile",
        "de": "zugänglich"
    },
    {
        "pl": "trwały",
        "en": "abiding",
        "gr": "τηρών",
        "es": "duradero",
        "fr": "durable",
        "it": "persistente",
        "de": "beständig"
    },
    {
        "pl": "wyblakłe",
        "en": "faded",
        "gr": "ξεθωριασμένο",
        "es": "descolorido",
        "fr": "délavé",
        "it": "sbiadito",
        "de": "ausgebleichet"
    },
    {
        "pl": "ciekawy",
        "en": "interesting",
        "gr": "ενδιαφέρων",
        "es": "interesante",
        "fr": "interéssant",
        "it": "interessante",
        "de": "interessant"
    },
    {
        "pl": "brzydki",
        "en": "ugly",
        "gr": "άσχημος",
        "es": "feo",
        "fr": "laid",
        "it": "orribile",
        "de": "hässlich"
    },
    {
        "pl": "pies",
        "en": "dog",
        "gr": "σκύλος",
        "es": "perro",
        "fr": "chien",
        "it": "cane",
        "de": "der Hund"
    },
    {
        "pl": "metal",
        "en": "metal",
        "gr": "μέταλλο",
        "es": "metal",
        "fr": "métal",
        "it": "metallo",
        "de": "das Metal"
    },
    {
        "pl": "sprawa",
        "en": "matter",
        "gr": "ύλη",
        "es": "materia",
        "fr": "matière",
        "it": "materia",
        "de": "zählen"
    },
    {
        "pl": "mieszany",
        "en": "mixed",
        "gr": "μικτό",
        "es": "mixto",
        "fr": "mixte",
        "it": "mescolato",
        "de": "gemischt"
    },
    {
        "pl": "niecodzienny",
        "en": "offbeat",
        "gr": "εκκεντρικών",
        "es": "original",
        "fr": "original",
        "it": "anticonformistico",
        "de": "ausgefallen"
    },
    {
        "pl": "kochający",
        "en": "loving",
        "gr": "τρυφερό",
        "es": "amoroso",
        "fr": "amoureux",
        "it": "amorevole",
        "de": "liebevoll"
    },
    {
        "pl": "biznes",
        "en": "business",
        "gr": "επιχείρηση",
        "es": "negocios",
        "fr": "affaires",
        "it": "affari",
        "de": "das Geschäft"
    },
    {
        "pl": "prawdomówny",
        "en": "truthful",
        "gr": "αληθής",
        "es": "veraz",
        "fr": "honnête",
        "it": "veritiero",
        "de": "wahrhaftig"
    },
    {
        "pl": "brudny",
        "en": "filthy",
        "gr": "βρώμικο",
        "es": "inmundo",
        "fr": "immonde",
        "it": "lercio",
        "de": "dreckig"
    },
    {
        "pl": "biegły w czymś",
        "en": "versed",
        "gr": "εντριβής",
        "es": "versado",
        "fr": "versé",
        "it": "versato",
        "de": "versiert"
    },
    {
        "pl": "zarozumiały",
        "en": "uppity",
        "gr": "αλαζών",
        "es": "engreído",
        "fr": "arrogant",
        "it": "altezzoso",
        "de": "hochnäsig"
    },
    {
        "pl": "gruby",
        "en": "thick",
        "gr": "παχύ",
        "es": "grueso",
        "fr": "épais",
        "it": "spesso",
        "de": "dicht"
    },
    {
        "pl": "węzeł",
        "en": "knot",
        "gr": "κόμπος",
        "es": "nudo",
        "fr": "nœud",
        "it": "nodoso",
        "de": "der Knoten"
    },
    {
        "pl": "pływać",
        "en": "swim",
        "gr": "κολύμπι",
        "es": "nadar",
        "fr": "nager",
        "it": "nuotare",
        "de": "schwimmen"
    },
    {
        "pl": "czerwony",
        "en": "red",
        "gr": "κόκκινος",
        "es": "rojo",
        "fr": "rouge",
        "it": "rosso",
        "de": "rot"
    },
    {
        "pl": "statek",
        "en": "ship",
        "gr": "πλοίο",
        "es": "barco",
        "fr": "navire",
        "it": "nave",
        "de": "das Schiff"
    },
    {
        "pl": "impertynencki",
        "en": "sassy",
        "gr": "αυθάδης",
        "es": "descarado",
        "fr": "fougueux",
        "it": "insolente",
        "de": "frech"
    },
    {
        "pl": "przykład",
        "en": "example",
        "gr": "παράδειγμα",
        "es": "ejemplo",
        "fr": "exemple",
        "it": "esempio",
        "de": "das Beispiel"
    },
    {
        "pl": "prawdziwy",
        "en": "real",
        "gr": "αληθής",
        "es": "real",
        "fr": "réel",
        "it": "reale",
        "de": "wirklich"
    },
    {
        "pl": "literować",
        "en": "spell",
        "gr": "συλλαβίζω",
        "es": "deletrear",
        "fr": "épeler",
        "it": "incantesimo",
        "de": "buchstabieren"
    },
    {
        "pl": "odblokować",
        "en": "unlock",
        "gr": "ξεκλειδώνω",
        "es": "abrir",
        "fr": "ouvrir",
        "it": "sbloccare",
        "de": "freischalten"
    },
    {
        "pl": "piekarnik",
        "en": "oven",
        "gr": "φούρνος",
        "es": "horno",
        "fr": "four",
        "it": "forno",
        "de": "der Ofen"
    },
    {
        "pl": "tłuszcz, otyły",
        "en": "fat",
        "gr": "παχύ",
        "es": "grasa",
        "fr": "graisse",
        "it": "grasso",
        "de": "dick"
    },
    {
        "pl": "niefortunny",
        "en": "ill-fated",
        "gr": "κακότυχος",
        "es": "malogrado",
        "fr": "infortuné",
        "it": "sventurato",
        "de": "unglückselig"
    },
    {
        "pl": "strach na wróble",
        "en": "scarecrow",
        "gr": "σκιάχτρο",
        "es": "espantapájaros",
        "fr": "épouvantail",
        "it": "spaventapasseri",
        "de": "die Vogelscheuhe"
    },
    {
        "pl": "paskudny",
        "en": "nasty",
        "gr": "αηδιαστικός",
        "es": "repugnante",
        "fr": "répugnant",
        "it": "disgustoso",
        "de": "gemein"
    },
    {
        "pl": "zagraniczny",
        "en": "boundless",
        "gr": "απεριόριστο",
        "es": "ilimitado",
        "fr": "illimité",
        "it": "illimitato",
        "de": "grenzenlos"
    },
    {
        "pl": "wykonalny",
        "en": "workable",
        "gr": "εφαρμόσιμο",
        "es": "factible",
        "fr": "faisable",
        "it": "lavorabile",
        "de": "funktionsfähig"
    },
    {
        "pl": "zakres",
        "en": "range",
        "gr": "σειρά",
        "es": "alcance",
        "fr": "portée",
        "it": "gamma",
        "de": "die Reichweite"
    },
    {
        "pl": "zawierać",
        "en": "include",
        "gr": "συμπεριλαμβάνω",
        "es": "incluir",
        "fr": "inclure",
        "it": "includere",
        "de": "einschließen"
    },
    {
        "pl": "z drugiej ręki",
        "en": "second-hand",
        "gr": "δεύτερο χέρι",
        "es": "segunda mano",
        "fr": "d'occasion",
        "it": "usato",
        "de": "aus zweiter Hand"
    },
    {
        "pl": "pyzaty",
        "en": "chubby",
        "gr": "παχουλός",
        "es": "regordete",
        "fr": "grassouillet",
        "it": "paffuto",
        "de": "mollig"
    },
    {
        "pl": "łatwowierny",
        "en": "gullible",
        "gr": "εύπιστος",
        "es": "crédulo",
        "fr": "crédule",
        "it": "credulone",
        "de": "leichtgläubig"
    },
    {
        "pl": "wojujący",
        "en": "belligerent",
        "gr": "εμπόλεμος",
        "es": "beligerante",
        "fr": "belligérent",
        "it": "bellicoso",
        "de": "angriffslustig"
    },
    {
        "pl": "szyja",
        "en": "neck",
        "gr": "λαιμός",
        "es": "cuello",
        "fr": "cou",
        "it": "collo",
        "de": "der Hals"
    },
    {
        "pl": "niezdarny",
        "en": "clumsy",
        "gr": "αδέξιος",
        "es": "torpe",
        "fr": "maladroit",
        "it": "goffo",
        "de": "ungeschikt"
    },
    {
        "pl": "donkiszotowski",
        "en": "quixotic",
        "gr": "δονκιχωτικός",
        "es": "quijotesco",
        "fr": "idéaliste",
        "it": "romantico",
        "de": "abenteuerlich"
    },
    {
        "pl": "krzepki",
        "en": "robust",
        "gr": "εύρωστος",
        "es": "robusto",
        "fr": "robuste",
        "it": "robusto",
        "de": "robust"
    },
    {
        "pl": "kwarc",
        "en": "quartz",
        "gr": "χαλαζίας",
        "es": "cuarzo",
        "fr": "quartz",
        "it": "quarzo",
        "de": "der Quarz"
    },
    {
        "pl": "drapać",
        "en": "scratch",
        "gr": "γρατσουνιά",
        "es": "rasguño",
        "fr": "égratignure",
        "it": "graffio",
        "de": "der Kratzer"
    },
    {
        "pl": "kurz",
        "en": "dust",
        "gr": "σκόνη",
        "es": "polvo",
        "fr": "poussière",
        "it": "polvere",
        "de": "der Staub"
    },
    {
        "pl": "zwyczajny",
        "en": "ordinary",
        "gr": "απλό",
        "es": "ordinario",
        "fr": "ordinaire",
        "it": "ordinario",
        "de": "gewöhnlich"
    },
    {
        "pl": "zamawiać",
        "en": "order",
        "gr": "παραγγελία",
        "es": "orden",
        "fr": "ordre",
        "it": "ordine",
        "de": "die Ordnung"
    },
    {
        "pl": "strażak",
        "en": "fireman",
        "gr": "πυροσβέστης",
        "es": "bombero",
        "fr": "pompier",
        "it": "pompiere",
        "de": "der Feuerwehrmann"
    },
    {
        "pl": "środkowy",
        "en": "middle",
        "gr": "μέση",
        "es": "medio",
        "fr": "moyen",
        "it": "metà",
        "de": "die Mitte"
    },
    {
        "pl": "chwycić",
        "en": "grab",
        "gr": "αρπάζω",
        "es": "agarrar",
        "fr": "saisir",
        "it": "afferrare",
        "de": "fassen"
    },
    {
        "pl": "kochany",
        "en": "dear",
        "gr": "αγαπητός",
        "es": "querido",
        "fr": "cher",
        "it": "caro",
        "de": "lieb"
    },
    {
        "pl": "przystojny",
        "en": "seemly",
        "gr": "ευπρεπής",
        "es": "decente",
        "fr": "bienséant",
        "it": "appropriato",
        "de": "anständig"
    },
    {
        "pl": "nagroda",
        "en": "reward",
        "gr": "ανταμοιβή",
        "es": "recompensa",
        "fr": "récompense",
        "it": "ricompensa",
        "de": "die Belohnung"
    },
    {
        "pl": "mleko",
        "en": "milk",
        "gr": "γάλα",
        "es": "leche",
        "fr": "lait",
        "it": "latte",
        "de": "die Milch"
    },
    {
        "pl": "zmieniać, przerobić",
        "en": "alert",
        "gr": "συναγερμός",
        "es": "alerta",
        "fr": "alerte",
        "it": "allerta",
        "de": "der Alarm"
    },
    {
        "pl": "guz, gula",
        "en": "bump",
        "gr": "χτύπημα",
        "es": "bulto",
        "fr": "bosse",
        "it": "bozzo",
        "de": "die Beule"
    },
    {
        "pl": "aksjomatyczny",
        "en": "axiomatic",
        "gr": "αξιωματικό",
        "es": "axiomático",
        "fr": "axiomatique",
        "it": "assiomatico",
        "de": "grundsätzlich"
    },
    {
        "pl": "prasa, naciskać, naciśnięcie",
        "en": "press",
        "gr": "τύπος",
        "es": "prensa",
        "fr": "presse",
        "it": "premere",
        "de": "die Presse"
    },
    {
        "pl": "duży",
        "en": "large",
        "gr": "μεγάλο",
        "es": "grande",
        "fr": "gran",
        "it": "largo",
        "de": "groß"
    },
    {
        "pl": "duchowy",
        "en": "spiritual",
        "gr": "πνευματικός",
        "es": "espiritual",
        "fr": "spirituel",
        "it": "spirituale",
        "de": "spirituell"
    },
    {
        "pl": "stacja",
        "en": "station",
        "gr": "σταθμός",
        "es": "estación",
        "fr": "station",
        "it": "stazione",
        "de": "der Bahnhof"
    },
    {
        "pl": "nogi",
        "en": "legs",
        "gr": "πόδια",
        "es": "piernas",
        "fr": "jambes",
        "it": "gambe",
        "de": "die Beine"
    },
    {
        "pl": "nadwodny",
        "en": "aquatic",
        "gr": "υδρόβιο",
        "es": "acuático",
        "fr": "aquatique",
        "it": "acquatico",
        "de": "wasserbewohnend"
    },
    {
        "pl": "akcja",
        "en": "action",
        "gr": "δράση",
        "es": "acción",
        "fr": "action",
        "it": "azione",
        "de": "die Handlung"
    },
    {
        "pl": "parasol",
        "en": "umbrella",
        "gr": "ομπρέλα",
        "es": "paraguas",
        "fr": "parapluie",
        "it": "ombrello",
        "de": "der Regenschirm"
    },
    {
        "pl": "umysł",
        "en": "mind",
        "gr": "μυαλό",
        "es": "mente",
        "fr": "esprit",
        "it": "mente",
        "de": "der Verstand"
    },
    {
        "pl": "żyrafa",
        "en": "giraffe",
        "gr": "καμηλοπάρδαλη",
        "es": "jirafa",
        "fr": "girafe",
        "it": "giraffa",
        "de": "die Giraffe"
    },
    {
        "pl": "żywiołowy",
        "en": "exuberant",
        "gr": "πληθωρικός",
        "es": "exuberante",
        "fr": "exubérant",
        "it": "esuberante",
        "de": "ausgelassen"
    },
    {
        "pl": "lichy",
        "en": "flimsy",
        "gr": "εύθραυστο",
        "es": "endeble",
        "fr": "fragile",
        "it": "sottile",
        "de": "leicht"
    },
    {
        "pl": "suchy",
        "en": "dry",
        "gr": "ξηρό",
        "es": "seco",
        "fr": "sec",
        "it": "asciutto",
        "de": "trocken"
    },
    {
        "pl": "miłosierny",
        "en": "merciful",
        "gr": "εύσπλαχνος",
        "es": "misericordioso",
        "fr": "miséricordieux",
        "it": "pietoso",
        "de": "gnädig"
    },
    {
        "pl": "cenny",
        "en": "precious",
        "gr": "πολύτιμο",
        "es": "precioso",
        "fr": "précieux",
        "it": "prezioso",
        "de": "kostbar"
    },
    {
        "pl": "radosny",
        "en": "joyous",
        "gr": "περιχαρής",
        "es": "jubiloso",
        "fr": "joyeux",
        "it": "gioioso",
        "de": "freudig"
    },
    {
        "pl": "nieprzekonywujący",
        "en": "inconclusive",
        "gr": "ασαφή",
        "es": "no concluyente",
        "fr": "peu concluent",
        "it": "inconcludente",
        "de": "ergebnislos"
    },
    {
        "pl": "ruszt",
        "en": "grate",
        "gr": "σχάρα",
        "es": "rechinar",
        "fr": "grincer",
        "it": "digrignare",
        "de": "reiben"
    },
    {
        "pl": "garnek",
        "en": "pot",
        "gr": "κατσαρόλα",
        "es": "maceta",
        "fr": "pot",
        "it": "pentola",
        "de": "der Topf"
    },
    {
        "pl": "zwięzły",
        "en": "succinct",
        "gr": "περιληπτικός",
        "es": "succint",
        "fr": "succint",
        "it": "succinto",
        "de": "prägnant"
    },
    {
        "pl": "wąski",
        "en": "narrow",
        "gr": "στενό",
        "es": "estrecho",
        "fr": "étroit",
        "it": "angusto",
        "de": "eng"
    },
    {
        "pl": "młodzieńczy",
        "en": "youthful",
        "gr": "νεανικό",
        "es": "juvenil",
        "fr": "jeube",
        "it": "giovanile",
        "de": "jungendlich"
    },
    {
        "pl": "jajka",
        "en": "eggs",
        "gr": "αυγά",
        "es": "huevos",
        "fr": "œufs",
        "it": "uova",
        "de": "die Eier"
    },
    {
        "pl": "zimno",
        "en": "cold",
        "gr": "κρύο",
        "es": "frio",
        "fr": "froid",
        "it": "freddo",
        "de": "kalt"
    },
    {
        "pl": "zgodny",
        "en": "agreeable",
        "gr": "δεκτός",
        "es": "agradable",
        "fr": "agréable",
        "it": "gradevole",
        "de": "angenehm"
    },
    {
        "pl": "tron",
        "en": "throne",
        "gr": "θρόνος",
        "es": "trono",
        "fr": "trône",
        "it": "trono",
        "de": "der Thron"
    },
    {
        "pl": "kara",
        "en": "punishment",
        "gr": "τιμωρία",
        "es": "castigo",
        "fr": "punition",
        "it": "punizione",
        "de": "die Strafe"
    },
    {
        "pl": "makabryczny",
        "en": "gruesome",
        "gr": "φρικτός",
        "es": "horrible",
        "fr": "repoussant",
        "it": "raccapricciante",
        "de": "grauenhaft"
    },
    {
        "pl": "szczypać",
        "en": "pinch",
        "gr": "τσίμπημα",
        "es": "pellizcar",
        "fr": "pincer",
        "it": "pizzicotto",
        "de": "kneifen"
    },
    {
        "pl": "polowanie",
        "en": "hunt",
        "gr": "κυνήγι",
        "es": "cazar",
        "fr": "chasser",
        "it": "cacciare",
        "de": "die Jagd"
    },
    {
        "pl": "relacja",
        "en": "relation",
        "gr": "σχέση",
        "es": "relación",
        "fr": "relation",
        "it": "relazione",
        "de": "die Beziehung"
    },
    {
        "pl": "skóra",
        "en": "skin",
        "gr": "δέρμα",
        "es": "piel",
        "fr": "peau",
        "it": "pelle",
        "de": "die Haut"
    },
    {
        "pl": "głupkowaty",
        "en": "goofy",
        "gr": "ανόητος",
        "es": "bobo",
        "fr": "bizarre",
        "it": "goffo",
        "de": "albern"
    },
    {
        "pl": "drogie",
        "en": "pricey",
        "gr": "ακριβό",
        "es": "caro",
        "fr": "cher",
        "it": "caro",
        "de": "kostspielig"
    },
    {
        "pl": "podwójny",
        "en": "double",
        "gr": "διπλό",
        "es": "doble",
        "fr": "double",
        "it": "doppio",
        "de": "doppelt"
    },
    {
        "pl": "ucho",
        "en": "ear",
        "gr": "αυτί",
        "es": "oreja",
        "fr": "oreille",
        "it": "orecchio",
        "de": "das Ohr"
    },
    {
        "pl": "anioł",
        "en": "angle",
        "gr": "γωνία",
        "es": "ángulo",
        "fr": "angle",
        "it": "angolo",
        "de": "der Winkel"
    },
    {
        "pl": "grzebień",
        "en": "comb",
        "gr": "χτένα",
        "es": "peine",
        "fr": "peigne",
        "it": "pettine",
        "de": "kämmen"
    },
    {
        "pl": "korzeń",
        "en": "root",
        "gr": "ρίζα",
        "es": "raíz",
        "fr": "racine",
        "it": "radice",
        "de": "die Wurzel"
    },
    {
        "pl": "ziemniak",
        "en": "potato",
        "gr": "πατάτα",
        "es": "patata",
        "fr": "pomme de terre",
        "it": "patata",
        "de": "die Kartoffel"
    },
    {
        "pl": "zdolny",
        "en": "able",
        "gr": "ικανός",
        "es": "capaz",
        "fr": "capable",
        "it": "capace",
        "de": "fähig"
    },
    {
        "pl": "soda",
        "en": "soda",
        "gr": "σόδα",
        "es": "soda",
        "fr": "soda",
        "it": "soda",
        "de": "das Soda"
    },
    {
        "pl": "używać",
        "en": "use",
        "gr": "χρήση",
        "es": "uso",
        "fr": "utilisation",
        "it": "uso",
        "de": "benutzen"
    },
    {
        "pl": "ostatni",
        "en": "last",
        "gr": "τελευταία",
        "es": "último",
        "fr": "dernier",
        "it": "ultimo",
        "de": "letzte"
    },
    {
        "pl": "dodanie",
        "en": "addition",
        "gr": "πρόσθεση",
        "es": "adición",
        "fr": "addition",
        "it": "aggiunta",
        "de": "die Ergänzung"
    },
    {
        "pl": "błyszczący",
        "en": "shiny",
        "gr": "λαμπερό",
        "es": "brillante",
        "fr": "brillant",
        "it": "brillante",
        "de": "glänzend"
    },
    {
        "pl": "kołnierz",
        "en": "collar",
        "gr": "περιλαίμιο",
        "es": "collar",
        "fr": "collier",
        "it": "collare",
        "de": "der Kragen"
    },
    {
        "pl": "doraźnie",
        "en": "ad hoc",
        "gr": "ad hoc",
        "es": "ad hoc",
        "fr": "ad hoc",
        "it": "ad hoc",
        "de": "ad hoc"
    },
    {
        "pl": "schronienie",
        "en": "shelter",
        "gr": "καταφύγιο",
        "es": "abrigo",
        "fr": "abri",
        "it": "rifugio",
        "de": "der Unterschlupf"
    },
    {
        "pl": "ja, jaźń",
        "en": "self",
        "gr": "εαυτός",
        "es": "mismo",
        "fr": "soi-même",
        "it": "sé",
        "de": "selbst"
    },
    {
        "pl": "przerwa",
        "en": "brake",
        "gr": "φρένο",
        "es": "freno",
        "fr": "frein",
        "it": "freno",
        "de": "die Bremse"
    },
    {
        "pl": "żywy",
        "en": "lively",
        "gr": "ζωηρός",
        "es": "animado",
        "fr": "animé",
        "it": "vivace",
        "de": "lebhaft"
    },
    {
        "pl": "szczęśliwy",
        "en": "happy",
        "gr": "ευτυχισμένος",
        "es": "feliz",
        "fr": "heureux",
        "it": "felice",
        "de": "froh"
    },
    {
        "pl": "zapominalski",
        "en": "forgetful",
        "gr": "ξεχασιάρης",
        "es": "olvidadizo",
        "fr": "distrait",
        "it": "smemorato",
        "de": "vergesslich"
    },
    {
        "pl": "pojawić się",
        "en": "appear",
        "gr": "εμφανίζονται",
        "es": "aparecer",
        "fr": "apparaitre",
        "it": "apparire",
        "de": "erscheinen"
    },
    {
        "pl": "autorytet",
        "en": "authority",
        "gr": "εξουσία",
        "es": "autoridad",
        "fr": "autorité",
        "it": "autorità",
        "de": "die Behörde"
    },
    {
        "pl": "kapusta",
        "en": "cabbage",
        "gr": "λάχανο",
        "es": "repollo",
        "fr": "chou",
        "it": "cavolo",
        "de": "das Kraut"
    },
    {
        "pl": "niegodziwiec",
        "en": "miscreant",
        "gr": "αχρείος",
        "es": "malhechor",
        "fr": "vaurien",
        "it": "criminale",
        "de": "der Missetäter"
    },
    {
        "pl": "dżem",
        "en": "jam",
        "gr": "μαρμελάδα",
        "es": "mermelada",
        "fr": "confiture",
        "it": "marmellata",
        "de": "die Marmelade"
    },
    {
        "pl": "bić",
        "en": "bead",
        "gr": "χάντρα",
        "es": "perla",
        "fr": "perle",
        "it": "perlina",
        "de": "die Perle"
    },
    {
        "pl": "pożywny",
        "en": "nutritious",
        "gr": "θρεπτικό",
        "es": "nutritivo",
        "fr": "nutritif",
        "it": "nutrizionale",
        "de": "nahrhaft"
    },
    {
        "pl": "bezwzględny",
        "en": "ruthless",
        "gr": "αδίστακτος",
        "es": "despiadado",
        "fr": "impitoyable",
        "it": "spietato",
        "de": "mitleidlos"
    },
    {
        "pl": "początkujący",
        "en": "beginner",
        "gr": "αρχάριος",
        "es": "principiante",
        "fr": "débutant",
        "it": "principiante",
        "de": "der Anfänger"
    },
    {
        "pl": "promieniować",
        "en": "radiate",
        "gr": "ακτινοβολώ",
        "es": "irradiar",
        "fr": "irradier",
        "it": "irradiare",
        "de": "verspühen"
    },
    {
        "pl": "chmiel",
        "en": "hop",
        "gr": "πήδημα",
        "es": "saltar",
        "fr": "sauter",
        "it": "saltellare",
        "de": "hüpfen"
    },
    {
        "pl": "aparat fotograficzny, kamera",
        "en": "camera",
        "gr": "κάμερα",
        "es": "cámara",
        "fr": "caméra",
        "it": "fotocamera",
        "de": "die Kamera"
    },
    {
        "pl": "śnieg",
        "en": "snow",
        "gr": "χιόνι",
        "es": "nieve",
        "fr": "neige",
        "it": "neve",
        "de": "der Schnee"
    },
    {
        "pl": "ogromny",
        "en": "enormous",
        "gr": "τεράστιο",
        "es": "enorme",
        "fr": "énorme",
        "it": "enorme",
        "de": "riesig"
    },
    {
        "pl": "mroczny",
        "en": "murky",
        "gr": "σκοτεινό",
        "es": "turbio",
        "fr": "glauque",
        "it": "torbido",
        "de": "trüb"
    },
    {
        "pl": "wiadro",
        "en": "bucket",
        "gr": "κάδος / κουβάς",
        "es": "balde",
        "fr": "seau",
        "it": "secchio",
        "de": "der Eimer"
    },
    {
        "pl": "wsparcie",
        "en": "support",
        "gr": "υποστήριξη",
        "es": "apoyo",
        "fr": "soutien",
        "it": "supporto",
        "de": "die Unterstützung"
    },
    {
        "pl": "klasztorny",
        "en": "cloistered",
        "gr": "εγκλωβισμένα",
        "es": "conventual",
        "fr": "monastique",
        "it": "monastico",
        "de": "abgeschieden"
    },
    {
        "pl": "półgłówek",
        "en": "zany",
        "gr": "γελωτοποιός",
        "es": "chiflado",
        "fr": "zinzin",
        "it": "folle",
        "de": "verrückt"
    },
    {
        "pl": "obserwować",
        "en": "observe",
        "gr": "παρατηρώ",
        "es": "observar",
        "fr": "observer",
        "it": "osservare",
        "de": "beobachten"
    },
    {
        "pl": "kwadrat, plac",
        "en": "square",
        "gr": "πλατεία",
        "es": "cuadrado",
        "fr": "carré",
        "it": "quadrato",
        "de": "das Quadrat"
    },
    {
        "pl": "elastyczny",
        "en": "elastic",
        "gr": "ελαστικό",
        "es": "elástico",
        "fr": "élastique",
        "it": "elastico",
        "de": "das Gummiband"
    },
    {
        "pl": "kwaśny",
        "en": "acidic",
        "gr": "όξινο",
        "es": "ácido",
        "fr": "acide",
        "it": "acido",
        "de": "sauer"
    },
    {
        "pl": "drżeć",
        "en": "tremble",
        "gr": "τρέμω",
        "es": "temblar",
        "fr": "trembler",
        "it": "tremolare",
        "de": "zittern"
    },
    {
        "pl": "agonalny",
        "en": "agonizing",
        "gr": "αγωνιώδης",
        "es": "agonizante",
        "fr": "agonisant",
        "it": "agonizzante",
        "de": "qualvoll"
    },
    {
        "pl": "melodyczny",
        "en": "melodic",
        "gr": "μελωδικό",
        "es": "melódico",
        "fr": "mélodique",
        "it": "melodico",
        "de": "melodisch"
    },
    {
        "pl": "zidentyfikować",
        "en": "identify",
        "gr": "αναγνωρίζω",
        "es": "identifiar",
        "fr": "identifier",
        "it": "identificare",
        "de": "identifizieren"
    },
    {
        "pl": "obserwacja",
        "en": "observation",
        "gr": "παρατήρηση",
        "es": "observación",
        "fr": "observation",
        "it": "osservazione",
        "de": "die Beobachtung"
    },
    {
        "pl": "spacer",
        "en": "walk",
        "gr": "περπατώ",
        "es": "caminar",
        "fr": "marcher",
        "it": "camminare",
        "de": "spazierengehen"
    },
    {
        "pl": "gospodarstwo",
        "en": "farm",
        "gr": "φάρμα",
        "es": "granja",
        "fr": "ferme",
        "it": "fattoria",
        "de": "der Bauerhof"
    },
    {
        "pl": "masywny",
        "en": "chunky",
        "gr": "πεπλατυσμένο",
        "es": "fornido",
        "fr": "trapu",
        "it": "massiccio",
        "de": "stämmig"
    },
    {
        "pl": "długi",
        "en": "long",
        "gr": "μακρύς",
        "es": "largo",
        "fr": "long",
        "it": "lungo",
        "de": "lang"
    },
    {
        "pl": "samolubny",
        "en": "selfish",
        "gr": "εγωιστής",
        "es": "egoísta",
        "fr": "égoïste",
        "it": "egoista",
        "de": "egoistisch"
    },
    {
        "pl": "odblaskowy",
        "en": "reflective",
        "gr": "αντανακλαστική",
        "es": "reflectante",
        "fr": "réfléchissant",
        "it": "riflettente",
        "de": "nachdenklich"
    },
    {
        "pl": "kompleks",
        "en": "complex",
        "gr": "σύμπλεγμα",
        "es": "complejo",
        "fr": "complexe",
        "it": "complesso",
        "de": "kompliziert"
    },
    {
        "pl": "fajnie",
        "en": "fine",
        "gr": "πρόστιμο",
        "es": "multa",
        "fr": "amende",
        "it": "distinto",
        "de": "die Geldstrafe"
    },
    {
        "pl": "jasny",
        "en": "bright",
        "gr": "φωτεινό",
        "es": "brillante",
        "fr": "brillant",
        "it": "luminoso",
        "de": "hell"
    },
    {
        "pl": "srebro",
        "en": "silver",
        "gr": "ασήμι",
        "es": "plata",
        "fr": "argent",
        "it": "argento",
        "de": "das Silber"
    },
    {
        "pl": "posłuszny",
        "en": "obeisant",
        "gr": "υπακούοντας",
        "es": "reverente",
        "fr": "docile",
        "it": "riverente",
        "de": "gehorsam"
    },
    {
        "pl": "strzyżyk",
        "en": "wren",
        "gr": "τρυποφράκτης",
        "es": "chochín",
        "fr": "roitelet",
        "it": "scricciolo",
        "de": "Zaunkönig"
    },
    {
        "pl": "młot, młotek",
        "en": "hammer",
        "gr": "σφυρί",
        "es": "martillo",
        "fr": "marteau",
        "it": "martello",
        "de": "der Hammer"
    },
    {
        "pl": "beczenie",
        "en": "moaning",
        "gr": "γκρίνια",
        "es": "gimiendo",
        "fr": "gémissant",
        "it": "gemere",
        "de": "ächzend"
    },
    {
        "pl": "zdumiewający",
        "en": "amazing",
        "gr": "καταπληκτικό",
        "es": "asombroso",
        "fr": "superbe",
        "it": "fantastico",
        "de": "erstaunlich"
    },
    {
        "pl": "przerażający",
        "en": "frightening",
        "gr": "τρομακτικό",
        "es": "aterrador",
        "fr": "terrifiant",
        "it": "spaventoso",
        "de": "beänstigend"
    },
    {
        "pl": "smażyć",
        "en": "fry",
        "gr": "τηγανίζω",
        "es": "freír",
        "fr": "frire",
        "it": "friggere",
        "de": "braten"
    },
    {
        "pl": "minuta",
        "en": "minute",
        "gr": "λεπτό",
        "es": "minuto",
        "fr": "minute",
        "it": "minuto",
        "de": "die Minute"
    },
    {
        "pl": "mający zawroty głowy",
        "en": "woozy",
        "gr": "ζαλισμένος",
        "es": "mareado",
        "fr": "vaseux",
        "it": "confuso",
        "de": "benommen"
    },
    {
        "pl": "kukurydza",
        "en": "corn",
        "gr": "καλαμπόκι",
        "es": "maíz",
        "fr": "maïs",
        "it": "mais",
        "de": "der Mais"
    },
    {
        "pl": "przystosowawczy",
        "en": "adaptable",
        "gr": "προσαρμόσιμο",
        "es": "adaptable",
        "fr": "adaptable",
        "it": "adattabile",
        "de": "anpassungsfähig"
    },
    {
        "pl": "ulica",
        "en": "street",
        "gr": "δρόμος",
        "es": "calle",
        "fr": "rue",
        "it": "strada",
        "de": "die Straße"
    },
    {
        "pl": "wiedza",
        "en": "knowledge",
        "gr": "γνώση",
        "es": "conocimiento",
        "fr": "connaissance",
        "it": "conoscenza",
        "de": "das Wissen"
    },
    {
        "pl": "słoma",
        "en": "straw",
        "gr": "καλαμάκι",
        "es": "paja",
        "fr": "paille",
        "it": "cannuccia",
        "de": "das Stroh"
    },
    {
        "pl": "groteskowy",
        "en": "ludicrous",
        "gr": "γελοίος",
        "es": "ridículo",
        "fr": "riicule",
        "it": "comico",
        "de": "lächerlich"
    },
    {
        "pl": "rozumieć",
        "en": "understood",
        "gr": "εννοείται",
        "es": "entendido",
        "fr": "compris",
        "it": "compreso",
        "de": "verstanden"
    },
    {
        "pl": "porywisty",
        "en": "gusty",
        "gr": "βροντερό",
        "es": "borrascoso",
        "fr": "soufflant en rafales",
        "it": "burrascoso",
        "de": "stürmisch"
    },
    {
        "pl": "majestatyczny",
        "en": "majestic",
        "gr": "μεγαλοπρεπή",
        "es": "majestuoso",
        "fr": "majestueux",
        "it": "maestoso",
        "de": "majestätisch"
    },
    {
        "pl": "muzyka pop",
        "en": "pop",
        "gr": "κρότος",
        "es": "música pop",
        "fr": "pop",
        "it": "scoppio",
        "de": "aufplatzen"
    },
    {
        "pl": "spięty",
        "en": "uptight",
        "gr": "νευρικός",
        "es": "tenso",
        "fr": "tendu",
        "it": "teso",
        "de": "verklemmt"
    },
    {
        "pl": "pajęczyna",
        "en": "cobweb",
        "gr": "ιστός αράχνης",
        "es": "telaraña",
        "fr": "toile d'araignée",
        "it": "ragnatela",
        "de": "das Spinnennetz"
    },
    {
        "pl": "szorstki",
        "en": "harsh",
        "gr": "σκληρό",
        "es": "áspero",
        "fr": "strict",
        "it": "rigido",
        "de": "brutal"
    },
    {
        "pl": "bezinteresowny",
        "en": "unbiased",
        "gr": "αμερόληπτος",
        "es": "imparcial",
        "fr": "impartial",
        "it": "imparziale",
        "de": "unparteiisch"
    },
    {
        "pl": "posiekać",
        "en": "chop",
        "gr": "κόψιμο",
        "es": "picar",
        "fr": "hacher",
        "it": "spaccare",
        "de": "hacken"
    },
    {
        "pl": "ramię",
        "en": "arm",
        "gr": "μπράτσο",
        "es": "brazo",
        "fr": "bras",
        "it": "braccio",
        "de": "der Arm"
    },
    {
        "pl": "łyk",
        "en": "sip",
        "gr": "γουλιά",
        "es": "sorbo",
        "fr": "gorgée",
        "it": "sorso",
        "de": "der Schluck"
    },
    {
        "pl": "futurystyczny",
        "en": "futuristic",
        "gr": "φουτουριστικό",
        "es": "futurista",
        "fr": "futuriste",
        "it": "futuristico",
        "de": "futuristisch"
    },
    {
        "pl": "pogoda",
        "en": "weather",
        "gr": "καιρός",
        "es": "tiempo",
        "fr": "temps",
        "it": "tempo",
        "de": "das Wetter"
    },
    {
        "pl": "proszę",
        "en": "please",
        "gr": "παρακαλώ",
        "es": "por favor",
        "fr": "s'il te plait",
        "it": "accontentare",
        "de": "bitte"
    },
    {
        "pl": "kontynuować",
        "en": "continue",
        "gr": "συνέχεια",
        "es": "continuar",
        "fr": "continuer",
        "it": "continuare",
        "de": "folgen"
    },
    {
        "pl": "nietoperz",
        "en": "bat",
        "gr": "νυχτερίδα",
        "es": "murciélago",
        "fr": "chauve souris",
        "it": "pipistrello",
        "de": "die Fledermaus"
    },
    {
        "pl": "żart",
        "en": "joke",
        "gr": "αστείο",
        "es": "broma",
        "fr": "blague",
        "it": "scherzo",
        "de": "der Witz"
    },
    {
        "pl": "rozpryskiwać",
        "en": "scatter",
        "gr": "σκορπίζω",
        "es": "dispersión",
        "fr": "dispersion",
        "it": "sparpagliarsi",
        "de": "verstreuen"
    },
    {
        "pl": "mówić",
        "en": "talk",
        "gr": "μιλώ",
        "es": "hablar",
        "fr": "parler",
        "it": "parlare",
        "de": "sprechen"
    },
    {
        "pl": "psychotyczny",
        "en": "psychotic",
        "gr": "ψυχωτικό",
        "es": "psicópata",
        "fr": "psychopate",
        "it": "psicotico",
        "de": "psychotisch"
    },
    {
        "pl": "niebieskooki",
        "en": "blue-eyed",
        "gr": "γαλανομάτης / γαλανομάτα",
        "es": "de ojos azules",
        "fr": "yeux bleus",
        "it": "con gli occhi blu",
        "de": "blauäugig"
    },
    {
        "pl": "w ogniu",
        "en": "ablaze",
        "gr": "φλεγόμενο",
        "es": "en llamas",
        "fr": "enflammé",
        "it": "infiammato",
        "de": "in Flammen"
    },
    {
        "pl": "wtyczka",
        "en": "plug",
        "gr": "πρίζα",
        "es": "enchufe",
        "fr": "bouchon",
        "it": "spina",
        "de": "der Stecker"
    },
    {
        "pl": "skok",
        "en": "jump",
        "gr": "πήδημα",
        "es": "saltar",
        "fr": "sauter",
        "it": "saltare",
        "de": "springen"
    },
    {
        "pl": "śpiący",
        "en": "sleepy",
        "gr": "νυσταγμένος",
        "es": "soñoliento",
        "fr": "ensommeillé",
        "it": "assonnato",
        "de": "schläfrig"
    },
    {
        "pl": "rozmamłany",
        "en": "unkempt",
        "gr": "απεριποίητος",
        "es": "desaliñado",
        "fr": "négligé",
        "it": "trasandato",
        "de": "ungepflegt"
    },
    {
        "pl": "zbłądzić",
        "en": "wander",
        "gr": "περιπλανιέμαι",
        "es": "vagar",
        "fr": "flâner",
        "it": "errare",
        "de": "wandern"
    },
    {
        "pl": "religia",
        "en": "religion",
        "gr": "θρησκεία",
        "es": "religión",
        "fr": "religion",
        "it": "religione",
        "de": "die Religion"
    },
    {
        "pl": "terapeutyczny",
        "en": "therapeutic",
        "gr": "θεραπευτικό",
        "es": "terapéutico",
        "fr": "thérapeutique",
        "it": "terapeutico",
        "de": "therapeutisch"
    },
    {
        "pl": "kolosalny",
        "en": "colossal",
        "gr": "κολοσσιαίο",
        "es": "colosal",
        "fr": "colossal",
        "it": "colossale",
        "de": "rieig"
    },
    {
        "pl": "wierzyć",
        "en": "believe",
        "gr": "πιστεύω",
        "es": "creer",
        "fr": "croire",
        "it": "credere",
        "de": "glauben"
    },
    {
        "pl": "oczyścić",
        "en": "clear",
        "gr": "καθαρό",
        "es": "claro",
        "fr": "clair",
        "it": "trasparente",
        "de": "klar"
    },
    {
        "pl": "skręcenie",
        "en": "twist",
        "gr": "διάστρεμμα",
        "es": "torcedura",
        "fr": "tordu",
        "it": "attorcigliare",
        "de": "die Wendung"
    },
    {
        "pl": "dotknąć",
        "en": "touch",
        "gr": "άγγιγμα",
        "es": "tocar",
        "fr": "toucher",
        "it": "toccare",
        "de": "berühren"
    },
    {
        "pl": "puszysty",
        "en": "fluffy",
        "gr": "χνουδωτό",
        "es": "mullido",
        "fr": "moelleux",
        "it": "soffice",
        "de": "flauschig"
    },
    {
        "pl": "krąg",
        "en": "circle",
        "gr": "κύκλος",
        "es": "círculo",
        "fr": "cercle",
        "it": "cerchio",
        "de": "der Kreis"
    },
    {
        "pl": "przerazić",
        "en": "terrify",
        "gr": "τρομάζω",
        "es": "aterrorizar",
        "fr": "terrifier",
        "it": "terrificare",
        "de": "schreken"
    },
    {
        "pl": "schludny",
        "en": "neat",
        "gr": "νοικοκυρεμένος",
        "es": "ordenado",
        "fr": "ordonner",
        "it": "pulito",
        "de": "ordentlich"
    },
    {
        "pl": "marudny",
        "en": "fretful",
        "gr": "ευέξαπτος",
        "es": "irritable",
        "fr": "rechigné",
        "it": "irritabile",
        "de": "genervt"
    },
    {
        "pl": "róża",
        "en": "rose",
        "gr": "τριαντάφυλλο",
        "es": "rosa",
        "fr": "rose",
        "it": "rosa",
        "de": "die Rose"
    },
    {
        "pl": "zwycięzca",
        "en": "achiever",
        "gr": "κατορθωτής",
        "es": "cumplidor",
        "fr": "doué",
        "it": "persona di successo",
        "de": "der Erfolgstyp"
    },
    {
        "pl": "uleczyć",
        "en": "cure",
        "gr": "θεραπεία",
        "es": "cura",
        "fr": "soin",
        "it": "cura",
        "de": "das Heilmittel"
    },
    {
        "pl": "zwycięski",
        "en": "victorious",
        "gr": "νικηφόρο",
        "es": "victorioso",
        "fr": "victorieux",
        "it": "vittorioso",
        "de": "siegreich"
    },
    {
        "pl": "pas",
        "en": "strip",
        "gr": "λωρίδα",
        "es": "tira",
        "fr": "banda",
        "it": "striscia",
        "de": "abschneiden"
    },
    {
        "pl": "pasta",
        "en": "paste",
        "gr": "πάστα",
        "es": "pasta",
        "fr": "pâte",
        "it": "incolla",
        "de": "kleben"
    },
    {
        "pl": "pokonany",
        "en": "defeated",
        "gr": "νικημένος",
        "es": "derrotado",
        "fr": "vaincu",
        "it": "sconfitto",
        "de": "abgeschlagen"
    },
    {
        "pl": "usunąć",
        "en": "remove",
        "gr": "αφαιρώ",
        "es": "quitar",
        "fr": "retirer",
        "it": "rimuovere",
        "de": "entfernen"
    },
    {
        "pl": "czapka",
        "en": "cap",
        "gr": "καπάκι",
        "es": "tapa",
        "fr": "capsule",
        "it": "tappo",
        "de": "die Mütze"
    },
    {
        "pl": "rowery",
        "en": "bikes",
        "gr": "ποδήλατα",
        "es": "bicicletas",
        "fr": "bicyclettes",
        "it": "bici",
        "de": "die Fahrräder"
    },
    {
        "pl": "obiad",
        "en": "lunch",
        "gr": "μεσημεριανό",
        "es": "almuerzo",
        "fr": "déjeuner",
        "it": "pranzo",
        "de": "das Mittagessen"
    },
    {
        "pl": "przygotować",
        "en": "prepare",
        "gr": "προετοιμάζω",
        "es": "preparar",
        "fr": "préparer",
        "it": "preparare",
        "de": "vorbereiten"
    },
    {
        "pl": "stopień",
        "en": "degree",
        "gr": "βαθμός",
        "es": "grado",
        "fr": "mesure",
        "it": "laurea",
        "de": "der Grad"
    },
    {
        "pl": "śruba",
        "en": "screw",
        "gr": "βίδα",
        "es": "tornillo",
        "fr": "vis",
        "it": "avvitare",
        "de": "die Schraube"
    },
    {
        "pl": "dobrze sytuowany",
        "en": "well-to-do",
        "gr": "εύπορος",
        "es": "adinerado",
        "fr": "aisé",
        "it": "benestante",
        "de": "wohlhabend"
    },
    {
        "pl": "koń",
        "en": "horse",
        "gr": "άλογο",
        "es": "caballo",
        "fr": "cheval",
        "it": "cavallo",
        "de": "das Pferd"
    },
    {
        "pl": "but",
        "en": "boot",
        "gr": "μπότα",
        "es": "bota",
        "fr": "botte",
        "it": "stivale",
        "de": "der Kofferraum"
    },
    {
        "pl": "dywan",
        "en": "carpet",
        "gr": "χαλί",
        "es": "alfombra",
        "fr": "tapis",
        "it": "tappeto",
        "de": "der Teppich"
    },
    {
        "pl": "pociągi",
        "en": "trains",
        "gr": "τρένα",
        "es": "trenes",
        "fr": "trains",
        "it": "treni",
        "de": "die Züge"
    },
    {
        "pl": "przypuszczać",
        "en": "suppose",
        "gr": "υποθέτω",
        "es": "suponer",
        "fr": "supposer",
        "it": "supporre",
        "de": "vermuten"
    },
    {
        "pl": "stolarz",
        "en": "carpenter",
        "gr": "ξυλουργός",
        "es": "carpintero",
        "fr": "charpentier",
        "it": "falegname",
        "de": "der Zimmermann"
    },
    {
        "pl": "kawałek",
        "en": "bit",
        "gr": "κομμάτι",
        "es": "poco",
        "fr": "peu",
        "it": "pezzetto",
        "de": "ein bisschen"
    },
    {
        "pl": "zgniły",
        "en": "rotten",
        "gr": "σάπιο",
        "es": "podrido",
        "fr": "pourri",
        "it": "marcio",
        "de": "morsch"
    },
    {
        "pl": "drobna",
        "en": "petite",
        "gr": "μικροκαμωμένο",
        "es": "chiquita",
        "fr": "petite",
        "it": "minuto",
        "de": "kleine"
    },
    {
        "pl": "droga",
        "en": "road",
        "gr": "δρόμος",
        "es": "carretera",
        "fr": "route",
        "it": "strada",
        "de": "die Straße"
    },
    {
        "pl": "bomba",
        "en": "bomb",
        "gr": "βόμβα",
        "es": "bomba",
        "fr": "bombe",
        "it": "bomba",
        "de": "die Bombe"
    },
    {
        "pl": "wstyd",
        "en": "shame",
        "gr": "ντροπή",
        "es": "vergüenza",
        "fr": "honte",
        "it": "vergogna",
        "de": "die Scham"
    },
    {
        "pl": "klaps, policzkować",
        "en": "slap",
        "gr": "σφαλιάρα",
        "es": "bofetada",
        "fr": "gifle",
        "it": "schiaffo",
        "de": "schlagen"
    },
    {
        "pl": "przestępstwo",
        "en": "crime",
        "gr": "έγκλημα",
        "es": "crimen",
        "fr": "crime",
        "it": "crimine",
        "de": "die Kriminalität"
    },
    {
        "pl": "lizać",
        "en": "lick",
        "gr": "γλείψιμο",
        "es": "lamer",
        "fr": "lécher",
        "it": "leccare",
        "de": "lecken"
    },
    {
        "pl": "dwuznaczny",
        "en": "ambiguous",
        "gr": "διφορούμενος",
        "es": "ambiguo",
        "fr": "ambigu",
        "it": "ambiguo",
        "de": "mehrdeutig"
    },
    {
        "pl": "ryzyko",
        "en": "risk",
        "gr": "ρίσκο",
        "es": "riesgo",
        "fr": "risque",
        "it": "rischio",
        "de": "das Risiko"
    },
    {
        "pl": "powódź",
        "en": "flood",
        "gr": "πλημμύρα",
        "es": "inundación",
        "fr": "innondation",
        "it": "allagamento",
        "de": "die Flut"
    },
    {
        "pl": "łuskowaty",
        "en": "flaky",
        "gr": "εύθρυπτο",
        "es": "escamoso",
        "fr": "friable",
        "it": "friabile",
        "de": "flockig"
    },
    {
        "pl": "skąpy",
        "en": "stingy",
        "gr": "τσιγκούνης",
        "es": "tacaño",
        "fr": "avare",
        "it": "avaro",
        "de": "geizig"
    },
    {
        "pl": "wdzięczny",
        "en": "graceful",
        "gr": "ευχάριστος",
        "es": "agraciado",
        "fr": "élégant",
        "it": "aggraziato",
        "de": "graziös"
    },
    {
        "pl": "żonglować",
        "en": "juggle",
        "gr": "ταχυδακτυλουργία",
        "es": "hacer juegos malabares",
        "fr": "jongler",
        "it": "fare il giocoliere",
        "de": "jonglieren"
    },
    {
        "pl": "oddzielny",
        "en": "separate",
        "gr": "ξεχωριστό",
        "es": "separar",
        "fr": "séparer",
        "it": "separare",
        "de": "trennen"
    },
    {
        "pl": "miejsce",
        "en": "spot",
        "gr": "σημείο",
        "es": "lugar",
        "fr": "endroit",
        "it": "punto",
        "de": "der Fleck"
    },
    {
        "pl": "wymiana",
        "en": "exchange",
        "gr": "ανταλλαγή",
        "es": "intercambio",
        "fr": "échanger",
        "it": "scambio",
        "de": "der Austauch"
    },
    {
        "pl": "mecz",
        "en": "match",
        "gr": "αγώνας",
        "es": "cerilla",
        "fr": "allumette",
        "it": "partita",
        "de": "das Spiel"
    },
    {
        "pl": "rejestr",
        "en": "record",
        "gr": "ρεκόρ",
        "es": "registro",
        "fr": "registre",
        "it": "primato",
        "de": "der Rekord"
    },
    {
        "pl": "przeszłość",
        "en": "past",
        "gr": "παρελθόν",
        "es": "pasado",
        "fr": "passé",
        "it": "passato",
        "de": "die Vergangenheit"
    },
    {
        "pl": "piosenki",
        "en": "songs",
        "gr": "τραγούδια",
        "es": "canciones",
        "fr": "chansons",
        "it": "canzoni",
        "de": "die Lieder"
    },
    {
        "pl": "śmiech",
        "en": "laugh",
        "gr": "γέλιο",
        "es": "risa",
        "fr": "rire",
        "it": "ridere",
        "de": "lachen"
    },
    {
        "pl": "kwiat",
        "en": "flower",
        "gr": "λουλούδι",
        "es": "flor",
        "fr": "fleur",
        "it": "fiore",
        "de": "die Blume"
    },
    {
        "pl": "psychodeliczny",
        "en": "psychedelic",
        "gr": "ψυχεδελικό",
        "es": "psicodélico",
        "fr": "psychédélique",
        "it": "psichedelico",
        "de": "psychedelisch"
    },
    {
        "pl": "piękny",
        "en": "beautiful",
        "gr": "όμορφο",
        "es": "hermoso",
        "fr": "beau",
        "it": "bellissimo",
        "de": "wunderschön"
    },
    {
        "pl": "biec truchtem",
        "en": "jog",
        "gr": "τζόκινγκ",
        "es": "sacudir",
        "fr": "donner un coup",
        "it": "correre",
        "de": "joggen"
    },
    {
        "pl": "prawdopodobny",
        "en": "probable",
        "gr": "πιθανός",
        "es": "probable",
        "fr": "probable",
        "it": "probabile",
        "de": "wahrscheinlich"
    },
    {
        "pl": "deszcz",
        "en": "rain",
        "gr": "βροχή",
        "es": "lluvia",
        "fr": "pluie",
        "it": "pioggia",
        "de": "regnen"
    },
    {
        "pl": "domy",
        "en": "houses",
        "gr": "σπίτια",
        "es": "casas",
        "fr": "maisons",
        "it": "case",
        "de": "die Häuser"
    },
    {
        "pl": "ból, owrzodzenie",
        "en": "sore",
        "gr": "πληγή",
        "es": "doloroso",
        "fr": "enfdolori",
        "it": "indolenzito",
        "de": "schmerzhaft"
    },
    {
        "pl": "grzmiący",
        "en": "thundering",
        "gr": "βροντή",
        "es": "tremendo",
        "fr": "tonitruant",
        "it": "fragoroso",
        "de": "donnernd"
    },
    {
        "pl": "prześwietny",
        "en": "splendid",
        "gr": "υπέροχο",
        "es": "espléndido",
        "fr": "splendide",
        "it": "splendido",
        "de": "großartig"
    },
    {
        "pl": "orzechowy",
        "en": "nutty",
        "gr": "σκληρό καρύδι",
        "es": "loco",
        "fr": "fou",
        "it": "eccentrico",
        "de": "nussartig"
    },
    {
        "pl": "drakońskie",
        "en": "draconian",
        "gr": "δρακόντεια",
        "es": "draconiano",
        "fr": "draconien",
        "it": "draconiano",
        "de": "drakonisch"
    },
    {
        "pl": "automatyczny",
        "en": "automatic",
        "gr": "αυτόματο",
        "es": "automático",
        "fr": "automatique",
        "it": "automatico",
        "de": "automatisch"
    },
    {
        "pl": "chwiejny",
        "en": "shaky",
        "gr": "τρεμώδες",
        "es": "tambaleante",
        "fr": "tremblant",
        "it": "tremulo",
        "de": "zitternd"
    },
    {
        "pl": "zrzędliwy",
        "en": "grouchy",
        "gr": "γκρινιάρης",
        "es": "malhumorado",
        "fr": "grognon",
        "it": "burbero",
        "de": "grantig"
    },
    {
        "pl": "mieć na celu",
        "en": "purpose",
        "gr": "σκοπός",
        "es": "propósito",
        "fr": "objectif",
        "it": "scopo",
        "de": "der Zweck"
    }]

}
return window.db = db;

})();