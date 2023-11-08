import './Footer.css'

export const Footer = ({ filters }) => {
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>
        Prueba tecnica de React * - <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
};
