# Blocco per Blocco

**[Italiano](#italiano) · [English](#english)**

---

## Italiano

Guide gratuite per costruire in Minecraft (Java Edition), un livello alla volta.

> **Progetto amatoriale, fatto con l'intelligenza artificiale per puro divertimento e hobby.**
> Usalo, modificalo e segnala i problemi, ma senza garanzie.

### Lingua

L'app è in **italiano e inglese**.

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
- **Fantasma in gioco senza mod**: un data pack mostra i blocchi del livello come piccoli fantasmi luminosi. Ogni fantasma sparisce quando piazzi il blocco giusto.
  - **Scegli dove costruire guardando**: una scatola gialla grande quanto la costruzione, con dentro l'anteprima della costruzione finita, segue il blocco che guardi. Tasto destro: la giri di 90°. Tasto sinistro: la metti lì.
  - **Pulsanti in chat**: sotto ogni livello trovi Indietro, Avanti, Misure, Mancano, Materiali, Tutto, Sposta, Ruota e Togli. Non serve scrivere comandi.
  - Se piazzi il blocco sbagliato il fantasma diventa **rosso** e sullo schermo leggi quale blocco va lì. Se il blocco è giusto ma girato in un altro modo (una scala al contrario, un tronco coricato) diventa **arancione**.
  - Se rompi per sbaglio un blocco giusto, il suo fantasma **ricompare**.
  - **Guide di misura**: contorno del livello, tacche ogni 5 blocchi e centro, per costruire in ordine.
  - **Materiali in gioco**: a ogni livello la chat ti dice cosa serve; con un pulsante vedi l'elenco completo o cosa manca ancora. I nomi dei blocchi sono nella lingua del gioco.
  - Con più costruzioni installate, dopo `/reload` la chat mostra una riga sola con l'elenco da aprire.
- **Telecomando dal telefono**: apri la stessa pagina sul telefono, inserisci il codice di 6 cifre mostrato sul PC e cambi livello da lì.
- **Texture vere** (facoltative): l'app le legge dal file `.jar` del gioco che possiedi o da un resource pack. Le texture non sono incluse nel progetto.

### Come si usa

Apri `index.html` in un browser recente: non c'è niente da installare.

#### Fantasma in gioco (vanilla, Java 1.19.4 o successiva)

1. Nell'app scegli una costruzione e premi **Fantasma vanilla (data pack)**.
2. Copia il file `.zip`, senza estrarlo, in `.minecraft/saves/<mondo>/datapacks/`. Se il mondo è aperto, scrivi `/reload`.
3. Clicca **[▶ Inizia]** nella chat (o scrivi `/function bpb:start`). Guarda il punto dove vuoi l'angolo della costruzione: la scatola gialla e l'anteprima lo seguono. Il **tasto destro** gira la costruzione di 90°, il **tasto sinistro** la mette lì. La costruzione va sempre verso est (+X) e verso sud (+Z) dall'angolo scelto. Con **[Qui ai miei piedi]** la metti dove sei.
4. Compare il fantasma del livello 1. Piazza i blocchi dentro i fantasmi e usa i pulsanti in chat per cambiare livello, accendere le misure, vedere i materiali, spostare, girare o togliere la costruzione.
5. Se preferisci i comandi: `/function bpb:next`, `bpb:prev`, `bpb:show`, `bpb:all`, `bpb:misure`, `bpb:materiali`, `bpb:mancano`, `bpb:sposta`, `bpb:ruota`, `bpb:qui`, `bpb:clear`, `bpb:menu` (rimostra i pulsanti) e `bpb:lista` (tutte le costruzioni installate). Comandano il fantasma acceso per ultimo; ogni costruzione ha anche i suoi comandi `bpb_<nome>:…`.

Per i comandi servono i trucchi attivi in singolo giocatore, oppure i permessi da operatore su un server. I pulsanti in chat funzionano per tutti i giocatori. Online tutti vedono il fantasma e possono costruire insieme.

#### Con Litematica

Lo zip **File struttura** contiene il file `.litematic`. Copialo nella cartella `schematics` del gioco o del modpack e aprilo dal menu di Litematica.

### Privacy e servizi esterni

L'app non ha un server e non raccoglie dati: file importati, texture e progressi restano nel browser.

La pagina carica dall'esterno:
- **librerie**: three.js e jsPDF da cdnjs e jsDelivr, PeerJS da jsDelivr;
- **caratteri**: da Google Fonts.

Il telecomando usa il server pubblico gratuito di PeerJS solo per mettere in contatto PC e telefono.

### Limiti noti

- Le versioni di Minecraft prima della 1.13 e il vecchio formato `.schematic` non sono supportati.
- L'anteprima della costruzione finita si vede fino a 3000 blocchi in vista; oltre, mentre scegli il punto si vede solo la scatola.
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
> Use it, change it and report problems, but without any warranty.

### Language

The app is available in **Italian and English**.

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
- **In-game ghost blocks without mods**: a data pack shows the blocks of the current layer as small glowing ghosts. Each ghost disappears when you place the right block.
  - **Choose where to build by looking**: a yellow box as big as the build, with a preview of the finished build inside, follows the block you look at. Right-click turns it by 90°. Left-click puts it there.
  - **Chat buttons**: under every layer you get Back, Next, Measure, Missing, Materials, All, Move, Turn and Remove. No need to type commands.
  - If you place the wrong block the ghost turns **red** and the screen tells you which block goes there. If the block is right but turned a different way (upside-down stairs, a log on its side) it turns **orange**.
  - If you break a correct block by mistake, its ghost **comes back**.
  - **Measuring guides**: the layer outline, ticks every 5 blocks and the centre, to build neatly.
  - **Materials in game**: at each layer the chat tells you what you need; one button shows the full list or what is still missing. Block names are in the game's language.
  - With several builds installed, after `/reload` the chat shows a single line with a list to open.
- **Phone remote**: open the same page on your phone, enter the 6-digit code shown on your PC and change layers from there.
- **Real textures** (optional): the app reads them from your own copy of the game's `.jar` file or from a resource pack. No textures are included in the project.

### How to use it

Open `index.html` in a recent browser: there is nothing to install.

#### In-game ghost (vanilla, Java 1.19.4 or later)

1. In the app, pick a build and press **Vanilla ghost (data pack)**.
2. Copy the `.zip` file, without extracting it, into `.minecraft/saves/<world>/datapacks/`. If the world is open, type `/reload`.
3. Click **[▶ Start]** in the chat (or type `/function bpb:start`). Look at the spot where you want the corner of the build: the yellow box and the preview follow it. **Right-click** turns the build by 90°, **left-click** puts it there. The build always extends east (+X) and south (+Z) from the chosen corner. **[Here at my feet]** puts it where you stand.
4. The ghost of layer 1 appears. Place blocks inside the ghosts and use the chat buttons to change layer, turn on the measurements, see the materials, or move, turn or remove the build.
5. If you prefer commands: `/function bpb:next`, `bpb:prev`, `bpb:show`, `bpb:all`, `bpb:misure`, `bpb:materiali`, `bpb:mancano`, `bpb:sposta`, `bpb:ruota`, `bpb:qui`, `bpb:clear`, `bpb:menu` (shows the buttons again) and `bpb:lista` (all installed builds). They control the ghost you turned on last; each build also has its own `bpb_<name>:…` commands.

Commands need cheats on in single player, or operator permissions on a server. The chat buttons work for every player. Online, everyone sees the ghost and you can build together.

#### With Litematica

The **Structure files** zip contains the `.litematic` file. Copy it into the `schematics` folder of your game or modpack and open it from the Litematica menu.

### Privacy and external services

The app has no server and collects no data: imported files, textures and progress stay in your browser.

The page loads from outside:
- **libraries**: three.js and jsPDF from cdnjs and jsDelivr, PeerJS from jsDelivr;
- **fonts**: from Google Fonts.

The phone remote uses the free public PeerJS server only to connect your PC and phone. After that, data goes directly between the two devices.

### Known limits

- Minecraft versions before 1.13 and the old `.schematic` format are not supported.
- The preview of the finished build is shown up to 3000 visible blocks; beyond that, only the box is shown while you choose the spot.
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
