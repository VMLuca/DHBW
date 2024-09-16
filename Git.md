# Git

## Einführung in Git und Versionskontrolle

Was ist Git? Ein verteiltes Versionskontrollsystem zur Nachverfolgung von Änderungen im Quellcode.
Warum Versionskontrolle? Ermöglicht die Zusammenarbeit, Rückverfolgung von Änderungen und Wiederherstellung früherer Projektstände.

## Einrichtung von Git in VS Code

Schritte:

- Git installieren: Stellen Sie sicher, dass Git auf dem Computer installiert ist. [Download Git](https://git-scm.com/downloads)
- VS Code installieren: Falls noch nicht geschehen. [Download VS Code](https://code.visualstudio.com/download)
- Git in VS Code integrieren: VS Code erkennt Git automatisch. Prüfen Sie, ob das Git-Symbol in der Seitenleiste erscheint.
- Hinweis: Unter Einstellungen können Sie Ihre Git-Konfiguration anpassen, z.B. Benutzername und E-Mail festlegen.

## Repository

### Ein neues Repository erstellen

Schritte:

- Neues Projekt öffnen: Öffnen Sie den Ordner Ihres Projekts in VS Code.
- Git initialisieren:
  - Klicken Sie auf das Git-Symbol in der Seitenleiste.
  - Klicken Sie auf Repository initialisieren.
- .gitignore erstellen: Fügen Sie eine .gitignore-Datei hinzu, um unerwünschte Dateien auszuschließen.

### Bestehendes Repository klonen

Schritte:

- Repository-URL kopieren: Von Plattformen wie GitHub, GitLab etc.
- Klonen in VS Code:
  - Klicken Sie auf Ansicht > Befehlspalette (oder Ctrl+Shift+P).
  - Geben Sie Git: Klonen ein.
  - Fügen Sie die Repository-URL ein.
  - Wählen Sie den Zielordner aus.

## Dateien verfolgen und Änderungen hinzufügen

Schritte:

- Änderungen vornehmen: Bearbeiten oder erstellen Sie Dateien.
- Änderungen anzeigen:
  - Das Git-Symbol zeigt die Anzahl der Änderungen.
  - Klicken Sie darauf, um Details zu sehen.
- Dateien zum Staging hinzufügen:
  - Klicken Sie auf das + neben der Datei oder auf Alle Änderungen stagen.

## Änderungen committen

Schritte:

- Commit-Nachricht eingeben: Geben Sie eine aussagekräftige Nachricht im Textfeld ein.
- Commit ausführen:
  - Klicken Sie auf den Haken oberhalb des Nachrichtenfeldes.
- Verlauf ansehen: Unter Ansicht > Git-Verlauf können Sie alle Commits einsehen.

## Mit Remote-Repositories arbeiten

Änderungen pushen:

- Remote hinzufügen: Falls noch nicht geschehen (`git remote add origin [URL]` über Terminal).
- Pushen:
  - Klicken Sie auf die Synchronisieren-Schaltfläche (Doppelpfeile) in der Statusleiste.
  - Bestätigen Sie den Push-Vorgang.

Änderungen pullen:

- Klicken Sie auf Synchronisieren oder führen Sie Git: Pull über die Befehlspalette aus.

## Branches erstellen und verwalten

Neuen Branch erstellen:

- Befehlspalette öffnen: Ctrl+Shift+P.
- Git: Branch erstellen eingeben.
- Branch-Namen eingeben und bestätigen.

Branch wechseln:

- Klicken Sie auf den aktuellen Branch-Namen in der Statusleiste und wählen Sie den gewünschten Branch aus.

## Merge-Konflikte lösen

Beim Zusammenführen von Branches:

- Konflikt erkennen: VS Code markiert Konfliktstellen in den Dateien.
- Konflikte bearbeiten:
  - Wählen Sie zwischen "Current Change", "Incoming Change" oder "Both Changes".
- Änderungen speichern und committen: Nachdem alle Konflikte gelöst sind.

## Best Practices und Tipps

- Regelmäßig committen: Häufige Commits mit klaren Nachrichten erleichtern die Nachverfolgung.
- Branches nutzen: Für neue Features oder Änderungen, um den Hauptbranch sauber zu halten.
- Pull vor Push: Aktualisieren Sie Ihr lokales Repository, bevor Sie Änderungen pushen.
- .gitignore pflegen: Halten Sie unerwünschte Dateien aus dem Repository fern.
- Zusammenarbeit fördern: Nutzen Sie Pull Requests und Code Reviews auf Plattformen wie GitHub.
