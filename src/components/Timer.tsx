import React from "react"
export const Timer:React.FC = () => {
const styles: React.CSSProperties = {backgroundColor:"black", fontSize:"2em", color: "white", textAlign: "center"};
const styles1: React.CSSProperties = {fontSize:"2em", color: "black", textAlign: "center"};
setTimeout(tic, 1000);
const [time, setTime] = React.useState(new Date());

function tic() {
  setTime(new Date())
}
  return <div>
    <h2 style={styles1}>Current Time</h2>
    <p style={styles}>{new Date().toLocaleDateString()}</p>
    <p style={styles}>{time.toLocaleTimeString()}</p>
  </div>
}