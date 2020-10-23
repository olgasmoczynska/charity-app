const API = 'http://localhost:3000';

export function getBeneficiaries() {
    return fetch(`${API}/beneficiaries`)
        .then(response => {
          if (response.ok === false) {
            throw new Error("Błąd sieci!");
          } else {
            return response.json();
          }
        })
        .catch(err => console.log(err));
}
