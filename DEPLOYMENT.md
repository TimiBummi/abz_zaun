# Deployment Anleitung für abz-zaun.de

Dieses Dokument beschreibt die Einrichtung der automatisierten Deployment-Pipeline mit GitHub Actions, Sanity CMS und All-Inkl Hosting.

## Übersicht

Die Pipeline funktioniert wie folgt:
1. Änderungen im Sanity CMS triggern ein Webhook
2. GitHub Actions baut die Website neu (`next build`)
3. Die Static-Export-Dateien werden per rsync zu All-Inkl hochgeladen
4. Website ist live

---

## 1. GitHub Secrets einrichten

Öffne dein GitHub Repository und navigiere zu **Settings → Secrets and variables → Actions**.

Klicke auf **New repository secret** und füge diese 5 Secrets hinzu:

### a) `SANITY_PROJECT_ID`
- **Wert**: Deine Sanity Project ID
- **Wie man das findet**: 
  - Gehe zu [sanity.io/manage](https://sanity.io/manage)
  - Öffne das Projekt "abz-zaun"
  - Kopiere die **Project ID** (z.B. `abc123def456`)

### b) `DEPLOY_HOST`
- **Wert**: SSH Hostname von All-Inkl
- **Wie man das findet**:
  - Melde dich im KAS Panel an (All-Inkl Kundenkontrollzentrum)
  - Gehe zu **Mein Hosting** → deine Domain/Webspace
  - Suche nach **SSH-Zugangsdaten** oder **Serverinformation**
  - Kopiere den **Hostnamen** (z.B. `w00xxxxx.kasserver.com`)

### c) `DEPLOY_USER`
- **Wert**: SSH Benutzername von All-Inkl
- **Wie man das findet**: 
  - Im KAS Panel unter **SSH-Zugangsdaten**
  - Der Benutzername ist normalerweise im Format `w00xxxxx`

### d) `DEPLOY_KEY`
- **Wert**: SSH Private Key für GitHub Actions
- **Wie man das generiert**:
  ```bash
  ssh-keygen -t ed25519 -C "github-actions"
  ```
  - Drücke Enter bei allen Fragen (keine Passphrase nötig)
  - Die Datei wird zu `~/.ssh/id_ed25519` gespeichert
  - Öffne `~/.ssh/id_ed25519` und kopiere den **gesamten Private Key** (inklusive `-----BEGIN PRIVATE KEY-----` und `-----END PRIVATE KEY-----`)
  - Passendes Public Key im KAS Panel hochladen:
    - Im KAS Panel nach **SSH Key Management** oder **Authorized Keys** suchen
    - Öffne `~/.ssh/id_ed25519.pub` und kopiere den Public Key
    - Füge ihn in der All-Inkl KAS Panel ein

### e) `DEPLOY_PATH`
- **Wert**: Absoluter Pfad zur Website auf dem Server
- **Format**: `/www/htdocs/w00xxxxx/abz-zaun.de/` oder `/www/htdocs/w00xxxxx/html/`
- **Wie man das findet**:
  - Im KAS Panel unter **Mein Webspace** → deine Domain
  - Notiere den **Dokumentroot** oder **Webroot-Verzeichnis**
  - Falls nicht klar, kontaktiere [All-Inkl Support](https://www.all-inkl.com/support/)

---

## 2. Sanity Webhook einrichten

Der Webhook teilt GitHub mit, wenn neue Inhalte im CMS veröffentlicht werden.

### Schritt-für-Schritt:

1. Gehe zu [Sanity Manage](https://sanity.io/manage) → Projekt "abz-zaun"
2. Klicke auf **API** → **Webhooks**
3. Klicke **Add webhook**
4. Fülle folgendes aus:

   | Feld | Wert |
   |------|------|
   | **URL** | `https://api.github.com/repos/TimiBummi/abz_zaun/dispatches` |
   | **HTTP method** | `POST` |
   | **Trigger on** | `Document publish` + `Document unpublish` |

5. Klicke auf **Add header** und füge hinzu:
   - **Key**: `Authorization`
   - **Value**: `Bearer <dein-github-pat>`
   
   (Weitere Details zum Personal Access Token siehe "GitHub PAT erstellen" unten)

6. Klicke auf **Add header** und füge hinzu:
   - **Key**: `Content-Type`
   - **Value**: `application/json`

7. Im **Body**-Bereich (falls vorhanden), setze:
   ```json
   {"event_type": "sanity-webhook"}
   ```

8. Speichern und **Test** klicken

### GitHub PAT erstellen (für Sanity Webhook):

1. Gehe zu GitHub → **Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Klicke **Generate new token (classic)**
3. Gib einen Namen ein (z.B. "Sanity Webhook")
4. Wähle nur **repo** Scope
5. Kopiere den Token und speichere ihn sicher (nur einmalig sichtbar!)
6. Nutze ihn im Sanity Webhook als `Authorization: Bearer <token>`

---

## 3. First Deploy testen

Jetzt kannst du das erste Deployment manuell auslösen, um zu prüfen, dass alles funktioniert.

### GitHub Actions manuell triggern:

1. Gehe zu GitHub → **Actions** Tab
2. Wähle den Workflow **"Build and Deploy"** in der linken Sidebar
3. Klicke den Button **"Run workflow"** → **"Run workflow"**
4. Warte, bis der Workflow durchläuft
5. Prüfe das Ergebnis:
   - Grün = erfolgreich, Website ist live
   - Rot = Fehler, prüfe die Logs für Details

Falls Fehler auftreten, kontrolliere:
- SSH Keys sind korrekt konfiguriert (besonders `DEPLOY_KEY`)
- Alle Secrets sind vollständig eingegeben
- Der `DEPLOY_PATH` ist korrekt

---

## 4. PHP Form Handler hochladen

Der Form Handler für Kontaktformulare wird **nicht** automatisch deployed (er wird von rsync ausgeschlossen). Das verhindert, dass custom Einstellungen überschrieben werden.

### Einmalig hochladen:

1. Öffne `public/form-handler.php` im Projekt
2. Überprüfe die **E-Mail-Adresse** am Anfang:
   ```php
   $recipient = 'info@abz-zaun.de';
   ```
   Ändere diese falls nötig zu einer anderen Adresse.

3. Lade die Datei manuell zu All-Inkl hoch:
   - Per SFTP-Client (z.B. FileZilla):
     - Host: `w00xxxxx.kasserver.com`
     - Benutzername: dein SSH-Benutzername
     - Passwort: dein All-Inkl Passwort
     - Remote Pfad: `/www/htdocs/w00xxxxx/abz-zaun.de/form-handler.php`
   - Oder über das All-Inkl Dateimanager (KAS Panel)

4. Speichere und teste über das Kontaktformular auf der Website

---

## Troubleshooting

| Problem | Lösung |
|---------|--------|
| **Workflow fehlgeschlagen mit SSH Fehler** | Prüfe `DEPLOY_KEY`, `DEPLOY_HOST`, `DEPLOY_USER` und `DEPLOY_PATH` |
| **Website zeigt alte Inhalte** | Cache leeren (Strg+Shift+Entf), evtl. `.htaccess` Caching-Rules prüfen |
| **Sanity Webhook wird nicht getriggert** | Überprüfe, ob alle Header und Body korrekt im Webhook konfiguriert sind |
| **Form funktioniert nicht** | Prüfe, ob `form-handler.php` im richtigen Verzeichnis und die E-Mail korrekt ist |
| **Deploy dauert sehr lange** | Abhängig von der Dateigröße und Verbindung; kann 2-5 Min. dauern |

---

## Support Kontakte

- **All-Inkl Support**: https://www.all-inkl.com/support/
- **Sanity Docs**: https://www.sanity.io/docs
- **GitHub Actions Docs**: https://docs.github.com/en/actions

---

*Zuletzt aktualisiert: März 2026*
