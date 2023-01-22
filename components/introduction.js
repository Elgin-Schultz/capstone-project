import styled from "styled-components";

export default function Introduction() {
  return (
    <p className="introduction">
      <StyledSpan>
        Hier lässt sich eine Auswahl ehemaliger, heute profaner, Kultusstätten
        Hamburgs entdecken. Teilweise ist ihre sakrale Bedeutung noch zu
        erahnen, teils ist davon nichts mehr erkennbar. Dabei ist diese
        Zusammenstellung nicht an ein bestimmtes Verständnins von Glauben
        gebunden, so finden sich hier frühere jüdische, christliche und
        heidnische Plätze.
        <br />
        Alle Stätten sind mit ihren geografischen Koordinaten, alten und neuen
        Ortsbezeichnungen angegeben. Mit meinen Fotos möchte ich die Stimmung
        der heutigen Plätze einfangen, sie sollen keinen Überblick über den
        jetzigen Zustand geben. Ihnen entgegen steht das historische
        Bildmaterial, das den Wandel über die Zeit hinweg zeigt. Die Dokumente
        sind nach Möglichkeit so herausgesucht, dass sie uns etwas über den
        Grund der Profanierung verraten. Im Kontrast dazu stehen die
        ausgewählten Zitate. So entsteht ein neuer Blick auf das alltägliche
        Stadtbild.
      </StyledSpan>
    </p>
  );
}
const StyledSpan = styled.span`
  background-color: white;
`;
