import React from "react";

function Form() {
  function Submit(event) {
    event.preventDefault();
    let country = document.getElementById("country").value;
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let flag = data[0].flag;
        document.getElementById("flag").src = flag;
        let name = data[0].name;
        document.getElementById("name").innerHTML = "Country Name : " + name;
        let capital = data[0].capital;
        document.getElementById("capital").innerHTML = "Capital : " + capital;
        let domain = data[0].topLevelDomain;
        document.getElementById("domain").innerHTML = "Domain : " + domain;
        let callingCodes = data[0].callingCodes;
        document.getElementById("callingCodes").innerHTML =
          "Calling Code : " + callingCodes;
        let region = data[0].region;
        document.getElementById("region").innerHTML = "Region : " + region;
        let subregion = data[0].subregion;
        document.getElementById("subregion").innerHTML =
          "Subregion : " + subregion;
        let population = data[0].population;
        document.getElementById("population").innerHTML =
          "Population : " + population;
        let demonym = data[0].demonym;
        document.getElementById("demonym").innerHTML = "Demonym : " + demonym;
        let area = data[0].area;
        document.getElementById("area").innerHTML = "Area : " + area + " km²";
        let giniIndex = data[0].gini;
        document.getElementById("giniIndex").innerHTML =
          "Gini Index : " + giniIndex;
        let timezones = data[0].timezones;
        document.getElementById("timezones").innerHTML =
          "Timezones : " + timezones;
        let nativeName = data[0].nativeName;
        document.getElementById("nativeName").innerHTML =
          "Native Name : " + nativeName;
        let currencyName = data[0].currencies[0].name;
        document.getElementById("currencyName").innerHTML =
          "Currency Name : " + currencyName;
        let currencySymbol = data[0].currencies[0].symbol;
        document.getElementById("currencySymbol").innerHTML =
          "Currency Symbol : " + currencySymbol;
        let languages = data[0].languages;
        document.getElementById("languages").innerHTML =
          "Language : " + languages[0].name;
        document.getElementById("card").style.display = "block";
      })
      .catch((err) => {
        console.error(err);
      });
    }
    function Clear(event) {
        event.preventDefault();
        document.getElementById("card").style.display = "none";
        document.getElementById("country").value = "";
    }
  return (
    <div className="container my-3">
      <form>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Enter Country Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            aria-describedby="countryName"
          />
          <br />
          <button
            type="submit"
            className="btn btn-success"
            id="submit"
            onClick={Submit}
          >
            Submit
          </button>
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-danger"
            id="submit"
            onClick={Clear}
          >
            Clear
          </button>
        </div>
      </form>
      <br />
      <div class="card" style={{ width: "20rem" }} id="card">
        <img src="" class="card-img-top" id="flag" alt="flag" />
        <div class="card-body">
          <h5 class="card-title" id="name">
            {}
          </h5>
          <h5 class="card-title" id="capital">
            {}
          </h5>
          <h5 class="card-title" id="domain">
            {}
          </h5>
          <h5 class="card-title" id="callingCodes">
            {}
          </h5>
          <h5 class="card-title" id="region">
            {}
          </h5>
          <h5 class="card-title" id="subregion">
            {}
          </h5>
          <h5 class="card-title" id="population">
            {}
          </h5>
          <h5 class="card-title" id="demonym">
            {}
          </h5>
          <h5 class="card-title" id="area">
            {}
          </h5>
          <h5 class="card-title" id="giniIndex">
            {}
          </h5>
          <h5 class="card-title" id="timezones">
            {}
          </h5>
          <h5 class="card-title" id="timezones">
            {}
          </h5>
          <h5 class="card-title" id="nativeName">
            {}
          </h5>
          <h5 class="card-title" id="currencyName">
            {}
          </h5>
          <h5 class="card-title" id="currencySymbol">
            {}
          </h5>
          <h5 class="card-title" id="languages">
            {}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Form;
