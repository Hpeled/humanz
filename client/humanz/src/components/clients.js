export const Clients = (props) => {
  console.log(props);

  const clientsData = props.clients.data;

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {clientsData.map((client, i) => {
            return (
              <tr key={i}>
                <td>{client.ID}</td>
                <td>{client.Name}</td>
                <td>{client.Phone}</td>
                <td>{client.Email}</td>
                <td>{client.IP}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-container">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {clientsData.currentPage > 0 ? (
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
            ) : (
              ""
            )}

            {clientsData.currentPage !== clientsData.LastPage ? (
              <li className="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
