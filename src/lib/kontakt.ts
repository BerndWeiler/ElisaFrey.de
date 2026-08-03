/**
 * Verbindung zwischen einem Einstiegspunkt (etwa dem Sponsoring-Modul) und dem
 * Kontaktformular.
 *
 * Die Seite ist ein statischer Export ohne Router-Zustand. Ein Fensterereignis
 * ist hier der kleinste Weg, den Betreff vorzubelegen: kein zusaetzlicher
 * Zustandsspeicher, keine Bibliothek, und wenn das Ereignis ausbleibt, bleibt
 * das Formular schlicht leer statt kaputt.
 */
export const BETREFF_EVENT = "kontakt-betreff-vorbelegen";

/** Empfaenger der Formularnachrichten: Trainer und Manager von Elisa Frey. */
export const EMPFAENGER = "bjoern.schulz.coach@gmx.de";
