import styled from "styled-components";

export default function Introduction() {
  return (
    <p className="introduction">
      <StyledSpan>
        Im Folgenden lässt sich eine Auswahl mittlerweile profanierter,
        ehemaliger Kultusstätten Hamburgs entdecken. Teilweise ist ihre sakrale
        Bedeutung noch zu erahnen, teilweise ist davon nichts mehr erkennbar.
        Dieser Zusammenstellung kommt es dabei nicht auf ein bestimmtes
        Verständnins von Religion an, so finden sich hier frühere jüdische,
        christliche und heidnische Plätze.
        <br />
        Alle Stätten sind mit ihren geografischen Koordinaten angegeben, dazu
        alte und neue Ortsbezeichnungen. Mit den Farbfotografien möchte ich
        gerne die Stimmung der heutigen Plätze festhalten, sie sollen keine
        Übersicht über den jetzigen Zustand darstellen. Ihnen entgegen steht das
        historische Bildmaterial, das den zeitlichen Wandel der jeweiligen Orte
        zeigt. Die Dokumente sind möglichst so herausgesucht, dass sie uns etwas
        über den Grund der Profanierung verraten. Im Kontrast dazu stehen die
        ausgewählten Zitate.
      </StyledSpan>
    </p>
  );
}
const StyledSpan = styled.span`
  background-color: white;
`;
