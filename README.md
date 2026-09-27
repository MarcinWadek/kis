# KIS List — testy E2E powiadomień

Repozytorium zawiera testy E2E systemu powiadomień o komentarzach, przygotowane w Playwright i TypeScript. Testy obejmują komentarze klienta do udostępnionej listy i propozycji oraz oznaczenia użytkowników za pomocą `@`.

## Wymagania

- Node.js 20 lub nowszy;
- npm;
- dostęp do aplikacji KIS List;
- pięć kont testowych powiązanych z listą „PROJEKT REKRUTACJA”.

## Instalacja

Po sklonowaniu repozytorium wykonaj:

```bash
npm ci
npx playwright install chromium
```

Następnie ręcznie dostarcz pliki zawierające dane dostępowe i sesje. Nie są one przechowywane w repozytorium ze względów bezpieczeństwa.

## Konfiguracja środowiska

Utwórz w katalogu głównym plik `.env.qa`:

```env
BASE_URL=https://kislist.com
kissMarcinW=administrator@example.com
kissPiotr=piotr@example.com
kissAnna=anna@example.com
kissMichalina=michalina@example.com
kissMarcin=marcin@example.com
kissPassword=haslo-do-kont-testowych
```

Plik `.env.qa` zawiera dane dostępowe i jest ignorowany przez Git. Można utworzyć go ręcznie albo wkleić gotowy plik przekazany osobnym, bezpiecznym kanałem.

Do katalogu `tmp/` należy również wkleić aktualne pliki sesji:

```text
tmp/
├── userSessionMarcinW.json
├── userSessionPiotr.json
├── userSessionAnna.json
├── userSessionMichalina.json
└── userSessionMarcin.json
```

Pliki sesji są ignorowane przez Git i nie należy ich commitować. Jeżeli sesja wygaśnie, odpowiedni plik trzeba wygenerować ponownie.

Domyślnie testy korzystają ze środowiska `qa`. Inne środowisko można wskazać zmienną `TEST_ENV`, np. w PowerShell:

```powershell
$env:TEST_ENV = "staging"
npm test
```

W takim przypadku wymagany jest odpowiadający plik `.env.staging`.

Po przygotowaniu zależności, `.env.qa` i katalogu `tmp/` testy są gotowe do uruchomienia.

## Uruchamianie testów

Cały zestaw:

```bash
npm test
```

Testy z widoczną przeglądarką:

```bash
npm run test:headed
```

Tryb debugowania:

```bash
npm run test:debug
```

Otwarcie raportu HTML po wykonaniu testów:

```bash
npm run test:report
```

Testy tworzą komentarze i powiadomienia w środowisku testowym. Nie należy uruchamiać ich na danych produkcyjnych.

## Struktura projektu

```text
tests/
├── setup/                    # przygotowanie komentarzy i oznaczeń
├── login.spec.ts             # tworzenie sesji użytkowników
├── test-lista.spec.ts        # TC-01–TC-05
├── test-propozycja.spec.ts   # TC-06–TC-10
├── test-tag.spec.ts          # TC-11–TC-15
└── test-data.ts              # dane współdzielone przez testy
```

Konfiguracja projektów i zależności znajduje się w `playwright.config.ts`, a obsługa zmiennych środowiskowych w `env.ts`.

## Raport testerski

### Cel i zakres

Zweryfikowano powiadomienia generowane po:

- komentarzu klienta do udostępnionej listy;
- komentarzu klienta do propozycji;
- oznaczeniu członka zespołu w komentarzu;
- pominięciu użytkownika w oznaczeniach.

Testami objęto administratora Marcina W. oraz członków zespołu: Piotra, Annę, Michalinę i Marcina.

### Środowisko ostatniego wykonania

- aplikacja: KIS List (`https://kislist.com`);
- narzędzie: Playwright + TypeScript;
- przeglądarka: Desktop Chrome;
- data wykonania: 28.09.2026, 00:13;
- lista testowa: „PROJEKT REKRUTACJA”.

