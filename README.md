# BOB 2

Das Spiel mit Bob – als richtiges Desktop-Spiel für Windows, mit automatischen Updates.

## Spielen

1. Unter **Releases** (rechts auf der GitHub-Seite) die neueste Version öffnen.
2. `BOB-2-Setup-x.y.z.exe` herunterladen und starten.
3. Windows zeigt beim ersten Mal eventuell „Der Computer wurde durch Windows geschützt“. Dann auf **Weitere Informationen → Trotzdem ausführen** klicken (das Spiel ist nicht signiert, das ist normal).

Danach ist BOB 2 im Startmenü und auf dem Desktop.

**Steuerung:** WASD oder Pfeiltasten laufen · Shift rennen · E reden / Bus nehmen / Kleiderschrank / Schlafen / Arbeiten · H Handy (Bauen, Bank, Jobs) · B bauen (im Haus) · R Möbel drehen · F11 Vollbild

## Updates

Das Spiel schaut beim Start (und jede Stunde) nach, ob es eine neue Version gibt. Wenn ja, lädt es sie im Hintergrund und fragt dann, ob es neu starten soll. Spielstand, Möbel, Tiere und Kleidung bleiben erhalten.

### Neues Update veröffentlichen

1. Spiel in `game/index.html` ändern.
2. In `package.json` die `version` erhöhen, z. B. `1.0.0` → `1.0.1`.
3. Commit machen und auf `main` hochladen.
4. GitHub baut den Installer automatisch (Reiter **Actions**, dauert ein paar Minuten) und legt das Release `v1.0.1` an. Alle installierten Spiele bekommen das Update dann von selbst.

Wird hochgeladen, ohne die Version zu erhöhen, baut GitHub nichts Neues.

## Selbst starten (für Entwickler)

```
npm install
npm start
```
