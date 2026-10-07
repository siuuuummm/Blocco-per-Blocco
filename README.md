# Blocco per Blocco

**[Italiano](#italiano) · [English](#english)**

---

## Italiano

Guide gratuite per costruire in Minecraft (Java Edition), un livello alla volta.

> **Progetto amatoriale, fatto con l'intelligenza artificiale per puro divertimento e hobby.**
> Il codice è stato scritto quasi interamente con l'aiuto dell'IA. Io ho deciso cosa costruire e l'ho provato in gioco.
> Non è un prodotto professionale: usalo, modificalo e segnala i problemi, ma senza garanzie.

### Lingua

L'app è in **italiano e inglese**. Sceglie da sola la lingua del browser; puoi cambiarla in qualsiasi momento con i pulsanti **IT / EN** in alto. La scelta viene ricordata.

Il manuale PDF, il file LEGGIMI e i messaggi del data pack in gioco usano la lingua attiva nel momento in cui li scarichi.

### Cosa fa

- **Libreria di 22 costruzioni**: case, torri, castelli, fattorie e decorazioni, con stili di materiali da cambiare con un clic.
- **Importazione di file di struttura**: `.schem` (WorldEdit), `.litematic` (Litematica) e `.nbt` (blocco struttura), comprese le versioni 26.x.
  Se il file contiene anche il terreno (terra, pietra, minerali), l'app lo esclude da sola: quei blocchi non hanno fantasma e non contano nei materiali. Puoi rimetterli o escludere a mano qualsiasi altro materiale. Se la costruzione va sotto terra, il fantasma parte dal numero giusto di blocchi sotto i tuoi piedi.
- **Per ogni costruzione**:
  - modello 3D da ruotare;
  - griglia vista dall'alto per ogni livello;
  - materiali del livello e totali, contati come oggetti da avere (una porta è una porta, non due blocchi) e con i posti nell'inventario;
  - checklist dei livelli.
- **Manuale PDF** con una pagina per livello.
- **Esportazione** in `.litematic`, `.schem` e `.nbt`.
- **Fantasma in gioco senza mod**: un data pack mostra i blocchi del livello come piccoli fantasmi luminosi. Ogni fantasma sparisce quando piazzi il blocco giusto. Si cambia livello con i comandi oppure con il tasto destro tenendo in mano una carota su un bastone (avanti) o un fungo distorto su un bastone (indietro).
  - Se piazzi il blocco sbagliato il fantasma diventa **rosso** e sullo schermo leggi quale blocco va lì. Se il blocco è giusto ma girato in un altro modo (una scala al contrario, un tronco coricato) diventa **arancione**.
  - **Materiali in gioco**: a ogni livello la chat ti dice cosa serve; con un comando vedi l'elenco completo o cosa manca ancora. I nomi dei blocchi sono nella lingua del gioco.
- **Telecomando dal telefono**: apri la stessa pagina sul telefono, inserisci il codice di 6 cifre mostrato sul PC e cambi livello da lì.
- **Texture vere** (facoltative): l'app le legge dal file `.jar` del gioco che possiedi o da un resource pack. Le texture non sono incluse nel progetto.

### Come si usa

Apri `index.html` in un browser recente: non c'è niente da installare.

#### Fantasma in gioco (vanilla, Java 1.19.4 o successiva)

1. Nell'app scegli una costruzione e premi **Fantasma vanilla (data pack)**.
2. Copia il file `.zip`, senza estrarlo, in `.minecraft/saves/<mondo>/datapacks/`. Se il mondo è aperto, scrivi `/reload`.
3. Mettiti dove vuoi l'angolo della costruzione e scrivi `/function bpb_<nome>:start`. La costruzione si estende verso est (+X) e verso sud (+Z).
4. Usa `/function bpb_<nome>:attrezzi` per ricevere gli oggetti che cambiano livello con il tasto destro.
5. Gli altri comandi:
   - `:next` e `:prev` cambiano livello;
   - `:all` mostra tutti i livelli insieme;
   - `:show` torna al livello corrente;
   - `:clear` toglie il fantasma;
   - `:materiali` elenca i materiali di tutta la costruzione, con i posti nell'inventario;
   - `:mancano` dice cosa manca ancora nel fantasma acceso.

   Da accovacciato, il tasto destro con la carota equivale a `:mancano` e quello con il fungo a `:materiali`.

Servono i comandi attivi: trucchi attivi in singolo giocatore, oppure permessi da operatore su un server.

#### Con Litematica

Lo zip **File struttura** contiene il file `.litematic`. Copialo nella cartella `schematics` del gioco o del modpack e aprilo dal menu di Litematica.

### Pubblicarlo su GitHub Pages

1. Crea un repository su GitHub e carica `index.html`, `README.md` e `LICENSE`.
2. Vai in **Settings → Pages**, scegli **Deploy from a branch**, il ramo `main` e la cartella `/ (root)`, poi salva.
3. Dopo qualche minuto il sito è online all'indirizzo `https://<tuo-utente>.github.io/<nome-repository>/`.

### Privacy e servizi esterni

L'app non ha un server e non raccoglie dati: file importati, texture e progressi restano nel browser.

La pagina carica dall'esterno:
- **librerie**: three.js e jsPDF da cdnjs e jsDelivr, PeerJS da jsDelivr;
- **caratteri**: da Google Fonts.

Il telecomando usa il server pubblico gratuito di PeerJS solo per mettere in contatto PC e telefono. Poi i dati passano direttamente tra i due dispositivi.

### Limiti noti

- Le versioni di Minecraft prima della 1.13 e il vecchio formato `.schematic` non sono supportati.
- Il fantasma vanilla si estende sempre verso est e verso sud: non si può ruotare.
- Bauli, letti e cartelli sono disegnati in modo semplificato.
- Il telecomando comanda la pagina, non il gioco.

### Responsabilità

Il progetto è fornito **così com'è, senza garanzie di alcun tipo**. L'autore non è responsabile di usi impropri, di danni o di problemi derivanti dal suo utilizzo, compresi danni ai mondi di gioco.

**Fai sempre una copia di backup del mondo prima di aggiungere un data pack.**

### Licenza

[MIT](LICENSE) © 2026 Filippo Bonino: puoi usarlo, modificarlo e ridistribuirlo liberamente, mantenendo l'avviso di copyright.

Librerie usate: [three.js](https://threejs.org/) (MIT), [jsPDF](https://github.com/parallax/jsPDF) (MIT), [PeerJS](https://peerjs.com/) (MIT).

---

## English

Free, layer-by-layer building guides for Minecraft (Java Edition).

> **A hobby project, made with AI purely for fun.**
> The code was written almost entirely with the help of AI. I decided what to build and tested it in game.
> It is not a professional product: use it, change it and report problems, but without any warranty.

### Language

The app is available in **Italian and English**. It picks your browser's language automatically, and you can switch at any time with the **IT / EN** buttons at the top. Your choice is remembered.

The PDF manual, the README file inside the downloads and the in-game data pack messages use the language that is active when you download them.

### Features

- **Library of 22 builds**: houses, towers, castles, farms and decorations, with material styles you can swap with one click.
- **Structure file import**: `.schem` (WorldEdit), `.litematic` (Litematica) and `.nbt` (structure block), including 26.x versions.
  If the file also contains the terrain (dirt, stone, ores), the app excludes it automatically: those blocks get no ghost and are not counted in materials. You can bring them back or exclude any other material by hand. If the build goes underground, the ghost starts the right number of blocks below your feet.
- **For every build**:
  - a 3D model you can rotate;
  - a top-down grid for each layer;
  - materials per layer and in total, counted as items to carry (a door is one door, not two blocks) and with inventory slots;
  - a layer checklist.
- **PDF manual** with one page per layer.
- **Export** to `.litematic`, `.schem` and `.nbt`.
- **In-game ghost blocks without mods**: a data pack shows the blocks of the current layer as small glowing ghosts. Each ghost disappears when you place the right block. Change layers with commands, or by right-clicking while holding a carrot on a stick (next) or a warped fungus on a stick (previous).
  - If you place the wrong block the ghost turns **red** and the screen tells you which block goes there. If the block is right but turned a different way (upside-down stairs, a log on its side) it turns **orange**.
  - **Materials in game**: at each layer the chat tells you what you need; one command shows the full list or what is still missing. Block names are in the game's language.
- **Phone remote**: open the same page on your phone, enter the 6-digit code shown on your PC and change layers from there.
- **Real textures** (optional): the app reads them from your own copy of the game's `.jar` file or from a resource pack. No textures are included in the project.

### How to use it

Open `index.html` in a recent browser: there is nothing to install.

#### In-game ghost (vanilla, Java 1.19.4 or later)

1. In the app, pick a build and press **Vanilla ghost (data pack)**.
2. Copy the `.zip` file, without extracting it, into `.minecraft/saves/<world>/datapacks/`. If the world is open, type `/reload`.
3. Stand where you want the corner of the build and type `/function bpb_<name>:start`. The build extends east (+X) and south (+Z).
4. Use `/function bpb_<name>:attrezzi` to get the items that change layers with right-click.
5. Other commands:
   - `:next` and `:prev` change layer;
   - `:all` shows all layers at once;
   - `:show` goes back to the current layer;
   - `:clear` removes the ghost;
   - `:materiali` lists the materials for the whole build, with inventory slots;
   - `:mancano` tells you what is still missing in the ghost shown.

   While sneaking, right-clicking with the carrot works like `:mancano` and with the fungus like `:materiali`.

The exact `bpb_<name>` is shown in the app after the download and in chat when the pack loads. Commands must be enabled: cheats on in single player, or operator permissions on a server.

#### With Litematica

The **Structure files** zip contains the `.litematic` file. Copy it into the `schematics` folder of your game or modpack and open it from the Litematica menu.

### Publishing on GitHub Pages

1. Create a GitHub repository and upload `index.html`, `README.md` and `LICENSE`.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main` and folder `/ (root)`, then save.
3. After a few minutes the site is online at `https://<your-user>.github.io/<repository-name>/`.

### Privacy and external services

The app has no server and collects no data: imported files, textures and progress stay in your browser.

The page loads from outside:
- **libraries**: three.js and jsPDF from cdnjs and jsDelivr, PeerJS from jsDelivr;
- **fonts**: from Google Fonts.

The phone remote uses the free public PeerJS server only to connect your PC and phone. After that, data goes directly between the two devices.

### Known limits

- Minecraft versions before 1.13 and the old `.schematic` format are not supported.
- The vanilla ghost always extends east and south: it cannot be rotated.
- Chests, beds and signs are drawn in a simplified way.
- The remote controls the page, not the game.

### Liability

The project is provided **as is, without warranty of any kind**. The author is not responsible for misuse, damage or problems arising from its use, including damage to game worlds.

**Always back up your world before adding a data pack.**

### License

[MIT](LICENSE) © 2026 Filippo Bonino: you are free to use, modify and redistribute it, as long as you keep the copyright notice.

Libraries used: [three.js](https://threejs.org/) (MIT), [jsPDF](https://github.com/parallax/jsPDF) (MIT), [PeerJS](https://peerjs.com/) (MIT).

---

**NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.**

Non è un prodotto ufficiale di Minecraft e non è approvato né associato a Mojang o Microsoft. Minecraft, il suo nome, il marchio e i contenuti del gioco appartengono a Mojang AB e Microsoft: tutti i diritti su di essi restano loro. Questo progetto non contiene texture né altri contenuti del gioco.

Minecraft, its name, brand and game content belong to Mojang AB and Microsoft, and all rights to them remain theirs. This project contains no textures or other game content.