### Plan testów

| Zakres | Typ | Oczekiwany rezultat | Przypadki |
|---|---|---|---|
| Komentarz klienta do udostępnionej listy | pozytywny | powiadomienie otrzymują wszyscy użytkownicy powiązani z listą | TC-01–TC-05 |
| Komentarz klienta do propozycji | pozytywny | powiadomienie otrzymują wszyscy użytkownicy powiązani z listą | TC-06–TC-10 |
| Oznaczenie członków zespołu | pozytywny | każdy oznaczony użytkownik otrzymuje powiadomienie | TC-11–TC-14 |
| Brak oznaczenia administratora | negatywny | administrator nie otrzymuje powiadomienia o oznaczeniu | TC-15 |

### Wyniki

Wykonano 15 przypadków testowych: **7 PASS, 8 FAIL**. Trzy testy przygotowujące dane zakończyły się powodzeniem.

| ID | Scenariusz / odbiorca | Wynik |
|---|---|---|
| TC-01 | komentarz klienta do listy — Marcin W. (administrator) | PASS |
| TC-02 | komentarz klienta do listy — Piotr | FAIL |
| TC-03 | komentarz klienta do listy — Anna | FAIL |
| TC-04 | komentarz klienta do listy — Michalina | FAIL |
| TC-05 | komentarz klienta do listy — Marcin | FAIL |
| TC-06 | komentarz klienta do propozycji — Marcin W. (administrator) | PASS |
| TC-07 | komentarz klienta do propozycji — Piotr | FAIL |
| TC-08 | komentarz klienta do propozycji — Anna | FAIL |
| TC-09 | komentarz klienta do propozycji — Michalina | FAIL |
| TC-10 | komentarz klienta do propozycji — Marcin | FAIL |
| TC-11 | oznaczenie `@Marcin` | PASS |
| TC-12 | oznaczenie `@Piotr` | PASS |
| TC-13 | oznaczenie `@Anna` | PASS |
| TC-14 | oznaczenie `@Michalina` | PASS |
| TC-15 | brak oznaczenia `@Marcin Wądek` | PASS |

### Zidentyfikowany defekt

**BUG-01 — brak powiadomień dla zwykłych członków zespołu po komentarzu klienta**

- ważność: wysoka;
- powtarzalność: 8/8 wykonanych kontroli;
- rezultat aktualny: powiadomienie otrzymuje administrator Marcin W., natomiast Piotr, Anna, Michalina i Marcin nie otrzymują go po komentarzu klienta do listy ani propozycji;
- rezultat oczekiwany: powiadomienie otrzymuje każdy członek zespołu powiązany z listą.

Kroki odtworzenia:

1. Otworzyć publiczny podgląd listy lub propozycji jako klient.
2. Dodać komentarz.
3. Zalogować się jako użytkownik powiązany z listą.
4. Otworzyć panel powiadomień.
5. Sprawdzić obecność powiadomienia zawierającego treść komentarza.

Defekt odtwarzają testy regresyjne TC-02–TC-05 oraz TC-07–TC-10.

### Ograniczenia i wnioski

Mechanizm oznaczeń `@` działa poprawnie w testowanym zakresie. Automatyczne dodawanie oznaczeń jest jednak niestabilne: po wpisaniu `@` lista użytkowników nie zawsze pojawia się w interfejsie. Może to sporadycznie powodować niepowodzenie etapu przygotowania danych, niezwiązane z działaniem samych powiadomień.

Dystrybucja powiadomień po komentarzu klienta nie spełnia wymagań dla zwykłych członków zespołu. Po usunięciu defektu należy ponownie wykonać TC-01–TC-10.

W dalszych testach warto uwzględnić zwykły komentarz członka zespołu bez oznaczeń, brak powiadomienia dla autora własnego komentarza oraz użytkownika niepowiązanego z listą.
