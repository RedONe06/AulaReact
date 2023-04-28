import './style.css';

function TableContent() {
  return (
    <>
      <h2>Como posso te ajudar?</h2>
      <table>
        <tbody>
          <tr>
            <th>HTML</th>
            <th>CSS</th>
            <th>JavaScript</th>
          </tr>
          <tr>
            <td>
              <i className="fa-brands fa-html5" style={{color: "#fa7000"}}></i>
            </td>
            <td>
              <i className="fa-brands fa-css3-alt" style={{color: "#025cf7"}}></i>
            </td>
            <td>
              <i className="fa-brands fa-js" style={{color: "#b2b51c"}}></i>
            </td>
          </tr>
          <tr>
            <td>Contruindo seu site</td>
            <td>Estilizando seu site</td>
            <td>Criando funcionalidades incríveis</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableContent;
