# ValiDate
This is a small Repo to validate a entered Date via JS Function Parameters
## Testcases 
| Testfall | correctMonth | correctDay | Kommentar                                      |
|----------|--------------|------------|-----------------------------------------------|
| Test 1   | true         | true       | Gültiger Monat und Tag                        |
| Test 2   | true         | false      | Gültiger Monat, ungültiger Tag               |
| Test 3   | false        | true       | Ungültiger Monat, gültiger Tag               |
| Test 4   | false        | false      | Ungültiger Monat und Tag (Extremfall)        |
| Test 5   | true         | true       | Gültiger Monat und Tag, Schaltjahr          |
| Test 6   | true         | false      | Gültiger Monat, ungültiger Tag, Schaltjahr |
| Test 7   | false        | true       | Ungültiger Monat, gültiger Tag, Schaltjahr |
| Test 8   | false        | false      | Ungültiger Monat und Tag, Schaltjahr        |
