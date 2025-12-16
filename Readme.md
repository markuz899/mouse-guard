# 🌀 Mouse Circle Guard

Un piccolo tool **Node.js** che muove automaticamente il mouse in modo circolare e **si ferma immediatamente quando l'utente muove il mouse bruscamente** oppure quando viene premuto **ESC**.

Perfetto per:

- evitare l'auto-sleep del sistema
- demo tecniche
- test di input / automazioni leggere
- simulare attività utente

---

## ✨ Funzionalità principali

- 🌀 Movimento del mouse in **cerchio continuo**
- 🛑 **Stop automatico** se l'utente muove il mouse manualmente
- ⌨️ **Stop manuale** premendo `ESC`
- ⚡ Nessuna dipendenza esterna oltre a `robotjs`
- 🖥️ Funziona su macOS (con permessi di Accessibilità)

---

## 🔍 Come funziona

L'applicativo:

1. Legge la **posizione iniziale del mouse**
2. Calcola una traiettoria circolare
3. Muove il mouse a piccoli step usando `robotjs`
4. Ad ogni frame controlla la posizione reale del mouse
5. Se la posizione cambia **oltre una soglia** (movimento brusco manuale), lo script si **ferma immediatamente**

Questo approccio permette di distinguere in modo affidabile:

- movimento automatico (script)
- movimento intenzionale dell'utente

---

## 🧠 Logica di sicurezza

> 🛑 **Appena l'utente riprende il controllo del mouse, lo script si ferma.**

La soglia di rilevamento evita falsi positivi dovuti a micro-movimenti o rounding.

---

## 🚀 Installazione

```bash
npm install
```

⚠️ Su **linux** è necessario lanciare i comandi:

```
sudo apt-get update
sudo apt-get install libx11-dev libxtst-dev libpng++-dev
```

⚠️ Su **macOS** è necessario concedere i permessi di **Accessibilità** al terminale (Terminal / iTerm / VS Code).

Percorso:

```
Impostazioni di Sistema → Privacy e Sicurezza → Accessibilità
```

---

## ▶️ Avvio

```bash
node move.js
```

Output atteso:

```
🌀 Movimento in tondo avviato.
Premi ESC oppure muovi il mouse per fermare.
```

---

## ⛔ Come fermare lo script

- **Premi `ESC`** nel terminale
- **Muovi il mouse bruscamente** in qualsiasi direzione

Entrambi i metodi causano uno stop immediato e sicuro.

---

## ⚙️ Configurazione

All'inizio dello script puoi modificare:

```js
const radius = 150; // raggio del cerchio
const fps = 120; // fluidità del movimento
const seconds = 8; // tempo per un giro completo
```

---

## 📦 Requisiti

- Node.js ≥ 18
- macOS (testato su Apple Silicon)
- Permessi di Accessibilità attivi

---

## 🧩 Possibili estensioni

- modalità zig-zag / random
- accelerazione progressiva
- stop su click del mouse
- GUI minimale
- supporto Windows/Linux

---

## 📄 Licenza

MIT

---

## ❤️ Contributi

PR e idee sono benvenuti!

Se questo progetto ti è stato utile, lascia una ⭐️

```

```
