# SchadenPilot Website – GitHub Pages

Eigenständige, statische Produktwebseite für **SchadenPilot**. Entwickelt mit HTML, CSS und etwas JavaScript. Kein Framework, kein Build-Schritt, keine externen CDNs oder Analytics.

## Wichtig: StromkreisPass bleibt unverändert

Bitte **ein neues GitHub-Repository** mit dem Namen `schadenpilot-website` anlegen. Nichts in `stromkreispass-website` hochladen oder ersetzen. Diese Webseite ist von StromkreisPass vollständig unabhängig.

## Veröffentlichung (einfachster Weg)

1. Bei GitHub mit dem Konto `rhartmuth` anmelden.
2. Unter **New repository** den Namen `schadenpilot-website` vergeben und **Public** auswählen. Keine zusätzlichen README-Dateien beim Erstellen aktivieren, um Konflikte zu vermeiden.
3. Die ZIP-Datei auf dem Mac entpacken.
4. Im neuen Repository **Add file → Upload files** aufrufen und **den Inhalt des Ordners** `schadenpilot-website` hochladen. `index.html` muss im Stammverzeichnis des Repositorys liegen, nicht in einem Unterordner.
5. Unter **Settings → Pages** als Quelle **Deploy from a branch**, Branch **main**, Ordner **/(root)** wählen und speichern.
6. Die Website ist nach erfolgreicher Bereitstellung unter `https://rhartmuth.github.io/schadenpilot-website/` erreichbar. Auch `/start.html` leitet auf die Startseite weiter.

## Inhalt

- `index.html` – komplette Produktwebseite mit echten App-Screenshots
- `start.html` – Weiterleitung zur Startseite
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutzhinweise
- `assets/styles.css` – responsives Design
- `assets/app.js` – mobile Navigation und interaktive Screenshot-Auswahl
- `assets/images/*.webp` – zehn komprimierte Original-Screenshots
- `assets/icons/*` – Logo / Browser- und Homescreen-Symbole
- `sitemap.xml`, `robots.txt` – Grundkonfiguration für Suchmaschinen

## Vor Livegang überprüfen

- Kontaktdaten, insbesondere Telefonnummer und Anschrift, im Impressum und in der Datenschutzerklärung prüfen. Sie wurden anhand der bereits veröffentlichten Angaben auf der StromkreisPass-Webseite übernommen.
- Datenschutzerklärung an den tatsächlichen App- und Website-Funktionsstand anpassen; keine individuelle Rechtsberatung.
- Angaben zu TestFlight und CloudKit bei späterer Produktentwicklung aktualisieren.
- Die Seite bewirbt aktuell **keine öffentlich veröffentlichte App**, sondern eine **Beta-Testphase**. Kein erfundener App-Store-Link.
- Für ein anderes Repository oder eine eigene Domain die absoluten URLs in `index.html`, `robots.txt` und `sitemap.xml` anpassen.

## Lokale Vorschau

Die Datei `index.html` lässt sich direkt im Browser öffnen. Für einen kleinen lokalen Webserver kann im Ordner `schadenpilot-website` beispielsweise `python3 -m http.server 8000` verwendet und `http://localhost:8000` im Browser geöffnet werden.

## Privatsphäre

Die Screenshots stammen aus den bereitgestellten App-Ansichten. Vor einer öffentlichen Veröffentlichung prüfen, ob sichtbare Personen-, Vorgangs- und Adressangaben nur Testdaten enthalten.
