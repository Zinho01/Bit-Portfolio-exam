# 📋 Testplan voor Pokédex Webapp

## 🎯 Doel
Het doel van dit testplan is om te controleren of de Pokédex-app correct functioneert, met focus op:
- Het ophalen van data via de API
- De zoekfunctionaliteit
- De werking van knoppen op de gebruikersinterface
- Extra controles voor gebruikerservaring en foutafhandeling

---

## ✅ Functionaliteiten om te testen

### 1. API Fetch
- [ ] Wordt de API correct aangeroepen bij het laden van de pagina?
- [ ] Worden Pokémon-data correct weergegeven (zoals naam, afbeelding, type)?
- [ ] Wat gebeurt er als de API faalt? Wordt er een foutmelding getoond?

### 2. Zoekfunctie
- [ ] Kan de gebruiker zoeken op naam van een Pokémon?
- [ ] Is de zoekfunctie hoofdletterongevoelig (bijv. "Pikachu" en "pikachu" geven hetzelfde resultaat)?
- [ ] Wordt er feedback gegeven als er geen resultaten zijn?
- [ ] Wordt de lijst correct gefilterd bij elke toetsaanslag?

### 3. Front-End Knoppen
- [ ] Werkt de "filter" knop om door de lijst te bladeren?
- [ ] Werkt de "filter" knop correct?
- [ ] Is er visuele feedback bij klikken (bijv. animatie of kleurverandering)?

### 4. UI/UX Testen
- [ ] Is de pagina responsief op mobiel en desktop?
- [ ] Is de laadtijd redelijk bij het ophalen van data?
- [ ] Zijn er laadindicatoren (spinners, loading text) zichtbaar tijdens het ophalen?
- [ ] Zijn foutmeldingen duidelijk en gebruikersvriendelijk?

### 5. Randgevallen
- [ ] Wat gebeurt er als de gebruiker een lege zoekopdracht geeft?
- [ ] Wat als er speciale tekens worden ingevoerd?
- [ ] Wat als de API een leeg resultaat terugstuurt?

---

## 🧪 Testmethodes

- **Handmatig testen:** klik door de interface en voer handmatig zoekopdrachten in.
- **Automatisch testen (optioneel):** met tools zoals Jest en Testing Library.
- **Responsiviteit testen:** met browser devtools (bijv. in Chrome inspecteren op mobiel formaat).

---

## 🧾 Testgegevens

Voorbeelden van Pokémon-namen om te gebruiken:
- Pikachu
- Bulbasaur
- Charizard
- Mewtwo

---

## ✅ Verwacht gedrag

| Actie                       | Verwacht Resultaat                         |
|----------------------------|--------------------------------------------|
| Zoeken naar "pikachu"      | Pikachu verschijnt met correcte info       |
| Klik op "Volgende"         | Volgende reeks Pokémon wordt geladen       |
| API faalt                  | Foutmelding: "Kan data niet ophalen"       |
| Zoekterm zonder resultaat  | Bericht: "Geen Pokémon gevonden"           |

---

## 🧹 Extra aanraders

- Test op verschillende browsers (Chrome, Firefox, Safari).
- Controleer of toegankelijkheid goed is (bijv. met toetsenbordnavigatie).

