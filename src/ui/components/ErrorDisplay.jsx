export const ErrorDisplay = () => (
   <div className="error">
      <h2>Oops! Algo salió mal</h2>
      <button onClick={() => window.location.reload()}>Recargar</button>
   </div>
);
