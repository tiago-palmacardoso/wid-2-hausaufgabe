import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der JSON Datei.
  console.log(data[data.length - 1])
  // Ubung 1
  // variable const x ID + high risk 
  const LastInc = `${data[data.length - 1].id_unfall}: ${data[data.length - 1].schwere}`
  console.log(LastInc)
  // Ubung 2
  const unfaelleNebenstrasse = data.filter((element) => element.strasseart === "Nebenstrasse")
  console.log(unfaelleNebenstrasse)
  // Ubung 3
  const found = data.find((element) => element.monat === 11 && element.jahr === "2015" && element.fahrrd_bet === true)
  console.log(found)



  return (
    <div className="App">
      {/*Ubung 1*/}
      <div>{LastInc}</div>
      {/*Ubung 2*/}
      <div>Anzahl Unfälle auf Nebenstrassen: {unfaelleNebenstrasse.length}</div>
      {/*Ubung 3 - Nice to know -> converts and shows a string of the obj*/}
      <div>{JSON.stringify(found)}</div>
      {/*Ubung 4*/}
      <ol>{data.map((unfall) => <li key={unfall.id_unfall}>{unfall.id_unfall}</li>)}</ol>



    </div>
  );
}
